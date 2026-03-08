import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Testimonies from '../components/sections/Testimonies';
import FounderQuote from '../components/sections/FounderQuote';
import logo from '../assests/images/logo.jpeg';

// ── Real outreach photos ──
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach3 from '../assests/images/outreach3.jpeg';

const aboutStyles = `
  /* ── ABOUT HERO ── */
  .about-hero {
    position: relative;
    padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
    overflow: hidden;
  }
  .about-hero-grid {
    position: relative;
    z-index: 2;
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    align-items: center;
    min-height: 260px;
  }
  .about-hero-left { padding-right: 64px; }
  .about-hero-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--color-primary-dark);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }
  .about-hero-h1 {
    font-family: var(--font-heading);
    font-size: clamp(40px, 7vw, 64px);
    font-weight: 900;
    color: var(--color-navy);
    line-height: 1;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }
  .about-hero-right {
    padding-left: 64px;
    display: flex;
    justify-content: center;
  }
  .about-hero-divider {
    background-color: var(--color-border);
    width: 1px;
    align-self: stretch;
  }

  /* ── HISTORY SECTION ── */
  .history-section {
    background-color: var(--color-surface);
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .history-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .history-image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
  }

  /* ── CORE VALUES ── */
  .values-section {
    background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-mid) 100%);
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .values-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;
  }
  .value-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(41,197,246,0.20);
    border-radius: var(--card-radius);
    padding: 24px 20px;
    transition: var(--transition);
  }
  .value-card:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(41,197,246,0.40);
    transform: translateY(-3px);
  }

  /* ── MISSION VISION ── */
  .mv-about-section {
    background-color: var(--color-white);
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .mv-about-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    align-items: start;
    gap: 0;
  }
  .mv-about-divider { background-color: var(--color-border); width: 1px; align-self: stretch; }
  .credentials-wrap {
    max-width: 1080px;
    margin: 56px auto 0;
    border: 1px solid var(--color-border);
    border-radius: 16px;
    padding: clamp(28px, 4vw, 48px);
    background-color: var(--color-surface);
    text-align: center;
  }

  /* ── OUR TEAM ── */
  .team-section {
    background-color: var(--color-surface);
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
    text-align: center;
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    max-width: 1080px;
    margin: 0 auto;
  }
  .team-card {
    background: var(--color-white);
    border-radius: var(--card-radius);
    border: 1px solid var(--color-border);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
  }
  .team-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
    border-color: var(--color-primary);
  }
  .team-photo {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: top;
    display: block;
    background: linear-gradient(160deg, var(--color-primary-light), var(--color-navy-light));
  }
  .team-photo-placeholder {
    width: 100%;
    height: 220px;
    background: linear-gradient(160deg, var(--color-primary-light) 0%, var(--color-navy-light) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .about-hero-grid { grid-template-columns: 1fr; min-height: unset; gap: 32px; }
    .about-hero-divider { display: none; }
    .about-hero-left { padding-right: 0; }
    .about-hero-right { padding-left: 0; justify-content: flex-start; }
    .history-grid { grid-template-columns: 1fr; gap: 32px; }
    .history-image { height: 300px; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .mv-about-grid { grid-template-columns: 1fr; gap: 24px; }
    .mv-about-divider { display: none; }
    .team-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 480px) {
    .about-hero-h1 { font-size: 36px; }
    .values-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
`;

// ─── ABOUT HERO ──────────────────────────────────────────────────────────────
const AboutHero = () => (
  <section className="about-hero">
    <img
      src={outreach1}
      alt="JoMabel outreach mission"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
      }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.82) 100%)',
    }} />
    <div className="about-hero-grid">
      <div className="about-hero-left">
        <span className="about-hero-label">Our Story</span>
        <h1 className="about-hero-h1">About Us</h1>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.8', maxWidth: '360px' }}>
          JoMabel Healthcare Foundation is a faith-guided, U.S.-based nonprofit
          developing a world-class 16,000+ sq. meter medical and training campus
          in Ufuma, Anambra State, Nigeria.
        </p>
      </div>
      <div className="about-hero-divider" />
      <div className="about-hero-right">
        <div style={{
          border: '1px solid var(--color-border)', borderRadius: '16px',
          padding: '40px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'var(--shadow-md)',
        }}>
          <img src={logo} alt="JoMabel Healthcare Foundation" style={{ height: '120px', width: 'auto' }} />
        </div>
      </div>
    </div>
  </section>
);

// ─── HISTORY & FOUNDING ──────────────────────────────────────────────────────
const HistorySection = () => (
  <section className="history-section">
    <div className="history-grid">

      {/* Image */}
      <div>
        <img
          src={outreach3}
          alt="JoMabel team group photo"
          className="history-image"
        />
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          Our History
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: '700', color: 'var(--color-navy)',
          lineHeight: '1.2', margin: 0,
        }}>
          How JoMabel Healthcare Foundation Began
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.85', margin: 0 }}>
          JoMabel Healthcare Foundation was established in response to the persistent
          and urgent healthcare challenges facing communities in southeastern Nigeria,
          where access to quality medical services has long been limited by inadequate
          infrastructure, economic hardship, and geographic barriers.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.85', margin: 0 }}>
          The inspiration for the foundation is deeply rooted in the legacy of
          Dr. Clara Ada Ogbaa's parents, whose lives were defined by local healing
          missions, compassion, and unwavering service to their community. Their
          example instilled in her a profound understanding of what true healing
          requires: not only medical treatment, but also empathy, presence, and a
          commitment to uplifting the whole person.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.85', margin: 0 }}>
          Today, JoMabel Healthcare Foundation stands as a testament to vision,
          legacy, and sustained commitment — a bridge between past and future,
          tradition and innovation, compassion and strategic action.
        </p>

        {/* Timeline dots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
          {[
            'Founded with small-scale medical missions and grassroots outreach',
            'Expanded into fully operational medical center in Ufuma',
            'Launched youth training, maternal health & community education programs',
            'Now developing 16,000+ sq. meter medical & training campus',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%',
                background: 'var(--color-primary)', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '1px',
              }}>
                <span style={{ color: '#fff', fontSize: '11px', fontWeight: '700' }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── CORE VALUES ─────────────────────────────────────────────────────────────
const coreValues = [
  { icon: '🤲', title: 'Dignity',                desc: 'Every human being deserves respectful, compassionate care.' },
  { icon: '⚖️', title: 'Equity',                 desc: 'We prioritize communities historically excluded from quality healthcare.' },
  { icon: '🌿', title: 'Service',                desc: 'We serve with humility, excellence, and a commitment to healing.' },
  { icon: '♻️', title: 'Sustainability',          desc: 'We build systems that last beyond individual projects.' },
  { icon: '🔍', title: 'Integrity',              desc: 'We steward resources with transparency and accountability.' },
  { icon: '🌍', title: 'Community Empowerment',  desc: 'We invest in local leadership, youth, and families.' },
  { icon: '💡', title: 'Innovation',             desc: 'We embrace modern solutions to long-standing healthcare challenges.' },
];

const CoreValues = () => (
  <section className="values-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
      <span style={{
        fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)',
        letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        What Guides Us
      </span>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700',
        color: '#ffffff', margin: '12px 0 0', lineHeight: '1.2',
      }}>
        Our Core Values
      </h2>
    </div>
    <div className="values-grid">
      {coreValues.map((v, i) => (
        <div key={i} className="value-card">
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '15px', fontWeight: '700',
            color: '#ffffff', margin: '0 0 8px',
          }}>
            {v.title}
          </h3>
          <p style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.7', margin: 0,
          }}>
            {v.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// ─── MISSION & VISION ────────────────────────────────────────────────────────
const MissionVisionSection = () => (
  <section className="mv-about-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
      <span style={{
        fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
        letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        Our Purpose
      </span>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700',
        color: 'var(--color-navy)', margin: '12px 0 0',
      }}>
        Mission &amp; Vision
      </h2>
    </div>

    <div className="mv-about-grid">
      {/* Mission */}
      <div style={{ paddingRight: '48px' }}>
        <div style={{
          border: '1px solid var(--color-border)', borderRadius: '12px',
          padding: '28px', borderLeft: '4px solid var(--color-primary)',
          backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'var(--color-primary-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '14px',
          }}>
            <span style={{ fontSize: '20px' }}>🎯</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px', fontWeight: '700',
            color: 'var(--color-navy)', marginBottom: '12px',
          }}>
            Our Mission
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.8', margin: 0 }}>
            To deliver accessible healthcare, strengthen community health systems,
            and promote sustainable development through medical services, education,
            and empowerment.
          </p>
        </div>
      </div>

      <div className="mv-about-divider" />

      {/* Vision */}
      <div style={{ paddingLeft: '48px' }}>
        <div style={{
          border: '1px solid var(--color-border)', borderRadius: '12px',
          padding: '28px', borderRight: '4px solid var(--color-primary)',
          backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'var(--color-primary-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '14px',
          }}>
            <span style={{ fontSize: '20px' }}>🌍</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px', fontWeight: '700',
            color: 'var(--color-navy)', marginBottom: '12px',
          }}>
            Our Vision
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.8', margin: 0 }}>
            A world where every person — regardless of geography, income, or social
            status — has access to dignified, life-saving healthcare, supported by
            empowered communities, trained local professionals, and sustainable
            health infrastructure.
          </p>
        </div>
      </div>
    </div>

    {/* Registration & Credentials */}
    <div className="credentials-wrap">
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '20px', fontWeight: '700',
        color: 'var(--color-navy)', marginBottom: '12px',
      }}>
        Registration &amp; Credentials
      </h3>
      <p style={{
        fontSize: '14px', color: 'var(--color-text-muted)',
        lineHeight: '1.75', maxWidth: '500px', margin: '0 auto 36px',
      }}>
        JoMabel Healthcare Foundation is a registered nonprofit organization.
        Credential logos and registration details to be added.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            width: '100px', height: '44px',
            backgroundColor: 'var(--color-border)',
            borderRadius: '6px',
          }} />
        ))}
      </div>
    </div>
  </section>
);

// ─── OUR TEAM ────────────────────────────────────────────────────────────────
const teamMembers = [
  { name: 'Team Member', position: 'Position', img: null },
  { name: 'Team Member', position: 'Position', img: null },
  { name: 'Team Member', position: 'Position', img: null },
  { name: 'Team Member', position: 'Position', img: null },
];

const OurTeam = () => (
  <section className="team-section">
    <span style={{
      fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
      letterSpacing: '0.14em', textTransform: 'uppercase',
    }}>
      The People Behind The Mission
    </span>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700',
      color: 'var(--color-navy)', margin: '12px 0 40px',
    }}>
      Our Team
    </h2>
    <div className="team-grid">
      {teamMembers.map((m, i) => (
        <div key={i} className="team-card">
          {m.img ? (
            <img src={m.img} alt={m.name} className="team-photo" />
          ) : (
            <div className="team-photo-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.4">
                <circle cx="12" cy="8" r="4" stroke="var(--color-navy-mid)" strokeWidth="1.5"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          )}
          <div style={{ padding: '16px 16px 18px' }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px', fontWeight: '700',
              color: 'var(--color-navy)', margin: '0 0 4px',
            }}>
              {m.name}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0 }}>
              {m.position}
            </p>
          </div>
        </div>
      ))}
    </div>
    <p style={{
      fontSize: '12px', color: 'var(--color-text-light)',
      marginTop: '28px', fontStyle: 'italic',
    }}>
    </p>
  </section>
);

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
const About = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{aboutStyles}</style>
    <Navbar />
    <AboutHero />
    <FounderQuote />
    <HistorySection />
    <CoreValues />
    <MissionVisionSection />
    <OurTeam />
    <Testimonies />
    <Footer />
  </div>
);

export default About;