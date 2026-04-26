import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Bot, User, Send } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
};

const predefinedQnA = [
  {
    q: "Is homeopathic treatment safe?",
    a: "Yes, our treatments are 100% natural, non-toxic, and free of side effects, making them completely safe for all ages."
  },
  {
    q: "Do you treat chronic conditions?",
    a: "Absolutely. We specialize in long-term cure for chronic conditions like Asthma, Eczema, Migraines, and Thyroid disorders by addressing the root cause."
  },
  {
    q: "How long does treatment take?",
    a: "Treatment duration depends on the chronicity of the disease and your body's response. Homeopathy focuses on permanent recovery rather than temporary relief."
  },
  {
    q: "How to book an appointment?",
    a: "You can click the 'Book Now' button at the bottom right, or use the form on our Contact page to schedule an appointment."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm AI Assistant for Dr. Arun Homeopathy. How can I help you today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleQuestionClick = (qna: typeof predefinedQnA[0]) => {
    // Add user question
    const newMsgId = Date.now();
    setMessages(prev => [...prev, { id: newMsgId, text: qna.q, sender: 'user' }]);
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: newMsgId + 1, text: qna.a, sender: 'bot' }]);
    }, 1200);
  };

  const handleManualSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('chatInput') as HTMLInputElement;
    const val = input.value.trim();
    if (!val) return;

    const newMsgId = Date.now();
    setMessages(prev => [...prev, { id: newMsgId, text: val, sender: 'user' }]);
    input.value = '';
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: newMsgId + 1, text: "Thank you for your message. For specialized advice, please Book an Appointment or contact us via WhatsApp.", sender: 'bot' }]);
    }, 1500);
  };

  return (
    <>
      {/* Chat floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 left-6 bg-[#C62828] text-white p-4 rounded-full shadow-2xl hover:bg-[#E53935] transition-colors z-40 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-6 left-6 w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden z-50 border border-[#1B3A6B]/10 flex flex-col"
            style={{ maxHeight: '80vh', height: '600px' }}
          >
            {/* Header */}
            <div className="bg-[#C62828] p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">AI Assistant</h3>
                  <p className="text-xs text-white/70">For your queries</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F0F4FA]">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2 items-end`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-[#C62828] flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm ${msg.sender === 'user' ? 'bg-[#1B3A6B] text-white rounded-br-sm' : 'bg-white text-[#1A1A2E] rounded-bl-sm shadow-sm border border-[#C62828]/5'}`}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-[#5A6077] flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start gap-2 items-end">
                  <div className="w-8 h-8 rounded-full bg-[#C62828] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-3 py-4 rounded-2xl bg-white text-[#1A1A2E] rounded-bl-sm shadow-sm border border-[#1B3A6B]/5 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#1B3A6B]/50 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#1B3A6B]/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 bg-[#1B3A6B]/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}

              {/* Quick Replies Options */}
              {!isTyping && messages[messages.length - 1]?.sender === 'bot' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 pt-2">
                  {predefinedQnA.map((qna, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuestionClick(qna)}
                      className="bg-white border border-[#C62828]/20 text-[#C62828] text-xs px-3 py-2 rounded-full hover:bg-[#C62828] hover:text-white transition-colors text-left"
                    >
                      {qna.q}
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#1B3A6B]/10 shrink-0">
              <form onSubmit={handleManualSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  name="chatInput"
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[#F0F4FA] border border-[#1B3A6B]/10 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B]/30"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-[#C62828] hover:bg-[#E53935] text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
              <p className="text-center text-[9px] text-[#5A6077] mt-3 uppercase tracking-wider">
                AI can make mistakes. Always consult a professional.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
