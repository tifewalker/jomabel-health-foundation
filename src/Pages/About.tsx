import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Testimonies from '../components/sections/Testimonies';
import FounderQuote from '../components/sections/FounderQuote';
import logo from '../assests/images/logo.jpeg';
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';

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
    color: #1D8FD4;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }
  .about-hero-h1 {
    font-family: var(--font-heading);
    font-size: clamp(40px, 7vw, 64px);
    font-weight: 900;
    color: #111827;
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
    background-color: #E5E7EB;
    width: 1px;
    align-self: stretch;
  }

  /* ── HISTORY SECTION ── */
  .history-section {
    background-color: #F9FAFB;
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
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  }

  /* ── CORE VALUES ── */
  .values-section {
    background: #ffffff;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .values-grid {
    max-width: 1080px;
    margin: 40px auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .value-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 24px 20px;
    transition: all 0.2s;
  }
  .value-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    border-color: #1D8FD4;
    transform: translateY(-3px);
  }

  /* ── MISSION VISION ── */
  .mv-about-section {
    background-color: #F9FAFB;
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
  .mv-about-divider { background-color: #E5E7EB; width: 1px; align-self: stretch; }

  /* ── CENTER LOGOS ── */
  .center-logos-wrap {
    max-width: 1080px;
    margin: 56px auto 0;
    border: 1px solid #E5E7EB;
    border-radius: 16px;
    padding: clamp(28px, 4vw, 48px);
    background-color: #ffffff;
    text-align: center;
  }
  .center-logos-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 28px;
  }
  .center-logo-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 0 0 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: all 0.2s;
    flex: 1 1 200px;
    max-width: 260px;
    overflow: hidden;
  }
  .center-logo-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    border-color: #1D8FD4;
  }

  /* ── OUR TEAM ── */
  .team-section {
    background-color: #ffffff;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
    text-align: center;
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1080px;
    margin: 0 auto;
  }
  .team-card {
    background: #F9FAFB;
    border-radius: 12px;
    border: 1px solid #E5E7EB;
    overflow: hidden;
    transition: all 0.2s;
  }
  .team-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    transform: translateY(-3px);
    border-color: #1D8FD4;
  }
  .team-photo {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: top;
    display: block;
  }
  .team-photo-placeholder {
    width: 100%;
    height: 200px;
    background: #F3F4F6;
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
  @media (max-width: 540px) {
    .about-hero-h1 { font-size: 36px; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .team-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
  @media (max-width: 380px) {
    .values-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: 1fr; }
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
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', maxWidth: '360px' }}>
          JoMabel Healthcare Foundation is a faith-guided, U.S.-based nonprofit
          developing a world-class 16,000+ sq. meter medical and training CENTER
          in Ufuma, Anambra State, Nigeria.
        </p>
      </div>
      <div className="about-hero-divider" />
      <div className="about-hero-right">
        <div style={{
          border: '1px solid #E5E7EB', borderRadius: '16px',
          padding: '40px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
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
      <div>
        <img src={outreach3} alt="JoMabel team group photo" className="history-image" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#1D8FD4', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Our History
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '700', color: '#111827', lineHeight: '1.2', margin: 0 }}>
          How JoMabel Healthcare Foundation Began
        </h2>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
          JoMabel Healthcare Foundation was established in response to the persistent
          and urgent healthcare challenges facing communities in southeastern Nigeria,
          where access to quality medical services has long been limited by inadequate
          infrastructure, economic hardship, and geographic barriers.
        </p>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
          The inspiration for the foundation is deeply rooted in the legacy of
          Clara Ada Ogbaa's parents, whose lives were defined by local healing
          missions, compassion, and unwavering service to their community. Their
          example instilled in her a profound understanding of what true healing
          requires: not only medical treatment, but also empathy, presence, and a
          commitment to uplifting the whole person.
        </p>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
          Today, JoMabel Healthcare Foundation stands as a testament to vision,
          legacy, and sustained commitment a bridge between past and future,
          tradition and innovation, compassion and strategic action.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
          {[
            'Founded with small-scale medical missions and grassroots outreach',
            'Expanded into fully operational medical CENTER in Ufuma',
            'Launched youth training, maternal health & community education programs',
            'Now developing 16,000+ sq. meter medical & training CENTER',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%',
                background: '#1D8FD4', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
              }}>
                <span style={{ color: '#fff', fontSize: '11px', fontWeight: '700' }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: '1.7', margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── CORE VALUES ─────────────────────────────────────────────────────────────
const coreValues = [
  { icon: '🤲', title: 'Dignity',               desc: 'Every human being deserves respectful, compassionate care.' },
  { icon: '⚖️', title: 'Equity',                desc: 'We prioritize communities historically excluded from quality healthcare.' },
  { icon: '🌿', title: 'Service',               desc: 'We serve with humility, excellence, and a commitment to healing.' },
  { icon: '♻️', title: 'Sustainability',         desc: 'We build systems that last beyond individual projects.' },
  { icon: '🔍', title: 'Integrity',             desc: 'We steward resources with transparency and accountability.' },
  { icon: '🌍', title: 'Community Empowerment', desc: 'We invest in local leadership, youth, and families.' },
  { icon: '💡', title: 'Innovation',            desc: 'We embrace modern solutions to long-standing healthcare challenges.' },
];

const CoreValues = () => (
  <section className="values-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
      <span style={{
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      }}>
        What Guides Us
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 0', lineHeight: '1.2' }}>
        Our Core Values
      </h2>
    </div>
    <div className="values-grid">
      {coreValues.map((v, i) => (
        <div key={i} className="value-card">
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>{v.title}</h3>
          <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.7', margin: 0 }}>{v.desc}</p>
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
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      }}>
        Our Purpose
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 0' }}>
        Mission &amp; Vision
      </h2>
    </div>

    <div className="mv-about-grid">
      {/* Mission */}
      <div style={{ paddingRight: '48px' }}>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', padding: '28px', borderLeft: '4px solid #1D8FD4', backgroundColor: '#ffffff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EBF5FB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '20px' }}>🎯</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Our Mission</h3>
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', margin: 0 }}>
            To deliver accessible healthcare, strengthen community health systems,
            and promote sustainable development through medical services, education,
            and empowerment.
          </p>
        </div>
      </div>

      <div className="mv-about-divider" />

      {/* Vision */}
      <div style={{ paddingLeft: '48px' }}>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', padding: '28px', borderRight: '4px solid #16A34A', backgroundColor: '#ffffff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '20px' }}>🌍</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Our Vision</h3>
          {/* "geography" → "location" per board feedback */}
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', margin: 0 }}>
            A world where every person regardless of location, income, or social
            status has access to dignified, life-saving healthcare, supported by
            empowered communities, trained local professionals, and sustainable
            health infrastructure.
          </p>
        </div>
      </div>
    </div>

    {/* ── CENTER LOGOS — replaces credentials section ── */}
    <div className="center-logos-wrap">
      <span style={{
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
        marginBottom: '12px',
      }}>
        Our Centers
      </span>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
        Two Facilities. One Integrated Vision.
      </h3>
      <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.75', maxWidth: '480px', margin: '0 auto 0' }}>
        The JoMabel Medical CENTER and the Skill Acquisition &amp; Training CENTER 
        together forming a world-class healthcare campus in Ufuma, Anambra State.
      </p>
      <div className="center-logos-grid">
        <div className="center-logo-card">
          <img src={logo2} alt="JoMabel Medical Center" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#111827', margin: 0 }}>JoMabel Medical CENTER</p>
          <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>6,000 sqm · 70% Complete</p>
        </div>
        <div className="center-logo-card">
          <img src={logo3} alt="JoMabel Skills & Training Center" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#111827', margin: 0 }}>Skill Acquisition &amp; Training CENTER</p>
          <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>10,000 sqm · 30% Complete</p>
        </div>
      </div>
    </div>

    {/* ── CREDENTIALS — commented out until available ──
    <div className="credentials-wrap">
      <h3>Registration & Credentials</h3>
      <p>Credential logos and registration details to be added.</p>
    </div>
    */}
  </section>
);

// ─── BOARD MEMBERS ────────────────────────────────────────────────────────────
const boardMembers = [
  { name: 'Ikenna Ogbaa, MD',             position: 'Executive Board Member',        img: null },
  { name: 'Mrs. Doyin Antiabong',          position: 'Executive Board Member',        img: null },
  { name: 'Dr. Comfort Nonye Obi',         position: 'Executive Board Member',        img: null },
  { name: 'Nneka Ogbaa',                   position: 'Executive Board Member',        img: null },
  { name: 'Board Legal Adviser',           position: 'Pending IRS Clearance',         img: null },
  { name: 'PR / Media / Communications',  position: 'Position Pending',              img: null },
];

const OurTeam = () => (
  <section className="team-section">
    <span style={{
      display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
      fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
      textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
    }}>
      Leadership
    </span>
    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
      Executive Board of Directors
    </h2>
    <p style={{ fontSize: '14px', color: '#6B7280', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.7' }}>
      JoMabel Healthcare Foundation USA Inc. is governed by a dedicated executive board
      committed to transparency, accountability, and mission-driven leadership.
    </p>
    <div className="team-grid">
      {boardMembers.map((m, i) => (
        <div key={i} className="team-card">
          <div className="team-photo-placeholder">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" opacity="0.3">
              <circle cx="12" cy="8" r="4" stroke="#6B7280" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ padding: '16px 16px 18px' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: '700', color: '#111827', margin: '0 0 4px' }}>
              {m.name}
            </p>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
              {m.position}
            </p>
          </div>
        </div>
      ))}
    </div>
    
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