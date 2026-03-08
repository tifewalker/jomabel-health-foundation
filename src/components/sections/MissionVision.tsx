import React from 'react';

const HeartIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.8 3.85 12 5C12.2 3.85 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14.5 12 21 12 21Z"
      stroke="var(--color-primary-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
      stroke="var(--color-primary-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="12" cy="12.5" r="3" stroke="var(--color-primary-dark)" strokeWidth="1.6" />
  </svg>
);

const MissionVision = () => {
  return (
    <section className="mv-section">
      <style>{`
        .mv-section {
          font-family: var(--font-body);
          background-color: var(--color-white);
          padding: var(--section-padding-y) var(--section-padding-x);
          display: flex;
          align-items: center;
        }
        .mv-container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .mv-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .mv-top-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-dark);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .mv-heading {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4.5vw, 48px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .mv-who-intro {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
          max-width: 420px;
        }
        .mv-card {
          background: var(--color-surface);
          border-radius: var(--card-radius);
          border-left: 4px solid var(--color-primary);
          padding: 24px 24px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mv-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mv-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mv-card-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
        }
        .mv-card-text {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
        }
        .mv-image {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 860px) {
          .mv-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mv-image { height: 320px; }
          .mv-who-intro { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .mv-heading { font-size: 32px; }
          .mv-image { height: 260px; }
        }
      `}</style>

      <div className="mv-container">

        {/* ── Left Column ── */}
        <div className="mv-left">
          <div>
            <p className="mv-top-label">Who We Are</p>
            <h2 className="mv-heading">Compassionate Care.<br />Built to Last.</h2>
            <p className="mv-who-intro">
              JoMabel Healthcare Foundation is a nonprofit organization dedicated to
              expanding access to compassionate, high-quality healthcare for underserved
              communities in Nigeria and beyond. We believe that every person deserves
              dignity, wellness, and the opportunity to live a healthy life.
            </p>
          </div>

          {/* Mission Card */}
          <div className="mv-card">
            <div className="mv-card-header">
              <div className="mv-icon-wrap"><HeartIcon /></div>
              <h3 className="mv-card-title">Our Mission</h3>
            </div>
            <p className="mv-card-text">
              To deliver accessible healthcare, strengthen community health systems,
              and promote sustainable development through medical services, education,
              and empowerment.
            </p>
          </div>

          {/* Vision Card */}
          <div className="mv-card">
            <div className="mv-card-header">
              <div className="mv-icon-wrap"><EyeIcon /></div>
              <h3 className="mv-card-title">Our Vision</h3>
            </div>
            <p className="mv-card-text">
              A world where every person — regardless of geography, income, or social
              status — has access to dignified, life-saving healthcare, supported by
              empowered communities, trained local professionals, and sustainable
              health infrastructure.
            </p>
          </div>
        </div>

        {/* ── Right Column: Image ── */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
            alt="Healthcare worker with community"
            className="mv-image"
          />
        </div>

      </div>
    </section>
  );
};

export default MissionVision;