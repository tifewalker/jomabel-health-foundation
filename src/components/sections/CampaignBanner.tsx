import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignBanner = () => {
  const navigate = useNavigate();
  const raised = 7500000;
  const goal = 10000000;
  const percentage = Math.round((raised / goal) * 100);

interface FormatNairaParams {
    amount: number;
}

const formatNaira = (amount: number): string =>
    '₦ ' + amount.toLocaleString('en-NG');

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80"
        alt="Clinic background"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark teal overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10, 80, 70, 0.72)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '52px 24px',
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
      }}>

        {/* Title */}
        <h2 style={{
          color: '#ffffff',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '32px',
          letterSpacing: '0.01em',
        }}>
          Clinic Project in East
        </h2>

        {/* Progress card */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderRadius: '10px',
          padding: '18px 28px 20px',
          marginBottom: '28px',
        }}>
          {/* Label */}
          <p style={{
            fontSize: '14px',
            color: '#1f2937',
            marginBottom: '12px',
            fontWeight: '500',
          }}>
            {percentage}% ({formatNaira(raised)}) of{' '}
            <span style={{ color: '#dc2626', fontWeight: '700' }}>
              {formatNaira(goal)}
            </span>{' '}
            Raised
          </p>

          {/* Progress bar */}
          <div style={{
            backgroundColor: '#e5e7eb',
            borderRadius: '999px',
            height: '10px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${percentage}%`,
              backgroundColor: '#22c55e',
              borderRadius: '999px',
              transition: 'width 1s ease',
            }} />
          </div>
        </div>

        {/* Sub-label */}
        <p style={{
          color: '#d1fae5',
          fontSize: '14px',
          marginBottom: '20px',
          fontWeight: '400',
        }}>
          Join Us in Making a Difference
        </p>

        {/* Donate button */}
        <button
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '999px',
            padding: '13px 44px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
            onClick={() => navigate('/donate')}
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default CampaignBanner;