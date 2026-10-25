const homeStrings = {
  heroBadge: 'Web · Cloud · AI',
  headerTitle: 'Turning ideas into pages',
  headerSubtitle: 'communities into unforgettable stories.',
  headerDescription: 'We are a group of developers who are passionate about creating beautiful, functional, and community oriented websites — deployed on modern cloud infrastructure and powered by AI.',
  ctaPrimary: 'Start a project',
  ctaSecondary: 'Explore our stack',
  contactEmail: 'mailto:pan.dev.bono@gmail.com?subject=I need info about a page creation',

  terminal: {
    title: 'pandevbono — deploy',
    lines: [
      { type: 'command', text: 'pandev init --project your-idea' },
      { type: 'output', text: '✔ Scaffolding Next.js + TypeScript' },
      { type: 'command', text: 'pandev cloud connect aws gcp cloudflare' },
      { type: 'output', text: '✔ Edge network, DNS & CDN configured' },
      { type: 'command', text: 'pandev ai enable claude openai gemini' },
      { type: 'output', text: '✔ AI tools provisioned & managed' },
      { type: 'command', text: 'pandev deploy --prod' },
      { type: 'success', text: '🚀 Live — your community has a home' },
    ],
  },

  servicesLabel: 'services',
  servicesTitle: 'What we build & manage',
  servicesDescription: 'From the first line of code to the infrastructure and AI tools that keep it running.',
  services: [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Fast, accessible, community-oriented websites and web apps built with React, Next.js and Angular.',
    },
    {
      icon: 'cloud',
      title: 'Cloud & Edge',
      description: 'Infrastructure on AWS and Google Cloud, with Cloudflare for DNS, CDN, Workers and protection at the edge.',
    },
    {
      icon: 'bot',
      title: 'AI Tools Management',
      description: 'We choose, set up, integrate and manage the AI tools your team uses — Claude, ChatGPT, Gemini, Copilot and more.',
    },
    {
      icon: 'server',
      title: 'Backend & APIs',
      description: 'Reliable APIs and services with Node.js, Rails and Firebase, backed by SQL, Redis and Elasticsearch.',
    },
    {
      icon: 'palette',
      title: 'Design & UX',
      description: 'Interfaces designed in Figma and Canva that look great and are easy to use.',
    },
    {
      icon: 'kanban',
      title: 'Project & Docs',
      description: 'Clear planning and documentation with Jira, Notion, Swagger and OpenAPI so nothing gets lost.',
    },
  ],

  aiLabel: 'ai',
  aiTitle: 'We manage your AI tools',
  aiDescription: 'AI moves fast. We keep your team on top of it — picking the right tools, wiring them into your workflow and products, and keeping them secure and cost-effective.',
  aiFeatures: [
    { title: 'Setup & onboarding', description: 'Accounts, workspaces, seats and access for your whole team.' },
    { title: 'Integrations', description: 'Connect AI models to your apps, data and internal tools via APIs, RAG and agents.' },
    { title: 'Governance & security', description: 'Usage policies, API key management and privacy-first configurations.' },
    { title: 'Cost & usage control', description: 'Monitor spend and usage so AI stays an investment, not a surprise.' },
  ],

  stackLabel: 'stack',
  stackTitle: 'Tech Stack & Tools',
  stackDescription: 'The technologies and tools that power our solutions.',

  ctaBandTitle: 'Ready to ship your idea?',
  ctaBandDescription: 'Tell us about your project and we will help you build it, host it and power it with AI.',
};

export default homeStrings;
