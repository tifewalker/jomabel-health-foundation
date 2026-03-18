import React from 'react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { number: '20,000+', label: 'Patients Served Annually', sub: 'Projected at full capacity', color: 'var(--color-primary)' },
  { number: '5,000+', label: 'Screenings Per Year', sub: 'Preventive & chronic disease', color: 'var(--color-green)' },
  { number: '500+', label: 'Health Workers Trained', sub: 'Community & clinical staff', color: 'var(--color-orange)' },
  { number: '2', label: 'Major Facilities', sub: '16,000 sqm total campus', color: 'var(--color-primary)' },
];

const milestones = [
  { year: 'Founded', event: 'Dr. Ogbaa launches JHF using personal retirement savings' },
  { year: 'Phase 1', event: 'JoMabel Medical Center construction begins in Ufuma' },
  { year: '70%', event: 'Medical Center now 70% complete serving the community' },
  { year: '30%', event: 'Skill Acquisition & Training Center underway' },
  { year: 'Vision', event: 'Full campus operational 20,000+ patients served annually' },
];

const ImpactMetrics = () => {
  const navigate = useNavigate();
  return (
    <section style={{
      backgroundColor: 'var(--color-surface)',
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
            Our Impact
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: '700', color: 'var(--color-navy)',
            lineHeight: '1.2', margin: '0 0 16px',
          }}>
            The Numbers Behind the Mission
          </h2>
          <p style={{
            fontSize: '15px', color: 'var(--color-text-muted)',
            lineHeight: '1.85', maxWidth: '560px', margin: '0 auto',
          }}>
            Every donation, every partnership, and every brick laid moves us closer
            to a future where thousands of lives are transformed each year.
          </p>
        </div>

        {/* Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px', marginBottom: '56px',
        }}>
          {metrics.map((m, i) => (
            <div key={i} style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderBottom: `4px solid ${m.color}`,
              borderRadius: 'var(--card-radius)',
              padding: '28px 20px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)',
            }}
              onMouseOver={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'}
              onMouseOut={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
            >
              <p style={{
                fontFamily: 'var(--font-heading)',
                color: m.color,
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: '800', margin: '0 0 8px',
              }}>{m.number}</p>
              <p style={{ color: 'var(--color-navy)', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>{m.label}</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '12px', margin: 0 }}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Timeline + CTA */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '56px', alignItems: 'center',
        }}>
          {/* Timeline */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px', fontWeight: '700',
              color: 'var(--color-navy)', marginBottom: '28px',
            }}>
              Our Journey So Far
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  {/* Line + dot */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: i === milestones.length - 1 ? 'var(--color-navy-light)' : 'var(--color-primary)',
                      border: i === milestones.length - 1 ? '2px dashed var(--color-primary)' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{
                        color: i === milestones.length - 1 ? 'var(--color-primary-dark)' : '#fff',
                        fontSize: '9px', fontWeight: '800', textAlign: 'center',
                        lineHeight: '1.1', padding: '2px',
                      }}>
                        {m.year}
                      </span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div style={{ width: '2px', height: '28px', backgroundColor: 'var(--color-border)' }} />
                    )}
                  </div>
                  {/* Text */}
                  <p style={{
                    fontSize: '13.5px', color: 'var(--color-text-muted)',
                    lineHeight: '1.65', margin: '8px 0 20px',
                  }}>
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div style={{
            background: 'linear-gradient(160deg, var(--color-navy) 0%, #0d1f4e 100%)',
            borderRadius: '20px', padding: '40px 36px',
            display: 'flex', flexDirection: 'column', gap: '20px',
          }}>
            <span style={{
              fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Join the Mission
            </span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              fontWeight: '700', color: '#ffffff',
              lineHeight: '1.3', margin: 0,
            }}>
              Your gift completes a campus that saves lives for generations.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', lineHeight: '1.75', margin: 0 }}>
              We are at a critical stage. The Medical Center needs final funding
              to reach completion. The Training Center is just beginning. Every
              dollar now has maximum impact.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => navigate('/donate')}
                style={{
                  backgroundColor: 'var(--color-green)', color: '#fff',
                  border: 'none', borderRadius: 'var(--btn-radius)',
                  padding: '14px', fontSize: '14px', fontWeight: '700',
                  cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'var(--transition)', textAlign: 'center',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-green-dark)')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-green)')}
              >
                Donate to Complete the Campus
              </button>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  backgroundColor: 'transparent', color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.30)',
                  borderRadius: 'var(--btn-radius)',
                  padding: '14px', fontSize: '14px', fontWeight: '600',
                  cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'var(--transition)', textAlign: 'center',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Request a Briefing
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .impact-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .impact-bottom { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 480px) {
          .impact-metrics { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
};

export default ImpactMetrics;