import React from 'react';
import { useNavigate } from 'react-router-dom';

const partnerTypes = [
  {
    icon: '💛',
    title: 'Individual Donors',
    desc: 'From $100 to $100,000+, every gift moves us closer to completion. Choose a giving level that reflects your commitment.',
    cta: 'Donate Now',
    path: '/donate',
    bg: '#FFF7ED',
    border: '#FED7AA',
    btnColor: '#EA580C',
  },
  {
    icon: '🌍',
    title: 'Diaspora Supporters',
    desc: 'Join Nigerians abroad who are investing in the healthcare transformation of their homeland. Your roots, your impact.',
    cta: 'Join the Campaign',
    path: '/donate',
    bg: '#EBF5FB',
    border: '#BFDBFE',
    btnColor: '#1D8FD4',
  },
  {
    icon: '🏛️',
    title: 'Institutional Funders',
    desc: 'Foundations, grant-making bodies, and development organizations — we welcome strategic partnership conversations.',
    cta: 'Request a Briefing',
    path: '/contact',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    btnColor: '#0369A1',
  },
  {
    icon: '🤝',
    title: 'Corporate Sponsors',
    desc: 'Align your brand with a credible, high-impact healthcare initiative. Naming rights, equipment sponsorship, and program funding available.',
    cta: 'Partner With JHF',
    path: '/contact',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    btnColor: '#16A34A',
  },
];

const PartnershipInvitation = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      backgroundColor: '#F9FAFB',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
    }}>
      <style>{`
        .partner-inner { max-width: 1080px; margin: 0 auto; }

        .partner-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .partner-card {
          border-radius: 14px;
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.2s;
        }
        .partner-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.09);
        }

        .partner-bottom-banner {
          background: #111827;
          border-radius: 16px;
          padding: clamp(28px, 4vw, 48px) clamp(24px, 4vw, 52px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .partner-banner-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .partner-cards { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .partner-bottom-banner { flex-direction: column; align-items: flex-start; }
          .partner-banner-btns { width: 100%; }
          .partner-banner-btns button { flex: 1 1 auto; }
        }
        @media (max-width: 540px) {
          .partner-cards { grid-template-columns: 1fr; gap: 14px; }
          .partner-card { padding: 22px 18px; }
          .partner-banner-btns { flex-direction: column; }
          .partner-banner-btns button { width: 100%; text-align: center; }
        }
      `}</style>

      <div className="partner-inner">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            background: '#EBF5FB', color: '#1D8FD4',
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: '999px',
            marginBottom: '16px',
          }}>
            Partnership Invitation
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px, 3.5vw, 38px)',
            fontWeight: '700', color: '#111827',
            lineHeight: '1.2', margin: '0 0 14px',
          }}>
            We Cannot Do This Alone —<br />And We Are Not Asking You to Watch.
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            color: '#4B5563', lineHeight: '1.85',
            maxWidth: '560px', margin: '0 auto',
          }}>
            JoMabel Healthcare Foundation is actively seeking partners at every level —
            from individual donors to global institutions. There is a role here for you.
          </p>
        </div>

        {/* Partner cards */}
        <div className="partner-cards">
          {partnerTypes.map((p, i) => (
            <div key={i} className="partner-card" style={{ background: p.bg, border: `1.5px solid ${p.border}` }}>
              <span style={{ fontSize: '30px' }}>{p.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px', fontWeight: '700',
                color: '#111827', margin: 0, lineHeight: '1.3',
              }}>{p.title}</h3>
              <p style={{
                fontSize: '13px', color: '#4B5563',
                lineHeight: '1.7', margin: 0, flex: 1,
              }}>{p.desc}</p>
              <button
                onClick={() => navigate(p.path)}
                style={{
                  backgroundColor: p.btnColor,
                  color: '#fff', border: 'none',
                  borderRadius: '8px',
                  padding: '11px 16px', fontSize: '13px',
                  fontWeight: '700', cursor: 'pointer',
                  fontFamily: 'inherit', transition: 'all 0.2s',
                  textAlign: 'center', marginTop: 'auto',
                }}
                onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseOut={e => (e.currentTarget.style.opacity = '1')}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="partner-bottom-banner">
          <div style={{ maxWidth: '560px' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              fontWeight: '700', color: '#ffffff',
              lineHeight: '1.3', margin: '0 0 10px',
            }}>
              Ready to make history with us?
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(13px, 1.5vw, 14px)',
              lineHeight: '1.75', margin: 0,
            }}>
              Whether you give $100 or $100,000 — whether you're an individual, a
              foundation, or a corporation — JoMabel Healthcare Foundation has a
              place for your partnership.
            </p>
          </div>
          <div className="partner-banner-btns">
            <button
              onClick={() => navigate('/donate')}
              style={{
                backgroundColor: '#16A34A', color: '#fff',
                border: 'none', borderRadius: '8px',
                padding: '13px 28px', fontSize: '14px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                boxShadow: '0 4px 14px rgba(22,163,74,0.35)',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#15803D')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#16A34A')}
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: 'transparent', color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.35)',
                borderRadius: '8px',
                padding: '13px 28px', fontSize: '14px', fontWeight: '600',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipInvitation;