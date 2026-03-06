import React from 'react';

const HeartIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.8 3.85 12 5C12.2 3.85 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14.5 12 21 12 21Z"
      stroke="#2CA4B5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
      stroke="#2CA4B5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="12" cy="12.5" r="3" stroke="#2CA4B5" strokeWidth="1.6" />
  </svg>
);

const MissionVision = () => {
  return (
    <section className="mv-section">
      <style>{`
        .mv-section {
          font-family: 'Georgia', serif;
          background-color: #ffffff;
          padding: clamp(40px, 6vw, 60px) clamp(20px, 5vw, 40px);
          display: flex;
          align-items: center;
        }
        .mv-container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .mv-left {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .mv-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          color: #111111;
          line-height: 1.1;
          margin: 0;
        }
        .mv-text {
          font-size: 15px;
          color: #444444;
          line-height: 1.75;
          max-width: 380px;
          margin: 0;
        }
        .mv-vision-indent {
          padding-left: 80px;
        }
        .mv-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #EFF9FB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mv-image {
          width: 100%;
          max-width: 480px;
          height: 440px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
        }

        /* Tablet — image moves below text */
        @media (max-width: 860px) {
          .mv-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .mv-vision-indent {
            padding-left: 40px;
          }
          .mv-image {
            max-width: 100%;
            height: 320px;
          }
          .mv-image-wrap {
            display: flex;
            justify-content: center;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .mv-left {
            gap: 36px;
          }
          .mv-vision-indent {
            padding-left: 0;
          }
          .mv-heading {
            font-size: 36px;
          }
          .mv-text {
            font-size: 14px;
            max-width: 100%;
          }
          .mv-image {
            height: 260px;
          }
        }
      `}</style>

      <div className="mv-container">

        {/* Left Column */}
        <div className="mv-left">

          {/* Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="mv-icon-wrap"><HeartIcon /></div>
              <h2 className="mv-heading">Mission</h2>
            </div>
            <p className="mv-text">
              JoMabel Healthcare Foundation exists to provide access to
              compassionate, high-quality healthcare, strengthen community
              health systems, and promote dignity, wellness, and sustainable
              development for underserved populations
            </p>
          </div>

          {/* Vision */}
          <div className="mv-vision-indent">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="mv-icon-wrap"><EyeIcon /></div>
              <h2 className="mv-heading">Vision</h2>
            </div>
            <p className="mv-text">
              A world where every person — regardless of geography, income, or
              social status — has access to dignified, life-saving healthcare.
            </p>
          </div>

        </div>

        {/* Right Column: Image */}
        <div className="mv-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80"
            alt="Healthcare worker with children"
            className="mv-image"
          />
        </div>

      </div>
    </section>
  );
};

export default MissionVision;