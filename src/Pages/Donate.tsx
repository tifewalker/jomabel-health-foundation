import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignBanner from '../components/sections/CampaignBanner';

const donateStyles = `
  /* ─── HERO ─────────────────────────────────────── */
  .donate-hero {
    position: relative;
    min-height: 400px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }
  .donate-hero-content {
    position: relative;
    z-index: 2;
    padding: clamp(32px, 5vw, 56px) clamp(20px, 5vw, 64px);
    max-width: 680px;
  }
  .donate-hero-btns {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }
  .dh-btn-primary {
    background-color: var(--color-green);
    color: #fff; border: none;
    border-radius: var(--btn-radius);
    padding: 12px 26px;
    font-size: 13.5px; font-weight: 600; cursor: pointer;
    font-family: inherit; transition: var(--transition);
  }
  .dh-btn-primary:hover { background-color: var(--color-green-dark); }
  .dh-btn-outline {
    background-color: transparent; color: #fff;
    border: 1.5px solid rgba(255,255,255,0.45);
    border-radius: var(--btn-radius);
    padding: 12px 26px;
    font-size: 13.5px; font-weight: 600; cursor: pointer;
    font-family: inherit; transition: var(--transition);
  }
  .dh-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

  /* ─── DONATION LAYOUT ───────────────────────────── */
  .donation-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #ffffff;
    font-family: var(--font-body);
  }
  .donation-left {
    background: linear-gradient(160deg, #0d1f4e 0%, #1e3a8a 60%, #1e40af 100%);
    padding: clamp(32px, 4vw, 48px) clamp(24px, 3.5vw, 44px);
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .donation-right {
    padding: clamp(32px, 4vw, 48px) clamp(24px, 3.5vw, 44px);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .amount-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  /* ─── CURRENCY SWITCHER ─────────────────────────── */
  .currency-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-body);
  }
  .flag-emoji {
    font-size: 28px;
    line-height: 1.2;
    display: block;
    font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', 'Twemoji Mozilla', sans-serif !important;
  }
  .flag-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    font-family: var(--font-body);
  }

  /* ─── PAYMENT SECTION ───────────────────────────── */
  .payment-section {
    background-color: var(--color-surface);
    padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .payment-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
  }
  .payment-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
  }
  .payment-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
  .payment-card-nigeria { border-left: 4px solid #008751; }
  .payment-card-usa { border-left: 4px solid #002868; }
  .copy-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 10px 14px;
    gap: 10px;
  }
  .copy-btn {
    background: var(--color-navy);
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    font-family: inherit;
    transition: var(--transition);
    flex-shrink: 0;
  }
  .copy-btn:hover { background: var(--color-primary-dark); }
  .copy-btn.copied { background: var(--color-green); }

  /* ─── OTHER WAYS ────────────────────────────────── */
  .other-ways-section {
    background-color: var(--color-white);
    padding: clamp(40px, 5vw, 64px) clamp(16px, 4vw, 48px);
    font-family: var(--font-body);
  }
  .other-ways-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
  }

  /* ─── FAQ ───────────────────────────────────────── */
  .faq-header-block {
    text-align: center;
    padding: clamp(36px, 5vw, 56px) clamp(16px, 4vw, 48px) clamp(28px, 4vw, 48px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .faq-body {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 48px) clamp(40px, 5vw, 64px);
  }

  /* ─── RESPONSIVE ────────────────────────────────── */
  @media (max-width: 860px) {
    .donation-layout { grid-template-columns: 1fr; }
    .payment-grid { grid-template-columns: 1fr; max-width: 520px; }
  }
  @media (max-width: 600px) {
    .amount-grid { grid-template-columns: repeat(2, 1fr); }
    .other-ways-grid { grid-template-columns: 1fr; max-width: 400px; }
  }
  @media (max-width: 480px) {
    .donate-hero-btns { flex-direction: column; }
    .dh-btn-primary, .dh-btn-outline { width: 100%; text-align: center; }
    .amount-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

const labelSt: React.CSSProperties = {
  display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px',
};
const inputWrapSt: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '8px',
  border: '1.5px solid #e5e7eb', borderRadius: '8px',
  padding: '10px 12px', backgroundColor: '#ffffff',
};
const fieldSt: React.CSSProperties = {
  border: 'none', outline: 'none', fontSize: '13.5px',
  color: '#111827', width: '100%', backgroundColor: 'transparent',
};

// ─── COPY BUTTON ──────────────────────────────────────────────────────────────
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={handleCopy} className={`copy-btn${copied ? ' copied' : ''}`}>
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
};

// ─── DONATION HERO ────────────────────────────────────────────────────────────
const DonationHero = () => (
  <section className="donate-hero">
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
      alt="Healthcare training"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(13,31,78,0.92) 0%, rgba(30,58,138,0.60) 60%, rgba(13,31,78,0.20) 100%)',
    }} />
    <div className="donate-hero-content">
      <p style={{ color: 'var(--color-primary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '18px' }}>
        JoMabel Healthcare Foundation
      </p>
      <h1 style={{
        fontFamily: 'var(--font-heading)',
        color: '#ffffff', fontSize: 'clamp(26px, 4vw, 44px)',
        fontWeight: '700', lineHeight: '1.2', marginBottom: '16px',
      }}>
        Your Gift Builds<br />
        <span style={{ color: 'var(--color-primary)' }}>Generational Healthcare</span>
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.8', marginBottom: '28px', maxWidth: '480px' }}>
        Every dollar goes directly toward building Nigeria's next world-class
        medical and training campus — in Ufuma, Anambra State.
      </p>
      <div className="donate-hero-btns">
        <button className="dh-btn-primary" onClick={() => { const el = document.getElementById('payment-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
          Donate Now
        </button>
        <button className="dh-btn-outline" onClick={() => { const el = document.getElementById('faq-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
          Learn More
        </button>
      </div>
    </div>
  </section>
);

// ─── DONATION FORM ────────────────────────────────────────────────────────────
const usdAmounts = [25, 50, 100, 250, 500, 1000];
const ngnAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

const impacts = {
  usd: [
    { amount: '$50',    desc: 'Provides medications for 10 children at an outreach mission' },
    { amount: '$100',   desc: 'Funds a full day of free medical consultations for a community' },
    { amount: '$500',   desc: 'Equips a nurse with essential supplies for one month' },
    { amount: '$1,000', desc: 'Sponsors a full healthcare training scholarship for one student' },
  ],
  ngn: [
    { amount: '₦5,000',    desc: 'Provides medications for 10 children at an outreach mission' },
    { amount: '₦25,000',   desc: 'Funds a full day of free medical consultations for a community' },
    { amount: '₦50,000',   desc: 'Equips a nurse with essential supplies for one month' },
    { amount: '₦250,000',  desc: 'Sponsors a full healthcare training scholarship for one student' },
  ],
};

const DonationForm = () => {
  const [currency, setCurrency] = useState<'usd' | 'ngn'>('usd');
  const [selected, setSelected] = useState<number | null>(50);
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const symbol = currency === 'usd' ? '$' : '₦';
  const amounts = currency === 'usd' ? usdAmounts : ngnAmounts;

  const handleCurrencySwitch = (c: 'usd' | 'ngn') => {
    setCurrency(c);
    setSelected(c === 'usd' ? 50 : 10000);
    setCustom('');
  };

  const formatAmount = (amt: number) =>
    currency === 'usd' ? `$${amt.toLocaleString()}` : `₦${amt.toLocaleString()}`;

  return (
    <section style={{ backgroundColor: '#ffffff', fontFamily: 'var(--font-body)' }}>
      <div className="donation-layout">

        {/* LEFT — navy impact panel */}
        <div className="donation-left">
          <p style={{ color: 'var(--color-primary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
            Your Impact
          </p>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '400', lineHeight: 1.4, margin: 0 }}>
            Every Gift Directly Funds<br />
            <strong style={{ fontWeight: '800' }}>Healthcare in Ufuma,<br />Anambra State</strong>
          </h2>
          <p style={{ color: '#bfdbfe', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
            Your donation funds facility construction, medical equipment, and life-changing
            community health programs for families in southeastern Nigeria.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {impacts[currency].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '10px', padding: '13px 16px',
                display: 'flex', alignItems: 'flex-start', gap: '14px',
              }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: '800', minWidth: '68px', flexShrink: 0 }}>{item.amount}</span>
                <span style={{ color: '#bfdbfe', fontSize: '12.5px', lineHeight: '1.6' }}>{item.desc}</span>
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(58,165,53,0.15)',
            border: '1px solid rgba(58,165,53,0.35)',
            borderRadius: '10px', padding: '14px 18px',
          }}>
            <p style={{ color: '#86efac', fontSize: '12px', fontWeight: '700', margin: '0 0 4px', letterSpacing: '0.05em' }}>
              ✓ 501(c)(3) TAX-EXEMPT
            </p>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>
              JoMabel Healthcare Foundation USA INC. is a registered nonprofit.
              All donations are tax-deductible to the extent allowed by law.
            </p>
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="donation-right">
          <h3 style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', fontWeight: '700', color: '#111827', margin: 0 }}>
            Choose an amount to give
          </h3>

          {/* Currency switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>Currency:</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {(['usd', 'ngn'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => handleCurrencySwitch(c)}
                  className="currency-btn"
                  style={{
                    border: currency === c ? '2px solid var(--color-navy)' : '2px solid #e5e7eb',
                    backgroundColor: currency === c ? 'var(--color-navy-light)' : '#ffffff',
                    boxShadow: currency === c ? '0 0 0 3px rgba(27,42,74,0.10)' : 'none',
                  }}
                >
                  <span className="flag-emoji">{c === 'usd' ? '🇺🇸' : '🇳🇬'}</span>
                  <span className="flag-label" style={{ color: currency === c ? 'var(--color-navy)' : '#6b7280' }}>
                    {c === 'usd' ? 'USD $' : 'NGN ₦'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Amount preset buttons */}
          <div className="amount-grid">
            {amounts.map((amt) => (
              <button key={amt} onClick={() => { setSelected(amt); setCustom(''); }}
                style={{
                  padding: '14px 8px', borderRadius: '8px', cursor: 'pointer',
                  border: selected === amt ? '2px solid var(--color-navy)' : '1.5px solid #e5e7eb',
                  backgroundColor: selected === amt ? 'var(--color-navy-light)' : '#ffffff',
                  color: selected === amt ? 'var(--color-navy)' : '#374151',
                  fontSize: 'clamp(12px, 1.8vw, 15px)', fontWeight: '700',
                  transition: 'all 0.15s', fontFamily: 'inherit',
                }}>
                {formatAmount(amt)}
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
              color: '#9ca3af', fontSize: '14px', fontWeight: '600', pointerEvents: 'none',
            }}>{symbol}</span>
            <input
              type="number"
              placeholder="Enter a custom amount"
              value={custom}
              onChange={e => { setCustom(e.target.value); setSelected(null); }}
              style={{
                width: '100%', padding: '13px 16px 13px 28px',
                border: custom ? '1.5px solid var(--color-navy)' : '1.5px solid #e5e7eb',
                borderRadius: '8px', fontSize: '14px', color: '#111827',
                outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Name & Email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={labelSt}>Full Name</label>
              <div style={inputWrapSt}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="#9ca3af" strokeWidth="1.5"/></svg>
                <input placeholder="Your name" style={fieldSt} value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div>
              <label style={labelSt}>Email Address</label>
              <div style={inputWrapSt}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#9ca3af" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="#9ca3af" strokeWidth="1.5"/></svg>
                <input placeholder="your@email.com" style={fieldSt} value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
          </div>

          <button
            onClick={() => { const el = document.getElementById('payment-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              backgroundColor: 'var(--color-navy)', color: '#ffffff', border: 'none',
              borderRadius: '10px', padding: '16px', fontSize: '15px', fontWeight: '700',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              fontFamily: 'inherit', transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0d1f4e')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
          >
            See Payment Options
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <p style={{ fontSize: '11.5px', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
            🔒 JoMabel Healthcare Foundation USA INC. — Registered 501(c)(3) Nonprofit
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── PAYMENT METHODS ──────────────────────────────────────────────────────────
const PaymentMethods = () => (
  <section id="payment-section" className="payment-section">
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          How to Give
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(22px, 3vw, 30px)',
          fontWeight: '700', color: 'var(--color-navy)',
          margin: '12px 0 12px',
        }}>
          Payment Options
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: '1.75' }}>
          All accounts are registered under the foundation name.
          Choose your preferred method and use the details below to complete your gift.
        </p>
      </div>

      <div className="payment-grid">

        {/* PayPal */}
        <div className="payment-card payment-card-usa">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: '#003087', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 8c0-2.2 1.8-4 4-4h5c2.5 0 4 1.5 3.5 4-0.5 2.5-2.5 4-5 4h-2l-1 5H7.5L10 8H6Z" fill="#009cde"/>
                <path d="M4 10c0-2.2 1.8-4 4-4h5c2.5 0 4 1.5 3.5 4-0.5 2.5-2.5 4-5 4h-2l-1 5H5.5L8 10H4Z" fill="#ffffff" opacity="0.3"/>
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '18px', fontFamily: "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif" }}>🇺🇸</span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#002868', letterSpacing: '0.08em', textTransform: 'uppercase' }}>US Donors</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>PayPal</h3>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>
            Send your gift via PayPal to the foundation's registered account.
          </p>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>PayPal Link / Email</p>
            <div className="copy-field">
              <span style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>Account details to be provided</span>
              <CopyButton text="[PayPal — details to be provided by Dr. Ogbaa]" />
            </div>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', margin: 0 }}>
            Account name: <strong style={{ color: 'var(--color-navy)' }}>JoMabel Healthcare Foundation</strong>
          </p>
        </div>

        {/* Zelle */}
        <div className="payment-card payment-card-usa">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: '#6d1ed4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 17L17 7H9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 17h8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 7l-5 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '18px', fontFamily: "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif" }}>🇺🇸</span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#002868', letterSpacing: '0.08em', textTransform: 'uppercase' }}>US Donors</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>Zelle</h3>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>
            Send directly from your US bank app using Zelle — fast, free, and instant.
          </p>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Zelle Email / Phone Number</p>
            <div className="copy-field">
              <span style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>Account details to be provided</span>
              <CopyButton text="[Zelle — details to be provided by Dr. Ogbaa]" />
            </div>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', margin: 0 }}>
            Account name: <strong style={{ color: 'var(--color-navy)' }}>JoMabel Healthcare Foundation</strong>
          </p>
        </div>

        {/* Cash App */}
        <div className="payment-card payment-card-usa">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: '#00d632', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.5"/>
                <path d="M12 6v12M9.5 9.5h4a1.5 1.5 0 010 3h-3a1.5 1.5 0 000 3H15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '18px', fontFamily: "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif" }}>🇺🇸</span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#002868', letterSpacing: '0.08em', textTransform: 'uppercase' }}>US Donors</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>Cash App</h3>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>
            Use Cash App to send your gift using the foundation's $Cashtag.
          </p>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>$Cashtag</p>
            <div className="copy-field">
              <span style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>Account details to be provided</span>
              <CopyButton text="[Cash App — details to be provided by Dr. Ogbaa]" />
            </div>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', margin: 0 }}>
            Account name: <strong style={{ color: 'var(--color-navy)' }}>JoMabel Healthcare Foundation</strong>
          </p>
        </div>

        {/* First Bank Nigeria */}
        <div className="payment-card payment-card-nigeria">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: '#008751', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="#ffffff" strokeWidth="1.5"/>
                <path d="M2 10h20" stroke="#ffffff" strokeWidth="1.5"/>
                <path d="M6 14h3M11 14h3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '18px', fontFamily: "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif" }}>🇳🇬</span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#155724', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Nigeria Donors</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>First Bank Nigeria</h3>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>
            Transfer directly to the foundation's First Bank account via internet banking or mobile app.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Account Number</p>
              <div className="copy-field">
                <span style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>Account number to be provided</span>
                <CopyButton text="[First Bank account number — to be provided]" />
              </div>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Account Name</p>
              <div className="copy-field">
                <span style={{ fontSize: '13px', color: 'var(--color-navy)', fontWeight: '600' }}>JoMabel Healthcare Foundation</span>
                <CopyButton text="JoMabel Healthcare Foundation" />
              </div>
            </div>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', margin: 0 }}>
            Bank: <strong style={{ color: 'var(--color-navy)' }}>First Bank of Nigeria</strong>
          </p>
        </div>

      </div>

      {/* Confirmation note */}
      <div style={{
        marginTop: '40px', textAlign: 'center',
        background: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        borderRadius: '14px', padding: '28px 36px',
        maxWidth: '640px', margin: '40px auto 0',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '8px' }}>
          After Your Transfer
        </p>
        <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: '1.8', margin: 0 }}>
          Please send a confirmation to{' '}
          <a href="mailto:claraogbaa2022@gmail.com" style={{ color: 'var(--color-primary-dark)', fontWeight: '600' }}>
            claraogbaa2022@gmail.com
          </a>{' '}
          with your name, amount, and payment method so we can acknowledge your gift and issue a receipt.
          For any questions, call us at{' '}
          <a href="tel:+15125080277" style={{ color: 'var(--color-primary-dark)', fontWeight: '600' }}>
            +1 (512) 508-0277
          </a>.
        </p>
      </div>
    </div>
  </section>
);

// ─── OTHER WAYS TO GIVE ───────────────────────────────────────────────────────
const OtherWays = () => (
  <section className="other-ways-section">
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        Additional Options
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', color: 'var(--color-navy)', margin: '12px 0 0' }}>
        More Ways to Give
      </h2>
    </div>
    <div className="other-ways-grid">
      {[
        {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="var(--color-navy-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="var(--color-navy-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          title: 'Wire Transfer',
          desc: 'Contact us for international wire transfer details to give securely from anywhere in the world.',
        },
        {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--color-navy-mid)" strokeWidth="1.5"/><path d="M9 7h6M9 11h6M9 15h4" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="17" cy="19" r="3" fill="var(--color-green)"/><path d="M15.5 19l1 1 2-2" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          title: 'Legacy Giving',
          desc: 'Include JoMabel Healthcare Foundation in your estate or long-term charitable plans.',
        },
        {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="var(--color-navy-mid)" strokeWidth="1.5"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
          title: 'Corporate Partners',
          desc: 'Partner with us through corporate giving, sponsorships, or employee matching gift programs.',
        },
      ].map((item, i) => (
        <div key={i} style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: '14px', padding: '32px 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '12px', border: '1px solid var(--color-border)',
        }}>
          {item.icon}
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>{item.title}</h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
          <a href="mailto:claraogbaa2022@gmail.com" style={{
            color: 'var(--color-primary-dark)', fontSize: '13px', fontWeight: '700',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px',
          }}>
            Contact Us <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      ))}
    </div>
  </section>
);

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Is my donation tax-deductible?', a: 'Yes. JoMabel Healthcare Foundation USA INC. is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the extent allowed by law. You will receive a receipt upon confirmation.' },
  { q: 'How will my donation be used?', a: 'All donations go directly toward facility construction, medical equipment, and community health programs in Ufuma, Anambra State, Nigeria. We are committed to full transparency in the stewardship of your gift.' },
  { q: 'How do I confirm my transfer was received?', a: 'After completing your transfer, please email claraogbaa2022@gmail.com with your name, donation amount, and payment method. We will acknowledge your gift and send a formal receipt within 2–3 business days.' },
  { q: 'Can I donate in honor or memory of someone?', a: 'Absolutely. Please include a tribute note in your payment reference or email us with the details. We will acknowledge your memorial or honorary gift and — where appropriate — notify the family.' },
  { q: 'Can I set up a recurring gift?', a: 'Yes. Please email us at claraogbaa2022@gmail.com to arrange a recurring giving plan. We will provide payment details and a giving schedule that works for you.' },
  { q: 'What if I have more questions?', a: 'Please reach out to Dr. Clara Ada Ogbaa directly at claraogbaa2022@gmail.com or by phone at +1 (512) 508-0277. We are always happy to speak personally with our donors.' },
];

const FAQ = () => {
  const [open, setOpen] = useState<number>(-1);
  return (
    <section id="faq-section" style={{ backgroundColor: 'var(--color-navy)', fontFamily: 'var(--font-body)' }}>
      <div className="faq-header-block">
        <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
          Questions & Answers
        </span>
        <h2 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '700', marginBottom: '12px' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#93c5fd', fontSize: '14px', margin: 0, maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }}>
          Clear answers about giving, how funds are used, and how to reach us.
        </p>
      </div>
      <div className="faq-body">
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
              <span style={{ color: '#ffffff', fontSize: 'clamp(13px, 2vw, 15px)', fontWeight: '600' }}>{faq.q}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                style={{ flexShrink: 0, transform: open === i ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                <path d="M9 18l6-6-6-6" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {open === i && (
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '20px 24px', marginBottom: '12px' }}>
                <p style={{ color: '#bfdbfe', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── DONATE PAGE ──────────────────────────────────────────────────────────────
const Donate = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{donateStyles}</style>
    <Navbar />
    <DonationHero />
    <DonationForm />
    <PaymentMethods />
    <OtherWays />
    <FAQ />
    <CampaignBanner />
    <Footer />
  </div>
);

export default Donate;