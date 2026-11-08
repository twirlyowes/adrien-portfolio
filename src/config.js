// Edit your links and details here in one place.
export const site = {
  name: 'Adrien',
  alias: 'Twirly',
  handle: '@twirlyowes',
  location: 'Mumbai, India',
  tagline:
    'Developer, creator and technology enthusiast who enjoys building useful things, experimenting with technology and learning through real projects.',
}

export const links = {
  github: 'https://github.com/twirlyowes',
  fridayRepo: 'https://github.com/twirlyowes/F.R.I.D.A.Y-V-2',
  fridayDashboard: 'https://dashboard-friday-v2.onrender.com',
  fridayLegal: 'https://twirlyowes.github.io/friday-v2-legal/',
  fridayLegalRepo: 'https://github.com/twirlyowes/friday-v2-legal',
  discord: 'luvher4lyf',
  discordServer: '',
  email: 'twirlyowes@gmail.com',
}

export const projects = [
  {
    title: 'FRIDAY V2',
    status: 'Active',
    description:
      'A multipurpose Discord bot built with Node.js, discord.js v14 and Firebase / Firestore.',
    features: ['Moderation', 'Anti-nuke protection', 'Verification & captcha', 'ModMail', 'Temporary voice channels', 'Per-server configuration'],
    tech: ['Node.js', 'discord.js v14', 'Firestore'],
    github: links.fridayRepo,
    live: '',
  },
  {
    title: 'FRIDAY Dashboard',
    status: 'Live',
    description: 'A web dashboard for configuring and managing FRIDAY servers with Discord OAuth2.',
    features: ['Server selection', 'Moderation settings', 'Security controls'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Discord OAuth2'],
    github: '',
    live: links.fridayDashboard,
  },
  {
    title: 'FRIDAY Legal',
    status: 'Live',
    description: 'Terms of Service and Privacy Policy website for FRIDAY.',
    features: ['Terms of Service', 'Privacy Policy'],
    tech: ['GitHub Pages'],
    github: links.fridayLegalRepo,
    live: links.fridayLegal,
  },
  {
    title: 'FRIDAY Premium',
    status: 'Concept',
    description: 'An evolving premium subscription concept for FRIDAY. Not a launched service.',
    features: ['Free / premium feature split', 'Server-based activation', 'Owner-only management'],
    tech: ['Firestore'],
    github: '',
    live: '',
  },
]

export const techStack = {
  'Used in projects': ['JavaScript', 'HTML', 'CSS', 'Node.js', 'discord.js v14', 'Firebase', 'Firestore'],
  'Tools & hosting': ['Git', 'GitHub', 'GitHub Actions', 'Render', 'GitHub Pages'],
  'Currently learning': ['Python'],
}

export const setup = [
  ['Processor', 'AMD Ryzen 7'],
  ['Graphics', 'NVIDIA RTX 3050 Laptop GPU (6GB VRAM)'],
  ['Memory', '16GB DDR5'],
  ['Storage', '512GB SSD'],
  ['OS', 'Windows'],
]
