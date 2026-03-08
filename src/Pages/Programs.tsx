import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignBanner from '../components/sections/CampaignBanner';
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach2 from '../assests/images/outreach2.jpeg';
import outreach4 from '../assests/images/outreach4.jpeg';
import outreach5 from '../assests/images/outreach5.jpeg';

// ─── ICONS ───────────────────────────────────────────────────────────────────
const StethoscopeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="var(--color-navy-mid)" strokeWidth="1.5"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const MegaphoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="var(--color-navy-mid)" strokeWidth="1.5"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12v4M10 14h4" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ─── PROGRAMS HERO ───────────────────────────────────────────────────────────
const ProgramsHero = () => {
  const navigate = useNavigate();
  return (
    <section className="programs-hero">
      <img
        src={outreach5}
        alt="JoMabel outreach mission in Ufuma"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(27,42,74,0.93) 0%, rgba(27,42,74,0.75) 60%, rgba(27,42,74,0.20) 100%)',
      }} />
      <div className="programs-hero-content">
        <span style={{
          display: 'inline-block',
          background: 'rgba(41,197,246,0.18)',
          border: '1px solid rgba(41,197,246,0.35)',
          color: 'var(--color-primary)',
          fontSize: '11px', fontWeight: '700',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '5px 16px', borderRadius: '999px',
          marginBottom: '20px',
        }}>
          JoMabel Healthcare Foundation
        </span>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          color: '#ffffff',
          fontSize: 'clamp(26px, 4vw, 44px)',
          fontWeight: '700', lineHeight: '1.2',
          marginBottom: '16px',
        }}>
          Our Programs &amp;<br />Services
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.78)',
          fontSize: 'clamp(13px, 1.8vw, 15px)',
          lineHeight: '1.8', marginBottom: '32px',
          maxWidth: '480px',
        }}>
          Through our two facilities and six program areas, JoMabel Healthcare
          Foundation delivers healthcare, training, and lasting community
          transformation across Nigeria.
        </p>
        <div className="programs-hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/campaign')}>Join The Campaign</button>
          <button className="btn-outline" onClick={() => navigate('/about')}>Learn Our Story</button>
        </div>
      </div>
    </section>
  );
};

// ─── PROGRAMS OVERVIEW ───────────────────────────────────────────────────────
const smallCards = [
  {
    icon: <StethoscopeIcon />,
    category: 'Medical Outreach',
    title: 'Medical Outreach Missions',
    desc: 'Regular medical missions providing free consultations, medications, screenings, and referrals — reaching rural and underserved communities where healthcare access is limited or nonexistent.',
    img: outreach1,
    bullets: ['Free consultations & medications', 'Health screenings & referrals', 'Reaching rural communities'],
  },
  {
    icon: <HeartIcon />,
    category: 'Maternal & Child Health',
    title: 'Maternal & Child Health Initiative',
    desc: 'Programs focused on safe pregnancy and delivery, newborn care, immunization, nutrition support, and women\'s health education for families across our communities.',
    img: outreach2,
    bullets: ['Safe pregnancy & delivery', 'Newborn care & immunization', 'Nutrition & women\'s health'],
  },
  {
    icon: <MegaphoneIcon />,
    category: 'Community Education',
    title: 'Community Health Education',
    desc: 'Workshops and campaigns addressing hygiene and sanitation, disease prevention, mental and emotional wellness, and nutrition and lifestyle health.',
    img: outreach4,
    bullets: ['Hygiene & sanitation workshops', 'Disease prevention campaigns', 'Mental & emotional wellness'],
  },
  {
    icon: <BuildingIcon />,
    category: 'Infrastructure',
    title: 'Healthcare Infrastructure Development',
    desc: 'Building and equipping facilities that anchor long-term community health — including clinics, diagnostic centers, water and sanitation systems, and youth training complexes.',
    img: outreach5,
    bullets: ['Clinics & diagnostic centers', 'Water & sanitation systems', 'Youth training complexes'],
  },
];

const ProgramsOverview = () => {
  const navigate = useNavigate();
  return (
    <section className="programs-overview">

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700',
          color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          What We Do
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: '700', color: 'var(--color-navy)',
          margin: '12px 0 0',
        }}>
          Programs Overview
        </h2>
      </div>

      <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>

        {/* ── Row 1 — Two main facility cards ── */}
        <div className="programs-feature-row">

          {/* JoMabel Medical Center */}
          <div style={{
            background: 'linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-mid) 100%)',
            borderRadius: '16px', overflow: 'hidden', padding: '28px 28px 0',
          }}>
            {/* Logo box — taller for better visibility */}
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '10px',
              padding: '24px 28px', marginBottom: '20px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', width: '100%', boxSizing: 'border-box',
              minHeight: '100px',
            }}>
              <img
                src={logo2}
                alt="JoMabel Medical Center"
                style={{ height: 'auto', width: '300px', objectFit: 'contain' }}
              />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              color: '#ffffff', fontSize: '18px',
              fontWeight: '700', marginBottom: '10px',
            }}>
              JoMabel Medical Center
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13.5px', lineHeight: '1.75', marginBottom: '16px' }}>
              Our operational hub offering primary care, maternal and child health
              services, diagnostic and laboratory services, chronic disease management,
              and preventive health education in Ufuma, Anambra State, Nigeria.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Primary care & diagnostics', 'Maternal & child health services', 'Chronic disease management', 'Preventive health education'].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '13px' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80"
                alt="JoMabel Medical Center"
                style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Youth Training & Skills Center */}
          <div style={{
            background: 'linear-gradient(160deg, var(--color-navy-mid) 0%, var(--color-primary-dark) 100%)',
            borderRadius: '16px', overflow: 'hidden', padding: '28px 28px 0',
          }}>
            {/* Logo box — taller for better visibility */}
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '10px',
              padding: '24px 28px', marginBottom: '20px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', width: '100%', boxSizing: 'border-box',
              minHeight: '100px',
            }}>
              <img
                src={logo3}
                alt="JoMabel Skills Center"
                style={{ height: 'auto', width: '300px', objectFit: 'contain' }}
              />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              color: '#ffffff', fontSize: '18px',
              fontWeight: '700', marginBottom: '10px',
            }}>
              Youth Training &amp; Skills Center
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13.5px', lineHeight: '1.75', marginBottom: '16px' }}>
              Investing in the next generation of healthcare professionals through
              hands-on clinical training, leadership development, community service
              opportunities, and career mentorship programs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Hands-on clinical training', 'Leadership development', 'Community service opportunities', 'Career mentorship programs'].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '13px' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                alt="Youth Training Center"
                style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* ── Row 2 — Four smaller program cards ── */}
        <div className="programs-small-row">
          {smallCards.map((p, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--card-radius)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              transition: 'var(--transition)',
            }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
              }}
            >
              <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                <img src={p.img} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,42,74,0.35)' }} />
                <div style={{
                  position: 'absolute', bottom: '10px', left: '12px',
                  background: 'rgba(255,255,255,0.92)',
                  borderRadius: '8px', padding: '6px 8px',
                }}>
                  {p.icon}
                </div>
              </div>
              <div style={{ padding: '20px 20px 22px' }}>
                <span style={{
                  fontSize: '10.5px', fontWeight: '700',
                  color: 'var(--color-navy-mid)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  background: 'var(--color-navy-light)',
                  padding: '3px 10px', borderRadius: '999px',
                  display: 'inline-block', marginBottom: '10px',
                }}>
                  {p.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px', fontWeight: '700',
                  color: 'var(--color-navy)', marginBottom: '8px', lineHeight: '1.3',
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: '0 0 14px' }}>
                  {p.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', flexShrink: 0 }} />
                      <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/donate')}
                  style={{
                    background: 'none', border: 'none', padding: 0,
                    color: 'var(--color-primary-dark)', fontSize: '13px',
                    fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    transition: 'var(--transition)',
                  }}
                >
                  Support This Program
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Geographic Focus ── */}
        <div style={{
          background: 'var(--color-primary-light)',
          border: '1px solid rgba(41,197,246,0.25)',
          borderRadius: '16px', padding: '32px 36px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px',
          alignItems: 'center',
        }}>
          <div>
            <span style={{
              fontSize: '11px', fontWeight: '700',
              color: 'var(--color-primary-dark)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Where We Work
            </span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: '700', color: 'var(--color-navy)',
              margin: '10px 0 14px',
            }}>
              Geographic Focus
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.8', margin: 0 }}>
              Our primary work is rooted in southeastern Nigeria — specifically
              Anambra State and surrounding regions — with a growing diaspora
              network and global partnerships that amplify our reach and impact.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Primary', value: 'Southeastern Nigeria (Anambra State & surrounding regions)' },
              { label: 'Secondary', value: 'Nigerian diaspora communities & global partners' },
            ].map((item) => (
              <div key={item.label} style={{
                background: 'var(--color-white)',
                borderRadius: '10px', padding: '14px 18px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <p style={{
                  fontSize: '10px', fontWeight: '700',
                  color: 'var(--color-primary-dark)',
                  textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 4px',
                }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-navy)', fontWeight: '600', margin: 0 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ─── PROGRAMS PAGE ───────────────────────────────────────────────────────────
const Programs = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{`
      .programs-hero {
        position: relative;
        min-height: 420px;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      .programs-hero-content {
        position: relative;
        z-index: 2;
        padding: clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px);
        max-width: 680px;
      }
      .programs-hero-buttons {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .btn-primary {
        background-color: var(--color-green);
        color: var(--color-white);
        border: none;
        border-radius: var(--btn-radius);
        padding: 12px 26px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        font-family: inherit;
        transition: var(--transition);
      }
      .btn-primary:hover { background-color: var(--color-green-dark); transform: translateY(-1px); }
      .btn-outline {
        background-color: transparent;
        color: var(--color-white);
        border: 1.5px solid rgba(255,255,255,0.45);
        border-radius: var(--btn-radius);
        padding: 12px 26px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        font-family: inherit;
        transition: var(--transition);
      }
      .btn-outline:hover { border-color: #ffffff; background: rgba(255,255,255,0.10); }

      .programs-overview {
        background-color: var(--color-white);
        padding: var(--section-padding-y) var(--section-padding-x);
      }
      .programs-feature-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
      .programs-small-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      @media (max-width: 760px) {
        .programs-hero { min-height: 360px; }
        .programs-feature-row { grid-template-columns: 1fr; }
        .programs-small-row { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 480px) {
        .programs-hero-buttons { flex-direction: column; }
        .btn-primary, .btn-outline { width: 100%; text-align: center; }
        .programs-small-row { grid-template-columns: 1fr; }
      }
    `}</style>

    <Navbar />
    <ProgramsHero />
    <ProgramsOverview />
    <CampaignBanner />
    <Footer />
  </div>
);

export default Programs;