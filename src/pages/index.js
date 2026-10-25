import Layout from "../components/layout/index";
import Image from 'next/image'
import { ArrowRight, Bot, ChevronDown, Cloud, Code, Gauge, Palette, Plug, Server, ShieldCheck, Smartphone, UserPlus } from 'lucide-react';
import mascot from '../../public/img/bono.png'
import { aiTools, platforms, stackCategories } from '../data/stack';
import { t, useDictionary } from '../lib/i18n/translate';
import { CONTACT_EMAIL } from '../lib/site';

const serviceIcons = {
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  bot: Bot,
  server: Server,
  palette: Palette,
};

const aiFeatureIcons = [UserPlus, Plug, ShieldCheck, Gauge];

const uniqueToolCount = new Set(
  stackCategories
    .filter((category) => category.id !== 'platforms')
    .flatMap((category) => category.tools.map((tool) => tool.id))
).size;

const stats = [
  { value: `${uniqueToolCount}+`, key: 'stats.tools' },
  { value: `${platforms.length}`, key: 'stats.platforms' },
  { value: `${aiTools.length}`, key: 'stats.ai' },
];

function faqSchema(dict) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function SectionHeading({ id, label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label" aria-hidden="true">{`// ${label}`}</span>
      <h2 id={id} className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function ToolChip({ tool, dict }) {
  return (
    <div className="tool-chip" tabIndex={0}>
      <div className="tool-chip-logo">
        <Image src={tool.logo} width={40} height={40} alt={`${tool.name} ${t(dict, 'stack.logoAlt')}`} />
      </div>
      <span className="tool-chip-name">{tool.label ?? tool.name}</span>
      <div className="tool-tooltip" role="tooltip">{t(dict, `stack.tools.${tool.id}`)}</div>
    </div>
  );
}

export default function Home() {
  const { dict } = useDictionary();
  const contactHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t(dict, 'cta.emailSubject'))}`;

  return (
    <Layout schema={[faqSchema(dict)]}>
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-teal" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-orange" aria-hidden="true"></div>

        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="status-dot"></span>
              {t(dict, 'hero.badge')}
            </span>
            <h1 id="hero-title" className="hero-title">
              {t(dict, 'hero.title')}
              <span className="text-gradient">{t(dict, 'hero.subtitle')}</span>
            </h1>
            <p className="hero-description">{t(dict, 'hero.description')}</p>
            <div className="hero-actions">
              <a href={contactHref} className="btn-primary">
                {t(dict, 'hero.ctaPrimary')}
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#stack" className="btn-ghost">{t(dict, 'hero.ctaSecondary')}</a>
            </div>
          </div>

          {/* Our process, idea to launch, styled as a project log */}
          <div className="terminal">
            <div className="terminal-header" aria-hidden="true">
              <span className="terminal-dot bg-[#FF5F57]"></span>
              <span className="terminal-dot bg-[#FEBC2E]"></span>
              <span className="terminal-dot bg-[#28C840]"></span>
              <span className="terminal-title">{t(dict, 'terminal.title')}</span>
            </div>
            <ol className="terminal-body">
              {dict.terminal.lines.map((line, index) => (
                <li
                  key={line.step}
                  className={`terminal-line terminal-line-${line.type}`}
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  <span className="terminal-step" aria-hidden="true">[{line.step}]</span>
                  <span className="terminal-phase">{line.phase}</span>
                  <span className="terminal-detail">{line.detail}</span>
                  {line.type === 'step' && <span className="terminal-check" aria-hidden="true">✔</span>}
                </li>
              ))}
              <li className="terminal-cursor" aria-hidden="true"></li>
            </ol>
            <Image src={mascot} alt={t(dict, 'hero.mascotAlt')} className="terminal-mascot" width={96} height={96} priority />
          </div>
        </div>

        {/* Stats */}
        <div className="container">
          <dl className="stats">
            {stats.map((stat) => (
              <div key={stat.key} className="stat">
                <dt className="stat-label">{t(dict, stat.key)}</dt>
                <dd className="stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            label={t(dict, 'services.label')}
            title={t(dict, 'services.title')}
            description={t(dict, 'services.description')}
          />
          <div className="services-grid">
            {dict.services.items.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <article key={service.icon} className={`card service-card ${service.icon === 'bot' ? 'service-card-highlight' : ''}`}>
                  <div className="service-card-top">
                    <div className="icon-box" aria-hidden="true"><Icon /></div>
                    <span className="card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
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
      <section id="ai" className="section section-alt" aria-labelledby="ai-title">
        <div className="container ai-layout">
          <div>
            <SectionHeading
              id="ai-title"
              label={t(dict, 'ai.label')}
              title={t(dict, 'ai.title')}
              description={t(dict, 'ai.description')}
            />
            <ul className="ai-features">
              {dict.ai.features.map((feature, index) => {
                const Icon = aiFeatureIcons[index];
                return (
                  <li key={feature.title} className="ai-feature">
                    <div className="icon-box icon-box-sm" aria-hidden="true"><Icon /></div>
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
                <ToolChip key={tool.id} tool={tool} dict={dict} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="section" aria-labelledby="stack-title">
        <div className="container">
          <SectionHeading
            id="stack-title"
            label={t(dict, 'stack.label')}
            title={t(dict, 'stack.title')}
            description={t(dict, 'stack.description')}
          />
          <p className="stack-note">
            <Code className="stack-note-icon" aria-hidden="true" />
            {t(dict, 'stack.note')}
          </p>
          <div className="stack-grid">
            {stackCategories.map((category, index) => (
              <article key={category.id} className={`card stack-card ${category.wide ? 'stack-card-wide' : ''}`}>
                <div className="stack-card-header">
                  <span className="card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="card-title">{t(dict, `stack.categories.${category.id}.title`)}</h3>
                  <span className="stack-card-subtitle">{t(dict, `stack.categories.${category.id}.subtitle`)}</span>
                </div>
                <p className="card-description">{t(dict, `stack.categories.${category.id}.description`)}</p>
                <div className="tool-list">
                  {category.tools.map((tool) => (
                    <ToolChip key={tool.id} tool={tool} dict={dict} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <SectionHeading
            id="faq-title"
            label={t(dict, 'faq.label')}
            title={t(dict, 'faq.title')}
            description={t(dict, 'faq.description')}
          />
          <div className="faq-list">
            {dict.faq.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary className="faq-question">
                  <h3>{item.question}</h3>
                  <ChevronDown className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="container">
          <div className="cta-band">
            <div className="hero-grid-bg" aria-hidden="true"></div>
            <h2 id="contact-title" className="section-title">{t(dict, 'cta.title')}</h2>
            <p className="section-description">{t(dict, 'cta.description')}</p>
            <a href={contactHref} className="btn-primary">
              {t(dict, 'hero.ctaPrimary')}
              <ArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
