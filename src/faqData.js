// FAQ intents and answers for Iron Lady's leadership programs (using actual data)
export const faqIntents = [
  {
    id: 'programs',
    patterns: [
      'what programs do you offer',
      'programs do you have',
      'courses do you offer',
      'program list',
      'offerings',
      'programs',
    ],
    answer:
      'Iron Lady offers three main leadership programs for women:\n\n1) Leadership Essentials Program: For women facing pressure to "balance" and dealing with politics and bias.\n2) 100 Board Members Program: For mid-level professionals (7+ years experience) seeking fast-track growth.\n3) Master of Business Warfare: For senior professionals committed to C-suite and aiming for 1+ Crore income band.\n\nAll programs include access to a 78,000+ member women’s leadership community.',
  },
  {
    id: 'duration',
    patterns: [
      'how long is the program',
      'program duration',
      'duration of the program',
      'length of course',
      'how many weeks',
      'how many months',
    ],
    answer:
      'Program durations:\n- Leadership Essentials Program: 4 weeks (includes prep, 2 full-day live Zoom sessions, and 4 weekly reviews)\n- 100 Board Members Program: 6 months (six half-day live sessions over 4 months + 2 months practice)\n- Master of Business Warfare: 1 year (bi-weekly sessions)',
  },
  {
    id: 'mode',
    patterns: [
      'is the program online or offline',
      'online or offline',
      'program mode',
      'virtual or in person',
      'remote or onsite',
      'online',
      'offline',
    ],
    answer:
      'Programs are primarily delivered online via live, interactive Zoom sessions. Some cohorts or events may include optional in-person elements.',
  },
  {
    id: 'certificate',
    patterns: [
      'are certificates provided',
      'certificate',
      'do i get a certificate',
      'certification',
    ],
    answer:
      'Yes. Participants who complete the program requirements receive a verified Iron Lady certificate of completion.',
  },
  {
    id: 'mentors',
    patterns: [
      'who are the mentors',
      'who are the coaches',
      'mentors',
      'coaches',
      'who teaches',
      'instructors',
    ],
    answer:
      'Programs are led by a founding team with 120+ years of global leadership experience, including Rajesh Bhat (visionary entrepreneur) and Suvarna Hegde (expert on Business War Tactics for Women). Notable mentors include Simon (former global CEO, Aviva Singapore) and Sridhar (turn-around specialist for billion-dollar firms like Bajaj Auto).',
  },
  {
    id: 'contact',
    patterns: [
      'how can i apply',
      'how do i enroll',
      'application',
      'fees',
      'price',
      'scholarship',
      'contact',
      'email',
    ],
    answer:
      'To apply or inquire about fees and scholarships, please share your email so the team can reach out, or apply via the official Iron Lady admissions page. Some program prices are not publicly listed and may require an application.',
  },
];

export const fallbackAnswer =
  "I didn't quite catch that. Ask me about: programs offered, duration, online/offline mode, certificates, or mentors. You can also ask about application and fees.";
