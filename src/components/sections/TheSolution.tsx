import React from 'react';
import { useNavigate } from 'react-router-dom';

const pillars = [
  {
    icon: '🏥',
    title: 'A World-Class Medical Center',
    desc: 'A 6,000 sqm facility delivering primary care, maternal health, diagnostics, chronic disease management, and specialist services — permanently rooted in Ufuma.',
  },
  {
    icon: '🎓',
    title: 'A Medical Training Center',
    desc: 'A 10,000 sqm skills and training center building the next generation of local healthcare professionals through clinical training, mentorship, and leadership programs.',
  },
  {
    icon: '🤝',
    title: 'Community-Based Programs',
    desc: 'Outreach missions, maternal and child health initiatives, community health worker training, and health education taking care directly to the people who need it most.',
  },
  {
    icon: '📡',
    title: 'Digital Health & Telemedicine',
    desc: 'Connecting rural communities to specialist care through telemedicine infrastructure, remote diagnostics, and digital health tools built for the realities of rural Nigeria.',
  },
];

const TheSolution = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
    }}>
      <style>{`
        .solution-inner { max-width: 1080px; margin: 0 auto; }

        .solution-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 56px;
        }

        .solution-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .solution-pillar-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 24px 20px;
          transition: all 0.2s;
        }
        .solution-pillar-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transform: translateY(-3px);
          border-color: #1D8FD4;
          background: #ffffff;
        }

        .solution-progress-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 20px 22px;
          transition: box-shadow 0.2s;
        }
        .solution-progress-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.07);
        }

        .solution-btn {
          background: #111827;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 13px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .solution-btn:hover {
          background: #1D8FD4;
          transform: translateY(-1px);
        }

        @media (max-width: 860px) {
          .solution-header {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .solution-pillars {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .solution-pillars {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>

      <div className="solution-inner">

        {/* ── TOP: Heading left, progress right ── */}
        <div className="solution-header">

          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block',
              background: '#EBF5FB', color: '#1D8FD4',
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '5px 14px', borderRadius: '999px',
              marginBottom: '18px',
            }}>
              The Solution
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: '700', color: '#111827',
              lineHeight: '1.2', margin: '0 0 20px',
            }}>
              More Than a Clinic —<br />An Integrated Healthcare System
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#4B5563', lineHeight: '1.85',
              margin: '0 0 16px',
            }}>
              JoMabel Healthcare Foundation is not building a temporary clinic.
              We are building a permanent, integrated healthcare campus — a
              self-sustaining system of care, training, and community health
              that will serve Ufuma and surrounding communities for generations.
            </p>
            <p style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#4B5563', lineHeight: '1.85',
              margin: '0 0 28px',
            }}>
              When complete, the campus will bring specialist-level care,
              professional training, and preventive health programs to a region
              where these have never existed at scale.
            </p>
            <button className="solution-btn" onClick={() => navigate('/campaign')}>
              See the Full Campus Plan
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right — progress cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                label: 'JoMabel Medical Center',
                size: '6,000 sqm',
                pct: 70,
                color: '#1D8FD4',
                status: 'Under active construction',
                detail: 'Primary care, diagnostics, maternal health & specialist services',
              },
              {
                label: 'Skill Acquisition & Training Center',
                size: '10,000 sqm',
                pct: 30,
                color: '#16A34A',
                status: 'Foundation stage underway',
                detail: 'Clinical training, community health worker programs & mentorship',
              },
            ].map((item, i) => (
              <div key={i} className="solution-progress-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#111827', margin: '0 0 2px' }}>{item.label}</p>
                    <p style={{ fontSize: '12px', color: '#6B7280', margin: '0 0 4px' }}>{item.size}</p>
                    <p style={{ fontSize: '11.5px', color: '#4B5563', margin: 0 }}>{item.detail}</p>
                  </div>
                  <span style={{
                    fontSize: '22px', fontWeight: '800',
                    color: item.color, flexShrink: 0, paddingLeft: '12px',
                  }}>{item.pct}%</span>
                </div>
                <div style={{ height: '7px', borderRadius: '999px', backgroundColor: '#E5E7EB', overflow: 'hidden', marginTop: '12px' }}>
                  <div style={{
                    height: '100%', borderRadius: '999px',
                    backgroundColor: item.color,
                    width: `${item.pct}%`,
                  }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <p style={{ fontSize: '11px', color: '#6B7280', margin: 0 }}>{item.status}</p>
                  <p style={{ fontSize: '11px', color: item.color, fontWeight: '700', margin: 0 }}>{item.pct}% complete</p>
                </div>
              </div>
            ))}

            {/* Mini note */}
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '10px',
              padding: '14px 18px',
              display: 'flex', alignItems: 'flex-start', gap: '10px',
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>✅</span>
              <p style={{ fontSize: '12.5px', color: '#166534', lineHeight: '1.6', margin: 0 }}>
                Construction is actively underway in Ufuma, Anambra State, Nigeria.
                Your donation directly funds the completion of this campus.
              </p>
            </div>
          </div>
        </div>

        {/* ── 4 PILLARS ── */}
        <div style={{ marginBottom: '8px' }}>
          <p style={{
            fontSize: '11px', fontWeight: '700',
            color: '#6B7280', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Four pillars of the JHF model
          </p>
        </div>
        <div className="solution-pillars">
          {pillars.map((p, i) => (
            <div key={i} className="solution-pillar-card">
              <div style={{ fontSize: '30px', marginBottom: '14px' }}>{p.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px', fontWeight: '700',
                color: '#111827', margin: '0 0 10px', lineHeight: '1.3',
              }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.7', margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheSolution;