import Layout from "../components/layout/index";
import Image from 'next/image'
import logo from '../../public/img/logo-horizontal-large.png'
import HomeStrings from '../strings/home';
// Programming Languages Logos
import javascriptLogo from '../../public/img/stack/programming-languages/javascript.png'
import typescriptLogo from '../../public/img/stack/programming-languages/typescript.png'
import pythonLogo from '../../public/img/stack/programming-languages/python.png'
import javaLogo from '../../public/img/stack/programming-languages/java.png'
import phpLogo from '../../public/img/stack/programming-languages/php.svg'
// Infrastructure & Data Logos
import mysqlLogo from '../../public/img/stack/infrastructure-data/mysql.png'
import postgresqlLogo from '../../public/img/stack/infrastructure-data/postgresql.png'
import awsLogo from '../../public/img/stack/infrastructure-data/aws.png'
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
// AI and Development Helpers Logos
import anthropicLogo from '../../public/img/stack/ai-development-helpers/anthropic.png'
import openaiLogo from '../../public/img/stack/ai-development-helpers/openai.png'
import copilotLogo from '../../public/img/stack/ai-development-helpers/copilot.png'


export default function Home() {
  return (
    <Layout pageId="home">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col pt-10 text-center">
          <div className="basis-full">
            <h1 className="text-8xl font-bold">{HomeStrings.headerTitle}</h1>
            <p className="text-4xl mt-4">{HomeStrings.headerSubtitle}</p>
          </div>
        </div>
        
        {/* Logo Section */}
        <div className="flex flex-row">
          <div className="basis-full"></div>
          <div className="basis-full">
            <Image src={logo} alt="PanDEVbono logo" className="logo-image"/>
          </div>
          <div className="basis-full"></div>
        </div>
     
        {/* Description Section */}
        <div className="flex flex-row text-center">
          <div className="basis-full">
            <p className="text-2xl mt-4">{HomeStrings.headerDescription}</p>
          </div>
        </div>
        
        {/* Decorative Divider */}
        <div className="section-divider-container">
          <div className="section-divider-line"></div>
          <div className="section-divider-dot"></div>
          <div className="section-divider-dot"></div>
          <div className="section-divider-dot"></div>
          <div className="section-divider-line"></div>
        </div>
        
        {/* Tech Stack Title */}
        <div className="flex flex-row pt-10">
          <div className="basis-full text-center">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-7xl font-bold">Tech Stack</h2>
              <p className="text-4xl">& Tools</p>
            </div>
            <p className="mt-4">The technologies and tools that power our solutions</p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-stack-grid pt-10">
          {/* Row 1: Programming Languages | Development Environment */}
          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Programming Languages</h3>
              <p className="text-xl">Core Development Languages</p>
            </div>
            <p className="mt-2 text-muted-foreground">Versatile and powerful programming languages for building robust applications across the stack</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={javascriptLogo} width={100} height={100} alt="javascript logo"/>
                    <div className="logo-tooltip">JavaScript: Dynamic programming language for web development</div>
                  </div>
                  <div className="logo-item">
                    <Image src={typescriptLogo} width={100} height={100} alt="typescript logo"/>
                    <div className="logo-tooltip">TypeScript: Typed superset of JavaScript for scalable applications</div>
                  </div>
                  <div className="logo-item">
                    <Image src={pythonLogo} width={100} height={100} alt="python logo"/>
                    <div className="logo-tooltip">Python: Versatile language for web, data science, and automation</div>
                  </div>
                  <div className="logo-item">
                    <Image src={javaLogo} width={100} height={100} alt="java logo"/>
                    <div className="logo-tooltip">Java: Object-oriented language for enterprise applications</div>
                  </div>
                  <div className="logo-item">
                    <Image src={phpLogo} width={100} height={100} alt="php logo"/>
                    <div className="logo-tooltip">PHP: Server-side scripting language for web development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Infrastructure & Data</h3>
              <p className="text-xl">Cloud, Containers & Database Solutions</p>
            </div>
            <p className="mt-2 text-muted-foreground">Enterprise-grade infrastructure, containerization, and data management systems powering scalable applications</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={mysqlLogo} width={100} height={100} alt="mysql logo"/>
                    <div className="logo-tooltip">MySQL: Popular open-source relational database</div>
                  </div>
                  <div className="logo-item">
                    <Image src={postgresqlLogo} width={100} height={100} alt="postgresql logo"/>
                    <div className="logo-tooltip">PostgreSQL: Advanced open-source database with rich features</div>
                  </div>
                  <div className="logo-item">
                    <Image src={awsLogo} width={100} height={100} alt="aws logo"/>
                    <div className="logo-tooltip">AWS: Leading cloud platform for scalable infrastructure</div>
                  </div>
                  <div className="logo-item">
                    <Image src={redisLogo} width={100} height={100} alt="redis logo"/>
                    <div className="logo-tooltip">Redis: In-memory data structure store for caching</div>
                  </div>
                  <div className="logo-item">
                    <Image src={elasticSearchLogo} width={100} height={100} alt="elastic search logo"/>
                    <div className="logo-tooltip">Elasticsearch: Distributed search and analytics engine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Infrastructure & Data | AI-Powered Development */}      
          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">AI-Powered Development</h3>
              <p className="text-xl">Smart Assistance</p>
            </div>
            <p className="mt-2 text-muted-foreground">Enhancing development workflow with cutting-edge AI tools and assistants</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={anthropicLogo} width={100} height={100} alt="anthropic logo"/>
                    <div className="logo-tooltip">Anthropic: Advanced AI models for development assistance</div>
                  </div>
                  <div className="logo-item">
                    <Image src={openaiLogo} width={100} height={100} alt="openai logo"/>
                    <div className="logo-tooltip">OpenAI: Leading AI technology for code generation</div>
                  </div>
                  <div className="logo-item">
                    <Image src={copilotLogo} width={100} height={100} alt="copilot logo"/>
                    <div className="logo-tooltip">GitHub Copilot: AI pair programmer for code suggestions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Development Environment</h3>
              <p className="text-xl">Modern Tooling</p>
            </div>
            <p className="mt-2 text-muted-foreground">State-of-the-art development tools for efficient collaboration and coding</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={githubLogo} width={100} height={100} alt="github logo"/>
                    <div className="logo-tooltip">GitHub: Leading platform for code hosting and collaboration</div>
                  </div>
                  <div className="logo-item">
                    <Image src={gitlabLogo} width={100} height={100} alt="gitlab logo"/>
                    <div className="logo-tooltip">GitLab: DevOps platform for complete software development lifecycle</div>
                  </div>
                  <div className="logo-item">
                    <Image src={bitbucketLogo} width={100} height={100} alt="bitbucket logo"/>
                    <div className="logo-tooltip">Bitbucket: Git solution for professional teams</div>
                  </div>
                  <div className="logo-item">
                    <Image src={visualStudioCodeLogo} width={100} height={100} alt="visual studio code logo"/>
                    <div className="logo-tooltip">VS Code: Powerful and extensible code editor</div>
                  </div>
                  <div className="logo-item">
                    <Image src={cursorAiLogo} width={100} height={100} alt="cursor ai logo"/>
                    <div className="logo-tooltip">Cursor: AI-powered code editor for enhanced productivity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Frontend | Backend */}
          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Frontend Excellence</h3>
              <p className="text-xl">Cross-Platform & Web Solutions</p>
            </div>
            <p className="mt-2 text-muted-foreground">Creating engaging user experiences with modern frameworks across web and native platforms</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={reactLogo} width={100} height={100} alt="react logo"/>
                    <div className="logo-tooltip">React: Popular library for building user interfaces</div>
                  </div>
                  <div className="logo-item">
                    <Image src={angularLogo} width={100} height={100} alt="angular logo"/>
                    <div className="logo-tooltip">Angular: Full-featured framework for web applications</div>
                  </div>
                  <div className="logo-item">
                    <Image src={nextjsLogo} width={100} height={100} alt="nextjs logo"/>
                    <div className="logo-tooltip">Next.js: React framework for production-grade applications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Backend Development</h3>
              <p className="text-xl">Multi-Language Solutions</p>
            </div>
            <p className="mt-2 text-muted-foreground">Building powerful server-side applications with diverse languages and frameworks</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={nodejsLogo} width={100} height={100} alt="nodejs logo"/>
                    <div className="logo-tooltip">Node.js: JavaScript runtime for server-side development</div>
                  </div>
                  <div className="logo-item">
                    <Image src={firebaseLogo} width={100} height={100} alt="firebase logo"/>
                    <div className="logo-tooltip">Firebase: Platform for building web and mobile applications</div>
                  </div>
                  <div className="logo-item">
                    <Image src={rubyOnRailsLogo} width={100} height={100} alt="ruby on rails logo"/>
                    <div className="logo-tooltip">Ruby on Rails: Framework for rapid web development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Project Management | Design & UX */}
          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Project Management</h3>
              <p className="text-xl">Organization & Documentation</p>
            </div>
            <p className="mt-2 text-muted-foreground">Comprehensive tools for project tracking, documentation, and team collaboration</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={notionLogo} width={100} height={100} alt="notion logo"/>
                    <div className="logo-tooltip">Notion: All-in-one workspace for notes and collaboration</div>
                  </div>
                  <div className="logo-item">
                    <Image src={jiraLogo} width={100} height={100} alt="jira logo"/>
                    <div className="logo-tooltip">Jira: Project management tool for agile teams</div>
                  </div>
                  <div className="logo-item">
                    <Image src={airtableLogo} width={100} height={100} alt="airtable logo"/>
                    <div className="logo-tooltip">Airtable: Flexible platform for organizing work</div>
                  </div>
                  <div className="logo-item">
                    <Image src={trelloLogo} width={100} height={100} alt="trello logo"/>
                    <div className="logo-tooltip">Trello: Visual tool for managing projects and tasks</div>
                  </div>
                  <div className="logo-item">
                    <Image src={docusaurusLogo} width={100} height={100} alt="docusaurus logo"/>
                    <div className="logo-tooltip">Docusaurus: Tool for building documentation websites</div>
                  </div>
                  <div className="logo-item">
                    <Image src={swaggerLogo} width={100} height={100} alt="swagger logo"/>
                    <div className="logo-tooltip">Swagger: API documentation and design tools</div>
                  </div>
                  <div className="logo-item">
                    <Image src={openapiLogo} width={100} height={100} alt="openapi logo"/>
                    <div className="logo-tooltip">OpenAPI: Standard for describing RESTful APIs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack-category">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-bold">Design & UX</h3>
              <p className="text-xl">Creative Tools</p>
            </div>
            <p className="mt-2 text-muted-foreground">Professional design tools for creating beautiful and intuitive user interfaces</p>
            <div className="logo-showcase-container mt-4">
              <div className="logo-showcase">
                <div className="logo-track">
                  <div className="logo-item">
                    <Image src={figmaLogo} width={100} height={100} alt="figma logo"/>
                    <div className="logo-tooltip">Figma: Collaborative interface design tool</div>
                  </div>
                  <div className="logo-item">
                    <Image src={canvaLogo} width={100} height={100} alt="canva logo"/>
                    <div className="logo-tooltip">Canva: Easy-to-use design platform for graphics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </Layout>
  );
}
