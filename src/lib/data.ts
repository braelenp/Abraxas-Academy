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
  'ABRAXAS MANIFESTO',
  'The Sovereign Regime',
  'A capital formation engine disguised as a culture.',
  '',
  'Abraxas isn\'t DeFi.',
  'It\'s not RWA either.',
  'It\'s a capital formation engine disguised as a culture.',
  '',
  '2014 was the Young People Revolution.',
  'Community first. Money second. Ownership never existed.',
  'We fix that.',
  '',
  'THE SOVEREIGN REGIME',
  '',
  'We build the people, and let the people build the business.',
  'Growth is powered exclusively by word-of-mouth and genuine networking.',
  '',
  'We don\'t teach people how to trade crypto.',
  'We teach them how to generate real capital outside the system so they never have to touch what they\'ve already built.',
  'No liquidation. No dependency. No begging for market conditions.',
  'You become the whale before the wealth transfer.',
  '',
  'THE FLOW (CLOSED LOOP)',
  'Education → Capital → Tokenization → Automation',
  'Not theory. A complete system.',
  '',
  '1. Learn the edge (Abraxas Academy)',
  '2. Produce fresh capital outside crypto',
  '3. Bridge it on-chain through Black Card NFTs',
  '4. Route it into Sophia Vaults',
  '5. The Species (AI agents) compound it continuously',
  '',
  'Human effort becomes machine persistence.',
  '',
  'TWO ASSETS. NO CONFUSION.',
  '',
  'Genesis NFT – Sovereign Regime Membership',
  '• Access to Abraxas Academy',
  '• Lifetime curriculum + Cadabra social feed',
  '• Abraxas ID card with unique rune + blessing',
  '• Baseline yields from the entire ecosystem',
  '',
  'Black Card NFT – Tokenization & Scaling',
  '• Bring real-world assets on-chain (real estate, watches, yachts, art, portfolios, etc.)',
  '• Deposit into Sophia Vaults for personalized higher yields',
  '• Scale by acquiring more Black Cards',
  '',
  'That\'s it. No tiers. No games.',
  'If you want more yield, you bring more assets.',
  '',
  'FIRST 100 COHORT – FOUNDING MEMBERS',
  '',
  'We are opening the doors to the first 100 Genesis NFT members — the inaugural cohort of the Sovereign Regime.',
  '',
  'These 100 will receive exclusive Sovereign Few founding-member perks:',
  '',
  '• Founding Member status permanently displayed on their Abraxas ID card',
  '• Special rune blessing — a unique, one-time generational rune tied to their entry',
  '• Higher baseline yield multiplier across the entire ecosystem',
  '• Priority access to all IRL Miami home events, private breakout sessions, and opportunity calls',
  '• Early access to new daughters/sons of the Regime and future asset classes',
  '• Lifetime recognition as the original 100 who helped birth the movement',
  '',
  'This cohort is limited, intentional, and elite.',
  'Once the first 100 are claimed, the next wave will have different (and likely higher) entry terms.',
  '',
  'ARCHITECTURE – TWO SURFACES, ONE SYSTEM',
  '',
  'Abraxas Academy (Education + Community)',
  '• Genesis NFT gated',
  '• Full 5-module curriculum with real trading edge',
  '• Progress tracking, homework, quizzes, badges',
  '• Cadabra social feed (trading setups + gaming clips)',
  '• Hybrid community: virtual opportunity calls + IRL Miami home events',
  '',
  'Abraxas Protocol (Tokenization + Automation)',
  '• Black Card Tokenization rails',
  '• Sophia Vaults + The Species AI agents',
  '• Yield dashboard and compounding',
  '• ABRAX staking and governance layer',
  '',
  'Same environment. Same language. Same gravity.',
  '',
  'THE CURRICULUM – THE REAL EDGE',
  '',
  'Module 1 – Market Maker Method + Moving Averages (13/50/200/800 EMA)',
  'Module 2 – TDI + 50Bounce Strategy (MBL, SFA, CTSFA, MBLC, MBLB patterns)',
  'Module 3 – Tokenization & Black Card NFTs',
  'Module 4 – Sophia Vaults & The Species AI Agents',
  'Module 5 – Sovereign Finance & Hardening Capital',
  '',
  'This is not theory. It is the proven framework that lets you generate capital outside crypto before you ever step foot on-chain.',
  '',
  'COMMUNITY – THE SOVEREIGN REGIME',
  '',
  'Community isn\'t Discord. It\'s coordination.',
  '',
  '• Weekly opportunity calls',
  '• Live trading execution',
  '• Physical presence in homes and private sessions',
  '• Digital scales. IRL converts.',
  '',
  'This is modern YPR energy — upgraded with real edge and on-chain ownership.',
  '',
  'WORD OF MOUTH. NO HYPE. NO ADS.',
  '',
  'The Sovereign Regime grows by relationship and proven results. Real capital. Real yield. Real humans spreading the word.',
  'Word-of-mouth is faster than ads. It\'s more authentic. It\'s the only way to scale without selling.',
  '',
  'TOKEN & YIELD LOGIC',
  '',
  'Genesis NFT pays you for being early to the Regime.',
  'Black Card NFT pays you for bringing assets into it.',
  'ABRAX exists as the optional equity layer — not the crutch.',
  '',
  'Revenue hits first. Token comes second.',
  'No forced buying. No exit liquidity games.',
  '',
  'WHY THIS WORKS',
  '',
  'It doesn\'t rely on crypto to work.',
  'If markets go flat, the system still produces.',
  'If markets run, it accelerates.',
  'That asymmetry is the edge.',
  '',
  'THE CALL',
  '',
  'Abraxas is not a product.',
  'It\'s a regime.',
  'And regimes don\'t compete.',
  'They absorb.',
  '',
  'BUILT BY THE SOVEREIGNS',
  '',
  'Founder: Acey (@Ac3yway) — Architect of the regimen. Forged the trading edge, imagined the tokenization layer, held the vision.',
  'Co-Founders: Neo & Chris — Orchestrated the on-chain infrastructure and capital architecture.',
  'Global Leaders: Swiss & Nick — Community commanders and protocol deep-dive orchestration.',
  '',
  'The hackathon brought the right humans together.',
  'Now we build far beyond it.',
  '',
  'Welcome to the Sovereign Regime.',
  'Welcome to the next degree.',
];

export const academyModules: AcademyModule[] = [
  {
    id: 'market-maker-method',
    index: 'I',
    title: 'Market Maker Method + Moving Averages',
    summary: 'Read liquidity raids, anchor bias with EMAs, then watch the algorithm leave its fingerprints before expansion. The first tactical edge in your sovereign arsenal.',
    signal: 'Trading Foundation Layer 01 — The Edge',
    homework: 'Map one London session sweep: locate the flush, mark the reclaim, and explain why the 13/50 structure kept you patient instead of chasing the candle. Real capital is built on patience, not hype.',
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
      explanation: 'The cross is trend confirmation itself — no candle close required. Then you wait for the reclaim to prove the sweep was institutional accumulation, not a trap. This is how we separate signal from noise.',
    },
  },
  {
    id: 'tdi-50bounce',
    index: 'II',
    title: 'TDI + 50Bounce Strategy',
    summary: 'Use TDI momentum and the 50-bounce reaction zone to time entries where retail hesitates and regime capital accumulates. Generate fresh capital to bridge on-chain.',
    signal: 'Trading Foundation Layer 02 — The Execution',
    homework: 'Build a journal with three valid 50-bounce setups (with MBLC + MBLB + CTSFA confluence) and one fake-out you skipped with discipline. This journal is your proof of edge.',
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
      explanation: 'The 50-bounce alone is just a level. Add TDI pressure (MBLC), add the continuation Shark Fin (SFA + CTSFA), and suddenly you have a reaction zone where retail often hesitates. Confluence builds conviction. Conviction builds capital.',
    },
  },
  {
    id: 'black-card-tokenization',
    index: 'III',
    title: 'The Black Card & On-Chain Asset Tokenization',
    summary: 'Convert real-world assets into the on-chain Black Card — humanity\'s first tool for tokenizing and scaling real value. No hype. Pure capital structuring.',
    signal: 'Sovereign Path Layer 01 — Bridge to On-Chain',
    homework: 'Draft one real asset thesis (real estate, portfolio, business stake, collectibles) that should become a Black Card NFT. Define the core metadata that proves its quality and invites secondary capital and yield paths.',
    badge: 'Black Card Architect',
    lessons: [
      { id: 'tok-1', title: 'Why tokenization works: the bridge moment from off-chain to on-chain sovereignty', duration: '12 min', outcome: 'Understand how real assets become liquid, scalable, and yield-generating across borders.' },
      { id: 'tok-2', title: 'Black Card metadata: structuring assets that institutions can understand and fund', duration: '11 min', outcome: 'Build asset records with provenance, valuation, and yield potential that open doors.' },
      { id: 'tok-3', title: 'Primary to secondary: how narrative becomes capital velocity', duration: '09 min', outcome: 'Craft tokenization stories that attract capital, community, and compounding mechanisms.' },
      { id: 'tok-4', title: 'Legal clarity and strategic deployment of tokenized assets', duration: '08 min', outcome: 'Move real assets on-chain without creating legal or structural traps. Stay sovereign.' },
    ],
    quiz: {
      question: 'What transforms a Black Card NFT from a static record into an active capital generator?',
      options: [
        'Holding it for 90 days',
        'Having structured metadata that proves asset quality and opens access to Sophia Vaults, yield strategies, and secondary credit paths',
        'Promoting it on social media',
      ],
      answer: 'Having structured metadata that proves asset quality and opens access to Sophia Vaults, yield strategies, and secondary credit paths',
      explanation: 'The Black Card is only as powerful as the data it carries. Strong metadata = trust. Trust = audience. Audience = capital routes. Secondary markets, yield vaults, cross-chain liquidity — all emerge from bulletproof asset records.',
    },
  },
  {
    id: 'sophia-species',
    index: 'IV',
    title: 'Sophia Vaults & The Species AI Agents',
    summary: 'Vault mandates meet autonomous agents. Sophia turns static Black Cards into 24/7 compounding systems. The Species (Raido, Tide, Circuit, King) executes while you build.',
    signal: 'Sovereign Path Layer 02 — Autonomous Compounding',
    homework: 'Design one Sophia Vault mandate for a Black Card asset: (1) agent permissions, (2) yield targets, (3) one hard capital protection rule, (4) what triggers manual override. Your mandate is your constitution.',
    badge: 'Sophia Warden',
    lessons: [
      { id: 'soph-1', title: 'Vault logic: mandate design while keeping your capital whole', duration: '14 min', outcome: 'Write vault instructions that tell agents what to do but not how, preserving your sovereignty and capital safety.' },
      { id: 'soph-2', title: 'The Species layer: Raido, Tide, Circuit, King—when each agent executes', duration: '12 min', outcome: 'Know which Species agent fills which role and why orchestration of multiple minds beats monolithic AI.' },
      { id: 'soph-3', title: 'The 50Bounce inside Sophia: how Raido compounds your Black Card 24/7 without sleeping', duration: '10 min', outcome: 'Your trading edge becomes autonomous capital generation. The algorithm works while you scale.' },
      { id: 'soph-4', title: 'Monitoring, trust, and disciplined human override authority', duration: '09 min', outcome: 'The Species exists to serve your will. Stay sovereign. Override early when drift appears.' },
    ],
    quiz: {
      question: 'What is the correct relationship between you, your Sophia mandate, and the Species agents?',
      options: [
        'The agent grows independent and makes strategic decisions without your input',
        'You write a mandate, the Species executes within bounds, you retain full override authority and sovereignty',
        'You avoid manual oversight to preserve the purity of machine learning',
      ],
      answer: 'You write a mandate, the Species executes within bounds, you retain full override authority and sovereignty',
      explanation: 'Species agents are instruments of your will. Your mandate is the constitution. The agent\'s job is flawless execution, not strategy. When the agent drifts from mandate, you override. Full stop. Your capital, your rules.',
    },
  },
  {
    id: 'sovereign-finance',
    index: 'V',
    title: 'Sovereign Finance & The ABRAX Layer',
    summary: 'Close the regime: capital hardening, yield durable power, and ABRAX — the stakeable stablecoin that rewards founders. Command your wealth across cycles.',
    signal: 'Sovereign Path Layer 03 — Capital Command',
    homework: 'Write your sovereign capital constitution: (1) deployment rules, (2) defense/profit-taking rules, (3) what you absolutely refuse to finance, (4) your treasury draw rate. This is your financial sovereignty document.',
    badge: 'Capital Regent',
    lessons: [
      { id: 'fin-1', title: 'Antifragility and hardening: building capital that survives and scales across cycles', duration: '12 min', outcome: 'Protect dry powder while compounding. Understand the difference between growth that lasts and fragility that breaks.' },
      { id: 'fin-2', title: 'Durable yield vs. vanity APY: knowing what truly compounds', duration: '10 min', outcome: 'Separate sustainable yield from marketing yield. Know when to harvest, when to wait, when to ride.' },
      { id: 'fin-3', title: 'Tax clarity, intent, and the strategic sovereign mindset', duration: '09 min', outcome: 'Deploy capital with precision. Build positions that survive and scale. No panic. No surprises.' },
      { id: 'fin-4', title: 'ABRAX: the stakeable stablecoin and backend yield layer', duration: '08 min', outcome: 'Understand how ABRAX rewards founding members with protocol-backed yields. Earn revenue, not hype.' },
    ],
    quiz: {
      question: 'What is sovereign finance in the Abraxas Sovereign Regime?',
      options: [
        'Maximizing APY from any source regardless of risk exposure',
        'Converting all capital into volatile assets to capture every market cycle',
        'Using capital to preserve autonomy, optionality, and long-term strategic command across all conditions',
      ],
      answer: 'Using capital to preserve autonomy, optionality, and long-term strategic command across all conditions',
      explanation: 'The point of capital is not motion. The point is command. More dry powder. More optionality. More years to compound. The regime that stays whole wins. That\'s sovereignty.',
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
    title: 'Black Card mint storyboard for a Miami duplex',
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
