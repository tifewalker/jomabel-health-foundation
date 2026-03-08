import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import an1 from '../assests/images/an1.jpg';
import outreach3 from '../assests/images/outreach3.jpeg';

const legacyStyles = `
  /* ─── HERO ─────────────────────────────────────── */
  .legacy-hero {
    position: relative;
    min-height: 480px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    font-family: var(--font-body);
  }
  .legacy-hero-content {
    position: relative;
    z-index: 2;
    padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px);
    max-width: 700px;
  }

  /* ─── INTRO STRIP ───────────────────────────────── */
  .legacy-intro {
    background: var(--color-white);
    padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .legacy-intro-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 0;
    align-items: start;
  }
  .legacy-intro-divider {
    background: var(--color-border);
    width: 1px;
    align-self: stretch;
  }

  /* ─── NAMING OPPORTUNITIES ──────────────────────── */
  .naming-section {
    background: var(--color-surface);
    padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .naming-grid {
    max-width: 1080px;
    margin: 40px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .naming-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    overflow: hidden;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
  }
  .naming-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
    border-color: var(--color-primary);
  }
  .naming-card-top {
    padding: 28px 28px 20px;
    flex: 1;
  }
  .naming-card-footer {
    padding: 16px 28px 22px;
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
  }

  /* ─── MEMORIAL BRICKS ───────────────────────────── */
  .bricks-section {
    background: linear-gradient(160deg, var(--color-navy) 0%, #0d1f4e 100%);
    padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .bricks-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .brick-sample-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .brick-tile {
    aspect-ratio: 2 / 1;
    border-radius: 6px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(41,197,246,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-align: center;
    transition: var(--transition);
    cursor: default;
  }
  .brick-tile:hover {
    background: rgba(41,197,246,0.12);
    border-color: rgba(41,197,246,0.50);
  }
  .brick-tile.empty {
    opacity: 0.25;
  }

  /* ─── CIRCLE OF DIGNITY ─────────────────────────── */
  .cod-section {
    background: var(--color-white);
    padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .cod-tiers {
    max-width: 1080px;
    margin: 40px auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .cod-tier {
    border-radius: 16px;
    padding: 28px 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid transparent;
    transition: var(--transition);
  }
  .cod-tier:hover { transform: translateY(-3px); }

  /* ─── FOUNDER QUOTE STRIP ───────────────────────── */
  .legacy-quote-strip {
    background: var(--color-surface);
    padding: clamp(36px, 5vw, 60px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
    text-align: center;
  }

  /* ─── LEGACY FORM ───────────────────────────────── */
  .legacy-form-section {
    background: var(--color-white);
    padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .legacy-form-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .form-label {
    font-size: 12px;
    font-weight: 600;
    color: #374151;
  }
  .form-input {
    padding: 11px 14px;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    font-size: 13.5px;
    color: #111827;
    font-family: inherit;
    outline: none;
    transition: border-color 0.15s;
  }
  .form-input:focus { border-color: var(--color-primary-dark); }
  .form-textarea {
    padding: 11px 14px;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    font-size: 13.5px;
    color: #111827;
    font-family: inherit;
    outline: none;
    resize: vertical;
    min-height: 110px;
    transition: border-color 0.15s;
  }
  .form-textarea:focus { border-color: var(--color-primary-dark); }
  .form-select {
    padding: 11px 14px;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    font-size: 13.5px;
    color: #111827;
    font-family: inherit;
    outline: none;
    background: white;
    cursor: pointer;
    transition: border-color 0.15s;
  }
  .form-select:focus { border-color: var(--color-primary-dark); }

  /* ─── RESPONSIVE ────────────────────────────────── */
  @media (max-width: 900px) {
    .legacy-intro-grid { grid-template-columns: 1fr; }
    .legacy-intro-divider { display: none; }
    .bricks-grid { grid-template-columns: 1fr; gap: 40px; }
    .legacy-form-grid { grid-template-columns: 1fr; gap: 40px; }
    .cod-tiers { grid-template-columns: repeat(2, 1fr); }
    .naming-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 560px) {
    .cod-tiers { grid-template-columns: 1fr; max-width: 360px; margin-left: auto; margin-right: auto; }
    .naming-grid { grid-template-columns: 1fr; max-width: 420px; margin-left: auto; margin-right: auto; }
    .brick-sample-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const LegacyHero = () => {
  const navigate = useNavigate();
  return (
    <section className="legacy-hero">
      <img
        src={an1}
        alt="JoMabel Medical Campus"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(13,31,78,0.96) 0%, rgba(27,42,74,0.75) 55%, rgba(13,31,78,0.25) 100%)',
      }} />
      <div className="legacy-hero-content">
        <span style={{
          display: 'inline-block',
          background: 'rgba(41,197,246,0.15)',
          border: '1px solid rgba(41,197,246,0.35)',
          color: 'var(--color-primary)',
          fontSize: '11px', fontWeight: '700',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '5px 16px', borderRadius: '999px', marginBottom: '22px',
        }}>
          Legacy Giving
        </span>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          color: '#ffffff',
          fontSize: 'clamp(28px, 4.5vw, 50px)',
          fontWeight: '700', lineHeight: '1.15', marginBottom: '18px',
        }}>
          Leave a Legacy That<br />
          <span style={{ color: 'var(--color-primary)' }}>Heals Generations</span>
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: 'clamp(13px, 1.8vw, 15px)',
          lineHeight: '1.85', marginBottom: '32px', maxWidth: '500px',
        }}>
          Your legacy gift to JoMabel Healthcare Foundation ensures that dignified,
          accessible healthcare reaches communities in Ufuma, Anambra State —
          for generations to come.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { const el = document.getElementById('legacy-form'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              backgroundColor: 'var(--color-green)', color: '#fff', border: 'none',
              borderRadius: 'var(--btn-radius)', padding: '13px 28px',
              fontSize: '14px', fontWeight: '700', cursor: 'pointer',
              fontFamily: 'inherit', transition: 'var(--transition)',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-green-dark)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-green)')}
          >
            Express Your Intent
          </button>
          <button
            onClick={() => { const el = document.getElementById('naming-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.40)',
              borderRadius: 'var(--btn-radius)', padding: '13px 28px',
              fontSize: '14px', fontWeight: '700', cursor: 'pointer',
              fontFamily: 'inherit', backdropFilter: 'blur(4px)', transition: 'var(--transition)',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.20)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)')}
          >
            Explore Legacy Options
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── INTRO ────────────────────────────────────────────────────────────────────
const LegacyIntro = () => (
  <section className="legacy-intro">
    <div className="legacy-intro-grid">
      <div style={{ paddingRight: '56px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '14px',
        }}>
          Why Legacy Giving
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700',
          color: 'var(--color-navy)', lineHeight: '1.25', marginBottom: '20px',
        }}>
          A Gift That Outlives<br />a Lifetime
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.85', marginBottom: '16px' }}>
          A legacy gift is one of the most profound acts of generosity —
          it declares that your values, your compassion, and your commitment
          to human dignity will continue to shape the world long after you are gone.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.85', margin: 0 }}>
          By including JoMabel Healthcare Foundation in your estate plans, you
          become part of a living legacy of healing — helping to build and sustain
          a world-class medical campus that will serve thousands of families in
          southeastern Nigeria for generations.
        </p>
      </div>

      <div className="legacy-intro-divider" />

      <div style={{ paddingLeft: '56px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block',
        }}>
          Ways to Give a Legacy Gift
        </span>
        {[
          { icon: '📜', title: 'Bequest in Your Will or Trust', desc: 'Designate JoMabel Healthcare Foundation as a beneficiary in your will or living trust — a fixed amount, a percentage, or the residue of your estate.' },
          { icon: '🏦', title: 'Beneficiary Designation', desc: 'Name the foundation as a beneficiary on life insurance policies, retirement accounts (IRA, 401k), or investment accounts.' },
          { icon: '🤝', title: 'Charitable Gift Annuity', desc: 'Make a gift and receive fixed income payments for life, with the remainder supporting JoMabel\'s mission upon your passing.' },
          { icon: '🏛️', title: 'Endowment Fund', desc: 'Establish a named endowment in your honor or a loved one\'s — creating a permanent fund whose earnings support our programs in perpetuity.' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'var(--color-primary-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div>
              <p style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--color-navy)', margin: '0 0 4px' }}>{item.title}</p>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: '1.65', margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── NAMING OPPORTUNITIES ─────────────────────────────────────────────────────
const namingOpportunities = [
  {
    tier: 'Founding Benefactor',
    amount: '$250,000+',
    amountNgn: '₦400M+',
    color: '#b45309',
    bg: '#fef3c7',
    badge: 'Highest Honor',
    perks: [
      'Name a major facility or wing of the campus',
      'Permanent engraved plaque at the main entrance',
      'Named in all official foundation publications',
      'Invited to the campus dedication ceremony',
      'Recognized in the Foundation Hall of Honor',
    ],
  },
  {
    tier: 'Legacy Builder',
    amount: '$100,000+',
    amountNgn: '₦160M+',
    color: '#1d4ed8',
    bg: '#dbeafe',
    badge: 'Distinguished',
    perks: [
      'Name a clinic, ward, or training room',
      'Engraved recognition plaque in the facility',
      'Listed in the foundation\'s annual legacy report',
      'Invited to legacy donor events',
      'Recognized on the foundation website',
    ],
  },
  {
    tier: 'Community Pillar',
    amount: '$25,000+',
    amountNgn: '₦40M+',
    color: '#15803d',
    bg: '#dcfce7',
    badge: 'Honored',
    perks: [
      'Name a piece of medical equipment or resource center',
      'Recognition on the Legacy Donors Wall',
      'Named in legacy giving publications',
      'Personal thank-you from Dr. Clara Ada Ogbaa',
      'Annual impact update on your named gift',
    ],
  },
];

const NamingOpportunities = () => (
  <section id="naming-section" className="naming-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
      <span style={{
        fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
        letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        Naming Opportunities
      </span>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700',
        color: 'var(--color-navy)', margin: '12px 0 8px',
      }}>
        Attach Your Name to a Lasting Legacy
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75' }}>
        Honor yourself, a loved one, or someone whose memory you want to
        preserve — permanently embedded in the story of this campus.
      </p>
    </div>

    <div className="naming-grid">
      {namingOpportunities.map((opp, i) => (
        <div key={i} className="naming-card">
          <div className="naming-card-top">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  background: opp.bg, color: opp.color,
                  fontSize: '10px', fontWeight: '700',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: '999px', marginBottom: '10px',
                }}>
                  {opp.badge}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '17px', fontWeight: '700',
                  color: 'var(--color-navy)', margin: 0,
                }}>
                  {opp.tier}
                </h3>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: '800', color: opp.color, marginBottom: '4px' }}>
              {opp.amount}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '18px' }}>{opp.amountNgn}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {opp.perks.map((perk, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M20 6L9 17l-5-5" stroke={opp.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{perk}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="naming-card-footer">
            <button
              onClick={() => { const el = document.getElementById('legacy-form'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                width: '100%', padding: '11px', borderRadius: '8px',
                border: `1.5px solid ${opp.color}`, backgroundColor: 'transparent',
                color: opp.color, fontSize: '13px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
              }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = opp.bg; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Inquire About This Opportunity
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── MEMORIAL BRICKS ──────────────────────────────────────────────────────────
const brickNames = [
  'In Memory of\nChukwuemeka Eze', 'In Honor of\nDr. & Mrs. Okafor',
  'The Adeyemi\nFamily', '', 'In Memory of\nChioma Nwosu',
  'In Honor of\nNurse Grace Ibe', 'The Obi\nFamily Legacy', '',
  'In Memory of\nProf. Emmanuel', '', '', 'In Honor of\nDr. Clara Ogbaa',
];

const MemorialBricks = () => (
  <section className="bricks-section">
    <div className="bricks-grid">
      {/* Left — text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          Memorial Dedication Bricks
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          color: '#ffffff', fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: '700', lineHeight: '1.25', margin: 0,
        }}>
          Engrave a Name.<br />Preserve a Memory.
        </h2>
        <p style={{ color: '#bfdbfe', fontSize: '14px', lineHeight: '1.85', margin: 0 }}>
          Dedication bricks will be permanently installed in the JoMabel Medical
          Campus courtyard and walkways — a living memorial garden where patients,
          families, and visitors will walk for generations, reading the names of
          those who made this campus possible.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '4px' }}>
          {[
            { label: 'Standard Brick', price: '$500 / ₦800,000', desc: 'Name + dedication — installed in the Memorial Walkway' },
            { label: 'Legacy Brick', price: '$1,000 / ₦1.6M', desc: 'Name + dedication + family crest or symbol option' },
            { label: 'Foundation Stone', price: '$5,000 / ₦8M', desc: 'Prominent courtyard placement + certificate of dedication' },
          ].map((tier, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(41,197,246,0.20)',
              borderRadius: '10px', padding: '14px 18px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
            }}>
              <div>
                <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: '0 0 3px' }}>{tier.label}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', margin: 0 }}>{tier.desc}</p>
              </div>
              <span style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: '800', flexShrink: 0 }}>{tier.price}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => { const el = document.getElementById('legacy-form'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            alignSelf: 'flex-start',
            backgroundColor: 'var(--color-green)', color: '#fff', border: 'none',
            borderRadius: 'var(--btn-radius)', padding: '12px 28px',
            fontSize: '14px', fontWeight: '700', cursor: 'pointer',
            fontFamily: 'inherit', marginTop: '8px', transition: 'var(--transition)',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-green-dark)')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-green)')}
        >
          Dedicate a Brick
        </button>
      </div>

      {/* Right — brick wall visual */}
      <div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Preview — Memorial Walkway
        </p>
        <div className="brick-sample-grid">
          {brickNames.map((name, i) => (
            <div key={i} className={`brick-tile${!name ? ' empty' : ''}`}>
              {name && (
                <p style={{ color: '#e0f2fe', fontSize: '10px', lineHeight: '1.5', margin: 0, whiteSpace: 'pre-line', fontWeight: '600' }}>
                  {name}
                </p>
              )}
            </div>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', marginTop: '12px', fontStyle: 'italic', margin: '12px 0 0' }}>
          * Sample names shown for illustration. Your name will be engraved on actual campus bricks.
        </p>
      </div>
    </div>
  </section>
);

// ─── CIRCLE OF DIGNITY ────────────────────────────────────────────────────────
const circleTiers = [
  {
    name: 'Platinum Circle',
    threshold: '$50,000+',
    thresholdNgn: '₦80M+',
    color: '#475569',
    bg: '#f1f5f9',
    border: '#94a3b8',
    icon: '⬟',
    perks: ['Lifetime honorary membership', 'Named in all foundation communications', 'Annual personal briefing from Dr. Ogbaa', 'Invited to all major foundation events', 'Prominent recognition on donors wall'],
  },
  {
    name: 'Gold Circle',
    threshold: '$25,000+',
    thresholdNgn: '₦40M+',
    color: '#92400e',
    bg: '#fef3c7',
    border: '#d97706',
    icon: '◈',
    perks: ['Founding member recognition', 'Named in annual reports', 'Invited to legacy donor reception', 'Quarterly foundation updates', 'Recognition on foundation website'],
  },
  {
    name: 'Silver Circle',
    threshold: '$10,000+',
    thresholdNgn: '₦16M+',
    color: '#1e3a8a',
    bg: '#dbeafe',
    border: '#3b82f6',
    icon: '◇',
    perks: ['Recognition in annual report', 'Named on legacy donors wall', 'Invited to annual legacy event', 'Regular impact updates', 'Certificate of appreciation'],
  },
  {
    name: 'Dignity Circle',
    threshold: '$5,000+',
    thresholdNgn: '₦8M+',
    color: '#166534',
    bg: '#dcfce7',
    border: '#16a34a',
    icon: '○',
    perks: ['Legacy donor recognition', 'Named in foundation newsletters', 'Annual update on your impact', 'Certificate of legacy commitment', 'Personal thank-you from Dr. Ogbaa'],
  },
];

const CircleOfDignity = () => (
  <section className="cod-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
      <span style={{
        fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
        letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        Our Giving Society
      </span>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700',
        color: 'var(--color-navy)', margin: '12px 0 8px',
      }}>
        The Circle of Dignity
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75' }}>
        The Circle of Dignity honors those who make a significant commitment
        to the JoMabel legacy — with lifetime recognition tied to the very
        campus their generosity helped build.
      </p>
    </div>

    <div className="cod-tiers">
      {circleTiers.map((tier, i) => (
        <div key={i} className="cod-tier" style={{
          background: tier.bg,
          border: `2px solid ${tier.border}`,
        }}>
          <div style={{ fontSize: '28px', color: tier.color }}>{tier.icon}</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: '700', color: tier.color, margin: 0 }}>
            {tier.name}
          </h3>
          <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: '800', color: tier.color, margin: 0 }}>{tier.threshold}</p>
          <p style={{ fontSize: '11.5px', color: tier.color, opacity: 0.7, margin: 0 }}>{tier.thresholdNgn}</p>
          <div style={{ borderTop: `1px solid ${tier.border}`, paddingTop: '12px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tier.perks.map((perk, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M20 6L9 17l-5-5" stroke={tier.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.55' }}>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── QUOTE STRIP ──────────────────────────────────────────────────────────────
const LegacyQuoteStrip = () => (
  <section className="legacy-quote-strip">
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" style={{ marginBottom: '20px' }}>
        <path d="M0 28V16.8C0 12.2667 1.2 8.4 3.6 5.2C6.06667 1.93333 9.6 0 14.2 0L15.6 3.2C12.9333 3.86667 10.8 5.4 9.2 7.8C7.66667 10.1333 6.9 12.6667 6.9 15.4H13V28H0ZM20.4 28V16.8C20.4 12.2667 21.6 8.4 24 5.2C26.4667 1.93333 30 0 34.6 0L36 3.2C33.3333 3.86667 31.2 5.4 29.6 7.8C28.0667 10.1333 27.3 12.6667 27.3 15.4H33.4V28H20.4Z" fill="var(--color-primary)"/>
      </svg>
      <blockquote style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(18px, 3vw, 26px)',
        fontWeight: '700', color: 'var(--color-navy)',
        lineHeight: '1.45', fontStyle: 'italic',
        margin: '0 0 20px',
      }}>
        "Healthcare should never be a privilege reserved for a few. It is a human right —
        and it is the legacy we are called to leave."
      </blockquote>
      <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-primary-dark)', letterSpacing: '0.06em', margin: 0 }}>
        — Dr. Clara Ada Ogbaa, Founder
      </p>
    </div>
  </section>
);

// ─── LEGACY FORM ──────────────────────────────────────────────────────────────
const LegacyForm = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    giftType: '', amount: '', dedication: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, val: string) => setForm(f => ({ ...f, [field]: val }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="legacy-form" className="legacy-form-section">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '40px 20px' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'var(--color-green-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="var(--color-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '14px' }}>
            Thank You, {form.firstName}.
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
            Your legacy intention has been received. Dr. Clara Ada Ogbaa or a
            member of the JoMabel team will reach out to you personally within
            3–5 business days to discuss next steps.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            Questions? Email us at{' '}
            <a href="mailto:claraogbaa2022@gmail.com" style={{ color: 'var(--color-primary-dark)', fontWeight: '600' }}>
              claraogbaa2022@gmail.com
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="legacy-form" className="legacy-form-section">
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Express Your Intent
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700',
            color: 'var(--color-navy)', margin: '12px 0 10px',
          }}>
            Begin Your Legacy Conversation
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.75' }}>
            Complete this form and we will reach out personally to discuss how
            your legacy gift can make the greatest possible impact.
          </p>
        </div>

        <div className="legacy-form-grid">
          {/* Left — form fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-field">
                <label className="form-label">First Name *</label>
                <input className="form-input" placeholder="Clara" value={form.firstName} onChange={e => update('firstName', e.target.value)} />
              </div>
              <div className="form-field">
                <label className="form-label">Last Name *</label>
                <input className="form-input" placeholder="Ogbaa" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Email Address *</label>
              <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div className="form-field">
              <label className="form-label">Phone Number</label>
              <input className="form-input" placeholder="+1 (512) 000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
            <div className="form-field">
              <label className="form-label">Type of Legacy Gift</label>
              <select className="form-select" value={form.giftType} onChange={e => update('giftType', e.target.value)}>
                <option value="">Select an option</option>
                <option value="bequest">Bequest in Will or Trust</option>
                <option value="beneficiary">Beneficiary Designation</option>
                <option value="annuity">Charitable Gift Annuity</option>
                <option value="endowment">Endowment Fund</option>
                <option value="brick">Memorial Dedication Brick</option>
                <option value="naming">Naming Opportunity</option>
                <option value="other">Other / Not Sure Yet</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Approximate Gift Amount (Optional)</label>
              <input className="form-input" placeholder="e.g. $10,000 or ₦16,000,000" value={form.amount} onChange={e => update('amount', e.target.value)} />
            </div>
            <div className="form-field">
              <label className="form-label">Dedication / Honoree Name (if applicable)</label>
              <input className="form-input" placeholder="In memory of / In honor of…" value={form.dedication} onChange={e => update('dedication', e.target.value)} />
            </div>
            <div className="form-field">
              <label className="form-label">Message or Questions</label>
              <textarea className="form-textarea" placeholder="Tell us anything that would help us serve you better…" value={form.message} onChange={e => update('message', e.target.value)} />
            </div>
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: 'var(--color-navy)', color: '#fff', border: 'none',
                borderRadius: '10px', padding: '16px', fontSize: '15px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0d1f4e')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
            >
              Submit Legacy Intention
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <p style={{ fontSize: '11.5px', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
              Your information is confidential and will only be used to follow up on your legacy intentions.
            </p>
          </div>

          {/* Right — contact + reassurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Photo */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src={outreach3}
                alt="JoMabel team"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Reassurance */}
            <div style={{
              background: 'var(--color-navy)',
              borderRadius: '14px', padding: '28px',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}>
              <p style={{ color: 'var(--color-primary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                What Happens Next
              </p>
              {[
                { step: '01', text: 'We receive your legacy intention form confidentially.' },
                { step: '02', text: 'Dr. Clara Ada Ogbaa or a team member reaches out personally within 3–5 days.' },
                { step: '03', text: 'We work with you at your own pace — no pressure, no rush.' },
                { step: '04', text: 'Your legacy is confirmed, documented, and permanently honored.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{
                    color: 'var(--color-primary)', fontSize: '12px',
                    fontWeight: '800', minWidth: '24px', flexShrink: 0,
                  }}>{item.step}</span>
                  <p style={{ color: '#bfdbfe', fontSize: '13px', lineHeight: '1.65', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div style={{
              border: '1px solid var(--color-border)',
              borderRadius: '14px', padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '12px',
            }}>
              <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>
                Prefer to speak directly?
              </p>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>
                Dr. Clara Ada Ogbaa welcomes personal conversations about legacy giving.
              </p>
              <a href="mailto:claraogbaa2022@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'var(--color-primary-dark)', fontSize: '13px', fontWeight: '600', textDecoration: 'none',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/></svg>
                claraogbaa2022@gmail.com
              </a>
              <a href="tel:+15125080277" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'var(--color-primary-dark)', fontSize: '13px', fontWeight: '600', textDecoration: 'none',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 12 19.79 19.79 0 01.47 3.36 2 2 0 012.45 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.29 6.29l.79-.79a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5"/></svg>
                +1 (512) 508-0277
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── LEGACY GIVING PAGE ───────────────────────────────────────────────────────
const LegacyGiving = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{legacyStyles}</style>
    <Navbar />
    <LegacyHero />
    <LegacyIntro />
    <NamingOpportunities />
    <MemorialBricks />
    <CircleOfDignity />
    <LegacyQuoteStrip />
    <LegacyForm />
    <Footer />
  </div>
);

export default LegacyGiving;