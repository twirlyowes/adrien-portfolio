// Edit your identity, project links, skills and setup details here.
export const site = {
  name: 'ADRIEN',
  alias: 'Twirly',
  handle: '@twirlyowes',
  location: 'Mumbai, India',
  tagline: 'A curious creator learning by building useful things, experimenting with technology and improving through real projects.',
}

export const links = {
  github: 'https://github.com/twirlyowes',
  fridayRepo: 'https://github.com/twirlyowes/F.R.I.D.A.Y-V-2',
  fridayDashboard: 'https://dashboard-friday-v2.onrender.com',
  fridayLegal: 'https://twirlyowes.github.io/friday-v2-legal/',
  fridayLegalRepo: 'https://github.com/twirlyowes/friday-v2-legal',
  discordHandle: 'luvher4lyf',
  discordServer: '',
  email: 'twirlyowes@gmail.com',
}

export const projects = [
  {
    title: 'FRIDAY V2',
    status: 'Active',
    description: 'A multipurpose Discord bot built with Node.js, discord.js v14 and Firebase / Firestore. Its evolving feature set includes moderation, server protection, verification, ModMail and temporary voice channels.',
    features: ['Moderation', 'Anti-nuke protection', 'Verification & captcha', 'ModMail', 'Temporary voice channels', 'Per-server configuration'],
    tech: ['Node.js', 'discord.js v14', 'Firebase', 'Firestore'],
    github: links.fridayRepo,
    live: '',
  },
  {
    title: 'FRIDAY Dashboard',
    status: 'Live',
    description: 'A web dashboard for configuring and managing FRIDAY servers, with Discord OAuth2 authentication.',
    features: ['Server selection', 'Moderation settings', 'Security controls'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Discord OAuth2'],
    github: '',
    live: links.fridayDashboard,
  },
  {
    title: 'FRIDAY Legal',
    status: 'Live',
    description: 'The public Terms of Service and Privacy Policy site supporting the FRIDAY project.',
    features: ['Terms of Service', 'Privacy Policy'],
    tech: ['GitHub Pages'],
    github: links.fridayLegalRepo,
    live: links.fridayLegal,
  },
  {
    title: 'FRIDAY Premium',
    status: 'Concept — not launched',
    description: 'An evolving subscription concept. This is not a live or publicly available service.',
    features: ['Exploratory free / premium feature split', 'Potential server-based activation'],
    tech: ['Concept'],
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
  ['Graphics', 'NVIDIA RTX 3050 Laptop GPU · 6GB'],
  ['Memory', '16GB DDR5'],
  ['Storage', '512GB SSD'],
  ['Operating system', 'Windows'],
]
