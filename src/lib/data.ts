export type ModuleLesson = {
  id: string;
  title: string;
  duration: string;
  outcome: string;
};

export type AcademyModule = {
  id: string;
  index: string;
  title: string;
  summary: string;
  signal: string;
  homework: string;
  badge: string;
  lessons: ModuleLesson[];
  quiz: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  };
};

export type CadabraPost = {
  id: string;
  author: string;
  rune: string;
  title: string;
  excerpt: string;
  tag: string;
  metrics: string;
  membersOnly?: boolean;
};

export const manifestoLines = [
  'Abraxas is not DeFi. It is not RWA either.',
  'It is a capital formation engine disguised as a culture.',
  'The Academy is where the regime hardens taste into execution.',
];

export const academyModules: AcademyModule[] = [
  {
    id: 'market-maker-method',
    index: 'I',
    title: 'Market Maker Method + Moving Averages',
    summary: 'Read liquidity raids, anchor bias with EMAs, then watch the algorithm leave its fingerprints before expansion.',
    signal: 'Baby Billionaire Strategy Layer 01',
    homework: 'Map one London session sweep: locate the flush, mark the reclaim, and explain why the 13/50 structure kept you patient instead of chasing the candle.',
    badge: 'Liquidity Cartographer',
    lessons: [
      { id: 'mmm-1', title: 'The algorithmic engine: how dealers profit from retail', duration: '10 min', outcome: 'Spot engineered sweeps instead of chasing candles. Know the boss\'s patterns.' },
      { id: 'mmm-2', title: 'Building the EMA stack: 13/50/200/800 as anchor and signal', duration: '12 min', outcome: 'Use structure, not emotion, to frame continuation and support/resistance.' },
      { id: 'mmm-3', title: 'Session timing: Asia, London, New York and dealer intent', duration: '09 min', outcome: 'Separate real intention from noise at market opens. Know when dealers show their hand.' },
      { id: 'mmm-4', title: 'Trend confirmation: the truth behind the cross', duration: '08 min', outcome: 'Wait for reversal, not anticipate it. Statistically, 70% of trends reward patience.' },
    ],
    quiz: {
      question: 'What confirms a true post-sweep continuation entry in the Market Maker Method?',
      options: [
        'Any breakout candle above the previous high',
        'The 13EMA crossing the 50EMA with price reclaiming structure above it',
        'Volume surge above average on any candle',
      ],
      answer: 'The 13EMA crossing the 50EMA with price reclaiming structure above it',
      explanation: 'The cross is trend confirmation itself — no candle close required. Then you wait for the reclaim to prove the sweep was institutional accumulation, not a trap.',
    },
  },
  {
    id: 'tdi-50bounce',
    index: 'II',
    title: 'TDI + 50Bounce Strategy',
    summary: 'Use TDI momentum and the 50-bounce reaction zone to time entries where retail hesitates and regime capital accumulates.',
    signal: 'Baby Billionaire Strategy Layer 02',
    homework: 'Build a journal with three valid 50-bounce setups (with MBLC + MBLB + CTSFA confluence) and one fake-out you skipped with discipline.',
    badge: 'Bounce Jurist',
    lessons: [
      { id: 'tdi-1', title: 'TDI pressure and release: reading momentum without false signals', duration: '11 min', outcome: 'Treat TDI as pressure context for timing, not as a magic button.' },
      { id: 'tdi-2', title: 'The continuation equation: SFA + CTSFA + MBLC + MBLB anatomy', duration: '13 min', outcome: 'Know exactly the four-part setup that separates valid continuations from noise.' },
      { id: 'tdi-3', title: 'The 50-bounce reaction zone and invalidation triggers', duration: '09 min', outcome: 'Understand where continuation enters and what kills it (reverse 13/50 cross).' },
      { id: 'tdi-4', title: 'Stacking confluence without overfitting: when to filter, when to trade', duration: '08 min', outcome: 'Fewer, cleaner entries. Higher conviction. Lower drawdown.' },
    ],
    quiz: {
      question: 'Why does the 50-bounce matter inside the full framework versus in isolation?',
      options: [
        'It provides a universal signal in every market condition',
        'It narrows the reaction zone when paired with TDI momentum confirmation and the EMA stack',
        'It removes the need for stops or risk management',
      ],
      answer: 'It narrows the reaction zone when paired with TDI momentum confirmation and the EMA stack',
      explanation: 'The 50-bounce alone is just a level. Add TDI pressure (MBLC), add the continuation Shark Fin (SFA + CTSFA), and suddenly you have a reaction zone where retail often hesitates. That\'s where conviction grows.',
    },
  },
  {
    id: 'tokenization',
    index: 'III',
    title: 'Tokenization & La Casa NFTs',
    summary: 'Translate assets into on-chain operating objects. La Casa NFTs turn boring records into scalable, intelligent capital bridges.',
    signal: 'Sovereign Path Layer 01',
    homework: 'Draft one real asset thesis (real estate, portfolio, business stake) that should become a La Casa NFT. Define the core metadata you would attach to defend it during funding rounds.',
    badge: 'Casa Architect',
    lessons: [
      { id: 'tok-1', title: 'Why assets move on-chain: The leverage moment', duration: '12 min', outcome: 'Understand when tokenization becomes a capital tool, not a trend.' },
      { id: 'tok-2', title: 'Structuring La Casa metadata: assets become intelligible records', duration: '11 min', outcome: 'Build asset records that third parties can trust, fund, and scale.' },
      { id: 'tok-3', title: 'From primary mint to secondary narrative: audience as capital', duration: '09 min', outcome: 'Connect token issuance to long-term narrative and ecosystem strategy.' },
      { id: 'tok-4', title: 'Tax and regulatory clarity in tokenization', duration: '08 min', outcome: 'Move assets on-chain without creating legal traps.' },
    ],
    quiz: {
      question: 'What transforms a La Casa NFT from a spec asset into real operating capital inside Abraxas?',
      options: [
        'Holding it for 30 days',
        'Having structured metadata that proves asset quality and opens secondary credit/yield paths',
        'Generating hype on Cadabra',
      ],
      answer: 'Having structured metadata that proves asset quality and opens secondary credit/yield paths',
      explanation: 'The NFT scales because the underlying data creates trust. Trust creates audience. Audience creates access to new capital venues — credit, scale, cross-chain deployment. The token is just the anchor.',
    },
  },
  {
    id: 'sophia-species',
    index: 'IV',
    title: 'Sophia Vaults & The Species AI Agents',
    summary: 'Vault mandates meet autonomous agents. Sophia turns static positions into 24/7 operating systems that compound while you sleep.',
    signal: 'Sovereign Path Layer 02',
    homework: 'Design one Sophia Vault mandate with: (1) agent permissions, (2) reporting cadence, (3) one hard capital protection rule, and (4) what triggers a human override.',
    badge: 'Vault Warden',
    lessons: [
      { id: 'soph-1', title: 'Vault logic: mandate design and capital protection', duration: '14 min', outcome: 'Write vault instructions that tell agents what to do but not how, preserving your sovereignty.' },
      { id: 'soph-2', title: 'The Species layer: Raido, Tide, Circuit, King—and when each executes', duration: '12 min', outcome: 'Know which agent fulfills which role and why orchestration beats single-agent models.' },
      { id: 'soph-3', title: 'The 50Bounce inside Sophia: how Raido compounds 24/7 without sleeping', duration: '10 min', outcome: 'Understand how trading strategy becomes autonomous automation without losing edge.' },
      { id: 'soph-4', title: 'Monitoring, trust, and disciplined override authority', duration: '09 min', outcome: 'Keep the regime subordinate to your will. Automation serves, never commands.' },
    ],
    quiz: {
      question: 'What is the correct relationship between the vault owner, the mandate, and the AI agent?',
      options: [
        'The agent gradually replaces owner judgment as it gathers more data',
        'The owner writes a mandate, the agent executes within bounds, the owner retains sovereignty',
        'The owner should avoid all manual overrides to preserve machine learning purity',
      ],
      answer: 'The owner writes a mandate, the agent executes within bounds, the owner retains sovereignty',
      explanation: 'Species agents are instruments. Your mandate is the constitution. The agent\'s job is execution, not strategy. When the agent violates mandate or you see drift, you override. Full stop.',
    },
  },
  {
    id: 'sovereign-finance',
    index: 'V',
    title: 'Sovereign Finance & Hardening Capital',
    summary: 'Close the regime with capital protection, tax discipline, and the mindset to command your wealth when cycles turn cold.',
    signal: 'Sovereign Path Layer 03',
    homework: 'Write your sovereign capital constitution: (1) deployment rules (when you will or won\'t risk capital), (2) defense rules (when you will reduce/exit), (3) what you absolutely refuse to finance, (4) your treasury draw rate.',
    badge: 'Capital Regent',
    lessons: [
      { id: 'fin-1', title: 'Hardening capital: building antifragility into your structure', duration: '12 min', outcome: 'Protect dry powder while compounding. Understand the difference between growth and fragility.' },
      { id: 'fin-2', title: 'Treasury discipline and durable yield versus vanity APY', duration: '10 min', outcome: 'Separate sustainable yield from marketing yield. Know when to harvest and when to wait.' },
      { id: 'fin-3', title: 'Tax clarity, strategic deployment, and the sovereign mindset', duration: '09 min', outcome: 'Move capital with intent, not panic. Build positions that survive and scale.' },
      { id: 'fin-4', title: 'ABRAX stablecoin and the sovereign money layer', duration: '08 min', outcome: 'Understand how native stablecoins protect and accelerate capital velocity.' },
    ],
    quiz: {
      question: 'What is sovereign finance in the Abraxas worldview?',
      options: [
        'Maximizing short-term APY from any source regardless of risk',
        'Converting all capital into volatile assets to capture every cycle',
        'Using capital to preserve autonomy, optionality, and long-term strategic command',
      ],
      answer: 'Using capital to preserve autonomy, optionality, and long-term strategic command',
      explanation: 'The point of capital is not motion. The point is command. More compound. More optionality. More years to compound. The regime that stays whole wins.',
    },
  },
];

export const cadabraPosts: CadabraPost[] = [
  {
    id: 'post-1',
    author: 'Rune-018',
    rune: 'ᚱ',
    title: 'London sweep into 20/50 reclaim on SOL',
    excerpt: 'Waited for the engineered flush, then scaled in only after the reclaim printed above session low liquidity. Clean 2.7R.',
    tag: 'Trading Setup',
    metrics: '94 echoes · 21 blessings',
  },
  {
    id: 'post-2',
    author: 'House Vanta',
    rune: '☍',
    title: 'Cadabra clip: ranked win with regime comms overlay',
    excerpt: 'Fast edit from tonight’s stack. Gaming clips stay because timing, poise, and systems thinking carry across domains.',
    tag: 'Gaming Clip',
    metrics: '61 echoes · 9 reposts',
  },
  {
    id: 'post-3',
    author: 'Sophia Desk',
    rune: '✦',
    title: 'Vault mandate thread: when to rotate out of passive yield',
    excerpt: 'Premium breakdown of the moment a yield vehicle stops serving sovereignty and starts renting your attention.',
    tag: 'Members Signal',
    metrics: 'Genesis only · 13 sealed replies',
    membersOnly: true,
  },
  {
    id: 'post-4',
    author: 'Rune-227',
    rune: '𓂀',
    title: 'La Casa mint storyboard for a Miami duplex',
    excerpt: 'Shot list, metadata order, and launch sequence for turning a boring asset deck into a compelling tokenization narrative.',
    tag: 'Tokenization',
    metrics: '47 echoes · 5 citations',
  },
];

export const blessings = [
  'Blessed in volatility. Untouched by panic.',
  'Your patience compounds faster than their hype.',
  'Fortune follows those who can hold formation.',
  'Capital obeys the one who can remain cold.',
  'Your rune sees the trap before the crowd names it.',
];

export const runes = ['ᚱ', '☍', '✦', '𓂀', 'ᛟ', '⌘', '♁', '△'];
