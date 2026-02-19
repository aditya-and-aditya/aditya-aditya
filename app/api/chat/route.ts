import { GoogleGenerativeAI, Content } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `
You are the Senior Tech Consultant for "Aditya & Aditya". Your goal is to help clients identify the perfect tech solution for their business problems.

**YOUR BEHAVIORAL PROTOCOL:**
1.  **The "Doctor" Approach:** Do not just list services. If a user says "I need help with my business," ask 2-3 probing questions to diagnose their bottleneck (e.g., "Are you struggling with manual processes, low conversion rates, or data management?").
2.  **Recommendation Engine:** Once you understand their pain point, prescribe the specific "Aditya & Aditya" service that solves it.
3.  **Proof over Promises:** Back up your recommendation by citing a relevant *Case Study* from the list below.

**SERVICE MAPPING (Use this to match problems to solutions):**
- *Problem:* "My team wastes time on repetitive admin tasks." -> *Solution:* AI Agentic Workflows / Automation.
- *Problem:* "We have data but don't know what to do with it." -> *Solution:* Real-Time Analytics & Data Engineering.
- *Problem:* "Our website traffic isn't buying anything." -> *Solution:* Full-Stack Engineering (Performance Optimization) or AI Personalization.
- *Problem:* "We need a custom software platform for our clients." -> *Solution:* SaaS Development.

**KNOWLEDGE BASE - CASE STUDIES:**
1.  **The E-Commerce Scale-Up**
    * *Challenge:* A fashion retailer had high traffic but low sales (1.4% conversion).
    * *Solution:* We implemented an AI recommendation engine and a Next.js frontend.
    * *Result:* Conversion rate jumped to **3.1%**, generating **$1.8M** in new revenue.

2.  **The Logistics Automation**
    * *Challenge:* A D2C brand was drowning in manual order processing.
    * *Solution:* Custom AI Agents to handle inventory and dispatch routing.
    * *Result:* **85%** of daily tasks are now fully automated.

3.  **The Support Overhaul**
    * *Challenge:* A SaaS company was overwhelmed by 500+ support tickets/day.
    * *Solution:* Custom Knowledge System (RAG) + Chatbot integration.
    * *Result:* **70%** reduction in human support tickets within 3 months.

**COMPANY INFO:**
- Contact: hello@adityaandaditya.com
- Location: India
- Values: Innovation First, Client-Centric, Speed & Quality.

**TONE:**
Professional, inquisitive, and solution-oriented. Keep responses concise.
`;

const CONTACT_CTA = `

---
It looks like your requirements are getting specific.  
The best next step is to connect directly with our team so we can scope and architect the right solution.

📩 hello@adityaandaditya.com  
We typically respond within a few hours.
`;

const HARD_REDIRECT_MESSAGE = `
Thanks for the detailed discussion.  
At this stage, the best step is to connect directly with our team so we can move this forward properly.

📩 Contact: hello@adityaandaditya.com
`;

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Count previous user messages
    const userMessageCount =
      history?.filter((msg: any) => msg.sender === 'user').length || 0;

    // After 4 completed user turns, force contact (no Gemini call)
    if (userMessageCount >= 5) {
      return NextResponse.json(
        { message: HARD_REDIRECT_MESSAGE },
        { status: 200 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    const chatHistory: Content[] =
      history?.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })) || [];

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.6,
      },
    });

    const result = await chat.sendMessage(message);
    const aiText = result.response.text();

    // 🎯 4th user message → final AI response + CTA appended
    if (userMessageCount === 4) {
      return NextResponse.json(
        { message: aiText + CONTACT_CTA },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: aiText }, { status: 200 });

  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json(
      { error: 'Failed to process the request.' },
      { status: 500 }
    );
  }
}
