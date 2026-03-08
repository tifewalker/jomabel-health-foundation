import React from 'react';

// ── Placeholder testimonies — replace with real quotes from Dr. Ogbaa when available ──
const testimonies = [
  {
    id: 1,
    quote: "Before JoMabel Healthcare Foundation reached our community, accessing medical care was a struggle. Today, my children receive proper treatment and health education. This foundation has truly restored hope to our family.",
    name: "Adewalwe Mohammed",
    role: "Community Member, Ufuma",
  },
  {
    id: 2,
    quote: "Supporting JoMabel Healthcare Foundation has been one of the most fulfilling decisions I've made. Their transparency, dedication, and real impact in underserved communities inspire confidence and trust.",
    name: "Emmanuel Eromax",
    role: "Donor & Partner",
  },
  {
    id: 3,
    quote: "Knowing that a clinic is being built in our community gives us peace of mind. Families no longer fear medical emergencies, and we are grateful for the compassion and care JoMabel Healthcare Foundation brings.",
    name: "Amarachi Osagie",
    role: "Community Member, Anambra State",
  },
  {
    id: 4,
    quote: "The presence of JoMabel Healthcare Foundation in our area has changed lives. Their outreach programs and commitment to quality healthcare have strengthened our community and improved overall wellbeing.",
    name: "John Okere",
    role: "Community Leader",
  },
];

const Testimonies = () => {
  return (
    <section className="testimonies-section">
      <style>{`
        .testimonies-section {
          background-color: var(--color-surface);
          padding: var(--section-padding-y) var(--section-padding-x);
          font-family: var(--font-body);
        }
        .testimonies-top-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-dark);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .testimonies-heading {
          text-align: center;
          font-family: var(--font-heading);
          font-size: clamp(22px, 3.5vw, 32px);
          font-weight: 700;
          color: var(--color-navy);
          margin-bottom: 8px;
        }
        .testimonies-sub {
          text-align: center;
          font-size: 14px;
          color: var(--color-text-muted);
          margin-bottom: 40px;
          font-style: italic;
        }
        .testimonies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1040px;
          margin: 0 auto;
        }
        .testimony-card {
          background-color: var(--color-white);
          border-radius: var(--card-radius);
          border: 1px solid var(--color-border);
          padding: 32px 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          min-height: 180px;
          transition: var(--transition);
        }
        .testimony-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
          border-color: var(--color-primary);
        }
        .testimony-quote-mark {
          font-family: Georgia, serif;
          font-size: 48px;
          line-height: 1;
          color: var(--color-primary);
          opacity: 0.4;
          margin-bottom: 8px;
          display: block;
        }
        .testimony-quote {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0 0 24px;
          flex: 1;
        }
        .testimony-divider {
          height: 1px;
          background-color: var(--color-border);
          margin-bottom: 14px;
        }
        .testimony-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .testimony-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary-light), var(--color-navy-light));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-navy-mid);
          flex-shrink: 0;
        }
        .testimony-info {
          text-align: right;
        }
        .testimony-name {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 2px;
        }
        .testimony-role {
          font-size: 12px;
          color: var(--color-text-muted);
          margin: 0;
        }

        /* Placeholder note */
        .testimonies-note {
          text-align: center;
          margin-top: 28px;
          font-size: 12px;
          color: var(--color-text-light);
          font-style: italic;
        }

        @media (max-width: 700px) {
          .testimonies-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .testimony-card { padding: 24px 20px 20px; }
          .testimony-quote { font-size: 13.5px; }
        }
      `}</style>

      <p className="testimonies-top-label">Community Voices</p>
      <h2 className="testimonies-heading">What People Are Saying</h2>
      <p className="testimonies-sub">Stories of hope, healing, and transformation from our communities.</p>

      <div className="testimonies-grid">
        {testimonies.map((t) => (
          <div key={t.id} className="testimony-card">

            <span className="testimony-quote-mark">"</span>
            <p className="testimony-quote">{t.quote}</p>

            <div className="testimony-divider" />

            <div className="testimony-footer">
              <div className="testimony-avatar">
                {t.name.charAt(0)}
              </div>
              <div className="testimony-info">
                <p className="testimony-name">{t.name}</p>
                <p className="testimony-role">{t.role}</p>
              </div>
            </div>

            {/* Sky blue corner accent */}
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '80px', height: '80px', pointerEvents: 'none',
            }}>
              <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
                <path d="M80 80 Q80 20 20 0" stroke="var(--color-primary)" strokeWidth="5" fill="none" strokeLinecap="round"/>
                <path d="M80 80 Q80 35 35 10" stroke="var(--color-primary)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </div>

          </div>
        ))}
      </div>

      <p className="testimonies-note">* Testimonials to be updated with verified community voices from Dr. Ogbaa.</p>

    </section>
  );
};

export default Testimonies;