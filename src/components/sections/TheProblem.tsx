import React from 'react';

const stats = [
  { number: '70%', label: 'of rural Nigerians', sub: 'lack access to basic healthcare' },
  { number: '1:5000', label: 'doctor-to-patient ratio', sub: 'in rural Southeast Nigeria' },
  { number: '80km+', label: 'average distance', sub: 'to the nearest specialist' },
  { number: '#6', label: 'Nigeria ranks', sub: 'among highest maternal death rates globally' },
];

const TheProblem = () => (
  <section style={{
    backgroundColor: 'var(--color-navy)',
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    fontFamily: 'var(--font-body)',
  }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)',
          letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block',
          marginBottom: '14px',
        }}>
          The Problem
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(26px, 3.5vw, 40px)',
          fontWeight: '700', color: '#ffffff',
          lineHeight: '1.2', margin: '0 0 20px',
        }}>
          A Healthcare Crisis Hidden in Plain Sight
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 1.6vw, 16px)',
          color: 'rgba(255,255,255,0.72)',
          lineHeight: '1.85', margin: 0,
        }}>
          In Ufuma, Anambra State, and across rural Southeast Nigeria, millions of people
          live without reliable access to quality healthcare. Hospitals are distant,
          understaffed, and under-equipped. Preventable diseases claim lives daily.
          Mothers die in childbirth. Children grow up without vaccinations.
          This is not a distant statistic, it is the daily reality of an entire region.
        </p>
      </div>

      {/* Stats grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '48px',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderTop: '3px solid var(--color-primary)',
            borderRadius: 'var(--card-radius)',
            padding: '28px 20px',
          }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)',
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: '800', margin: '0 0 6px',
            }}>{s.number}</p>
            <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>{s.label}</p>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '12px', margin: 0 }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Pull quote */}
      <div style={{
        borderLeft: '4px solid var(--color-primary)',
        paddingLeft: '24px',
        maxWidth: '680px',
      }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(16px, 2vw, 20px)',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: '1.65', margin: 0,
        }}>
          "The people of Ufuma do not lack the will to be healthy, they lack the
          infrastructure, the access, and the systems that make healthcare possible.
          That is what JoMabel Healthcare Foundation exists to build."
        </p>
        <p style={{ color: 'var(--color-primary)', fontSize: '12px', fontWeight: '700', marginTop: '12px', letterSpacing: '0.06em' }}>
          — Dr. Clara Ada Ogbaa, Founder
        </p>
      </div>

    </div>

    {/* Responsive */}
    <style>{`
      @media (max-width: 760px) {
        .problem-stats { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 480px) {
        .problem-stats { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default TheProblem;