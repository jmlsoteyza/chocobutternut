'use client';

import { useEffect, useRef, useState } from 'react';

type Message = {
  id: number;
  from: 'user' | 'assistant';
  text: string;
};

const PILL_DATA: Record<string, { q: string; a: string }> = {
  Work: {
    q: 'What kind of work do you do?',
    a: 'I build fast, clean interfaces for startups and small teams — mostly Next.js and React. A few recent projects are just below.'
  },
  'About me': {
    q: 'Tell me about yourself',
    a: "I'm a front-end developer who cares about the small details — spacing, motion, load speed."
  },
  Skills: {
    q: 'What are your skills?',
    a: 'Next.js, TypeScript, and Tailwind are my daily tools, with Motion for interface animation.'
  },
  Contact: {
    q: 'How can I get in touch?',
    a: "Fastest way is email — there's a button for that right in the navbar."
  }
};

const PILLS = Object.keys(PILL_DATA);

export default function Test() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const started = messages.length > 0;

  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, thinking]);

  function startChat(userText: string, answerText: string) {
    setMessages((prev) => [...prev, { id: nextId.current++, from: 'user', text: userText }]);
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, from: 'assistant', text: answerText }
      ]);
    }, 700);
  }

  function handlePillClick(label: string) {
    const data = PILL_DATA[label];
    startChat(data.q, data.a);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput('');
    startChat(text, "Once this is connected to a real model, you'll get a proper answer here.");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <section className="flex items-center justify-center bg-[#111111] min-h-screen px-5">
      <div className="w-full max-w-xl">
        <p className="text-center text-[#555555] text-xs tracking-wide uppercase mb-4">
          Interactive preview — click a pill or type something
        </p>

        <div className="bg-[linear-gradient(180deg,#3c3f5080,#0f0f1880)] backdrop-blur-[3.375rem] w-full rounded-2xl border border-[#313131] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 h-[400px] flex flex-col">
          <div
            ref={messagesRef}
            className={`chat-scroll flex-1 overflow-y-auto flex flex-col gap-3 px-4 ${
              started ? 'justify-start' : 'justify-center'
            }`}
          >
            {!started && (
              <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-[#E8E8E8] text-sm font-medium">Ask me anything about Jom</p>
                <p className="text-[#999999] text-xs leading-relaxed max-w-[250px]">
                  I can walk you through his work, process, or how to reach him.
                </p>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex animate-[fade-in-up_0.2s_ease_forwards] ${
                  m.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[82%] text-[13px] font-medium leading-relaxed rounded-xl ${
                    m.from === 'user' ? 'px-3 py-1.5 bg-white/6 text-white' : 'py-0.5 text-white'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {thinking && (
              <div className="flex gap-1 py-1.5">
                <span className="w-1 h-1 rounded-full bg-[#555555] animate-[pulse-dot_1s_ease-in-out_infinite]" />
                <span className="w-1 h-1 rounded-full bg-[#555555] animate-[pulse-dot_1s_ease-in-out_infinite] [animation-delay:0.15s]" />
                <span className="w-1 h-1 rounded-full bg-[#555555] animate-[pulse-dot_1s_ease-in-out_infinite] [animation-delay:0.3s]" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 pb-3 pt-2">
            {PILLS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => handlePillClick(label)}
                className="rounded-full border border-white/10 bg-[#141416b8] backdrop-blur-md px-4 py-1.5 text-xs font-medium text-[#fff] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors hover:bg-[#1c1c1eb8] hover:border-white/20 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-end gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 transition-colors focus-within:border-white/16">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about my work, process, or availability..."
              className="flex-1 resize-none bg-transparent border-none outline-none text-[#E8E8E8] text-[13px] py-1 placeholder:text-[#555555]"
            />
            <button
              type="button"
              aria-label="Send message"
              onClick={handleSend}
              className="shrink-0 w-6 h-6 rounded-full bg-white/8 flex items-center justify-center transition-colors hover:bg-white/14 cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E8E8E8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
