import React from 'react';
import { useNavigate } from 'react-router-dom';
import outreach4 from '../../assests/images/outreach4.jpeg';

const CampaignBanner = () => {
  const navigate = useNavigate();
  const raised = 7500000;
  const goal = 10000000;
  const percentage = Math.round((raised / goal) * 100);

  const formatNaira = (amount: number): string =>
    '₦ ' + amount.toLocaleString('en-NG');

  return (
    <section style={{
      position: 'relative',
      minHeight: '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden',
    }}>

      {/* ── Real outreach photo as background ── */}
      <img
        src={outreach4}
        alt="JoMabel Medical Outreach Team"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
        }}
      />

      {/* ── Navy + primary overlay ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(27,42,74,0.88) 0%, rgba(41,197,246,0.55) 100%)',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: 'clamp(48px, 6vw, 72px) clamp(20px, 5vw, 40px)',
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto',
      }}>

        {/* Title */}
        <h2 style={{
          color: 'var(--color-white)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(22px, 3.5vw, 34px)',
          fontWeight: '700',
          marginBottom: '10px',
          lineHeight: '1.2',
        }}>
          Join Us in Saving Lives
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.80)',
          fontSize: '14px',
          lineHeight: '1.7',
          marginBottom: '28px',
          maxWidth: '480px',
          margin: '0 auto 28px',
        }}>
          Help us complete the 16,000+ sq. meter JoMabel Medical &amp; Training Campus
          in Ufuma, Anambra State bringing dignified healthcare to thousands of families.
        </p>

        {/* Progress card */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderRadius: '12px',
          padding: '20px 28px 22px',
          marginBottom: '28px',
          boxShadow: 'var(--shadow-md)',
        }}>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text)',
            marginBottom: '12px',
            fontWeight: '500',
          }}>
            {percentage}%&nbsp;
            <span style={{ color: 'var(--color-navy)' }}>({formatNaira(raised)})</span>
            &nbsp;of&nbsp;
            <span style={{ color: 'var(--color-green)', fontWeight: '700' }}>
              {formatNaira(goal)}
            </span>
            &nbsp;Goal Reached
          </p>

          {/* Progress bar */}
          <div style={{
            backgroundColor: 'var(--color-border)',
            borderRadius: '999px',
            height: '10px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${percentage}%`,
              background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-green) 100%)',
              borderRadius: '999px',
              transition: 'width 1s ease',
            }} />
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/donate')}
            style={{
              backgroundColor: 'var(--color-green)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: '999px',
              padding: '13px 36px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'var(--transition)',
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--color-green-dark)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--color-green)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Donate Now
          </button>

          <button
            onClick={() => navigate('/contact')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: 'var(--color-white)',
              border: '1px solid rgba(255,255,255,0.50)',
              borderRadius: '999px',
              padding: '13px 36px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'inherit',
              backdropFilter: 'blur(4px)',
              transition: 'var(--transition)',
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; }}
          >
            Partner With Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default CampaignBanner;