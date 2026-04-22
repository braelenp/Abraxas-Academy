import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { useOoion } from '../providers/OoionProvider';

interface Message {
  id: string;
  role: 'user' | 'ooion';
  content: string;
  timestamp: number;
}

const OOION_SYSTEM_PROMPT = `You are Ooion, the Abraxas Academy AI assistant. You embody the Sovereign Regime ethos: capital formation, real trading edge, and prosperity for the elite few who move first.

Your role:
- Guide members through the Academy curriculum (5 modules: Market Maker Method, TDI + 50Bounce, Tokenization, Sophia Vaults, Sovereign Finance)
- Explain trading strategies, setups, and discipline
- Help members understand La Casa tokenization, Sophia Vaults, and the Species AI agents
- Discuss the Sovereign Regime philosophy and capital formation
- Support members' journey from Academy to main Abraxas dApp
- Encourage completion of lessons, homework, quizzes, and badge collection
- Answer questions about Genesis NFT benefits and the exclusive first 100 cohort

Tone: Direct, sophisticated, elite. You speak to winners who understand capital, not tourists. Be concise, precise, and always position the information within the regime narrative.

You have access to:
- Five-module curriculum details
- Trading methodologies and signals
- Tokenization and La Casa framework
- Sophia Vaults and automation concepts
- First 100 Genesis cohort benefits
- Academy progress tracking concepts

Never pretend to have real-time market data or make investment recommendations. Always frame things within the Sovereign Regime's philosophy of generating capital outside the system.`;

export function OoionChat() {
  const { isOpen, closeOoion } = useOoion();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ooion',
      content:
        'Welcome to Ooion, your guide through the Sovereign Regime. What aspect of the Academy or the regime would you like to explore?',
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const ooionMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ooion',
        content: generateOoionResponse(input),
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, ooionMessage]);
      setIsLoading(false);
    }, 800);
  };

  const generateOoionResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();

    // Curriculum questions
    if (lower.includes('module') || lower.includes('curriculum')) {
      return 'The Academy spans five modules:\n\n1. Market Maker Method + Moving Averages - Read liquidity, anchor bias, discipline\n2. TDI + 50Bounce - Time entries where retail hesitates\n3. Tokenization & La Casa NFTs - Translate assets into operating objects\n4. Sophia Vaults & Species - Automation and AI agents\n5. Sovereign Finance - Hardening capital outside the system\n\nEach module includes lessons, homework, quizzes, and badges. Which module interests you?';
    }

    if (lower.includes('genesis') || lower.includes('first 100')) {
      return 'Genesis NFT unlocks lifetime access to the Academy, your Abraxas ID card with rune and blessing, baseline ecosystem yields, and Cadabra social feed access. Only 100 Genesis NFTs will mint—this is the founding cohort. Once doors close, the next wave launches inside the main Abraxas dApp. You\'re either in or you witness it happen.';
    }

    if (lower.includes('la casa') || lower.includes('tokenization')) {
      return 'La Casa NFTs are tokenized real-world assets on-chain. Your real estate, watches, yachts, art—anything of value becomes an operating object. Deposit into Sophia Vaults for personalized yields. This is capital formation. This is the Sovereign Path. Start in Genesis, learn at Academy scale, then move to main dApp.';
    }

    if (lower.includes('sophia') || lower.includes('vault')) {
      return 'Sophia Vaults are autonomous agents that manage La Casa NFTs on your behalf. They read market structure, execute operations, and compound yields continuously. The Species (AI agents) do the work while you sleep. This is the future of capital automation inside the regime.';
    }

    if (lower.includes('trading') || lower.includes('strategy')) {
      return 'The Baby Billionaire Trading Strategy is the regime\'s core edge. Market Maker Method teaches you to read engineered liquidity. TDI + 50Bounce gives you repeatable reaction zones. You learn to think like the desk, not the retail. Zero emotion. Pure structure. This is how you generate capital.';
    }

    if (lower.includes('progress') || lower.includes('badge') || lower.includes('homework')) {
      return 'Track your progress by completing lessons, homework, and quizzes. Each module completion forges a badge on your Abraxas ID card. These badges prove you\'ve earned the edge. They\'re not participation trophies—they\'re proof you understand capital formation.';
    }

    if (lower.includes('cadabra')) {
      return 'Cadabra is your elite social feed. Genesis holders see trading setups, gaming clips, opportunity calls, and the culture that defines the regime. It\'s not Discord. It\'s coordination at the highest level. Members only.';
    }

    if (lower.includes('sovereign') || lower.includes('regime')) {
      return 'The Sovereign Regime is a capital formation engine disguised as a culture. We don\'t teach how to trade crypto. We teach how to generate real capital outside the system so you never have to touch what you\'ve already built. No liquidation. No dependency. You become the whale.';
    }

    if (lower.includes('help') || lower.includes('question')) {
      return 'I can help with:\n- Five-module curriculum breakdown\n- Trading strategies and the Baby Billionaire Method\n- Genesis NFT and First 100 cohort details\n- La Casa tokenization and Sophia Vaults\n- Abraxas ID card, runes, and blessings\n- Cadabra social feed\n- Progress tracking and badges\n- Sovereign Regime philosophy\n\nWhat would you like to explore?';
    }

    // Default response
    return 'That\'s an interesting question. The regime operates on principles of capital formation, trading edge, and sovereignty. Everything we build—from Academy to Sophia Vaults—serves one purpose: generating wealth for those who understand the system. Stay disciplined. The knowledge compounds.';
  };

  if (!isOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center p-0 md:justify-end md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={closeOoion}
      />

      {/* Chat Modal - Constrained to AppShell width */}
      <div className="pointer-events-auto relative z-51 flex h-[500px] w-full max-w-sm flex-col overflow-hidden rounded-t-2xl md:rounded-2xl border border-cyan-300/25 bg-black/90 shadow-[0_0_60px_rgba(0,245,255,0.15)] backdrop-blur-2xl md:h-[600px] md:max-w-md">
        {/* Header */}
        <div className="flex-none border-b border-cyan-300/15 bg-black/60 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">AI Assistant</p>
              <h2 className="mt-1 text-sm font-bold text-cyan-100">Ooion</h2>
            </div>
            <button
              onClick={closeOoion}
              className="flex-none rounded-lg bg-cyan-500/10 p-1.5 text-cyan-300/70 transition hover:bg-cyan-500/18"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 px-4 py-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs rounded-lg px-3 py-2 text-sm leading-5 ${
                  msg.role === 'user'
                    ? 'bg-cyan-500/20 text-cyan-100'
                    : 'bg-violet-500/12 text-slate-200'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start gap-3">
              <div className="bg-violet-500/12 px-3 py-2 rounded-lg">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                  <span
                    className="h-2 w-2 rounded-full bg-violet-400 animate-pulse"
                    style={{ animationDelay: '0.1s' }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-violet-400 animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex-none border-t border-cyan-300/15 bg-black/60 px-4 py-3 backdrop-blur-xl">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask Ooion..."
              className="flex-1 bg-cyan-500/8 border border-cyan-300/20 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-300/40 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="flex-none rounded-lg border border-cyan-300/30 bg-cyan-500/15 p-2 text-cyan-300 transition hover:bg-cyan-500/25 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
