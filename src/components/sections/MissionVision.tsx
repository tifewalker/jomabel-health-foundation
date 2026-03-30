import React from 'react';
import { Heart, Eye } from 'lucide-react';
import outreachImage from '../../assests/images/outreach5.jpeg';

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
          max-width: 1200px;
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
          gap: 32px;
        }
        .mv-top-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-primary);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .mv-heading {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4.5vw, 48px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.2;
          margin: 0 0 20px 0;
        }
        .mv-description {
          font-size: 16px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 480px;
        }
        .mv-card {
          background: var(--color-surface);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.2s;
          border: 1px solid var(--color-border);
        }
        .mv-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary-light);
        }
        .mv-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .mv-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary);
        }
        .mv-icon-wrap svg {
          width: 26px;
          height: 26px;
          stroke-width: 1.8;
        }
        .mv-card-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
        }
        .mv-card-text {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }
        .mv-image-wrapper {
          position: relative;
        }
        .mv-image {
          width: 100%;
          height: auto;
          min-height: 480px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 900px) {
          .mv-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mv-image {
            min-height: 380px;
          }
          .mv-description {
            max-width: 100%;
          }
        }
        @media (max-width: 600px) {
          .mv-heading {
            font-size: 32px;
          }
          .mv-image {
            min-height: 280px;
          }
          .mv-card {
            padding: 20px;
          }
          .mv-card-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="mv-container">

        {/* Left Column */}
        <div className="mv-left">
          <div>
            <p className="mv-top-label">Who We Are</p>
            <h2 className="mv-heading">
              Compassionate Care.<br />
              Built to Last.
            </h2>
            <p className="mv-description">
              JoMabel Healthcare Foundation is dedicated to expanding access to compassionate, 
              high-quality healthcare for underserved communities in southeastern Nigeria. 
              We believe that every person deserves dignity, wellness, and the opportunity 
              to live a healthy life.
            </p>
          </div>

          {/* Mission Card */}
          <div className="mv-card">
            <div className="mv-card-header">
              <div className="mv-icon-wrap">
                <Heart />
              </div>
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
              <div className="mv-icon-wrap">
                <Eye />
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
            </div>
            <p className="mv-card-text">
              A world where every person — regardless of location, income, or social status — 
              has access to dignified, life-saving healthcare, supported by empowered communities, 
              trained local professionals, and sustainable health infrastructure.
            </p>
          </div>
        </div>

        {/* Right Column: Authentic Image */}
        <div className="mv-image-wrapper">
          <img
            src={outreachImage}
            alt="JoMabel Healthcare Foundation community outreach in southeastern Nigeria"
            className="mv-image"
          />
        </div>

      </div>
    </section>
  );
};

export default MissionVision;