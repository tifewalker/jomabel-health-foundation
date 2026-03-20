import React from 'react';
import { useNavigate } from 'react-router-dom';
import founderPhoto from '../../assests/images/founderphoto.jpeg';

const FounderStory = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
    }}>
      <style>{`
        .founder-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 72px;
          align-items: center;
        }
        .founder-photo-wrap {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .founder-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: center top;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: block;
        }
        .founder-caption {
          text-align: center;
        }
        .founder-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .founder-badge {
          font-size: '11px';
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
        }
        .founder-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .founder-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .founder-btn-primary {
          background: #1D8FD4;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 13px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }
        .founder-btn-primary:hover {
          background: #1570A6;
          transform: translateY(-1px);
        }
        .founder-btn-outline {
          background: transparent;
          color: #111827;
          border: 1.5px solid #D1D5DB;
          border-radius: 8px;
          padding: 13px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }
        .founder-btn-outline:hover {
          border-color: #1D8FD4;
          color: #1D8FD4;
          transform: translateY(-1px);
        }
        .founder-quote-block {
          background: #F0F9FF;
          border-left: 4px solid #1D8FD4;
          border-radius: 0 10px 10px 0;
          padding: 20px 24px;
        }

        @media (max-width: 900px) {
          .founder-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .founder-img {
            aspect-ratio: 3/2;
            max-height: 380px;
          }
          .founder-photo-wrap {
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 540px) {
          .founder-img { aspect-ratio: 4/3; }
          .founder-btns { flex-direction: column; }
          .founder-btn-primary,
          .founder-btn-outline { text-align: center; }
        }
      `}</style>

      <div className="founder-inner">

        {/* ── LEFT — Photo + badges ── */}
        <div className="founder-photo-wrap">

          {/* Real founder photo */}
          <img
            src={founderPhoto}
            alt="Clara Ada Ogbaa, Ed.D. — Founder, JoMabel Healthcare Foundation"
            className="founder-img"
            onError={(e) => {
              // Fallback placeholder if image not yet added to project
              e.currentTarget.style.display = 'none';
              const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          {/* Placeholder — hidden when photo loads */}
          <div style={{
            display: 'none',
            width: '100%', aspectRatio: '4/5',
            borderRadius: '16px',
            background: '#F3F4F6',
            border: '2px dashed #D1D5DB',
            flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.3">
              <circle cx="12" cy="8" r="4" stroke="#6B7280" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: 0, textAlign: 'center' }}>
              Clara Ada Ogbaa, Ed.D.<br />
              <span style={{ fontSize: '11px' }}>Founder photo to be added</span>
            </p>
          </div>

          {/* Caption */}
          <div className="founder-caption">
            <p style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '0 0 2px' }}>
              Clara Ada Ogbaa, Ed.D.
            </p>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: '0 0 12px' }}>
              Founder & Executive Director — JoMabel Healthcare Foundation USA
            </p>
            {/* Survivor badges */}
            <div className="founder-badges">
              {[
                { label: 'Breast Cancer Survivor',      bg: '#FDF2F8', color: '#9D174D', border: '#FBCFE8' },
                { label: 'Endometrial Cancer Survivor', bg: '#F0FDF4', color: '#166534', border: '#BBF7D0' },
                { label: 'Kidney Transplant Recipient', bg: '#EFF6FF', color: '#1E40AF', border: '#BFDBFE' },
              ].map((b, i) => (
                <span key={i} style={{
                  background: b.bg,
                  border: `1px solid ${b.border}`,
                  color: b.color,
                  fontSize: '11px', fontWeight: '600',
                  padding: '4px 12px', borderRadius: '999px',
                }}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — Story ── */}
        <div className="founder-content">

          <div>
            <span style={{
              display: 'inline-block',
              background: '#EBF5FB', color: '#1D8FD4',
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '5px 14px', borderRadius: '999px',
              marginBottom: '16px',
            }}>
              The Founder's Story
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: '700', color: '#111827',
              lineHeight: '1.2', margin: 0,
            }}>
              Born From Faith.<br />
              Sustained by Grace.<br />
              <span style={{ color: '#1D8FD4' }}>Built for Purpose.</span>
            </h2>
          </div>

          <p style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
            Clara Ada Ogbaa was born in Ufuma, Anambra State, Nigeria. She built
            a distinguished career as an educator and humanitarian in the United
            States — but it was her own journey through illness that transformed
            her life's mission entirely.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
            A two-time cancer survivor and kidney transplant recipient, she experienced
            firsthand what it means to fight for your life — and how access to quality
            healthcare can mean the difference between living and dying. She knew that
            millions in her hometown faced that same fight every day, without the
            resources she had been fortunate enough to access.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
            So she did something extraordinary. Using her own modest retirement savings,
            she began building a healthcare campus in Ufuma — not waiting for someone
            else to act, not writing a proposal, but breaking ground. Today, JoMabel
            Healthcare Foundation is that vision made real.
          </p>

          {/* Pull quote */}
          <div className="founder-quote-block">
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              fontStyle: 'italic',
              color: '#111827', lineHeight: '1.65', margin: '0 0 10px',
            }}>
              "Healthcare should never be a privilege reserved for a few.
              It is a human right — and it is the legacy we are called to leave."
            </p>
            <p style={{
              color: '#1D8FD4', fontSize: '12px',
              fontWeight: '700', margin: 0,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              — Clara Ada Ogbaa, Ed.D., Founder
            </p>
          </div>

          {/* CTAs */}
          <div className="founder-btns">
            <button className="founder-btn-primary" onClick={() => navigate('/about')}>
              Read Her Full Story
            </button>
            <button className="founder-btn-outline" onClick={() => navigate('/donate')}>
              Support Her Mission
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderStory;