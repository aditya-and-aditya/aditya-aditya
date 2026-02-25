'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown, Layers, Phone, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PILLARS_META as PILLARS } from '../_lib/hexaDONData';

// --- SHARED DATA ---
const DEEP_BLUE = '#092d60';
const ACCENT_CYAN = '#37a8b1';


const HEX_POINTS = [
  { x: 50, y: 5 }, { x: 90, y: 27 }, { x: 90, y: 73 },
  { x: 50, y: 95 }, { x: 10, y: 73 }, { x: 10, y: 27 },
];

type Message = { id: string; role: 'bot' | 'user'; content: string; };

export default function InteractiveStudyPage() {
  const router = useRouter();
  const [selectedIndices, setSelectedIndices] = useState<number[]>([0]);

  // --- CHATBOT STATE ---
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
      if (userMessageCount === 0) {
          const selectedNames = selectedIndices.map(i => PILLARS[i].title).join(' and ');
          setMessages([{ id: 'init-1', role: 'bot', content: `Hi! I'm the Aditya & Aditya Preview Agent. I see you're exploring ${selectedNames}. How can I help you implement this for your brand today?` }]);
      }
  }, [selectedIndices, userMessageCount]);

  const togglePoint = (index: number) => {
    if (selectedIndices.includes(index)) {
        if (selectedIndices.length > 1) setSelectedIndices(selectedIndices.filter(i => i !== index));
    } else setSelectedIndices([...selectedIndices, index]);
  };

  const activeContent = useMemo(() => {
    if (selectedIndices.length === 1) return { type: 'single', ...PILLARS[selectedIndices[0]] };
    return {
        type: 'multi',
        title: 'Integrated Strategy',
        short: `Combining ${selectedIndices.length} pillars creates a compound effect. Clients using this specific configuration saw the highest retention lift.`,
        subtitles: selectedIndices.map(i => PILLARS[i].title)
    };
  }, [selectedIndices]);

  const handleHeroAction = () => {
    if (activeContent.type === 'single') {
        router.push(`/HexaDON/${PILLARS[selectedIndices[0]].slug}`);
    } else {
        const element = document.getElementById('contact-section');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          const currentTopic = activeContent?.title || 'Clienting and Retail Strategies for E-Store';

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
      {/* 1. HERO SECTION (100dvh) */}
      <section className="relative min-h-dvh flex items-center justify-center bg-[#092d60] text-white overflow-hidden py-safe">
         <div className="absolute top-0 right-0 w-2/3 h-full bg-[#37a8b1]/10 skew-x-12 origin-top-right blur-3xl pointer-events-none" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center">
                <Link href="/" className="inline-flex items-center text-sm text-[#37a8b1] hover:text-white transition-colors absolute top-8 left-4 lg:static lg:mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <div className="min-h-[250px] lg:min-h-[300px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div key={selectedIndices.join(',')} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                            <div className="flex items-center gap-3 mb-4 lg:mb-6">
                                {activeContent.type === 'single' ? <span className="text-5xl lg:text-6xl font-bold text-[#37a8b1] opacity-20">0{selectedIndices[0] + 1}</span> : <Layers className="w-10 h-10 lg:w-12 lg:h-12 text-[#37a8b1] opacity-50" />}
                                <div className="h-px w-12 bg-[#37a8b1]/50" />
                                <span className="text-[#37a8b1] uppercase tracking-widest text-xs lg:text-sm font-bold">{activeContent.type === 'single' ? 'Key Finding' : 'Complex Workflow'}</span>
                            </div>
                            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">{activeContent.title}</h1>
                            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mb-4 lg:mb-6">{activeContent.short}</p>
                            {activeContent.type === 'multi' && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {/* @ts-ignore */}
                                    {activeContent.subtitles.map((sub, i) => <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-[10px] lg:text-xs text-[#37a8b1] border border-[#37a8b1]/30">+ {sub}</span>)}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button onClick={handleHeroAction} className={`rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-xl w-full sm:w-auto ${activeContent.type === 'multi' ? 'bg-white text-[#092d60] hover:bg-gray-100' : 'bg-[#37a8b1] text-white hover:bg-[#2d8a91]'}`}>
                        {activeContent.type === 'multi' ? <span className="flex items-center justify-center">Get This Custom Strategy <Phone className="ml-2 w-5 h-5" /></span> : <span className="flex items-center justify-center">Read Deep Dive <ArrowRight className="ml-2 w-5 h-5" /></span>}
                    </Button>
                </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center h-[40vh] lg:h-auto">
                <div className="relative w-[280px] sm:w-[350px] lg:w-[450px] aspect-square">
                     <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                        <polygon points={HEX_POINTS.map(p => `${p.x},${p.y}`).join(' ')} fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
                        {selectedIndices.map((startIndex) => selectedIndices.map((endIndex) => {
                             if (startIndex >= endIndex) return null; 
                             return <motion.line key={`${startIndex}-${endIndex}`} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.3 }} x1={HEX_POINTS[startIndex].x} y1={HEX_POINTS[startIndex].y} x2={HEX_POINTS[endIndex].x} y2={HEX_POINTS[endIndex].y} stroke={ACCENT_CYAN} strokeWidth="0.5"/>;
                        }))}
                        {HEX_POINTS.map((point, index) => {
                          const isActive = selectedIndices.includes(index);
                          return (
                            <g key={index} onClick={() => togglePoint(index)} className="cursor-pointer group">
                              <circle cx={point.x} cy={point.y} r="10" fill="transparent" />
                              <motion.circle cx={point.x} cy={point.y} animate={{ r: isActive ? 5 : 1.5, fillOpacity: isActive ? 0.2 : 0 }} fill={ACCENT_CYAN} stroke={isActive ? ACCENT_CYAN : 'white'} strokeOpacity={isActive ? 1 : 0.2} strokeWidth="0.5" className="transition-all duration-300"/>
                              <motion.circle cx={point.x} cy={point.y} animate={{ r: isActive ? 2.5 : 0.8, fill: isActive ? ACCENT_CYAN : 'white' }} className="group-hover:scale-150 transition-transform"/>
                            </g>
                          );
                        })}
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center transition-all duration-300">
                           <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest mb-1">{selectedIndices.length > 1 ? 'Selected' : 'Pillar'}</div>
                           <div className="text-2xl lg:text-3xl font-bold text-white/20">{selectedIndices.length > 1 ? selectedIndices.length : `0${selectedIndices[0] + 1}`}</div>
                        </div>
                     </div>
                </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 cursor-pointer" onClick={() => document.getElementById('teasers-section')?.scrollIntoView({ behavior: 'smooth' })}>
              <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* 2. TEASER GRID SECTION */}
      <section id="teasers-section" className="bg-white relative z-20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-[#37a8b1] font-bold uppercase tracking-widest text-sm mb-4">The Framework</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#092d60]">Explore the 6 Pillars of Retention</h2>
                <p className="mt-4 text-gray-500">
                    Dive into the individual methodologies that make up our proactive autonomous architecture.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PILLARS.map((pillar) => (
                    <Link 
                        href={`/HexaDON/${pillar.slug}`} 
                        key={pillar.id}
                        className="group block p-8 rounded-3xl bg-gray-50 hover:bg-[#37a8b1]/5 border border-gray-100 hover:border-[#37a8b1]/30 transition-all duration-300"
                    >
                        <div className="text-5xl font-bold text-[#092d60]/5 mb-6 group-hover:text-[#37a8b1]/20 transition-colors">
                            0{pillar.id + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-[#092d60] mb-3">{pillar.title}</h3>
                        <p className="text-gray-600 mb-8 min-h-[60px]">{pillar.short}</p>
                        <div className="flex items-center text-[#37a8b1] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                            Read Deep Dive <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 3. CHATBOT FOOTER SECTION */}
      <section id="contact-section" className="bg-[#092d60] text-white py-24 overflow-hidden relative border-t border-white/10">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[#37a8b1]/5 skew-x-12 origin-top-right blur-3xl pointer-events-none" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need a Custom Strategy?</h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        You've seen the data. Building autonomous workflows requires custom architecture, clean data pipelines, and a deep understanding of your business logic. 
                    </p>
                    <p className="text-lg text-[#37a8b1] mb-10">Chat with our preview agent to see how it works, or skip the line and book a call with our human experts.</p>
                    <Button className="bg-[#37a8b1] hover:bg-[#2d8a91] text-white px-8 py-6 rounded-full text-lg w-full sm:w-auto shadow-lg shadow-[#37a8b1]/20 transition-all hover:scale-105">
                        Book a Strategy Call
                    </Button>
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
                                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type your message..." className="w-full bg-gray-100 border-transparent focus:border-[#37a8b1] focus:bg-white focus:ring-2 focus:ring-[#37a8b1]/20 rounded-xl py-3 pl-4 pr-12 text-sm outline-none transition-all placeholder:text-gray-400"/>
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
