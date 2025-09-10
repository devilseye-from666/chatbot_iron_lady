// Structured knowledge derived from the user's technical report

export const programMatrix = [
  {
    name: 'Leadership Essentials Program',
    targetAudience: 'Women feeling pressure to "balance," dealing with politics and bias',
    duration: '4 Weeks (prep + 2 full-day live Zoom + 4 weekly reviews)',
    keyTactics: ['Shameless Pitching', 'Strategic Maximization', 'Accountability system', 'Buddy & mentor support'],
    costStatus: 'Not Publicly Listed',
    communityMembership: '1 Year',
  },
  {
    name: '100 Board Members Program',
    targetAudience: 'Mid-level professionals (7+ years experience) seeking fast-track growth',
    duration: '6 Months (six half-day live sessions over 4 months + 2 months practice)',
    keyTactics: ['Influencing through Extreme Signalling', 'Board-level Strategy', 'Case studies', 'Mock pitches'],
    costStatus: '₹75,000 + GST',
    communityMembership: '1 Year',
  },
  {
    name: 'Master of Business Warfare',
    targetAudience: 'Senior professionals committed to C-suite; aim for 1+ Crore income band',
    duration: '1 Year (bi-weekly sessions)',
    keyTactics: ['Cutting-edge Business Warfare Tactics', 'Competitor- and market-centric approach'],
    costStatus: 'Not Publicly Listed / Application Required',
    communityMembership: 'Not Specified',
  },
]

export const glossary = [
  {
    term: 'Business War Tactics',
    definition:
      'Proprietary methodology to help women "Win without even Fighting" by navigating corporate biases and politics.',
    programs: ['All Programs'],
  },
  {
    term: 'Shameless Pitching',
    definition: 'Tactic to unapologetically pitch ambitions and achievements.',
    programs: ['Leadership Essentials Program'],
  },
  {
    term: 'Maximization vs. Balance',
    definition:
      'Reframes work-life "balance" toward strategic maximization of goals and resources.',
    programs: ['Leadership Essentials Program'],
  },
  {
    term: 'Differentiated Leadership Brand',
    definition: 'Build a unique leadership brand to stand out as a top leader.',
    programs: ['Leadership Essentials Program', '100 Board Members Program'],
  },
  {
    term: 'Influencing through Extreme Signalling',
    definition: 'Advanced tactic for influence at the highest levels of management.',
    programs: ['100 Board Members Program'],
  },
]

export const mentorsAndTeam = {
  foundersAndLeads:
    'Founding team has 120+ years combined leadership across global companies. Rajesh Bhat (visionary entrepreneur, 3 startups; challenges norms), Suvarna Hegde (expert on Business War Tactics for Women, tech innovation).',
  notableMentors:
    'Simon (former global CEO incl. Aviva, Singapore). Sridhar (turn-around specialist for billion-dollar firms like Bajaj Auto; expertise in Bing-Fa and Art of War).',
}

export const ecosystem =
  'Iron Lady ecosystem: Non-judgmental community of 78,000+ women leaders; shares ambitions, celebrates wins, exchanges tactics. 1-year community membership included with Leadership Essentials and 100 Board Members.'

export const pricingNotes = [
  'Leadership Essentials: full program price not publicly listed. Masterclass offered at ₹129 (offer) from ₹400.',
  '100 Board Members: ₹75,000 + GST for six months, includes 1-year community.',
  'Master of Business Warfare: price not public; application required.',
]

export const testimonials = [
  { name: 'Shalet Roy', program: 'Leadership Essentials Program', quote: 'Very intensive and useful; helpful for women returning to work.' },
  { name: 'Bharti Mohan', program: 'Iron Lady (general)', quote: 'Used principles to win my UN Ambassador Crown.' },
  { name: 'Pushpalatha M.S.', program: 'Iron Lady (general)', quote: 'Helped me and my co-founder scale our operations.' },
  { name: 'Minal Bhagat', program: 'Iron Lady (general)', quote: 'Already being shameless and achieving breakthroughs.' },
  { name: 'Nandita Roy Baul', program: 'Iron Lady Leadership Program', quote: 'Empowered me to believe in myself.' },
  { name: 'Dr. Darshana Vithalani', program: 'Leadership Essentials Program', quote: 'Unique approach to eliminating unempowering beliefs.' },
]

export const exclusions = [
  'Exclude unrelated organizations like SVA (Student Veterans of America) and ISS (International School Suva).',
  'Exclude ironladyrules.com (different programs/pricing in USD).',
  'Primary source of truth: iamironlyady.com (Iron Lady official).',
]

const sectionBlocks = [
  {
    id: 'strategy',
    title: 'Strategic Overview & Brand Architecture',
    text:
      'Iron Lady positions as strategic partner with Business War Tactics ideology to help women win without fighting; confronts stereotypes, biases, and politics; founder Rajesh Bhat’s public persona amplifies non-conformity and strategic disruption.',
    keywords: ['strategy', 'brand', 'business war tactics', 'bias', 'politics', 'win without fighting', 'rajesh bhat'],
  },
  {
    id: 'mentors',
    title: 'Founding Team and Mentors',
    text: mentorsAndTeam.foundersAndLeads + ' ' + mentorsAndTeam.notableMentors,
    keywords: ['mentors', 'founders', 'simon', 'sridhar', 'bing-fa', 'art of war', 'aviva', 'bajaj'],
  },
  {
    id: 'ecosystem',
    title: 'Community & Ecosystem',
    text: ecosystem,
    keywords: ['community', 'membership', '78,000', 'ecosystem'],
  },
  {
    id: 'essentials',
    title: 'Leadership Essentials Program',
    text:
      'Target: women facing balance pressure and politics. 4-week structure with prep, buddy/mentor, two full-day Zoom sessions (9am-7pm), and four weekly reviews; daily 10-min activities; focus on shameless pitching, maximization, brand.',
    keywords: ['essentials', '4 weeks', 'zoom', 'buddy', 'mentor', 'shameless pitching', 'maximization'],
  },
  {
    id: 'board',
    title: '100 Board Members Program',
    text:
      'Target: mid-level (7+ yrs) seeking fast-track growth. 6 months: six half-day live sessions across 4 months + 2 months practice; case studies, mock pitches, closed-room sessions; cohort ~50; bi-weekly practice.',
    keywords: ['board', '100 board members', '6 months', 'half-day', 'mock pitches', 'closed room', 'signalling'],
  },
  {
    id: 'mbw',
    title: 'Master of Business Warfare',
    text:
      'Target: senior professionals aiming C-suite and 1+ crore. 1-year duration, bi-weekly; competitor- and market-centric; application required; price not public.',
    keywords: ['master of business warfare', 'c-suite', '1 crore', 'bi-weekly', 'application', 'price'],
  },
]

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 3)
}

export function retrieveRelevant(question, limit = 5) {
  const qTokens = tokenize(question)
  const scoreBlock = (block) => {
    const kw = block.keywords || []
    let score = 0
    for (const t of qTokens) {
      if (kw.includes(t)) score += 3
      if (block.text.toLowerCase().includes(t)) score += 1
      if (block.title.toLowerCase().includes(t)) score += 1
    }
    return score
  }

  const blocks = [...sectionBlocks]
  // Also synthesize table/glossary snippets
  blocks.push({
    id: 'matrix',
    title: 'Program Matrix',
    text: JSON.stringify(programMatrix),
    keywords: ['duration', 'cost', 'price', 'program', 'target', 'membership'],
  })
  blocks.push({
    id: 'glossary',
    title: 'Glossary',
    text: JSON.stringify(glossary),
    keywords: ['definition', 'term', 'shameless', 'maximization', 'brand', 'signalling'],
  })
  blocks.push({
    id: 'testimonials',
    title: 'Testimonials',
    text: JSON.stringify(testimonials),
    keywords: ['testimonial', 'proof', 'success', 'un ambassador'],
  })
  blocks.push({
    id: 'pricing',
    title: 'Pricing Notes',
    text: pricingNotes.join(' '),
    keywords: ['price', 'pricing', 'cost', 'fees', 'gst'],
  })

  const scored = blocks
    .map((b) => ({ b, s: scoreBlock(b) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((x) => `# ${x.b.title}\n${x.b.text}`)

  return scored
}


