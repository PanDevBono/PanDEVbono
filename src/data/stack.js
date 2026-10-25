// Programming Languages Logos
import javascriptLogo from '../../public/img/stack/programming-languages/javascript.png'
import typescriptLogo from '../../public/img/stack/programming-languages/typescript.png'
import pythonLogo from '../../public/img/stack/programming-languages/python.png'
import javaLogo from '../../public/img/stack/programming-languages/java.png'
import phpLogo from '../../public/img/stack/programming-languages/php.svg'
// Cloud & Edge Logos
import awsLogo from '../../public/img/stack/infrastructure-data/aws.png'
import gcpLogo from '../../public/img/stack/cloud-edge/gcp.svg'
import cloudflareLogo from '../../public/img/stack/cloud-edge/cloudflare.svg'
// Infrastructure & Data Logos
import mysqlLogo from '../../public/img/stack/infrastructure-data/mysql.png'
import postgresqlLogo from '../../public/img/stack/infrastructure-data/postgresql.png'
import redisLogo from '../../public/img/stack/infrastructure-data/redis.png'
import elasticSearchLogo from '../../public/img/stack/infrastructure-data/elastic-search.png'
// Version Control and Editors Logos
import githubLogo from '../../public/img/stack/version-control-editors/github.png'
import visualStudioCodeLogo from '../../public/img/stack/version-control-editors/visual-studio-code.png'
import cursorAiLogo from '../../public/img/stack/version-control-editors/cursor-ai.png'
import gitlabLogo from '../../public/img/stack/version-control-editors/gitlab.png'
import bitbucketLogo from '../../public/img/stack/version-control-editors/bitbucket.webp'
// Project Management & Documentation Logos
import notionLogo from '../../public/img/stack/project-management-documentation/notion.webp'
import jiraLogo from '../../public/img/stack/project-management-documentation/jira.png'
import airtableLogo from '../../public/img/stack/project-management-documentation/airtable.png'
import trelloLogo from '../../public/img/stack/project-management-documentation/trello.png'
import docusaurusLogo from '../../public/img/stack/project-management-documentation/docusaurus.png'
import swaggerLogo from '../../public/img/stack/project-management-documentation/swagger.png'
import openapiLogo from '../../public/img/stack/project-management-documentation/openapi.svg'
// Design Tools Logos
import figmaLogo from '../../public/img/stack/design-tools/figma.png'
import canvaLogo from '../../public/img/stack/design-tools/canva.png'
// Frontend Logos
import reactLogo from '../../public/img/stack/frontend/react.png'
import angularLogo from '../../public/img/stack/frontend/angular.png'
import nextjsLogo from '../../public/img/stack/frontend/nextjs.png'
// Backend Logos
import nodejsLogo from '../../public/img/stack/backend/nodejs.svg'
import firebaseLogo from '../../public/img/stack/backend/firebase.png'
import rubyOnRailsLogo from '../../public/img/stack/backend/ruby-on-rails.png'
// AI Tools Logos
import anthropicLogo from '../../public/img/stack/ai-development-helpers/anthropic.png'
import claudeLogo from '../../public/img/stack/ai-development-helpers/claude.svg'
import openaiLogo from '../../public/img/stack/ai-development-helpers/openai.png'
import geminiLogo from '../../public/img/stack/ai-development-helpers/gemini.svg'
import copilotLogo from '../../public/img/stack/ai-development-helpers/copilot.png'
import huggingfaceLogo from '../../public/img/stack/ai-development-helpers/huggingface.svg'
import langchainLogo from '../../public/img/stack/ai-development-helpers/langchain.svg'
import ollamaLogo from '../../public/img/stack/ai-development-helpers/ollama.svg'

export const aiTools = [
  { name: 'Claude', logo: claudeLogo, description: 'Anthropic models for coding, writing and agents' },
  { name: 'Anthropic API', logo: anthropicLogo, description: 'Claude models integrated into your products' },
  { name: 'OpenAI', logo: openaiLogo, description: 'ChatGPT and GPT models for teams and apps' },
  { name: 'Gemini', logo: geminiLogo, description: 'Google AI models across Workspace and GCP' },
  { name: 'GitHub Copilot', logo: copilotLogo, description: 'AI pair programmer for code suggestions' },
  { name: 'Cursor', logo: cursorAiLogo, description: 'AI-first code editor for faster delivery' },
  { name: 'Hugging Face', logo: huggingfaceLogo, description: 'Open-source models, datasets and inference' },
  { name: 'LangChain', logo: langchainLogo, description: 'Framework for LLM apps, RAG and agents' },
  { name: 'Ollama', logo: ollamaLogo, description: 'Private, self-hosted local LLMs' },
];

export const stackCategories = [
  {
    id: 'cloud',
    title: 'Cloud & Edge',
    subtitle: 'AWS · GCP · Cloudflare',
    description: 'Multi-cloud infrastructure, edge networking, DNS, CDN and security for fast, resilient applications.',
    tools: [
      { name: 'AWS', logo: awsLogo, description: 'Leading cloud platform for scalable infrastructure' },
      { name: 'Google Cloud', logo: gcpLogo, description: 'GCP compute, data and AI services' },
      { name: 'Cloudflare', logo: cloudflareLogo, description: 'Edge network, CDN, DNS, Workers and security' },
    ],
  },
  {
    id: 'ai',
    wide: true,
    title: 'AI Tools',
    subtitle: 'Managed & Integrated',
    description: 'We set up, integrate and manage the AI tools your team and your product rely on.',
    tools: aiTools,
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core Development',
    description: 'Versatile languages for building robust applications across the stack.',
    tools: [
      { name: 'JavaScript', logo: javascriptLogo, description: 'Dynamic programming language for web development' },
      { name: 'TypeScript', logo: typescriptLogo, description: 'Typed superset of JavaScript for scalable applications' },
      { name: 'Python', logo: pythonLogo, description: 'Versatile language for web, data science, and automation' },
      { name: 'Java', logo: javaLogo, description: 'Object-oriented language for enterprise applications' },
      { name: 'PHP', logo: phpLogo, description: 'Server-side scripting language for web development' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Storage',
    subtitle: 'Databases & Search',
    description: 'Relational, in-memory and search engines powering data-intensive applications.',
    tools: [
      { name: 'MySQL', logo: mysqlLogo, description: 'Popular open-source relational database' },
      { name: 'PostgreSQL', logo: postgresqlLogo, description: 'Advanced open-source database with rich features' },
      { name: 'Redis', logo: redisLogo, description: 'In-memory data structure store for caching' },
      { name: 'Elasticsearch', logo: elasticSearchLogo, description: 'Distributed search and analytics engine' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web Experiences',
    description: 'Engaging, fast user interfaces built with modern frameworks.',
    tools: [
      { name: 'React', logo: reactLogo, description: 'Popular library for building user interfaces' },
      { name: 'Angular', logo: angularLogo, description: 'Full-featured framework for web applications' },
      { name: 'Next.js', logo: nextjsLogo, description: 'React framework for production-grade applications' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs & Services',
    description: 'Powerful server-side applications with diverse languages and frameworks.',
    tools: [
      { name: 'Node.js', logo: nodejsLogo, description: 'JavaScript runtime for server-side development' },
      { name: 'Firebase', logo: firebaseLogo, description: 'Platform for building web and mobile applications' },
      { name: 'Ruby on Rails', logo: rubyOnRailsLogo, description: 'Framework for rapid web development' },
    ],
  },
  {
    id: 'devenv',
    wide: true,
    title: 'Development Environment',
    subtitle: 'Version Control & Editors',
    description: 'Modern tooling for efficient collaboration and coding.',
    tools: [
      { name: 'GitHub', logo: githubLogo, description: 'Leading platform for code hosting and collaboration' },
      { name: 'GitLab', logo: gitlabLogo, description: 'DevOps platform for the full software lifecycle' },
      { name: 'Bitbucket', logo: bitbucketLogo, description: 'Git solution for professional teams' },
      { name: 'VS Code', logo: visualStudioCodeLogo, description: 'Powerful and extensible code editor' },
      { name: 'Cursor', logo: cursorAiLogo, description: 'AI-powered code editor for enhanced productivity' },
    ],
  },
  {
    id: 'pm',
    wide: true,
    title: 'Project Management',
    subtitle: 'Organization & Docs',
    description: 'Tools for project tracking, documentation, and team collaboration.',
    tools: [
      { name: 'Notion', logo: notionLogo, description: 'All-in-one workspace for notes and collaboration' },
      { name: 'Jira', logo: jiraLogo, description: 'Project management tool for agile teams' },
      { name: 'Airtable', logo: airtableLogo, description: 'Flexible platform for organizing work' },
      { name: 'Trello', logo: trelloLogo, description: 'Visual tool for managing projects and tasks' },
      { name: 'Docusaurus', logo: docusaurusLogo, description: 'Tool for building documentation websites' },
      { name: 'Swagger', logo: swaggerLogo, description: 'API documentation and design tools' },
      { name: 'OpenAPI', logo: openapiLogo, description: 'Standard for describing RESTful APIs' },
    ],
  },
  {
    id: 'design',
    title: 'Design & UX',
    subtitle: 'Creative Tools',
    description: 'Professional design tools for beautiful and intuitive interfaces.',
    tools: [
      { name: 'Figma', logo: figmaLogo, description: 'Collaborative interface design tool' },
      { name: 'Canva', logo: canvaLogo, description: 'Easy-to-use design platform for graphics' },
    ],
  },
];
