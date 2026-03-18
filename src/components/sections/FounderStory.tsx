import React from 'react';
import { useNavigate } from 'react-router-dom';

const FounderStory = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      background: 'linear-gradient(160deg, var(--color-navy) 0%, #0d1f4e 100%)',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: '72px',
        alignItems: 'center',
      }}>

        {/* Left — photo placeholder + badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Photo placeholder */}
          <div style={{
            width: '100%', aspectRatio: '4/5',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.06)',
            border: '2px dashed rgba(41,197,246,0.30)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '12px',
          }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" opacity="0.3">
              <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '12px', margin: 0, textAlign: 'center', padding: '0 20px' }}>
              Dr. Clara Ada Ogbaa<br />
              <span style={{ fontSize: '11px', opacity: 0.6 }}>Photo to be provided</span>
            </p>
          </div>

          {/* Survivor badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { label: 'Breast Cancer Survivor', color: '#f9a8d4' },
              { label: 'Endometrial Cancer Survivor', color: '#86efac' },
              { label: 'Kidney Transplant Recipient', color: '#93c5fd' },
              { label: 'Educator & Humanitarian', color: '#fcd34d' },
            ].map((b, i) => (
              <span key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                border: `1px solid ${b.color}40`,
                color: b.color,
                fontSize: '11px', fontWeight: '600',
                padding: '4px 12px', borderRadius: '999px',
              }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — story content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <span style={{
              fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              display: 'block', marginBottom: '14px',
            }}>
              Founder Story
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: '700', color: '#ffffff',
              lineHeight: '1.2', margin: '0 0 4px',
            }}>
              Born From Faith.<br />
              <span style={{ color: 'var(--color-primary)' }}>Sustained by Grace.</span><br />
              Built for Purpose.
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.85', margin: 0 }}>
            Dr. Clara Ada Ogbaa was born in Ufuma, Anambra State, Nigeria. She built
            a distinguished career as an educator and humanitarian, but it was her
            own journey through illness that transformed her life's mission.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.85', margin: 0 }}>
            A two-time cancer survivor and kidney transplant recipient, Dr. Ogbaa
            experienced firsthand what it means to fight for your life and how
            access to quality healthcare can mean the difference between living and dying.
            She knew that millions in her hometown faced that same fight every day,
            without the resources she had.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.85', margin: 0 }}>
            So she did something extraordinary. Using her own modest retirement savings,
            she began building a healthcare campus in Ufuma not waiting for someone
            else to act, not writing a proposal, but breaking ground. Today, JoMabel
            Healthcare Foundation is that vision made real: a growing campus, an active
            team, and a community being transformed.
          </p>

          {/* Pull quote */}
          <div style={{
            borderLeft: '3px solid var(--color-primary)',
            paddingLeft: '20px',
          }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              fontStyle: 'italic',
              color: '#ffffff', lineHeight: '1.6', margin: '0 0 10px',
            }}>
              "Healthcare should never be a privilege reserved for a few.
              It is a human right."
            </p>
            <p style={{ color: 'var(--color-primary)', fontSize: '12px', fontWeight: '700', margin: 0, letterSpacing: '0.06em' }}>
              — Dr. Clara Ada Ogbaa, Ed.D., Founder
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <button
              onClick={() => navigate('/about')}
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-navy)', border: 'none',
                borderRadius: 'var(--btn-radius)',
                padding: '13px 28px', fontSize: '14px',
                fontWeight: '700', cursor: 'pointer',
                fontFamily: 'inherit', transition: 'var(--transition)',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              Read Her Full Story
            </button>
            <button
              onClick={() => navigate('/donate')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.10)',
                color: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.35)',
                borderRadius: 'var(--btn-radius)',
                padding: '13px 28px', fontSize: '14px',
                fontWeight: '600', cursor: 'pointer',
                fontFamily: 'inherit', transition: 'var(--transition)',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)')}
            >
              Support Her Mission
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .founder-photo { aspect-ratio: 3/2 !important; }
        }
      `}</style>
    </section>
  );
};

export default FounderStory;