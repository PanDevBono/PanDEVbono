// Programming Languages Logos
import javascriptLogo from '../../public/img/stack/programming-languages/javascript.png'
import typescriptLogo from '../../public/img/stack/programming-languages/typescript.png'
import pythonLogo from '../../public/img/stack/programming-languages/python.png'
import javaLogo from '../../public/img/stack/programming-languages/java.png'
import phpLogo from '../../public/img/stack/programming-languages/php.svg'
import rubyLogo from '../../public/img/stack/programming-languages/ruby.png'
// Platforms Logos
import webLogo from '../../public/img/stack/platforms/web.svg'
import androidLogo from '../../public/img/stack/platforms/android.svg'
import iosLogo from '../../public/img/stack/platforms/ios.svg'
import windowsLogo from '../../public/img/stack/platforms/windows.svg'
import macosLogo from '../../public/img/stack/platforms/macos.svg'
import linuxLogo from '../../public/img/stack/platforms/linux.svg'
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
import planeLogo from '../../public/img/stack/project-management-documentation/plane.png'
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
  { id: 'claude', name: 'Claude', logo: claudeLogo },
  { id: 'anthropic', name: 'Anthropic API', logo: anthropicLogo },
  { id: 'openai', name: 'OpenAI', logo: openaiLogo },
  { id: 'gemini', name: 'Gemini', logo: geminiLogo },
  { id: 'copilot', name: 'GitHub Copilot', logo: copilotLogo },
  { id: 'cursor', name: 'Cursor', logo: cursorAiLogo },
  { id: 'huggingface', name: 'Hugging Face', logo: huggingfaceLogo },
  { id: 'langchain', name: 'LangChain', logo: langchainLogo },
  { id: 'ollama', name: 'Ollama', logo: ollamaLogo },
];

export const platforms = [
  { id: 'web', name: 'Web', logo: webLogo },
  { id: 'android', name: 'Android', logo: androidLogo },
  { id: 'ios', name: 'iOS', logo: iosLogo },
  { id: 'windows', name: 'Windows', logo: windowsLogo },
  { id: 'macos', name: 'macOS', logo: macosLogo },
  { id: 'linux', name: 'Linux', logo: linuxLogo },
];

// Order and `wide` are chosen so every row of the 3-column grid fills up.
export const stackCategories = [
  {
    id: 'platforms',
    wide: true,
    tools: platforms,
  },
  {
    id: 'cloud',
    tools: [
      { id: 'aws', name: 'AWS', logo: awsLogo },
      { id: 'gcp', name: 'Google Cloud', logo: gcpLogo },
      { id: 'cloudflare', name: 'Cloudflare', logo: cloudflareLogo },
    ],
  },
  {
    id: 'ai',
    wide: true,
    tools: aiTools,
  },
  {
    id: 'data',
    tools: [
      { id: 'mysql', name: 'MySQL', logo: mysqlLogo },
      { id: 'postgresql', name: 'PostgreSQL', logo: postgresqlLogo },
      { id: 'redis', name: 'Redis', logo: redisLogo },
      { id: 'elasticsearch', name: 'Elasticsearch', logo: elasticSearchLogo },
    ],
  },
  {
    id: 'languages',
    wide: true,
    tools: [
      { id: 'javascript', name: 'JavaScript', logo: javascriptLogo },
      { id: 'typescript', name: 'TypeScript', logo: typescriptLogo },
      { id: 'python', name: 'Python', logo: pythonLogo },
      { id: 'ruby', name: 'Ruby', logo: rubyLogo },
      { id: 'java', name: 'Java', logo: javaLogo },
      { id: 'php', name: 'PHP', logo: phpLogo },
    ],
  },
  {
    id: 'frontend',
    tools: [
      { id: 'react', name: 'React', logo: reactLogo },
      { id: 'angular', name: 'Angular', logo: angularLogo },
      { id: 'nextjs', name: 'Next.js', logo: nextjsLogo },
    ],
  },
  {
    id: 'backend',
    tools: [
      { id: 'nodejs', name: 'Node.js', logo: nodejsLogo },
      { id: 'firebase', name: 'Firebase', logo: firebaseLogo },
      { id: 'rails', name: 'Ruby on Rails', logo: rubyOnRailsLogo },
    ],
  },
  {
    id: 'devenv',
    wide: true,
    tools: [
      { id: 'github', name: 'GitHub', logo: githubLogo },
      { id: 'gitlab', name: 'GitLab', logo: gitlabLogo },
      { id: 'bitbucket', name: 'Bitbucket', logo: bitbucketLogo },
      { id: 'vscode', name: 'VS Code', logo: visualStudioCodeLogo },
      { id: 'cursor', name: 'Cursor', logo: cursorAiLogo },
    ],
  },
  {
    id: 'pm',
    wide: true,
    tools: [
      { id: 'notion', name: 'Notion', logo: notionLogo },
      { id: 'jira', name: 'Jira', logo: jiraLogo },
      { id: 'plane', name: 'Plane', logo: planeLogo },
      { id: 'airtable', name: 'Airtable', logo: airtableLogo },
      { id: 'trello', name: 'Trello', logo: trelloLogo },
      { id: 'docusaurus', name: 'Docusaurus', logo: docusaurusLogo },
      { id: 'swagger', name: 'Swagger', logo: swaggerLogo },
      { id: 'openapi', name: 'OpenAPI', logo: openapiLogo },
    ],
  },
  {
    id: 'design',
    tools: [
      { id: 'figma', name: 'Figma', logo: figmaLogo },
      { id: 'canva', name: 'Canva', logo: canvaLogo },
    ],
  },
];
