import React from 'react';

const FounderQuote = () => {
  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      fontFamily: 'var(--font-body)',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
    }}>
      <style>{`
        .fq-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        /* ── LEFT — Photo with overlay ── */
        .fq-photo-side {
          position: relative;
          min-height: 500px;
        }
        .fq-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          position: absolute;
          inset: 0;
          filter: grayscale(30%);
        }
        .fq-photo-overlay {
          position: absolute;
          inset: 0;
          background: rgba(41, 197, 246, 0.55);
          mix-blend-mode: multiply;
        }
        .fq-photo-placeholder-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, var(--color-primary) 0%, var(--color-navy) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fq-photo-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(27,42,74,0.95) 0%, transparent 100%);
          padding: 40px 28px 28px;
        }
        .fq-founder-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .fq-founder-name {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: var(--color-white);
          margin: 0 0 6px;
        }
        .fq-founder-tags {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          letter-spacing: 0.04em;
        }

        /* ── RIGHT — Content ── */
        .fq-content-side {
          background: var(--color-white);
          padding: clamp(36px, 5vw, 56px) clamp(28px, 4vw, 52px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }
        .fq-heading {
          font-family: var(--font-heading);
          font-size: clamp(22px, 2.8vw, 32px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.25;
          margin: 0;
        }
        .fq-intro {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
        }
        .fq-pullquote {
          background: var(--color-primary-light);
          border-left: 3px solid var(--color-primary);
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          position: relative;
        }
        .fq-pullquote-mark-top {
          font-family: Georgia, serif;
          font-size: 28px;
          line-height: 1;
          color: var(--color-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 6px;
        }
        .fq-pullquote-mark-bottom {
          font-family: Georgia, serif;
          font-size: 28px;
          line-height: 1;
          color: var(--color-primary);
          font-weight: 700;
          display: block;
          text-align: right;
          margin-top: 6px;
        }
        .fq-pullquote p {
          font-family: var(--font-heading);
          font-size: clamp(14px, 1.6vw, 16px);
          font-style: italic;
          color: var(--color-navy);
          line-height: 1.7;
          margin: 0;
        }
        .fq-body {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .fq-wrapper {
            grid-template-columns: 1fr;
          }
          .fq-photo-side {
            min-height: 340px;
          }
        }
      `}</style>

      <div className="fq-wrapper">

        {/* ── LEFT — Photo side ── */}
        <div className="fq-photo-side">
          {/*
            When founder photo is available, replace the placeholder div below with:
            <img className="fq-photo-img" src={founderPhoto} alt="Dr. Clara Ada Ogbaa" />
            <div className="fq-photo-overlay" />
          */}
          <div className="fq-photo-placeholder-bg">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" opacity="0.3">
              <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.2"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Name overlay at bottom */}
          <div className="fq-photo-bottom">
            <p className="fq-founder-label">Founder / CEO</p>
            <h3 className="fq-founder-name">Dr Clara Ada Ogbaa</h3>
            <p className="fq-founder-tags">Ed.D. &nbsp;|&nbsp; Educator &nbsp;|&nbsp; Humanitarian &nbsp;|&nbsp; Survivor</p>
          </div>
        </div>

        {/* ── RIGHT — Content side ── */}
        <div className="fq-content-side">
          <h2 className="fq-heading">
            Born From Faith. Sustained by Grace.<br />
            Built For Purpose.
          </h2>

          <p className="fq-intro">
            Dr. Clara Ada Ogbaa is a Nigerian-American educator, humanitarian,
            two-time cancer survivor, and kidney transplant recipient. Her life was
            sustained by advanced medicine, compassionate care, and faith — experiences
            that shaped her life's mission.
          </p>

          <div className="fq-pullquote">
            <span className="fq-pullquote-mark-top">"</span>
            <p>
              Dignified, life-saving healthcare should be accessible to every person —
              not only to those fortunate enough to live near it.
            </p>
            <span className="fq-pullquote-mark-bottom">"</span>
          </div>

          <p className="fq-body">
            Born in Ufuma, Anambra State, Nigeria, Dr. Ogbaa envisioned a future where
            her hometown would be defined by possibility — not limited infrastructure.
            JoMabel Healthcare Foundation is her answer to that vision.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FounderQuote;