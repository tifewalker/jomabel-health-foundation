import React from 'react';

const stats = [
  { number: '70%',   label: 'of rural Nigerians',          sub: 'lack access to basic healthcare' },
  { number: '1:5000', label: 'Doctor-to-patient ratio',    sub: 'in rural Southeast Nigeria' },
  { number: '80km+', label: 'Average distance traveled',   sub: 'to reach the nearest specialist' },
  { number: '#6',    label: 'Nigeria ranks',               sub: 'among highest maternal death rates globally' },
];

const TheProblem = () => (
  <section style={{
    backgroundColor: '#F9FAFB',
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    fontFamily: 'var(--font-body)',
  }}>
    <style>{`
      .problem-inner {
        max-width: 1080px;
        margin: 0 auto;
      }
      .problem-top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: start;
        margin-bottom: 56px;
      }
      .problem-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 48px;
      }
      .problem-stat-card {
        background: #F9FAFB;
        border: 1px solid #E5E7EB;
        border-top: 3px solid #1D8FD4;
        border-radius: 12px;
        padding: 24px 18px;
        transition: box-shadow 0.2s;
      }
      .problem-stat-card:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .problem-quote {
        background: #F0F9FF;
        border-left: 4px solid #1D8FD4;
        border-radius: 0 12px 12px 0;
        padding: 24px 28px;
        max-width: 780px;
      }

      @media (max-width: 860px) {
        .problem-top { grid-template-columns: 1fr; gap: 32px; }
        .problem-stats { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 480px) {
        .problem-stats { grid-template-columns: 1fr 1fr; gap: 12px; }
        .problem-quote { padding: 18px 20px; }
      }
      @media (max-width: 360px) {
        .problem-stats { grid-template-columns: 1fr; }
      }
    `}</style>

    <div className="problem-inner">

      {/* Top — label + heading left, description right */}
      <div className="problem-top">
        <div>
          <span style={{
            display: 'inline-block',
            background: '#EBF5FB',
            color: '#1D8FD4',
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: '999px',
            marginBottom: '18px',
          }}>
            The Problem
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: '700', color: '#111827',
            lineHeight: '1.2', margin: 0,
          }}>
            A Healthcare Crisis Hidden<br />in Plain Sight
          </h2>
        </div>

        <div style={{ paddingTop: '8px' }}>
          <p style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            color: '#4B5563',
            lineHeight: '1.85', margin: '0 0 16px',
          }}>
            In Ufuma, Anambra State, and across rural Southeast Nigeria, millions of
            people live without reliable access to quality healthcare. Hospitals are
            distant, understaffed, and under-equipped. Preventable diseases claim
            lives every day.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            color: '#4B5563',
            lineHeight: '1.85', margin: 0,
          }}>
            Mothers die in childbirth from conditions that are entirely treatable.
            Children grow up without basic vaccinations. Elderly patients travel
            hours by road to reach a doctor. This is not a distant statistic —
            it is the daily reality of an entire region that deserves better.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="problem-stats">
        {stats.map((s, i) => (
          <div key={i} className="problem-stat-card">
            <p style={{
              fontFamily: 'var(--font-heading)',
              color: '#1D8FD4',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: '800', margin: '0 0 6px',
            }}>{s.number}</p>
            <p style={{
              color: '#111827',
              fontSize: '13px', fontWeight: '700',
              margin: '0 0 4px', lineHeight: '1.4',
            }}>{s.label}</p>
            <p style={{
              color: '#6B7280',
              fontSize: '12px', margin: 0, lineHeight: '1.5',
            }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Pull quote */}
      <div className="problem-quote">
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(15px, 1.8vw, 19px)',
          fontStyle: 'italic',
          color: '#111827',
          lineHeight: '1.7', margin: '0 0 12px',
        }}>
          "The people of Ufuma do not lack the will to be healthy — they lack the
          infrastructure, the access, and the systems that make healthcare possible.
          That is what JoMabel Healthcare Foundation exists to build."
        </p>
        <p style={{
          color: '#1D8FD4',
          fontSize: '12px', fontWeight: '700',
          margin: 0, letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          — Clara Ada Ogbaa, Founder & Executive Director
        </p>
      </div>

    </div>
  </section>
);

export default TheProblem;