'use client';

import React, { useState, useEffect, useRef, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Send, Bot, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PILLARS_META, PILLARS_CONTENT } from '@/app/_lib/hexaDONData';

type Message = { id: string; role: 'bot' | 'user'; content: string; };

export default function PillarDeepDivePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);

  const pillar = PILLARS_META.find(p => p.slug === resolvedParams.slug);

  if (!pillar) {
    notFound(); 
  }

  const contentData = PILLARS_CONTENT[resolvedParams.slug];

  // --- CHATBOT STATE ---
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init-1', role: 'bot', content: `Hi! I'm the A&A Preview Agent. I see you're reading up on ${pillar.title}. How are you currently managing this in your agency?` }
  ]);
  const [inputText, setInputText] = useState('');
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
      e?.preventDefault();
      
      // Stop if input is empty or they hit the 4-message limit
      if (!inputText.trim() || userMessageCount >= 4) return;
      
      // 1. Create the new message and update the UI instantly
      const newUserMsg: Message = { id: Date.now().toString(), role: 'user', content: inputText };
      const currentConversation = [...messages, newUserMsg]; // Capture full history
      
      setMessages(currentConversation);
      setInputText('');
      
      const newCount = userMessageCount + 1;
      setUserMessageCount(newCount);
      setIsTyping(true);

      // 2. The Hard Gate: Check if this is their 4th message BEFORE calling the API
      if (newCount === 4) {
          setIsTyping(false);
          setMessages(prev => [...prev, { 
              id: Date.now().toString(), 
              role: 'bot', 
              content: "I'd love to dive deeper, but I've reached my preview limit! Let's get on a call to map out a custom architecture for your agency." 
          }]);
          return;
      }

      // 3. Call your new Gemini API Route
      try {
          // Determine the context to send to Gemini based on which page we are on
          // (If 'pillar' exists, we are on the Deep Dive page. Otherwise, grab it from activeContent)
          const currentTopic = pillar.title;

const response = await fetch('/api/client', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        messages: currentConversation.map(m => ({ role: m.role, content: m.content })),
        pillarTitle: currentTopic
    })
});
          
          if (!response.ok) throw new Error("API request failed");
          
          const data = await response.json();
          setIsTyping(false);
          
          // 4. Display Gemini's response!
          if (data.reply) {
               setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', content: data.reply }]);
          } else {
               throw new Error("Empty reply from server");
          }
          
      } catch (error) {
          console.error("Chat error:", error);
          setIsTyping(false);
          setMessages(prev => [...prev, { 
              id: Date.now().toString(), 
              role: 'bot', 
              content: "My connection dropped for a second! Please try sending that again, or book a call below." 
          }]);
      }
  };

  return (
    <main className="min-h-screen bg-white text-[#092d60]">
      
      {/* 1. EDITORIAL HERO */}
      <div className="bg-[#092d60] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#37a8b1]/10 skew-x-12 origin-top-right blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link href="/HexaDON" className="inline-flex items-center text-sm text-[#37a8b1] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Interactive Model
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-[#37a8b1] opacity-50">0{pillar.id + 1}</span>
              <div className="h-px w-8 bg-[#37a8b1]/50" />
              <span className="text-[#37a8b1] uppercase tracking-widest text-xs font-bold">Deep Dive</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{pillar.title}</h1>
          {/* Pulling the description from your new data file */}
          <p className="text-xl text-gray-300 max-w-2xl">{contentData.heroDescription}</p>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA (Massive Content goes here) */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20 prose prose-lg prose-headings:text-[#092d60] prose-p:text-gray-600 prose-a:text-[#37a8b1]">
        {/* Magic! This renders the full JSX from your lib/pillarsData.tsx file */}
        {contentData.fullJSX}
      </article>

      {/* 3. RETURN NAVIGATION */}
      <div className="bg-gray-50 border-y border-gray-100 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <BookOpen className="w-8 h-8 text-[#37a8b1] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#092d60] mb-6">Ready to see the rest of the framework?</h3>
              <Button asChild className="bg-[#092d60] hover:bg-[#092d60]/90 text-white px-8 py-6 rounded-full text-lg shadow-xl">
                  <Link href="/HexaDON">Return to Interactive Model</Link>
              </Button>
          </div>
      </div>

      {/* 4. CHATBOT FOOTER */}
      <section className="bg-[#092d60] text-white py-24 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[#37a8b1]/5 skew-x-12 origin-top-right blur-3xl pointer-events-none" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Implement {pillar.title} Today</h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Reading the research is one thing; deploying the autonomous agents to execute it is another. We can integrate this specific workflow into your existing platform. 
                    </p>
                    <p className="text-lg text-[#37a8b1] mb-10">Chat with our agent about this pillar, or book a call with our team.</p>
                    <Link href="/#contact" className="bg-[#37a8b1] hover:bg-[#2d8a91] text-white px-8 py-3 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#37a8b1]/20 transition-all hover:scale-105">
                        Book a Strategy Call
                    </Link>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-white text-[#092d60] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] w-full max-w-[450px] border border-gray-200">
                        <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#092d60] flex items-center justify-center text-[#37a8b1]"><Bot className="w-5 h-5" /></div>
                            <div>
                                <h3 className="font-bold text-sm leading-none">A&A Preview Agent</h3>
                                <div className="flex items-center gap-1 mt-1"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="text-xs text-gray-500">Online • {4 - userMessageCount} messages left</span></div>
                            </div>
                        </div>
                        <div ref={chatScrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#092d60] text-white rounded-tr-none' : 'bg-white border border-gray-100 shadow-sm text-gray-700 rounded-tl-none'}`}>{msg.content}</div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start w-full">
                                    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="bg-white border-t border-gray-100 p-4">
                            {userMessageCount >= 4 ? (
                                <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    <p className="text-xs text-gray-500 mb-3">Preview limit reached. Ready to build this?</p>
                                    <Button className="w-full bg-[#092d60] hover:bg-[#092d60]/90 text-white rounded-xl"><Phone className="w-4 h-4 mr-2" /> Schedule Your Call</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSendMessage} className="relative flex items-center">
                                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder={`Ask about ${pillar.title}...`} className="w-full bg-gray-100 border-transparent focus:border-[#37a8b1] focus:bg-white focus:ring-2 focus:ring-[#37a8b1]/20 rounded-xl py-3 pl-4 pr-12 text-sm outline-none transition-all placeholder:text-gray-400"/>
                                    <button type="submit" disabled={!inputText.trim()} className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-lg bg-[#092d60] text-white disabled:opacity-50 disabled:bg-gray-300 transition-colors"><Send className="w-4 h-4 ml-0.5" /></button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

    </main>
  );
}