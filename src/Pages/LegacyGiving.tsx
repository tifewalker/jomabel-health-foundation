import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Mail, Phone, Heart, Shield, Star, Check } from 'lucide-react';

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

  /* ─── INTRO ─────────────────────────────────────── */
  .legacy-intro {
    background: #ffffff;
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
    background: #E5E7EB;
    width: 1px;
    align-self: stretch;
  }

  /* ─── NAMING OPPORTUNITIES ──────────────────────── */
  .naming-section {
    background: #F9FAFB;
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
    background: #ffffff;
    border: 1px solid #E5E7EB;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .naming-card:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transform: translateY(-3px);
    border-color: #1D8FD4;
  }
  .naming-card-top {
    padding: 28px 28px 20px;
    flex: 1;
  }
  .naming-card-footer {
    padding: 16px 28px 22px;
    border-top: 1px solid #E5E7EB;
    background: #F9FAFB;
  }

  /* ─── MEMORIAL BRICKS ───────────────────────────── */
  .bricks-section {
    background: #ffffff;
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
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-align: center;
    transition: all 0.2s;
    cursor: default;
  }
  .brick-tile:hover {
    background: #EBF5FB;
    border-color: #1D8FD4;
  }
  .brick-tile.empty { opacity: 0.30; }

  /* ─── CIRCLE OF DIGNITY ─────────────────────────── */
  .cod-section {
    background: #F9FAFB;
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
    transition: all 0.2s;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .cod-tier:hover { transform: translateY(-3px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

  /* ─── QUOTE STRIP ───────────────────────────────── */
  .legacy-quote-strip {
    background: #ffffff;
    padding: clamp(36px, 5vw, 60px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
    text-align: center;
  }

  /* ─── LEGACY FORM ───────────────────────────────── */
  .legacy-form-section {
    background: #F9FAFB;
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
  .form-field { display: flex; flex-direction: column; gap: 6px; }
  .form-label { font-size: 12px; font-weight: 600; color: #374151; }
  .form-input {
    padding: 11px 14px; border: 1.5px solid #E5E7EB; border-radius: 8px;
    font-size: 13.5px; color: #111827; font-family: inherit; outline: none;
    transition: border-color 0.15s; background: #ffffff;
  }
  .form-input:focus { border-color: #1D8FD4; }
  .form-textarea {
    padding: 11px 14px; border: 1.5px solid #E5E7EB; border-radius: 8px;
    font-size: 13.5px; color: #111827; font-family: inherit; outline: none;
    resize: vertical; min-height: 110px; transition: border-color 0.15s; background: #ffffff;
  }
  .form-textarea:focus { border-color: #1D8FD4; }
  .form-select {
    padding: 11px 14px; border: 1.5px solid #E5E7EB; border-radius: 8px;
    font-size: 13.5px; color: #111827; font-family: inherit; outline: none;
    background: #ffffff; cursor: pointer; transition: border-color 0.15s;
  }
  .form-select:focus { border-color: #1D8FD4; }

  /* Animation Classes */
  .naming-section.visible .naming-card:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
  .naming-section.visible .naming-card:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
  .naming-section.visible .naming-card:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
  
  .cod-section.visible .cod-tier:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
  .cod-section.visible .cod-tier:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
  .cod-section.visible .cod-tier:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
  .cod-section.visible .cod-tier:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
  
  .bricks-section.visible .bricks-grid > div:first-child,
  .bricks-section.visible .bricks-grid > div:last-child {
    opacity: 1;
    transform: translateY(0);
  }
  .bricks-grid > div:first-child,
  .bricks-grid > div:last-child {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .bricks-section.visible .bricks-grid > div:first-child { transition-delay: 0.1s; }
  .bricks-section.visible .bricks-grid > div:last-child { transition-delay: 0.2s; }
  
  .legacy-quote-strip.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .legacy-quote-strip {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .legacy-form-section.visible .legacy-form-grid {
    opacity: 1;
    transform: translateY(0);
  }
  .legacy-form-grid {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .legacy-intro.visible .legacy-intro-grid > div:first-child,
  .legacy-intro.visible .legacy-intro-grid > div:last-child {
    opacity: 1;
    transform: translateY(0);
  }
  .legacy-intro-grid > div:first-child,
  .legacy-intro-grid > div:last-child {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .legacy-intro.visible .legacy-intro-grid > div:first-child { transition-delay: 0.1s; }
  .legacy-intro.visible .legacy-intro-grid > div:last-child { transition-delay: 0.2s; }

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
    .legacy-form-grid { gap: 28px; }
  }
`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const LegacyHero = () => {
  const navigate = useNavigate();
  return (
    <section className="legacy-hero">
      <img src={an1} alt="JoMabel Medical Center" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,55,0.95) 0%, rgba(15,30,70,0.78) 55%, rgba(15,30,70,0.25) 100%)' }} />
      <div className="legacy-hero-content">
        <span style={{ display: 'inline-block', background: 'rgba(41,197,246,0.15)', border: '1px solid rgba(41,197,246,0.35)', color: '#29C5F6', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: '999px', marginBottom: '22px' }}>
          Legacy Giving
        </span>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: '700', lineHeight: '1.15', marginBottom: '18px' }}>
          Leave a Legacy That<br /><span style={{ color: '#29C5F6' }}>Heals Generations</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.85', marginBottom: '32px', maxWidth: '500px' }}>
          Your legacy gift to JoMabel Healthcare Foundation ensures that dignified,
          accessible healthcare reaches communities in Ufuma, Anambra State for generations to come.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button onClick={() => { const el = document.getElementById('legacy-form'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ backgroundColor: '#16A34A', color: '#fff', border: 'none', borderRadius: '8px', padding: '13px 28px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#15803D')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#16A34A')}>
            Express Your Intent
            <ArrowRight size={16} />
          </button>
          <button onClick={() => { const el = document.getElementById('naming-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.40)', borderRadius: '8px', padding: '13px 28px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.20)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)')}>
            Explore Legacy Options
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── INTRO ────────────────────────────────────────────────────────────────────
const LegacyIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`legacy-intro ${isVisible ? 'visible' : ''}`}>
      <div className="legacy-intro-grid">
        <div style={{ paddingRight: '56px' }}>
          <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            Why Legacy Giving
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', lineHeight: '1.25', marginBottom: '20px' }}>
            A Gift That Outlives<br />a Lifetime
          </h2>
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', marginBottom: '16px' }}>
            A legacy gift is one of the most profound acts of generosity 
            it declares that your values, your compassion, and your commitment
            to human dignity will continue to shape the world long after you are gone.
          </p>
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
            By including JoMabel Healthcare Foundation in your estate plans, you
            become part of a living legacy of healing helping to build and sustain
            a world-class medical center that will serve thousands of families in
            southeastern Nigeria for generations.
          </p>
        </div>
        <div className="legacy-intro-divider" />
        <div style={{ paddingLeft: '56px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
            Ways to Give a Legacy Gift
          </span>
          {[
            { icon: Heart, title: 'Bequest in Your Will or Trust', desc: 'Designate JoMabel Healthcare Foundation as a beneficiary in your will or living trust — a fixed amount, a percentage, or the residue of your estate.' },
            { icon: Shield, title: 'Beneficiary Designation', desc: 'Name the foundation as a beneficiary on life insurance policies, retirement accounts (IRA, 401k), or investment accounts.' },
            { icon: Star, title: 'Charitable Gift Annuity', desc: 'Make a gift and receive fixed income payments for life, with the remainder supporting JoMabel\'s mission upon your passing.' },
            { icon: Heart, title: 'Endowment Fund', desc: 'Establish a named endowment in your honor or a loved one\'s — creating a permanent fund whose earnings support our programs in perpetuity.' },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EBF5FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1D8FD4' }}>
                  <IconComponent size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '13.5px', fontWeight: '700', color: '#111827', margin: '0 0 4px' }}>{item.title}</p>
                  <p style={{ fontSize: '12.5px', color: '#4B5563', lineHeight: '1.65', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── NAMING OPPORTUNITIES ─────────────────────────────────────────────────────
const namingOpportunities = [
  { tier: 'Founding Benefactor', amount: '$250,000+', amountNgn: '₦400M+', color: '#b45309', bg: '#fef3c7', badge: 'Highest Honor',
    perks: ['Name a major facility or wing of the center', 'Permanent engraved plaque at the main entrance', 'Named in all official foundation publications', 'Invited to the center dedication ceremony', 'Recognized in the Foundation Hall of Honor'] },
  { tier: 'Legacy Builder', amount: '$100,000+', amountNgn: '₦160M+', color: '#1d4ed8', bg: '#dbeafe', badge: 'Distinguished',
    perks: ['Name a clinic, ward, or training room', 'Engraved recognition plaque in the facility', 'Listed in the foundation\'s annual legacy report', 'Invited to legacy donor events', 'Recognized on the foundation website'] },
  { tier: 'Community Pillar', amount: '$25,000+', amountNgn: '₦40M+', color: '#15803d', bg: '#dcfce7', badge: 'Honored',
    perks: ['Name a piece of medical equipment or resource center', 'Recognition on the Legacy Donors Wall', 'Named in legacy giving publications', 'Personal thank-you from Clara Ada Ogbaa', 'Annual impact update on your named gift'] },
];

const NamingOpportunities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="naming-section" className={`naming-section ${isVisible ? 'visible' : ''}`}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
          Naming Opportunities
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
          Attach Your Name to a Lasting Legacy
        </h2>
        <p style={{ fontSize: '14px', color: '#4B5563', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75' }}>
          Honor yourself, a loved one, or someone whose memory you want to preserve permanently embedded in the story of this center.
        </p>
      </div>
      <div className="naming-grid">
        {namingOpportunities.map((opp, i) => (
          <div key={i} className="naming-card">
            <div className="naming-card-top">
              <span style={{ display: 'inline-block', background: opp.bg, color: opp.color, fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', marginBottom: '10px' }}>{opp.badge}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>{opp.tier}</h3>
              <p style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: '800', color: opp.color, marginBottom: '4px' }}>{opp.amount}</p>
              <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '18px' }}>{opp.amountNgn}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {opp.perks.map((perk, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                    <Check size={14} style={{ flexShrink: 0, marginTop: '2px', color: opp.color }} />
                    <span style={{ fontSize: '12.5px', color: '#4B5563', lineHeight: '1.6' }}>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="naming-card-footer">
              <button onClick={() => { const el = document.getElementById('legacy-form'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ width: '100%', padding: '11px', borderRadius: '8px', border: `1.5px solid ${opp.color}`, backgroundColor: 'transparent', color: opp.color, fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = opp.bg; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Inquire About This Opportunity
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── MEMORIAL BRICKS ──────────────────────────────────────────────────────────
const brickNames = [
  'In Memory of\nChukwuemeka Eze', 'In Honor of\nDr. & Mrs. Okafor',
  'The Adeyemi\nFamily', '', 'In Memory of\nChioma Nwosu',
  'In Honor of\nNurse Grace Ibe', 'The Obi\nFamily Legacy', '',
  'In Memory of\nProf. Emmanuel', '', '', 'In Honor of\nClara Ogbaa',
];

const MemorialBricks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`bricks-section ${isVisible ? 'visible' : ''}`}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
            Memorial Dedication Bricks
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#111827', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', lineHeight: '1.25', margin: '12px 0 0' }}>
            Engrave a Name. Preserve a Memory.
          </h2>
        </div>

        <div className="bricks-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.85', margin: 0 }}>
              Dedication bricks will be permanently installed in the JoMabel Medical
              Center courtyard and walkways a living memorial garden where patients,
              families, and visitors will walk for generations, reading the names of
              those who made this center possible.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Standard Brick', price: '$500 / ₦800,000', desc: 'Name + dedication — installed in the Memorial Walkway' },
                { label: 'Legacy Brick', price: '$1,000 / ₦1.6M', desc: 'Name + dedication + family crest or symbol option' },
                { label: 'Foundation Stone', price: '$5,000 / ₦8M', desc: 'Prominent courtyard placement + certificate of dedication' },
              ].map((tier, i) => (
                <div key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: '3px solid #1D8FD4', borderRadius: '10px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <p style={{ color: '#111827', fontSize: '13px', fontWeight: '700', margin: '0 0 3px' }}>{tier.label}</p>
                    <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>{tier.desc}</p>
                  </div>
                  <span style={{ color: '#1D8FD4', fontSize: '13px', fontWeight: '800', flexShrink: 0 }}>{tier.price}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { const el = document.getElementById('legacy-form'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ alignSelf: 'flex-start', backgroundColor: '#16A34A', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 28px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', marginTop: '8px', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#15803D')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#16A34A')}>
              Dedicate a Brick
              <ArrowRight size={14} />
            </button>
          </div>

          <div>
            <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: '600', letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Preview — Memorial Walkway
            </p>
            <div className="brick-sample-grid">
              {brickNames.map((name, i) => (
                <div key={i} className={`brick-tile${!name ? ' empty' : ''}`}>
                  {name && (
                    <p style={{ color: '#374151', fontSize: '10px', lineHeight: '1.5', margin: 0, whiteSpace: 'pre-line', fontWeight: '600' }}>
                      {name}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '11px', marginTop: '12px', fontStyle: 'italic' }}>
              * Sample names shown for illustration only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CIRCLE OF DIGNITY ────────────────────────────────────────────────────────
const circleTiers = [
  { name: 'Platinum Circle', threshold: '$50,000+', thresholdNgn: '₦80M+', color: '#475569', bg: '#f1f5f9', border: '#94a3b8', icon: Star, perks: ['Lifetime honorary membership', 'Named in all foundation communications', 'Annual personal briefing from Clara Ada Ogbaa', 'Invited to all major foundation events', 'Prominent recognition on donors wall'] },
  { name: 'Gold Circle', threshold: '$25,000+', thresholdNgn: '₦40M+', color: '#92400e', bg: '#fef3c7', border: '#d97706', icon: Star, perks: ['Founding member recognition', 'Named in annual reports', 'Invited to legacy donor reception', 'Quarterly foundation updates', 'Recognition on foundation website'] },
  { name: 'Silver Circle', threshold: '$10,000+', thresholdNgn: '₦16M+', color: '#1e3a8a', bg: '#dbeafe', border: '#3b82f6', icon: Star, perks: ['Recognition in annual report', 'Named on legacy donors wall', 'Invited to annual legacy event', 'Regular impact updates', 'Certificate of appreciation'] },
  { name: 'Dignity Circle', threshold: '$5,000+', thresholdNgn: '₦8M+', color: '#166534', bg: '#dcfce7', border: '#16a34a', icon: Heart, perks: ['Legacy donor recognition', 'Named in foundation newsletters', 'Annual update on your impact', 'Certificate of legacy commitment', 'Personal thank-you from Clara Ada Ogbaa'] },
];

const CircleOfDignity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`cod-section ${isVisible ? 'visible' : ''}`}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
          Our Giving Society
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
          The Circle of Dignity
        </h2>
        <p style={{ fontSize: '14px', color: '#4B5563', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75' }}>
          The Circle of Dignity honors those who make a significant commitment to the JoMabel legacy with lifetime recognition tied to the very center their generosity helped build.
        </p>
      </div>
      <div className="cod-tiers">
        {circleTiers.map((tier, i) => {
          const IconComponent = tier.icon;
          return (
            <div key={i} className="cod-tier" style={{ background: tier.bg, border: `2px solid ${tier.border}` }}>
              <div style={{ fontSize: '28px', color: tier.color }}>
                <IconComponent size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: '700', color: tier.color, margin: 0 }}>{tier.name}</h3>
              <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: '800', color: tier.color, margin: 0 }}>{tier.threshold}</p>
              <p style={{ fontSize: '11.5px', color: tier.color, opacity: 0.7, margin: 0 }}>{tier.thresholdNgn}</p>
              <div style={{ borderTop: `1px solid ${tier.border}`, paddingTop: '12px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tier.perks.map((perk, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Check size={12} style={{ flexShrink: 0, marginTop: '3px', color: tier.color }} />
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.55' }}>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ─── QUOTE STRIP ──────────────────────────────────────────────────────────────
const LegacyQuoteStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`legacy-quote-strip ${isVisible ? 'visible' : ''}`}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <Heart size={36} style={{ margin: '0 auto 20px', color: '#1D8FD4' }} />
        <blockquote style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: '700', color: '#111827', lineHeight: '1.45', fontStyle: 'italic', margin: '0 0 20px' }}>
          "Healthcare should never be a privilege reserved for a few. It is a human right
          and it is the legacy we are called to leave."
        </blockquote>
        <p style={{ fontSize: '13px', fontWeight: '700', color: '#1D8FD4', letterSpacing: '0.06em', margin: 0, textTransform: 'uppercase' }}>
          — Clara Ada Ogbaa, Ed.D., Founder
        </p>
      </div>
    </section>
  );
};

// ─── LEGACY FORM ──────────────────────────────────────────────────────────────
const LegacyForm = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', giftType: '', amount: '', dedication: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const update = (field: string, val: string) => setForm(f => ({ ...f, [field]: val }));
  const handleSubmit = () => { if (!form.firstName || !form.email) return; setSubmitted(true); };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (submitted) {
    return (
      <section id="legacy-form" className="legacy-form-section">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Check size={32} color="#16A34A" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '700', color: '#111827', marginBottom: '14px' }}>Thank You, {form.firstName}.</h2>
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', marginBottom: '24px' }}>
            Your legacy intention has been received. Clara Ada Ogbaa or a member of the JoMabel team will reach out to you personally within 3–5 business days.
          </p>
          <p style={{ fontSize: '13px', color: '#6B7280' }}>
            Questions? Email us at <a href="mailto:claraogbaa2022@gmail.com" style={{ color: '#1D8FD4', fontWeight: '600' }}>claraogbaa2022@gmail.com</a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="legacy-form" className={`legacy-form-section ${isVisible ? 'visible' : ''}`}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '14px' }}>
            Express Your Intent
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '700', color: '#111827', margin: '0 0 10px' }}>
            Begin Your Legacy Conversation
          </h2>
          <p style={{ fontSize: '14px', color: '#4B5563', maxWidth: '520px', margin: '0 auto', lineHeight: '1.75' }}>
            Complete this form and we will reach out personally to discuss how your legacy gift can make the greatest possible impact.
          </p>
        </div>

        <div className="legacy-form-grid">
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
            <button onClick={handleSubmit}
              style={{ backgroundColor: '#111827', color: '#fff', border: 'none', borderRadius: '10px', padding: '16px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#1D8FD4')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#111827')}>
              Submit Legacy Intention
              <ArrowRight size={16} />
            </button>
            <p style={{ fontSize: '11.5px', color: '#9CA3AF', textAlign: 'center', margin: 0 }}>
              Your information is confidential and will only be used to follow up on your legacy intentions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <img src={outreach3} alt="JoMabel team" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>

            <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{ color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                What Happens Next
              </p>
              {[
                { step: '01', text: 'We receive your legacy intention form confidentially.' },
                { step: '02', text: 'Clara Ada Ogbaa or a team member reaches out personally within 3–5 days.' },
                { step: '03', text: 'We work with you at your own pace — no pressure, no rush.' },
                { step: '04', text: 'Your legacy is confirmed, documented, and permanently honored.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ color: '#1D8FD4', fontSize: '12px', fontWeight: '800', minWidth: '24px', flexShrink: 0 }}>{item.step}</span>
                  <p style={{ color: '#0369A1', fontSize: '13px', lineHeight: '1.65', margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{ border: '1px solid #E5E7EB', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#ffffff' }}>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#111827', margin: 0 }}>Prefer to speak directly?</p>
              <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.7', margin: 0 }}>Clara Ada Ogbaa welcomes personal conversations about legacy giving.</p>
              <a href="mailto:claraogbaa2022@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1D8FD4', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <Mail size={14} />
                claraogbaa2022@gmail.com
              </a>
              <a href="tel:+15125080277" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1D8FD4', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <Phone size={14} />
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