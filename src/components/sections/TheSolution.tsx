import React from 'react';
import { useNavigate } from 'react-router-dom';

const pillars = [
  {
    icon: '🏥',
    title: 'A World-Class Medical Center',
    desc: 'A 6,000 sqm facility delivering primary care, maternal health, diagnostics, chronic disease management, and specialist services permanently rooted in the community.',
  },
  {
    icon: '🎓',
    title: 'A Medical Training Campus',
    desc: 'A 10,000 sqm skills and training center building the next generation of local healthcare professionals through clinical training, mentorship, and leadership development.',
  },
  {
    icon: '🤝',
    title: 'Community-Based Programs',
    desc: 'Outreach missions, maternal and child health initiatives, community health worker training, digital health, and health education taking care directly to the people.',
  },
  {
    icon: '📡',
    title: 'Digital Health & Telemedicine',
    desc: 'Bridging the gap between rural communities and specialist care through telemedicine infrastructure, remote diagnostics, and digital health tools.',
  },
];

const TheSolution = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      backgroundColor: 'var(--color-surface)',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '56px' }}>
          <div>
            <span style={{
              fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
              letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '14px',
            }}>
              The Solution
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: '700', color: 'var(--color-navy)',
              lineHeight: '1.2', margin: '0 0 20px',
            }}>
              An Integrated Healthcare Campus Not Just a Clinic
            </h2>
            <p style={{
              fontSize: '15px', color: 'var(--color-text-muted)',
              lineHeight: '1.85', margin: '0 0 28px',
            }}>
              JoMabel Healthcare Foundation is not building a temporary clinic or
              a single outreach program. We are building a permanent, integrated
              healthcare campus a self-sustaining system of care, training, and
              community health that will serve Ufuma and surrounding communities
              for generations.
            </p>
            <button
              onClick={() => navigate('/campaign')}
              style={{
                backgroundColor: 'var(--color-navy)',
                color: '#fff', border: 'none',
                borderRadius: 'var(--btn-radius)',
                padding: '13px 28px', fontSize: '14px',
                fontWeight: '700', cursor: 'pointer',
                fontFamily: 'inherit', transition: 'var(--transition)',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0d1f4e')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
            >
              See the Campus →
            </button>
          </div>

          {/* Right — key numbers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'JoMabel Medical Center', size: '6,000 sqm', pct: 70, color: 'var(--color-primary)' },
              { label: 'Skill Acquisition & Training Center', size: '10,000 sqm', pct: 30, color: 'var(--color-green)' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px', padding: '22px 24px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-navy)', margin: '0 0 2px' }}>{item.label}</p>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0 }}>{item.size}</p>
                  </div>
                  <span style={{
                    fontSize: '20px', fontWeight: '800',
                    color: item.color, flexShrink: 0,
                  }}>{item.pct}%</span>
                </div>
                <div style={{ height: '6px', borderRadius: '999px', backgroundColor: 'var(--color-border)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: '999px',
                    backgroundColor: item.color,
                    width: `${item.pct}%`,
                  }} />
                </div>
                <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '8px', margin: '8px 0 0' }}>
                  {item.pct}% complete — construction underway
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--card-radius)',
              padding: '24px 20px',
              transition: 'var(--transition)',
            }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>{p.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px', fontWeight: '700',
                color: 'var(--color-navy)', margin: '0 0 10px', lineHeight: '1.3',
              }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.7', margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .solution-header { grid-template-columns: 1fr !important; gap: 36px !important; }
          .solution-pillars { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .solution-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default TheSolution;