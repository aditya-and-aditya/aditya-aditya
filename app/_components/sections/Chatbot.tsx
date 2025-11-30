'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Define theme colors here for easy changing
const THEME = {
  primary: '#37a8b1', // Teal
  secondary: '#092d60', // Deep Blue
  bgUser: '#37a8b1',
  bgBot: '#ffffff',
  textUser: '#ffffff',
  textBot: '#092d60',
};

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the **Aditya & Aditya** Tech Consultant. I can help with **Automation**, **SaaS**, or show you our **Case Studies**. How can I assist?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]); // Scroll when typing starts too

  const quickReplies = [
    'Show me Case Studies',
    'I need AI Automation',
    'Pricing',
    'Contact Support',
  ];

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(1), 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.message,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting to the server. Please email us at hello@adityaandaditya.com",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:shadow-primary/50"
            style={{ backgroundColor: THEME.primary }}
          >
            <MessageCircle size={28} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            // Responsive: Full screen on mobile (sm:), fixed size on desktop
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full h-full sm:w-96 sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ borderColor: 'rgba(55, 168, 177, 0.2)', borderWidth: '1px' }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center justify-between shadow-md"
              style={{ backgroundColor: THEME.secondary }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/20"
                  style={{ backgroundColor: THEME.primary }}
                >
                  <Bot size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Aditya & Aditya</h3>
                  <p className="text-xs text-blue-200">Tech Consultant AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-gray-100"
                      style={{ backgroundColor: THEME.primary }}
                    >
                      <Bot size={16} color="white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${
                        message.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
                    }`}
                    style={{
                      backgroundColor:
                        message.sender === 'user' ? THEME.bgUser : THEME.bgBot,
                      color: message.sender === 'user' ? THEME.textUser : THEME.textBot,
                    }}
                  >
                   {/* MARKDOWN RENDERER */}
                   {/* MARKDOWN RENDERER */}
{message.sender === 'bot' ? (
  <div className="text-sm prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0">
    <ReactMarkdown
      components={{
        // We destructure 'node' out to prevent it from being passed to the DOM element
        // causing React warnings, but we use 'any' type on props to silence TypeScript strictness
        ul: ({ node, ...props }: any) => (
          <ul className="list-disc pl-4 space-y-1" {...props} />
        ),
        ol: ({ node, ...props }: any) => (
          <ol className="list-decimal pl-4 space-y-1" {...props} />
        ),
        li: ({ node, ...props }: any) => (
          <li className="mb-1" {...props} />
        ),
        p: ({ node, ...props }: any) => (
          <p className="mb-2 last:mb-0" {...props} />
        ),
        strong: ({ node, ...props }: any) => (
          <span className="font-bold" {...props} />
        ),
      }}
    >
      {message.text}
    </ReactMarkdown>
  </div>
) : (
  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
)}
                  </div>

                  {message.sender === 'user' && (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: THEME.secondary }}
                    >
                      <User size={16} color="white" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: THEME.primary }}
                  >
                    <Bot size={16} color="white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1.5">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ 
                            backgroundColor: THEME.primary, 
                            animationDelay: `${delay}ms` 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-3 bg-white border-t space-y-2">
                <p className="text-xs font-semibold opacity-70" style={{ color: THEME.secondary }}>
                  Common topics:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs rounded-full transition-all border hover:shadow-sm"
                      style={{
                        borderColor: `${THEME.primary}40`, // 40 = opacity
                        backgroundColor: `${THEME.primary}10`,
                        color: THEME.secondary,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = THEME.primary;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${THEME.primary}10`;
                        e.currentTarget.style.color = THEME.secondary;
                      }}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about AI, SaaS, or Data..."
                  className="flex-1 px-4 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: 'rgba(55, 168, 177, 0.2)',
                    color: THEME.secondary
                  }}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-2 transition-transform active:scale-95"
                  style={{ backgroundColor: THEME.primary }}
                >
                  <Send size={18} color="white" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}