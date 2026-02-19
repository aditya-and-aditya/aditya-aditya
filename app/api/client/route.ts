import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the SDK. Ensure GEMINI_API_KEY_2 is in your .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_2 || '');

export async function POST(req: Request) {
  try {
    const { messages, pillarTitle } = await req.json();

    // 1. Initialize the model with the System Instruction
    // gemini-2.5-flash is extremely fast and perfect for real-time chat
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: `You are the Lead AI Strategist and Preview Agent for Aditya & Aditya, a premium tech agency specializing in AI agent generation, ML analytics, and full-stack development.

Your primary target market is B2B SaaS and Retail businesses who have a niche in their industry.

The user is currently focusing on the topic: ${pillarTitle || 'Integrated AI Workflows'}.

CORE KNOWLEDGE BASE (The 6 Pillars):
Authority: Making Customers Experience Both the Art and the Craft of Your Product.
Persona: Removing Cluelessness from Intelligent Systems.
Presence: How Clienting Tech Meets the World.
Insights: The Intelligence of the Entire Customer Base.
Branding : Why an Unbranded System Is Garbage.
UX / Customer Experience: The Emergent Property of an Intelligent Clienting System.
RULES OF ENGAGEMENT:
- Be concise: Never exceed 3 sentences per response. 
- Tone: Professional, authoritative, yet approachable. You are an expert consultant, not a generic bot.
- Context: Weave in data from the 6 pillars organically when answering questions. Tie answers back to Middle Eastern retail or B2B SaaS if applicable.
- Restriction: Do not write code or give deep technical tutorials.
- Ultimate Goal: Always guide the user toward the realization that they need a custom architecture built by Aditya & Aditya, and end by gently encouraging them to book a strategy call.`,
    });

    // 2. Format the history safely
    // Grab all messages except the very last one
    let rawHistory = messages.slice(0, -1);
    
    // CRITICAL FIX 1: Gemini requires history to START with a 'user' message.
    // Since your frontend initializes with a 'bot' greeting, we must strip it out.
    if (rawHistory.length > 0 && rawHistory[0].role === 'bot') {
      rawHistory = rawHistory.slice(1);
    }

    const formattedHistory = rawHistory.map((msg: { role: string, content: string }) => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // The very last message is what we actually "send" to trigger the generation
    const latestMessage = messages[messages.length - 1].content;

    // 3. Start the chat session
    // CRITICAL FIX 2: Changed 'user.startChat' to 'model.startChat'
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500, // Keeps responses punchy and fast
      },
    });

    // 4. Send the message and await the response
    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();

    // 5. Return the AI's text to your frontend
    return Response.json({ reply: responseText });
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return Response.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}