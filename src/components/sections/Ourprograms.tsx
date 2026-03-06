import React from 'react';

const StethoscopeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="#a855f7" strokeWidth="1.5"/>
    <line x1="7" y1="3" x2="7" y2="5" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="17" y1="3" x2="17" y2="5" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const programs = [
  {
    id: 1,
    title: 'Jomabel Medical Center',
    description: 'Primary care, diagnostic, maternal service and healthcare workforce training in Ufuma, Nigeria.',
  },
  {
    id: 2,
    title: 'Jomabel Medical Center',
    description: 'Providing free consultations, medications, screenings and referrals to underserved communities.',
  },
  {
    id: 3,
    title: 'Jomabel Medical Center',
    description: 'Hands-on training for young people in healthcare, leadership, and community service — building a pipeline of future professionals.',
  },
  {
    id: 4,
    title: 'Jomabel Medical Center',
    description: 'Expanding access to safe pregnancy care, delivery support, newborn care, and maternal education.',
  },
  {
    id: 5,
    title: 'Jomabel Medical Center',
    description: 'Building the physical foundations for sustainable, high-quality healthcare delivery.',
  },
  {
    id: 6,
    title: 'Jomabel Medical Center',
    description: 'Empowering individuals with vital health knowledge and prevention strategies.',
  },
];

const OurPrograms = () => {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      <style>{`
        .programs-hero {
          background: linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%);
          padding: clamp(40px, 6vw, 64px) clamp(20px, 5vw, 40px);
          text-align: center;
        }
        .programs-hero h1 {
          color: #ffffff;
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 0.01em;
        }
        .programs-hero h2 {
          color: #22c55e;
          font-size: clamp(17px, 3vw, 22px);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .programs-hero p {
          color: #d1fae5;
          font-size: clamp(13px, 2vw, 15px);
          line-height: 1.7;
          max-width: 680px;
          margin: 0 auto;
        }
        .programs-section {
          background-color: #f9fafb;
          padding: clamp(36px, 5vw, 56px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px);
        }
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .program-card {
          background-color: #ffffff;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s;
          cursor: default;
        }
        .program-card:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .learn-more-btn {
          background: none;
          border: none;
          padding: 0;
          color: #111827;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
        }
        .learn-more-btn:hover {
          color: #16a34a;
        }
        @media (max-width: 900px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 540px) {
          .programs-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .program-card {
            padding: 22px 18px 20px;
          }
        }
      `}</style>

      {/* Green Hero Banner */}
      <section className="programs-hero">
        <h1>Our Programs</h1>
        <h2>Healthcare That Transforms Communities</h2>
        <p>
          Through our world-class facilities and six program areas, we deliver care, training and lasting community impacts.
        </p>
      </section>

      {/* Cards Grid */}
      <section className="programs-section">
        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">

              {/* Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#faf5ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <StethoscopeIcon />
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', margin: 0 }}>
                {program.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.65', margin: 0, flex: 1 }}>
                {program.description}
              </p>

              {/* Learn More */}
              <button className="learn-more-btn">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPrograms;