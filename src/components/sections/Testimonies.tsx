import React from 'react';

const testimonies = [
  {
    id: 1,
    quote: "Before JoMabel Healthcare Foundation reached our community, accessing medical care was a struggle. Today, my children receive proper treatment and health education. This foundation has truly restored hope to our family",
    name: "Adewalwe Mohammed",
  },
  {
    id: 2,
    quote: "Supporting JoMabel Healthcare Foundation USA Inc. has been one of the most fulfilling decisions I've made. Their transparency, dedication, and real impact in underserved communities inspire confidence and trust.",
    name: "Emmanuel Eromax",
  },
  {
    id: 3,
    quote: "Knowing that a clinic is being built in our community gives us peace of mind. Families no longer fear medical emergencies, and we are grateful for the compassion and care JoMabel Healthcare Foundation brings",
    name: "Amarachi Osagie",
  },
  {
    id: 4,
    quote: "The presence of JoMabel Healthcare Foundation in our area has changed lives. Their outreach programs and commitment to quality healthcare have strengthened our community and improved overall wellbeing",
    name: "John Okere",
  },
];

const Testimonies = () => {
  return (
    <section className="testimonies-section">
      <style>{`
        .testimonies-section {
          background-color: #f3f4f6;
          padding: clamp(40px, 6vw, 64px) clamp(16px, 4vw, 48px) clamp(48px, 7vw, 72px);
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }
        .testimonies-heading {
          text-align: center;
          font-size: clamp(22px, 4vw, 28px);
          font-weight: 700;
          color: #111827;
          margin-bottom: 40px;
        }
        .testimonies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1040px;
          margin: 0 auto;
        }
        .testimony-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 32px 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
          overflow: hidden;
          min-height: 180px;
        }
        .testimony-quote {
          font-size: 14px;
          color: #374151;
          line-height: 1.75;
          text-align: center;
          margin: 0 0 28px;
        }
        .testimony-divider {
          height: 1px;
          background-color: #e5e7eb;
          margin-bottom: 14px;
        }
        .testimony-name {
          text-align: right;
          font-size: 13.5px;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }
        @media (max-width: 700px) {
          .testimonies-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .testimony-card {
            padding: 24px 20px 20px;
          }
          .testimony-quote {
            font-size: 13.5px;
          }
        }
      `}</style>

      <h2 className="testimonies-heading">Testimonies</h2>

      <div className="testimonies-grid">
        {testimonies.map((t) => (
          <div key={t.id} className="testimony-card">

            <p className="testimony-quote">{t.quote}</p>

            <div className="testimony-divider" />

            <p className="testimony-name">-{t.name}</p>

            {/* Green corner curl */}
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '80px', height: '80px', pointerEvents: 'none',
            }}>
              <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
                <path d="M80 80 Q80 20 20 0" stroke="#22c55e" strokeWidth="5" fill="none" strokeLinecap="round"/>
                <path d="M80 80 Q80 35 35 10" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;