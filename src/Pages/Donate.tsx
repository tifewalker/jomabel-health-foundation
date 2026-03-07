import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignBanner from '../components/sections/CampaignBanner';

const donateStyles = `
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
    background-color: #22c55e; color: #fff; border: none;
    border-radius: 6px; padding: 11px 24px;
    font-size: 13.5px; font-weight: 600; cursor: pointer; font-family: inherit;
    transition: opacity 0.2s;
  }
  .dh-btn-primary:hover { opacity: 0.88; }
  .dh-btn-outline {
    background-color: transparent; color: #fff;
    border: 1.5px solid rgba(255,255,255,0.45);
    border-radius: 6px; padding: 11px 24px;
    font-size: 13.5px; font-weight: 600; cursor: pointer; font-family: inherit;
    transition: border-color 0.2s, background 0.2s;
  }
  .dh-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

  .donation-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #ffffff;
    font-family: 'Inter', sans-serif;
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
  .form-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .other-ways-section {
    background-color: #ffffff;
    padding: clamp(40px, 5vw, 64px) clamp(16px, 4vw, 48px);
    font-family: 'Inter', sans-serif;
  }
  .other-ways-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
  }

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

  @media (max-width: 860px) {
    .donation-layout { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .amount-grid { grid-template-columns: repeat(2, 1fr); }
    .other-ways-grid { grid-template-columns: 1fr; max-width: 400px; }
  }
  @media (max-width: 480px) {
    .donate-hero-btns { flex-direction: column; }
    .dh-btn-primary, .dh-btn-outline { width: 100%; text-align: center; }
    .form-row-2 { grid-template-columns: 1fr; }
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

// ─── DONATION HERO ───────────────────────────────────────────────────────────
const DonationHero = () => (
  <section className="donate-hero">
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
      alt="Healthcare students"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(13,31,78,0.88) 0%, rgba(30,58,138,0.55) 60%, rgba(13,31,78,0.15) 100%)',
    }} />
    <div className="donate-hero-content">
      <p style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', marginBottom: '20px' }}>
        JOMABEL HEALTHCARE FOUNDATION
      </p>
      <h1 style={{ color: '#ffffff', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '400', lineHeight: 1.6, letterSpacing: '0.04em', marginBottom: '32px' }}>
        Join Us in Building Nigeria's<br />
        <strong style={{ fontWeight: '700' }}>Next Generation<br />Healthcare Campus</strong>
      </h1>
      <div className="donate-hero-btns">
        <button className="dh-btn-primary">Join The Campaign</button>
        <button className="dh-btn-outline">Donate</button>
      </div>
    </div>
  </section>
);

// ─── DONATION FORM ───────────────────────────────────────────────────────────
const usdAmounts = [25, 50, 100, 250, 500, 1000];
const ngnAmounts = [5000, 10000, 25000, 50000, 100000, 250000];
const impacts = {
  usd: [
    { amount: '$50',   desc: 'Provides medication for 10 children in an outreach mission' },
    { amount: '$100',  desc: 'Funds a full day of free medical consultations' },
    { amount: '$500',  desc: 'Equips a nurse with essential medical supplies for a month' },
    { amount: '$1000', desc: 'Sponsors a healthcare training scholarship for one student' },
  ],
  ngn: [
    { amount: '₦5,000',   desc: 'Provides medication for 10 children in an outreach mission' },
    { amount: '₦10,000',  desc: 'Funds a full day of free medical consultations' },
    { amount: '₦50,000',  desc: 'Equips a nurse with essential medical supplies for a month' },
    { amount: '₦100,000', desc: 'Sponsors a healthcare training scholarship for one student' },
  ],
};

const DonationForm = () => {
  const [currency, setCurrency] = useState<'usd' | 'ngn'>('usd');
  const [selected, setSelected] = useState<number | null>(50);
  const [custom, setCustom] = useState('');
  const [form, setForm] = useState({ name: '', email: '', card: '', cvv: '' });

  const symbol = currency === 'usd' ? '$' : '₦';
  const amounts = currency === 'usd' ? usdAmounts : ngnAmounts;

  const handleCurrencySwitch = (c: 'usd' | 'ngn') => {
    setCurrency(c);
    setSelected(c === 'usd' ? 50 : 10000);
    setCustom('');
  };

  const formatAmount = (amt: number) =>
    currency === 'usd' ? `$${amt}` : `₦${amt.toLocaleString()}`;

  return (
    <section style={{ backgroundColor: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
      <div className="donation-layout">

        {/* LEFT — navy panel */}
        <div className="donation-left">
          <p style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', margin: 0 }}>
            Make A Difference
          </p>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '400', lineHeight: 1.4, margin: 0 }}>
            Join Us in Building Nigeria's<br />
            <strong style={{ fontWeight: '800' }}>Next Generation<br />Healthcare Campus</strong>
          </h2>
          <p style={{ color: '#bfdbfe', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
            Your gift directly funds facility construction, medical equipment and community health programs in Ufuma, Anambra State.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {impacts[currency].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px', padding: '12px 16px',
                display: 'flex', alignItems: 'center', gap: '14px',
              }}>
                <span style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '700', minWidth: '60px' }}>{item.amount}</span>
                <span style={{ color: '#bfdbfe', fontSize: '12.5px', lineHeight: '1.5' }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="donation-right">
          <h3 style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', fontWeight: '700', color: '#111827', margin: 0 }}>
            Choose an amount to support us with
          </h3>

          {/* Currency switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>Currency:</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {(['usd', 'ngn'] as const).map((c) => (
                <button key={c} onClick={() => handleCurrencySwitch(c)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                    padding: '8px 16px', borderRadius: '10px',
                    border: currency === c ? '2px solid #1e3a8a' : '2px solid #e5e7eb',
                    backgroundColor: currency === c ? '#eff6ff' : '#ffffff',
                    cursor: 'pointer', transition: 'all 0.2s',
                    boxShadow: currency === c ? '0 0 0 3px rgba(30,58,138,0.12)' : 'none',
                  }}>
                  <span style={{ fontSize: '26px', lineHeight: 1 }}>{c === 'usd' ? '🇺🇸' : '🇳🇬'}</span>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: currency === c ? '#1e3a8a' : '#6b7280', letterSpacing: '0.05em' }}>
                    {c === 'usd' ? 'USD $' : 'NGN ₦'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Amount buttons */}
          <div className="amount-grid">
            {amounts.map((amt) => (
              <button key={amt} onClick={() => { setSelected(amt); setCustom(''); }}
                style={{
                  padding: '14px', borderRadius: '8px', cursor: 'pointer',
                  border: selected === amt ? '2px solid #1e3a8a' : '1.5px solid #e5e7eb',
                  backgroundColor: selected === amt ? '#eff6ff' : '#ffffff',
                  color: selected === amt ? '#1e3a8a' : '#374151',
                  fontSize: 'clamp(12px, 2vw, 16px)', fontWeight: '700',
                  transition: 'all 0.15s',
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
            <input type="number" placeholder="enter a custom amount" value={custom}
              onChange={e => { setCustom(e.target.value); setSelected(null); }}
              style={{ width: '100%', padding: '13px 16px 13px 28px', border: '1.5px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' as const }}
            />
          </div>

          {/* Payment logos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <rect width="7" height="16" rx="2" fill="#0BA4DB"/>
                <rect x="7" width="8" height="16" fill="#0BA4DB" opacity="0.5"/>
                <rect x="15" width="7" height="16" rx="2" fill="#0BA4DB" opacity="0.3"/>
              </svg>
              <span style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a2e' }}>paystack</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.763 3.763 1 7.191 1c1.867 0 3.547.915 4.809 2.403C13.262 1.915 14.942 1 16.81 1 20.237 1 23 3.763 23 7.191c0 4.105-5.37 8.863-11 14.402z" fill="#e25555"/>
              </svg>
              <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a2e' }}>flutterwave</span>
            </div>
          </div>

          {/* Name & Email */}
          <div className="form-row-2">
            <div>
              <label style={labelSt}>Name</label>
              <div style={inputWrapSt}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="#9ca3af" strokeWidth="1.5"/></svg>
                <input placeholder="Full name" style={fieldSt} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
            </div>
            <div>
              <label style={labelSt}>Email</label>
              <div style={inputWrapSt}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#9ca3af" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="#9ca3af" strokeWidth="1.5"/></svg>
                <input placeholder="Email address" style={fieldSt} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
          </div>

          {/* Card & CVV */}
          <div className="form-row-2">
            <div>
              <label style={labelSt}>Card Number</label>
              <div style={inputWrapSt}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" stroke="#9ca3af" strokeWidth="1.5"/><path d="M1 10h22" stroke="#9ca3af" strokeWidth="1.5"/></svg>
                <input placeholder="**** **** **** ****" style={fieldSt} value={form.card} onChange={e => setForm({ ...form, card: e.target.value })} />
              </div>
            </div>
            <div>
              <label style={labelSt}>CVV</label>
              <div style={inputWrapSt}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#9ca3af" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <input placeholder="***" style={fieldSt} value={form.cvv} onChange={e => setForm({ ...form, cvv: e.target.value })} />
              </div>
            </div>
          </div>

          <button style={{
            backgroundColor: '#1e3a8a', color: '#ffffff', border: 'none',
            borderRadius: '10px', padding: '16px', fontSize: '15px', fontWeight: '700',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontFamily: 'inherit', transition: 'background 0.2s',
          }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0d1f4e')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
          >
            Donate Securely Now 🔒
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── OTHER WAYS TO GIVE ──────────────────────────────────────────────────────
const OtherWays = () => (
  <section className="other-ways-section">
    <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Other Ways to Give
    </h2>
    <div className="other-ways-grid">
      {[
        {
          icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          title: 'Wire Transfer', desc: 'Donate directly from your bank',
        },
        {
          icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#374151" strokeWidth="1.5"/><path d="M12 10v4M10 12h4" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/><path d="M17 15l2 2" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/></svg>,
          title: 'Cheque', desc: 'Mail a gift with a personal cheque',
        },
        {
          icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#1e3a8a" strokeWidth="1.5"/><path d="M9 7h6M9 11h6M9 15h4" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round"/><circle cx="17" cy="19" r="3" fill="#22c55e"/><path d="M15.5 19l1 1 2-2" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          title: 'Planned Giving', desc: 'Include JoMabel in your long term plans',
        },
      ].map((item, i) => (
        <div key={i} style={{
          backgroundColor: '#f0f4ff', borderRadius: '14px', padding: '36px 28px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '14px', border: '1px solid #dbeafe',
        }}>
          {item.icon}
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: 0 }}>{item.title}</h3>
          <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Is my donation taxable?', a: 'JoMabel Healthcare Foundation USA INC. is a registered nonprofit 501(C)(3). Donations are tax-deductable to the extent allowed by law.' },
  { q: 'How will my donations be used?', a: 'All donations go directly toward facility construction, medical equipment, and community health programs in Ufuma, Anambra State, Nigeria.' },
  { q: 'Are donations secure?', a: 'Yes. We use industry-standard encryption and trusted payment processors (Paystack & Flutterwave) to ensure your payment details are fully protected.' },
  { q: 'Can I donate via bank transfer?', a: 'Yes. Please contact us at donations@jomabel.org for wire transfer details.' },
  { q: 'Can I donate in honor or memory of someone?', a: 'Absolutely. Please include a note in the message field or email us and we will acknowledge your tribute gift.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ backgroundColor: '#0d1f4e', fontFamily: "'Inter', sans-serif" }}>
      <div className="faq-header-block">
        <h2 style={{ color: '#ffffff', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', marginBottom: '14px' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#93c5fd', fontSize: '14px', margin: 0 }}>
          Clear answers about your donation, security and impacts.
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
                <p style={{ color: '#bfdbfe', fontSize: '14px', lineHeight: '1.75', margin: 0 }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── DONATE PAGE ─────────────────────────────────────────────────────────────
const Donate = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <style>{donateStyles}</style>
    <Navbar />
    <DonationHero />
    <DonationForm />
    <OtherWays />
    <FAQ />
    <CampaignBanner />
    <Footer />
  </div>
);

export default Donate;