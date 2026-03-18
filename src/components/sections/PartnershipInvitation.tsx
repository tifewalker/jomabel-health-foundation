import React from 'react';
import { useNavigate } from 'react-router-dom';

const partnerTypes = [
  {
    icon: '💛',
    title: 'Individual Donors',
    desc: 'From $100 to $100,000+, every gift moves us closer to completion. Choose a giving level that reflects your commitment.',
    cta: 'Donate Now',
    path: '/donate',
    bg: 'var(--color-orange-light)',
    border: 'var(--color-orange)',
  },
  {
    icon: '🌍',
    title: 'Diaspora Supporters',
    desc: 'Join thousands of Nigerians abroad who are investing in the healthcare transformation of their homeland.',
    cta: 'Join the Diaspora Campaign',
    path: '/donate',
    bg: 'var(--color-primary-light)',
    border: 'var(--color-primary)',
  },
  {
    icon: '🏛️',
    title: 'Institutional Funders',
    desc: 'Foundations, grant-making bodies, and development organizations we welcome conversations about strategic partnership.',
    cta: 'Request a Briefing',
    path: '/contact',
    bg: 'var(--color-navy-light)',
    border: 'var(--color-navy-mid)',
  },
  {
    icon: '🤝',
    title: 'Corporate Sponsors',
    desc: 'Align your brand with a credible, high-impact healthcare initiative. Naming rights, equipment sponsorship, and program funding available.',
    cta: 'Partner With JHF',
    path: '/contact',
    bg: 'var(--color-green-light)',
    border: 'var(--color-green)',
  },
];

const PartnershipInvitation = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      backgroundColor: 'var(--color-white)',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{
            fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            display: 'block', marginBottom: '14px',
          }}>
            Partnership Invitation
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: '700', color: 'var(--color-navy)',
            lineHeight: '1.2', margin: '0 0 16px',
          }}>
            We Cannot Do This Alone <br />And We Are Not Asking You to Watch.
          </h2>
          <p style={{
            fontSize: '15px', color: 'var(--color-text-muted)',
            lineHeight: '1.85', maxWidth: '580px', margin: '0 auto',
          }}>
            JoMabel Healthcare Foundation is actively seeking partners at every level —
            from individual donors to global institutions. There is a role here for you.
          </p>
        </div>

        {/* Partner type cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '48px',
        }}>
          {partnerTypes.map((p, i) => (
            <div key={i} style={{
              background: p.bg,
              border: `1.5px solid ${p.border}30`,
              borderRadius: '16px',
              padding: '28px 22px',
              display: 'flex', flexDirection: 'column', gap: '14px',
              transition: 'var(--transition)',
            }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '32px' }}>{p.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px', fontWeight: '700',
                color: 'var(--color-navy)', margin: 0, lineHeight: '1.3',
              }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0, flex: 1 }}>{p.desc}</p>
              <button
                onClick={() => navigate(p.path)}
                style={{
                  backgroundColor: 'var(--color-navy)',
                  color: '#fff', border: 'none',
                  borderRadius: 'var(--btn-radius)',
                  padding: '11px 16px', fontSize: '13px',
                  fontWeight: '700', cursor: 'pointer',
                  fontFamily: 'inherit', transition: 'var(--transition)',
                  textAlign: 'center',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0d1f4e')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-mid) 100%)',
          borderRadius: '20px',
          padding: 'clamp(32px, 4vw, 48px) clamp(28px, 4vw, 56px)',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '32px', flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: '580px' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: '700', color: '#ffffff',
              lineHeight: '1.3', margin: '0 0 10px',
            }}>
              Ready to make history with us?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', lineHeight: '1.75', margin: 0 }}>
              Whether you give $100 or $100,000, whether you're an individual, a foundation, or
              a corporation JoMabel Healthcare Foundation has a place for your partnership.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flexShrink: 0 }}>
            <button
              onClick={() => navigate('/donate')}
              style={{
                backgroundColor: 'var(--color-green)', color: '#fff',
                border: 'none', borderRadius: 'var(--btn-radius)',
                padding: '13px 28px', fontSize: '14px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'var(--transition)',
                boxShadow: '0 4px 14px rgba(58,165,53,0.35)',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-green-dark)')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-green)')}
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.35)',
                borderRadius: 'var(--btn-radius)',
                padding: '13px 28px', fontSize: '14px', fontWeight: '600',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'var(--transition)',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .partner-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .partner-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default PartnershipInvitation;