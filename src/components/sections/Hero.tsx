import React from "react";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '560px',
      overflow: 'hidden',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>

      {/* ── BACKGROUND IMAGE ── */}
      <img
        src="https://st2.depositphotos.com/1017986/7520/i/450/depositphotos_75203623-stock-photo-womans-cupped-hands-showing-something.jpg"
        alt="Hands cupped together"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* ── DARK OVERLAY ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(0,0,0,0.50)',
      }} />

      {/* ── CENTERED CONTENT ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 clamp(20px, 8vw, 120px)',
        paddingBottom: '60px',
      }}>

        {/* Big editorial headline */}
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(34px, 5.5vw, 68px)',
          fontWeight: '300',
          lineHeight: '1.18',
          letterSpacing: '0.01em',
          marginBottom: '18px',
          maxWidth: '780px',
          textShadow: '0 1px 12px rgba(0,0,0,0.3)',
        }}>
          Building a World-Class,<br />
          Community Medical &<br />
          Training Center
        </h1>

        {/* Description */}
        <p style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: 'clamp(13px, 1.5vw, 15px)',
          lineHeight: '1.7',
          maxWidth: '480px',
          marginBottom: '36px',
          fontWeight: '400',
        }}>
          Empower communities, transform lives, and create a brighter future with your generosity.<br />
          Together, we can change the world.
        </p>

        {/* Pill buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/donate')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              color: '#111827',
              border: 'none',
              borderRadius: '999px',
              padding: '11px 28px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.92)')}
          >
            Donate Now
          </button>
          <button
            onClick={() => navigate('/about')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.55)',
              borderRadius: '999px',
              padding: '11px 28px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              fontFamily: 'inherit',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
          >
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;