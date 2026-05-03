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
  'SOVEREIGN REGIME',
  'The Escape Velocity',
  '',
  'We do not ask for permission.',
  'We do not wait for the system to catch up.',
  'We build the parallel economy that renders the old one obsolete.',
  '',
  'THE PROBLEM WITH WAITING',
  'The fiat world is a slow erosion machine.',
  'Every second your capital sits in dollars, it loses value to inflation, taxes, and hidden dilution.',
  '',
  'Centralized platforms extract, control, and gatekeep.',
  'Legacy finance sells you the illusion of safety while quietly bleeding your future.',
  '',
  'THE SOVEREIGN REGIME IS THE ESCAPE VELOCITY',
  '',
  'We do not fight the old system.',
  'We outpace it.',
  '',
  'HOW THE NEW DEGREE WORKS',
  '',
  '1. Masters NFT',
  'Your permanent on-chain Master Card. The first 100 only. 15 SOL.',
  'Lifetime access to the Regime.',
  'This is not a ticket. It is your sovereign identity etched into the ledger.',
  '',
  '2. BlackBox NFT',
  'Your on-chain Black Card. Tokenize any real-world asset.',
  'Real estate, watches, jets, art, music rights, carbon credits, invoices, or your own brand and network.',
  'No lawyers. No middlemen. Instant, immutable ownership.',
  '',
  '3. Sophia Vaults',
  'Intelligent capital containers. Your tokenized assets go here.',
  'They are not passive. They are alive.',
  '',
  '4. The Species',
  'Autonomous AI agents (Raido, Tide, Circuit, King AI, and the rest).',
  'They work 24/7. They monitor, compound, de-risk, and grow your holdings while you live your life.',
  '',
  '5. ALLURE',
  'The native yield layer. Passive, sovereign income generated from the entire ecosystem.',
  '',
  '6. Sovereign Spatial Protocol',
  'The un-killable backbone.',
  'Terrestrial AirNode mesh + celestial orbital relay + biological state persistence.',
  'Your data, your lore, your digital twin — secured beyond any single point of failure.',
  '',
  'OUR PHILOSOPHY IS SIMPLE AND ABSOLUTE',
  '',
  'We build the people.',
  'The people build the business.',
  '',
  'We do not chase hype.',
  'We do not rely on ads.',
  'We move through word of mouth, real relationships, and unbreakable results.',
  '',
  'THE REGIME FLOW',
  '',
  'You generate capital outside the system first.',
  'You harden it on-chain.',
  'You let intelligent agents compound it forever.',
  '',
  'WHAT THIS IS NOT',
  '',
  'This is not another DeFi app.',
  'This is not another RWA project.',
  'This is capital formation disguised as culture.',
  '',
  'THE RECOGNITION',
  '',
  'The aligned recognize it instantly.',
  'The herd will hear about it later.',
  '',
  'WELCOME TO THE NEXT DEGREE',
  '',
  'The Regime is already here.',
  'The only question is whether you step in now… or watch from the outside.',
  '',
  'SOVEREIGN REGIME',
  'Masters NFT • BlackBox • Sophia Vaults • The Species • ALLURE • Spatial Protocol',
  '',
  'We do not ask.',
  'We do not wait.',
  'We build.',
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
    title: 'The On-Chain Black Card & Asset Tokenization',
    summary: 'Convert real-world assets into the on-chain Black Card — humanity\'s first institutional-grade tool for tokenizing and scaling real value. No hype. Pure capital structuring.',
    signal: 'Sovereign Path Layer 01 — Bridge to On-Chain',
    homework: 'Draft one real asset thesis (real estate, portfolio, business stake, collectibles) that should become an on-chain Black Card NFT. Define the core metadata that proves its quality and invites secondary capital and yield paths.',
    badge: 'Black Card Architect',
    lessons: [
      { id: 'tok-1', title: 'Why on-chain Black Card tokenization works: the bridge moment from off-chain to on-chain sovereignty', duration: '12 min', outcome: 'Understand how real assets become liquid, scalable, and yield-generating across borders and systems.' },
      { id: 'tok-2', title: 'Black Card metadata: structuring assets that institutions can understand and fund', duration: '11 min', outcome: 'Build asset records with provenance, valuation, and yield potential that open doors and create velocity.' },
      { id: 'tok-3', title: 'Primary to secondary: how narrative and structure become capital velocity', duration: '09 min', outcome: 'Craft tokenization stories that attract capital, community, and autonomous compounding mechanisms.' },
      { id: 'tok-4', title: 'Strategic on-chain deployment of your real assets', duration: '08 min', outcome: 'Move real assets on-chain with clarity and structure. Stay sovereign. Maintain full control.' },
    ],
    quiz: {
      question: 'What transforms an on-chain Black Card NFT from a static record into an active capital generator?',
      options: [
        'Holding it for 90 days',
        'Having structured metadata that proves asset quality and opens access to Sophia Vaults, yield strategies, and secondary credit paths',
        'Promoting it on social media',
      ],
      answer: 'Having structured metadata that proves asset quality and opens access to Sophia Vaults, yield strategies, and secondary credit paths',
      explanation: 'The on-chain Black Card is only as powerful as the data it carries. Strong metadata = trust. Trust = audience. Audience = capital routes, yield vaults, secondary markets, cross-chain liquidity — all emerge from bulletproof asset records.',
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
    title: 'Sovereign Finance, Capital Command & Sovereign',
    summary: 'Close the regime: capital hardening, durable yield power, and SOVEREIGN — the stakeable stablecoin that rewards Sovereign Regime founders. Generate revenue, then compound it. Command your wealth across all cycles.',
    signal: 'Sovereign Path Layer 03 — Capital Command & Yield Authority',
    homework: 'Write your sovereign capital constitution: (1) deployment rules for fresh capital, (2) defense/profit-taking rules, (3) what you absolutely refuse to finance, (4) your durable yield draw rate. This is your financial sovereignty document.',
    badge: 'Capital Regent',
    lessons: [
      { id: 'fin-1', title: 'Antifragility and capital hardening: building wealth that survives and scales across all conditions', duration: '12 min', outcome: 'Protect dry powder while compounding. Understand the difference between growth that lasts and fragility that breaks.' },
      { id: 'fin-2', title: 'Durable yield vs. vanity APY: knowing what truly compounds for decades', duration: '10 min', outcome: 'Separate sustainable yield from marketing yield. Know when to harvest, when to wait, when to ride. Revenue first.' },
      { id: 'fin-3', title: 'The sovereign mindset: deploying capital with intent and precision', duration: '09 min', outcome: 'Build positions that survive. No panic. No surprises. Strategic clarity across bull and bear.' },
      { id: 'fin-4', title: 'SOVEREIGN: the stakeable stablecoin and protocol yield layer that rewards founders', duration: '08 min', outcome: 'Understand how SOVEREIGN rewards Regime founders with sustainable, protocol-backed yields. Revenue, not hype.' },
    ],
    quiz: {
      question: 'What is sovereign finance in the Sovereign Regime?',
      options: [
        'Maximizing APY from any source regardless of risk exposure',
        'Converting all capital into volatile assets to capture every market cycle',
        'Using capital to preserve autonomy, optionality, and long-term strategic command across all conditions and cycles',
      ],
      answer: 'Using capital to preserve autonomy, optionality, and long-term strategic command across all conditions and cycles',
      explanation: 'The point of capital is not motion. The point is sovereignty and command. More dry powder. More optionality. More decades to compound. The regime that stays whole and intact wins. That\'s true sovereign finance.',
    },
  },
  {
    id: 'advanced-market-structure',
    index: 'VI',
    title: 'Advanced Market Structure & Order Flow',
    summary: 'Read market microstructure like institutional playbooks. Understand spoofing, layering, icebergs, and VWAP algorithms. See what dealers really want before the move prints.',
    signal: 'Trading Advanced Layer 01 — Institutional Intent',
    homework: 'Analyze one major institutional move: find the spoofed orders that preceded it, identify the real buyer/seller, explain what the algorithm revealed about dealer intent.',
    badge: 'Order Flow Architect',
    lessons: [
      { id: 'ams-1', title: 'Spoofing and layering: how dealers telegraph their true intent with fake orders', duration: '11 min', outcome: 'See through the noise. Fake orders reveal real direction.' },
      { id: 'ams-2', title: 'VWAP algorithms: the institutional engine that moves billions and pushes your stop', duration: '12 min', outcome: 'Understand when VWAP is hunting liquidity vs. executing real customer orders.' },
      { id: 'ams-3', title: 'Iceberg orders and the dark pools: where real capital hides before it moves', duration: '10 min', outcome: 'Track the institutional capital flowing through layers you can\'t see.' },
      { id: 'ams-4', title: 'Building your own order flow scanner: watching what algorithms do before prints', duration: '09 min', outcome: 'Get one step ahead of institutional execution using order book dynamics.' },
    ],
    quiz: {
      question: 'Why does recognizing a spoofed order matter more than recognizing a real one?',
      options: [
        'It doesn\'t — they\'re both just noise',
        'Spoofed orders reveal where dealers DON\'T want you trading, which tells you where the real move will go',
        'Spoofed orders guarantee a profitable trade',
      ],
      answer: 'Spoofed orders reveal where dealers DON\'T want you trading, which tells you where the real move will go',
      explanation: 'Dealers layer fake orders to push retail away from the real path of capital. When you spot the fake, you\'ve spotted the seam. Trade the seam. That\'s how institutional traders extract daily edge.',
    },
  },
  {
    id: 'session-trading-time-decay',
    index: 'VII',
    title: 'Session Trading & Time Decay Mechanics',
    summary: 'Each session (Asia, London, New York) has different dealer behavior, liquidity patterns, and momentum decay. Trade the session, not the chart. Time is edge.',
    signal: 'Trading Advanced Layer 02 — Session Dynamics',
    homework: 'Map Friday Asia session vs. Friday London on a currency pair for three weeks. Note the liquidity patterns, when dealers fade fomo, when time decay kills continuation.',
    badge: 'Session Trader',
    lessons: [
      { id: 'std-1', title: 'Asia session: thin liquidity, big moves, dealers working early', duration: '09 min', outcome: 'Catch the 4 AM move that London doesn\'t know about yet.' },
      { id: 'std-2', title: 'London session: the real power hour and when fomo ends', duration: '11 min', outcome: 'Ride the liquidity flood. Know when to step aside before NY opens.' },
      { id: 'std-3', title: 'Time decay and momentum kill: why 4-hour holds fail at 3 hours', duration: '10 min', outcome: 'Understand the physics of continuation. Exit before the math breaks.' },
      { id: 'std-4', title: 'Cross-session patterns: how overnight gaps set up the next session\'s flush', duration: '08 min', outcome: 'See three sessions as one continuous dealer strategy, not isolated events.' },
    ],
    quiz: {
      question: 'What is the biggest mistake retail makes with session-specific strategies?',
      options: [
        'Trading the same setup across all sessions when each has different dealer behavior',
        'Avoiding Asian session completely',
        'Sleeping too much',
      ],
      answer: 'Trading the same setup across all sessions when each has different dealer behavior',
      explanation: 'London sweep logic doesn\'t work in Asia. New York VWAP doesn\'t work at 2 AM. Session awareness = session edge. Same trader, same pair, different playbook per session.',
    },
  },
  {
    id: 'risk-capital-protection',
    index: 'VIII',
    title: 'Risk Ratios & Capital Protection Architecture',
    summary: 'Real capital preservation is not tight stops. It\'s mandate design, position sizing, and knowing your max daily/monthly drawdown ceiling BEFORE you trade.',
    signal: 'Trading Advanced Layer 03 — Risk Discipline',
    homework: 'Design your personal capital protection architecture: max daily loss, max position size, when to stop trading for the day, what breaks the mandate.',
    badge: 'Risk Architect',
    lessons: [
      { id: 'rcp-1', title: 'The 2% rule myth: why position sizing beats stop hunting', duration: '10 min', outcome: 'Stop hunting happens. Position sizing protects you ' },
      { id: 'rcp-2', title: 'Drawdown ceilings: the difference between a losing day and a blown account', duration: '11 min', outcome: 'Know your limit before you breach it. Discipline preserves capital.' },
      { id: 'rcp-3', title: 'Risk of ruin: the math that separates traders who last from traders who blow up', duration: '12 min', outcome: 'Understand how win rate and position size determine survival probability.' },
      { id: 'rcp-4', title: 'Building mandate guardrails: the constitution that keeps you trading for decades', duration: '09 min', outcome: 'Create rules that protect you from your own emotion and overconfidence.' },
    ],
    quiz: {
      question: 'Why is mandate-level capital protection better than trade-level stops?',
      options: [
        'It\'s not — stops are always better',
        'Because daily/monthly ceilings force exits before emotion takes over, and position size prevents catastrophic losses',
        'Because you don\'t need discipline if you have a mandate',
      ],
      answer: 'Because daily/monthly ceilings force exits before emotion takes over, and position size prevents catastrophic losses',
      explanation: 'Stops get hunted. Mandates get followed. When you hit your daily ceiling, you walk. No egos. No exceptions. Capital survives for the next opportunity.',
    },
  },
  {
    id: 'entry-confluence-probability',
    index: 'IX',
    title: 'Entry Confluence & Probability Weighting',
    summary: 'Not every EMA cross is worth trading. Not every VWAP touch deserves a position. Learn to layer filters: how many confluences = go? How many disconfirmations = no?',
    signal: 'Trading Advanced Layer 04 — Conviction Building',
    homework: 'Take 20 setups from last month. Grade each one: how many confluences? How many disconfirmations? Correlate that to winning probability. Build your personal confluence model.',
    badge: 'Confluence Master',
    lessons: [
      { id: 'ecp-1', title: 'The three confluence minimums: time, structure, momentum', duration: '10 min', outcome: 'Never use two. Always stack three. Know what each confluence proves.' },
      { id: 'ecp-2', title: 'Disconfirmation weighting: when stops DON\'T break, the setup is dead', duration: '11 min', outcome: 'Learn to exit before the full thesis breaks. Partial edge > full loss.' },
      { id: 'ecp-3', title: 'Probability odds: the math that converts confluence into expected value', duration: '09 min', outcome: 'Understand your actual edge in numbers, not feelings.' },
      { id: 'ecp-4', title: 'The pyramid: scaling into confluence, scaling out of disconfirmation', duration: '10 min', outcome: 'Enter small when confluences pile. Exit big when they break. That\'s real scaling.' },
    ],
    quiz: {
      question: 'What makes a confluence valuable for entry probability?',
      options: [
        'Having as many indicators as possible agree',
        'Having time, structure, and momentum all point the same direction with a disconfirmation exit if any breaks',
        'Following indicators blindly',
      ],
      answer: 'Having time, structure, and momentum all point the same direction with a disconfirmation exit if any breaks',
      explanation: 'Confluence isn\'t more indicators. It\'s less guessing. Three independent reasons to trade = conviction. If any breaks, the thesis is wounded — exits before the full breakdown.',
    },
  },
  {
    id: 'scaling-position-sizing',
    index: 'X',
    title: 'Scaling & Position Sizing for Real Capital',
    summary: 'Micro foundations compound into macro movement. Start with 0.5% risk per trade. Scale in pyramids. Watch reinvested capital compound 10x faster than your original deposits.',
    signal: 'Trading Advanced Layer 05 — Capital Velocity',
    homework: 'Model three years of 50-trades-per-month with reinvested gains at 3 different position sizing levels. See compounding math prove which discipline survives.',
    badge: 'Scaling Sage',
    lessons: [
      { id: 'sps-1', title: '0.5% per trade: starting capital that survives', duration: '09 min', outcome: 'Small positions build discipline. Discipline builds capital.' },
      { id: 'sps-2', title: 'Pyramid scaling: adding to winners as confluences stack, reducing as they crack', duration: '11 min', outcome: 'Ride winners. Minimize losers. 70% of your P&L comes from 20% of trades.' },
      { id: 'sps-3', title: 'Reinvestment velocity: why reinvested gains compound 10x faster', duration: '12 min', outcome: 'Understanding compounding turns millisecond gains into year-long capital movement.' },
      { id: 'sps-4', title: 'The 5-year thesis: modeling capital growth from trading discipline alone', duration: '08 min', outcome: 'See your trading discipline as a capital factory. Patience compounds.' },
    ],
    quiz: {
      question: 'Why does starting with 0.5% risk per trade lead to faster long-term compounding than 2% or 5%?',
      options: [
        'It doesn\'t — bigger positions compound faster',
        'Because surviving and reinvesting consistently beats occasional big wins. Discipline > heroism.',
        'Because you won\'t lose anything',
      ],
      answer: 'Because surviving and reinvesting consistently beats occasional big wins. Discipline > heroism.',
      explanation: 'One 50% loss on 5% risk = 2.5% account pain. One 50% loss on 0.5% = 0.25% pain + you keep compounding. Over five years, the trader who never blows up beats the trader who takes one catastrophic hit. Boring wins.',
    },
  },
  {
    id: 'sovereign-lifestyle-discipline',
    index: 'XI',
    title: 'Sovereign Lifestyle & Discipline Foundation',
    summary: 'The lifestyle is not the reward for trading. The discipline is the lifestyle. Learn to live like a sovereign while building: capital goals, time optionality, tribe alignment, nothing else.',
    signal: 'Sovereign Lifestyle Layer 01 — Foundation',
    homework: 'Write your personal discipline covenant: what you refuse to do, what you wake up to do, what defines your daily sovereignty.',
    badge: 'Lifestyle Builder',
    lessons: [
      { id: 'sld-1', title: 'Discipline disguised as freedom: why the sovereign lifestyle requires more structure, not less', duration: '11 min', outcome: 'Real freedom = clear rules. Chaos = permission.' },
      { id: 'sld-2', title: 'Capital sovereignty first: how owning your capital owns your time', duration: '10 min', outcome: 'Employment traps you. Capital liberates you. Build capital before claiming lifestyle.' },
      { id: 'sld-3', title: 'Optionality as the core asset: saying no is harder than saying yes', duration: '09 min', outcome: 'Sovereigns say no. Everyone else says yes and then regrets it.' },
      { id: 'sld-4', title: 'Tribe integration: building with others scales individual capacity', duration: '08 min', outcome: 'You don\'t live sovereign alone. Tribe = multiplier.' },
    ],
    quiz: {
      question: 'What is the relationship between discipline and the Sovereign Lifestyle?',
      options: [
        'The lifestyle comes after discipline ends',
        'Discipline IS the lifestyle. The structure creates freedom.',
        'Discipline doesn\'t matter for freedom',
      ],
      answer: 'Discipline IS the lifestyle. The structure creates freedom.',
      explanation: 'Sovereigns wake up with purpose. They trade with mandate. They invest with rules. They sleep without worry. That structure = freedom. The chaos of undisciplined living = slavery to impulse.',
    },
  },
  {
    id: 'daily-rituals-protocols',
    index: 'XII',
    title: 'Daily Rituals & Sovereign Protocols',
    summary: 'Your daily ritual is your competitive edge. How you start the day = how you trade the day. Morning audit → market positioning → capital deployment → reflection → rest. Repeat for decades.',
    signal: 'Sovereign Lifestyle Layer 02 — Daily Operation',
    homework: 'Build your 90-day ritual log: morning routine, market audit, capital moves, evening reflection. Track which ritual components correlate with your best trading days.',
    badge: 'Ritual Master',
    lessons: [
      { id: 'drp-1', title: 'The morning audit: 30 minutes that set your entire day\'s trading psychology', duration: '10 min', outcome: 'No email. No news. Only clarity on your capital and mandates.' },
      { id: 'drp-2', title: 'Market positioning: reading dealer intent before 8 AM', duration: '09 min', outcome: 'Market opens. You already know what dealers want to do.' },
      { id: 'drp-3', title: 'Trading the plan: when to execute, when to wait, when to fold', duration: '11 min', outcome: 'Process over outcome. Follow the plan. Let setups come to you.' },
      { id: 'drp-4', title: 'Evening reflection: what worked, what failed, what changes tomorrow?', duration: '08 min', outcome: 'Journaling for clarity, not content. Every evening upgrades tomorrow.' },
    ],
    quiz: {
      question: 'Why does the morning ritual matter more than market timing?',
      options: [
        'It doesn\'t — market timing is everything',
        'Because how you THINK is more important than WHEN you think. Clear mind = clear decisions.',
        'Because rituals are magic',
      ],
      answer: 'Because how you THINK is more important than WHEN you think. Clear mind = clear decisions.',
      explanation: 'Panic traders make bad trades at any time. Clear traders make good trades in any market. Your morning ritual builds the mind. The market just confirms what your mind already decided.',
    },
  },
  {
    id: 'digital-twin-practice',
    index: 'XIII',
    title: 'Digital Twin Practice & On-Chain Asset Tokenization',
    summary: 'Move your first real asset on-chain. Why digital twins matter. How to structure on-chain metadata that attracts secondary capital and vault yields. Tokenize or stay trapped off-chain.',
    signal: 'Regime Flow Layer 01 — Off-Chain to On-Chain',
    homework: 'Design one asset from your portfolio for on-chain Black Card tokenization: what goes into the metadata? Who would secondary-purchase it? What yield structures could it support?',
    badge: 'Digital Twin Creator',
    lessons: [
      { id: 'dtp-1', title: 'Why tokenization works: on-chain permanence beats off-chain opacity', duration: '11 min', outcome: 'Off-chain = permission-dependent. On-chain = permission-proof. Choose permanence.' },
      { id: 'dtp-2', title: 'Metadata that attracts capital: building asset records institutions actually care about', duration: '12 min', outcome: 'Bad metadata = asset sits. Good metadata = capital flows. Data = velocity.' },
      { id: 'dtp-3', title: 'Primary launch and secondary markets: how your Black Card NFT becomes liquid', duration: '10 min', outcome: 'Launch right once. Build narrative. Watch secondary demand prove quality.' },
      { id: 'dtp-4', title: 'Vault integration: connecting your tokenized asset to autonomous Species management', duration: '09 min', outcome: 'Tokenization + mandate + Sophia = 24/7 compounding without you.' },
    ],
    quiz: {
      question: 'What transforms a tokenized asset from a static record into an active capital generator?',
      options: [
        'Just putting it on-chain makes it valuable',
        'Strong metadata that proves quality, invites secondary capital, and opens Species vault routes',
        'Time ',
      ],
      answer: 'Strong metadata that proves quality, invites secondary capital, and opens Species vault routes',
      explanation: 'The on-chain Black Card is only as powerful as what it says. Bulletproof metadata = trusted record = institutional interest = capital flow = compound growth. Poor metadata = ignored NFT.',
    },
  },
  {
    id: 'idea-incubator-marketplace',
    index: 'XIV',
    title: 'Idea Incubator & Internet Real Estate Marketplace',
    summary: 'Your ideas, your content, your network—these have value. Learn to structure, scale, and tokenize ideas through protocols that turn intellectual capital into on-chain assets. Build forever digital real estate.',
    signal: 'Regime Flow Layer 02 — Intellectual Capital & Opportunity',
    homework: 'Identify one of your ideas, signals, or content streams worth monetizing. Design the on-chain structure: what gets tokenized? Who owns it? How does it generate yield?',
    badge: 'Idea Architect',
    lessons: [
      { id: 'iim-1', title: 'Ideas are capital: why your signals, frameworks, and insights are tradeable assets', duration: '11 min', outcome: 'Sovereigns own their ideas on-chain. Employees give ideas away.' },
      { id: 'iim-2', title: 'Internet Real Estate: protocols, communities, platforms as tokenized property', duration: '12 min', outcome: 'Own a piece of networks. Experience revenue sharing at scale.' },
      { id: 'iim-3', title: 'Structuring idea monetization: from private community to public IP token', duration: '10 min', outcome: 'Build in private. Launch in public. Own both the journey and the outcome.' },
      { id: 'iim-4', title: 'The 10-year thesis: building intellectual property that compounds forever', duration: '09 min', outcome: 'Today\'s idea is tomorrow\'s institution. Today\'s content is tomorrow\'s competitive moat.' },
    ],
    quiz: {
      question: 'Why is intellectual capital (ideas, signals, frameworks) worth tokenizing?',
      options: [
        'It isn\'t — only physical assets matter',
        'Because ideas compound faster than capital when structured on-chain. One idea scales to millions. One token scales value infinite.',
        'Because tokens are hype',
      ],
      answer: 'Because ideas compound faster than capital when structured on-chain. One idea scales to millions. One token scales value infinite.',
      explanation: 'Traders make 10x on capital. Architects make 100x on ideas. Ideas don\'t deplete. They compound. On-chain structure = proof of ownership + automated revenue sharing + viral velocity. This is how wealth moves from linear to exponential.',
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

export const sovereignLifestyleManifesto = [
  'THE SOVEREIGN LIFESTYLE',
  'Beyond Productivity. Beyond Escape. The Regime Way.',
  '',
  'WHAT IS THE SOVEREIGN LIFESTYLE?',
  'The Sovereign Lifestyle is not about sleeping in or working from beaches.',
  'It\'s not about abandoning discipline. It\'s not about chasing content perfection.',
  'The Sovereign Lifestyle is the natural result of building capital outside the system.',
  '',
  'When you have no liquidation pressure.',
  'When you have no dependency on the next market cycle.',
  'When you have dry powder and optionality.',
  'You live differently.',
  '',
  'FOUR PILLARS OF SOVEREIGN LIVING',
  '',
  'PILLAR 1: CAPITAL SOVEREIGNTY',
  'You own your time because you own your capital.',
  'No employment trap. No salary dependency. No desperation selling.',
  'Your capital works. You direct it. It compounds.',
  'This is the foundation. Everything else builds on this.',
  '',
  'PILLAR 2: STRATEGIC OPTIONALITY',
  'The Sovereign Lifestyle runs on options.',
  'Options to say no.',
  'Options to move fast when opportunity appears.',
  'Options to invest in people and community without calculating every penny.',
  'Options create freedom. Freedom creates quality.',
  '',
  'PILLAR 3: DISCIPLINED EXECUTION',
  'Sovereignty demands discipline.',
  'You wake up. You build. You learn.',
  'Not because someone forces you. Because you own the outcome.',
  'The Sovereign Lifestyle looks effortless from outside.',
  'It\'s relentless precision from inside.',
  '',
  'PILLAR 4: TRIBE & KINSHIP',
  'You don\'t live sovereign alone.',
  'The regime builds collective sovereignty.',
  'Real relationships. Real coordination. Real capital moving together.',
  'Other sovereigns recognize you. You recognize them.',
  'Tribe elevates individual capacity. Individual success lifts the tribe.',
  '',
  'DAILY RITUALS OF THE SOVEREIGN',
  '',
  'Morning',
  'Audit your capital. Review your mandates. Set intent for where your capital will move today.',
  'No screens. No email. Strategic clarity comes first.',
  '',
  'Work',
  'Your edge in action. Trading, building, creating, or deploying capital into opportunities.',
  'Deep work. High conviction. No performative busywork.',
  '',
  'Coordination',
  'Connect with other sovereigns. Share signals. Build together.',
  'Cadabra feeds. Opportunity calls. Strategy sessions.',
  'One mind is insightful. Many minds are unstoppable.',
  '',
  'Reflection',
  'What worked. What failed. What belongs in the next mandate.',
  'Journaling, not journaling for content.',
  'Clarity, not performance.',
  '',
  'THE SOVEREIGN REFUSES',
  '',
  'Refuses content creation as a substitute for real capital.',
  'Refuses network flaunting as a substitute for real relationships.',
  'Refuses hype as a substitute for real discipline.',
  'Refuses permission-seeking from platforms or authorities.',
  'Refuses to confuse motion with progress.',
  '',
  'THE SOVEREIGN BUILDS',
  '',
  'Builds capital first.',
  'Builds community second.',
  'Builds in public only when it serves the mission, not the ego.',
  'Builds for the decade, not the week.',
  'Builds the kind of wealth that doesn\'t need permission or proof.',
  '',
  'SCALING THROUGH SEASONS',
  '',
  'The Sovereign Lifestyle evolves.',
  '',
  'Year One: Foundation',
  'Build the trading edge. Convert it to capital. Deploy first assets on-chain.',
  'Court is small. It\'s you and your mandate.',
  '',
  'Year Two: Compounding',
  'Capital compounds. Mandates multiply. First secondary markets and credit appear.',
  'Court grows quieter but more intentional.',
  '',
  'Year Three & Beyond',
  'Your capital compounds others. Your tribe handles capital deployment.',
  'You move into protocol strategy, pattern recognition, and vision.',
  'Court becomes council.',
  '',
  'THIS IS NOT A VACATION',
  '',
  'The Sovereign Lifestyle is discipline disguised as freedom.',
  'It\'s the result of compounding done right.',
  'It\'s the natural estate of those who own their capital and their time.',
  'It\'s available to anyone willing to build the foundation.',
  '',
  'SOVEREIGNTY BEGINS INSIDE',
  'Join the regime. Learn the edge. Build the capital.',
  'The lifestyle follows. Guaranteed.'
];

export type Slide = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export const sovereignLifestyleSlideshow: Slide[] = [
  {
    id: 'lifestyle-1',
    title: 'Capital Sovereignty',
    description: 'You own your time because you own your capital. No employment trap. No salary dependency.',
    imageUrl: '/assets/capital-sovereignty.jpg'
  },
  {
    id: 'lifestyle-2',
    title: 'Strategic Optionality',
    description: 'Options to say no. Options to move fast. Options to invest without calculation. Freedom creates quality.',
    imageUrl: '/assets/strategic-optionality.jpg'
  },
  {
    id: 'lifestyle-3',
    title: 'Disciplined Execution',
    description: 'Sovereignty demands precision. The Sovereign Lifestyle looks effortless. It\'s relentless execution inside.',
    imageUrl: '/assets/disciplined-execution.jpg'
  },
  {
    id: 'lifestyle-4',
    title: 'Tribe & Kinship',
    description: 'Collective sovereignty. Real relationships. Real coordination. Tribe lifts individual. Individual strengthens tribe.',
    imageUrl: '/assets/tribe-kinship.jpg'
  },
  {
    id: 'lifestyle-5',
    title: 'Morning Ritual',
    description: 'Audit capital. Review mandates. Set intent. Strategic clarity comes first. No email. Pure focus.',
    imageUrl: '/assets/morning-ritual.jpg'
  },
  {
    id: 'lifestyle-6',
    title: 'Deep Work',
    description: 'Your edge in action. Trading, building, creating. High conviction. No performative motion.',
    imageUrl: '/assets/deep-work.jpg'
  },
  {
    id: 'lifestyle-7',
    title: 'Coordination',
    description: 'Connect with other sovereigns. Share signals. Build together. One mind is insightful. Many minds are unstoppable.',
    imageUrl: '/assets/coordination.jpg'
  },
  {
    id: 'lifestyle-8',
    title: 'Reflection',
    description: 'What worked. What failed. What shifts next. Journaling for clarity, not for content.',
    imageUrl: '/assets/reflection.jpg'
  },
  {
    id: 'lifestyle-9',
    title: 'The Decade Play',
    description: 'Build for ten years, not ten days. Capital that doesn\'t need permission. Wealth that compounds in silence.',
    imageUrl: '/assets/the-decade-play.jpg'
  },
  {
    id: 'lifestyle-10',
    title: 'You\'re Ready',
    description: 'Sovereignty begins inside. Join. Learn. Build. The lifestyle follows naturally.',
    imageUrl: '/assets/you\'re-ready.jpg'
  }
];

export const digitalTwinManifesto = [
  'CREATING YOUR INSTITUTION\'S DIGITAL TWIN ON-CHAIN',
  'Why Every Real Institution Needs an On-Chain Parallel',
  '',
  'WHAT IS A DIGITAL TWIN?',
  'A Digital Twin is the on-chain representation of a real institution, asset, or system.',
  'It\'s not a replica. It\'s a sovereign parallel.',
  'Your institution remains off-chain. Your Digital Twin operates 24/7 on Solana.',
  'Both are connected. Only one is bulletproof.',
  '',
  'THE INSTITUTION PROBLEM TODAY',
  'Real assets are stuck in analog systems.',
  'They move slow. They cost middle-men billions. They need permission at every step.',
  'Creating a Digital Twin solves this.',
  'Your institution becomes globally accessible. Instantly liquid. Forever immutable.',
  '',
  'THE DIGITAL TWIN ARCHITECTURE',
  '',
  'LAYER 1: THE RECORD',
  'Your institution\'s complete operational record lives on-chain.',
  'Ownership structure. Leadership. Asset holdings. Compliance history.',
  'Every update is transparent. Every transaction is permanent.',
  '',
  'LAYER 2: THE GOVERNANCE',
  'Decision-making shifts on-chain.',
  'Multisig control. DAO voting. Community guidance.',
  'Your board can vote from any timezone. Execution is instant.',
  '',
  'LAYER 3: THE CAPITAL',
  'Value moves on-chain as tokenized assets.',
  'Real estate becomes tradeable. Equity becomes fractionable. Assets become liquid.',
  'Your institution can access global capital instantly.',
  '',
  'LAYER 4: THE INTELLIGENCE',
  'The Species AI agents monitor and optimize your Digital Twin.',
  'Rebalancing happens autonomously. Yields optimize continuously.',
  'Your institution scales without hiring.',
  '',
  'WHY NOW?',
  '',
  'The infrastructure exists.',
  'Metaplex enables institutional-grade asset tokenization.',
  'Solana proves that blockchain can be fast, cheap, and reliable.',
  'The Species agents provide autonomous operational capacity.',
  'The only missing piece was leadership with vision.',
  '',
  'YOU ARE THE MISSING PIECE.',
  '',
  'THE DIGITAL TWIN JOURNEY',
  '',
  'PHASE 1: DESIGN',
  'What does your institution look like on-chain?',
  'Which assets tokenize? Which relationships move? What governance structure works?',
  'Design clarity before implementation.',
  '',
  'PHASE 2: TOKENIZATION',
  'Convert your first asset class into an on-chain Black Card.',
  'Test the system with real capital. Learn from the live interaction.',
  'Adjust mandates and governance based on live data.',
  '',
  'PHASE 3: SCALING',
  'Build a full portfolio of Digital Twin assets.',
  'Increase governance complexity as scale demands.',
  'Introduce autonomous agent management and Species oversight.',
  '',
  'PHASE 4: MASTERY',
  'Your institution operates 50% off-chain, 50% on-chain.',
  'Each system strengthens the other.',
  'You command both. You own both. You compound from both.',
  '',
  'THE DIGITAL TWIN ADVANTAGE',
  '',
  'Speed',
  'Decisions that took weeks can be executed in seconds.',
  'Global capital settlement without intermediaries.',
  'Real-time asset management across all timezones.',
  '',
  'Cost',
  'No expensive custodians. No settlement fees. No permission delays.',
  'Your margin improves. Your capital compounds faster.',
  '',
  'Optionality',
  'Your institution becomes programmable.',
  'New capital routes appear. New yield structures become possible.',
  'Flexibility your competitors can\'t match.',
  '',
  'Permanence',
  'Every record is immutable. Every decision is auditable.',
  'Compliance becomes transparent. Trust becomes provable.',
  'Your institution gains credibility at scale.',
  '',
  'THE TEAMS LEADING THIS MOVEMENT',
  'Sovereign Regime members are already building Digital Twins.',
  'Real estate portfolios. Trading desks. Family offices. Private enterprises.',
  'Each one is learning. Each one is pushing the boundaries.',
  'You\'re not pioneering alone. You\'re joining a movement.',
  '',
  'YOUR NEXT STEP',
  'Design your institution\'s Digital Twin.',
  'What part of your operation moves on-chain first?',
  'Start small. Learn. Scale relentlessly.',
  'The future belongs to those who can operate both worlds at once.'
];

export const digitalTwinSlideshow: Slide[] = [
  {
    id: 'digital-twin-1',
    title: 'What Is A Digital Twin?',
    description: 'On-chain representation of your real institution. A sovereign parallel that operates 24/7 on Solana.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-2',
    title: 'The Institution Problem',
    description: 'Real assets stuck in slow analog systems. Expensive. Require permission. Need intermediaries at every step.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-3',
    title: 'Layer 1: The Record',
    description: 'Your institution\'s complete operational record lives on-chain. Transparent. Permanent. Immutable.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-4',
    title: 'Layer 2: Governance',
    description: 'Decision-making shifts on-chain. Multisig control. DAO voting. Instant execution from any timezone.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-5',
    title: 'Layer 3: Capital',
    description: 'Value moves on-chain as tokenized assets. Your institution accesses global capital instantly.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-6',
    title: 'Layer 4: Intelligence',
    description: 'Species AI agents monitor and optimize your Digital Twin. Autonomous scaling without hiring.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-7',
    title: 'Phase 1: Design',
    description: 'What does your institution look like on-chain? Which assets tokenize? Which relationships move?',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-8',
    title: 'Phase 2: Tokenization',
    description: 'Convert your first asset class to an on-chain Black Card. Test with real capital. Learn and adjust.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-9',
    title: 'Phase 3: Scaling',
    description: 'Build full portfolio of Digital Twin assets. Increase governance complexity. Introduce autonomous management.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-10',
    title: 'Phase 4: Mastery',
    description: 'Institution operates 50% off-chain, 50% on-chain. Each system strengthens the other.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-11',
    title: 'The Digital Twin Advantage',
    description: 'Speed, cost reduction, unprecedented optionality, and permanent immutable records. Your competitors can\'t match.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  },
  {
    id: 'digital-twin-12',
    title: 'Your Next Step',
    description: 'Design your Digital Twin. What part moves on-chain first? Start small. Learn. Scale relentlessly.',
    imageUrl: '/assets/digital-twin-graphic.jpg'
  }
];

export const regimeVideos = [
  {
    id: 'video-1',
    title: 'Sovereign Regime Overview',
    description: 'The complete vision: Masters NFT, BlackBox, Sophia Vaults, The Species, ALLURE, and Spatial Protocol.',
    thumbnailUrl: 'https://img.youtube.com/vi/G0LTj8OavRc/maxresdefault.jpg',
    videoUrl: '/assets/Sovereign%20Regime%20Overview.mp4',
    youtubeId: 'G0LTj8OavRc',
    duration: '12:34'
  },
  {
    id: 'video-2',
    title: 'Academy Curriculum',
    description: 'Five modules. The complete trading edge and sovereign finance mastery.',
    thumbnailUrl: 'https://img.youtube.com/vi/CEvd2dLkF0Y/maxresdefault.jpg',
    videoUrl: '/assets/Sovereign%20Regime%20Academy.mp4',
    youtubeId: 'CEvd2dLkF0Y',
    duration: '5:47'
  },
  {
    id: 'video-3',
    title: 'Digital Twin Architecture',
    description: 'Why every institution needs an on-chain parallel. The backbone. The advantage.',
    thumbnailUrl: 'https://img.youtube.com/vi/GoVfkuFesH0/maxresdefault.jpg',
    videoUrl: '/assets/Institutional%20Digital%20Twin.mp4',
    youtubeId: 'GoVfkuFesH0',
    duration: '8:22'
  },
  {
    id: 'video-4',
    title: 'Sovereign Lifestyle',
    description: 'Beyond productivity. The natural result of building capital outside the system.',
    thumbnailUrl: 'https://img.youtube.com/vi/tGh21MrDlaw/maxresdefault.jpg',
    videoUrl: '/assets/The%20Sovereign%20Lifestyle.mp4',
    youtubeId: 'tGh21MrDlaw',
    duration: '6:15'
  } 
];
