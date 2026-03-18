import React from "react";
import { useNavigate } from 'react-router-dom';
import campusRender from '../../assests/images/an1.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>

      {/* ── BACKGROUND — Campus Architectural Render ── */}
      <img
        src={campusRender}
        alt="JoMabel Healthcare Campus — Ufuma, Anambra State"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* ── OVERLAY — light navy gradient, not heavy black ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(110deg, rgba(13,31,78,0.92) 0%, rgba(27,42,74,0.82) 45%, rgba(27,42,74,0.40) 100%)',
      }} />

      {/* ── SUBTLE BOTTOM FADE for section transition ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '120px', zIndex: 2,
        background: 'linear-gradient(to top, rgba(250,250,248,0.25) 0%, transparent 100%)',
      }} />

      {/* ── CONTENT ── */}
      <div style={{
        position: 'relative', zIndex: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 clamp(20px, 8vw, 120px)',
        paddingBottom: '80px',
      }}>

        
        {/* Board-requested headline */}
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(28px, 4.5vw, 58px)',
          fontWeight: '700',
          lineHeight: '1.15',
          letterSpacing: '-0.01em',
          marginBottom: '20px',
          maxWidth: '860px',
          fontFamily: "'Playfair Display', Georgia, serif",
          textShadow: '0 2px 20px rgba(0,0,0,0.20)',
        }}>
          Building a Healthcare Campus<br />
          That Will Transform Rural Care<br />
          <span style={{ color: 'var(--color-primary)' }}>in Nigeria</span>
        </h1>

        {/* Board-requested subheadline */}
        <p style={{
          color: 'rgba(255,255,255,0.80)',
          fontSize: 'clamp(13px, 1.6vw, 16px)',
          lineHeight: '1.80',
          maxWidth: '640px',
          marginBottom: '16px',
          fontWeight: '400',
        }}>
          JoMabel Healthcare Foundation is expanding access to quality healthcare
          in Ufuma, Anambra State through a <strong style={{ color: '#ffffff', fontWeight: '600' }}>6,000 sqm medical center</strong>,
          a <strong style={{ color: '#ffffff', fontWeight: '600' }}>10,000 sqm training facility</strong>, and
          community-based health programs.
        </p>

        {/* Progress indicators — board requested */}
        <div style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: '40px', marginTop: '8px',
        }}>
          {[
            { label: 'Medical Center', pct: 70, color: '#29C5F6' },
            { label: 'Training Center', pct: 30, color: '#3AA535' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.20)',
              borderRadius: '12px',
              padding: '12px 20px',
              backdropFilter: 'blur(8px)',
              minWidth: '180px',
              textAlign: 'left',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.80)', fontSize: '12px', fontWeight: '600' }}>{item.label}</span>
                <span style={{ color: item.color, fontSize: '13px', fontWeight: '800' }}>{item.pct}%</span>
              </div>
              {/* Progress bar */}
              <div style={{
                height: '5px', borderRadius: '999px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%', borderRadius: '999px',
                  backgroundColor: item.color,
                  width: `${item.pct}%`,
                  transition: 'width 1s ease',
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/donate')}
            style={{
              backgroundColor: 'var(--color-green)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '999px',
              padding: '13px 32px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s',
              boxShadow: '0 4px 16px rgba(58,165,53,0.40)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-green-dark)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-green)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Donate to Complete the Campus
          </button>
          <button
            onClick={() => navigate('/campaign')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              color: '#ffffff',
              border: '1.5px solid rgba(255,255,255,0.50)',
              borderRadius: '999px',
              padding: '13px 32px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'inherit',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            See the Campus
          </button>
          <button
            onClick={() => navigate('/contact')}
            style={{
              backgroundColor: 'rgba(41,197,246,0.15)',
              color: 'var(--color-primary)',
              border: '1.5px solid rgba(41,197,246,0.45)',
              borderRadius: '999px',
              padding: '13px 32px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'inherit',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = 'rgba(41,197,246,0.25)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'rgba(41,197,246,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Request a Briefing
          </button>
        </div>

        {/* Tagline strip */}
        <p style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: '11.5px',
          fontWeight: '500',
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          marginTop: '36px',
        }}>
          Powered by Compassion &nbsp;·&nbsp; Designed for Generational Impact &nbsp;·&nbsp; Ufuma, Anambra State, Nigeria
        </p>

      </div>
    </section>
  );
};

export default Hero;