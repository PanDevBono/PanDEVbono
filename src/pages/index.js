import Layout from "../components/layout/index";
import Image from 'next/image'
import { ArrowRight, Bot, Cloud, Code, Gauge, Palette, Plug, Server, ShieldCheck, SquareKanban, UserPlus } from 'lucide-react';
import mascot from '../../public/img/bono.png'
import HomeStrings from '../strings/home';
import { aiTools, stackCategories } from '../data/stack';

const serviceIcons = {
  code: Code,
  cloud: Cloud,
  bot: Bot,
  server: Server,
  palette: Palette,
  kanban: SquareKanban,
};

const aiFeatureIcons = [UserPlus, Plug, ShieldCheck, Gauge];

const uniqueToolCount = new Set(stackCategories.flatMap((category) => category.tools.map((tool) => tool.name))).size;

const stats = [
  { value: `${uniqueToolCount}+`, label: 'tools & technologies' },
  { value: '3', label: 'cloud & edge platforms' },
  { value: `${aiTools.length}`, label: 'AI tools managed' },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{`// ${label}`}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function ToolChip({ tool }) {
  return (
    <div className="tool-chip" tabIndex={0}>
      <div className="tool-chip-logo">
        <Image src={tool.logo} width={40} height={40} alt={`${tool.name} logo`} />
      </div>
      <span className="tool-chip-name">{tool.name}</span>
      <div className="tool-tooltip" role="tooltip">{tool.description}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout pageId="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-teal" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-orange" aria-hidden="true"></div>

        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="status-dot"></span>
              {HomeStrings.heroBadge}
            </span>
            <h1 className="hero-title">
              {HomeStrings.headerTitle}
              <span className="text-gradient">{HomeStrings.headerSubtitle}</span>
            </h1>
            <p className="hero-description">{HomeStrings.headerDescription}</p>
            <div className="hero-actions">
              <a href={HomeStrings.contactEmail} className="btn-primary">
                {HomeStrings.ctaPrimary}
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#stack" className="btn-ghost">{HomeStrings.ctaSecondary}</a>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#FF5F57]"></span>
              <span className="terminal-dot bg-[#FEBC2E]"></span>
              <span className="terminal-dot bg-[#28C840]"></span>
              <span className="terminal-title">{HomeStrings.terminal.title}</span>
            </div>
            <div className="terminal-body">
              {HomeStrings.terminal.lines.map((line, index) => (
                <p
                  key={index}
                  className={`terminal-line terminal-line-${line.type}`}
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  {line.type === 'command' && <span className="terminal-prompt">$</span>}
                  {line.text}
                </p>
              ))}
              <span className="terminal-cursor" aria-hidden="true"></span>
            </div>
            <Image src={mascot} alt="Bono, the PanDEVbono mascot" className="terminal-mascot" width={96} height={96} />
          </div>
        </div>

        {/* Stats */}
        <div className="container">
          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <SectionHeading
            label={HomeStrings.servicesLabel}
            title={HomeStrings.servicesTitle}
            description={HomeStrings.servicesDescription}
          />
          <div className="services-grid">
            {HomeStrings.services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <article key={service.title} className={`card service-card ${service.icon === 'bot' ? 'service-card-highlight' : ''}`}>
                  <div className="service-card-top">
                    <div className="icon-box"><Icon /></div>
                    <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tools Management Section */}
      <section id="ai" className="section section-alt">
        <div className="container ai-layout">
          <div>
            <SectionHeading
              label={HomeStrings.aiLabel}
              title={HomeStrings.aiTitle}
              description={HomeStrings.aiDescription}
            />
            <ul className="ai-features">
              {HomeStrings.aiFeatures.map((feature, index) => {
                const Icon = aiFeatureIcons[index];
                return (
                  <li key={feature.title} className="ai-feature">
                    <div className="icon-box icon-box-sm"><Icon /></div>
                    <div>
                      <h3 className="ai-feature-title">{feature.title}</h3>
                      <p className="card-description">{feature.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ai-tools-panel">
            <div className="ai-tools-orbit" aria-hidden="true"></div>
            <div className="ai-tools-grid">
              {aiTools.map((tool) => (
                <ToolChip key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="section">
        <div className="container">
          <SectionHeading
            label={HomeStrings.stackLabel}
            title={HomeStrings.stackTitle}
            description={HomeStrings.stackDescription}
          />
          <div className="stack-grid">
            {stackCategories.map((category, index) => (
              <article key={category.id} className={`card stack-card ${category.wide ? 'stack-card-wide' : ''}`}>
                <div className="stack-card-header">
                  <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="card-title">{category.title}</h3>
                  <span className="stack-card-subtitle">{category.subtitle}</span>
                </div>
                <p className="card-description">{category.description}</p>
                <div className="tool-list">
                  {category.tools.map((tool) => (
                    <ToolChip key={tool.name} tool={tool} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section id="contact" className="section">
        <div className="container">
          <div className="cta-band">
            <div className="hero-grid-bg" aria-hidden="true"></div>
            <h2 className="section-title">{HomeStrings.ctaBandTitle}</h2>
            <p className="section-description">{HomeStrings.ctaBandDescription}</p>
            <a href={HomeStrings.contactEmail} className="btn-primary">
              {HomeStrings.ctaPrimary}
              <ArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
