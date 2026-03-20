import React from 'react';
import founderPhoto from '../../assests/images/founderphoto.jpeg';

const FounderQuote = () => {
  return (
    <section style={{
      backgroundColor: '#F9FAFB',
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
          box-shadow: 0 8px 40px rgba(0,0,0,0.10);
        }

        /* ── LEFT — Photo ── */
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
        }
        .fq-photo-overlay {
          position: absolute;
          inset: 0;
          background: rgba(29, 143, 212, 0.35);
          mix-blend-mode: multiply;
        }
        .fq-photo-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(17,24,39,0.92) 0%, transparent 100%);
          padding: 40px 28px 28px;
        }
        .fq-founder-label {
          font-size: 11px;
          font-weight: 700;
          color: #29C5F6;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .fq-founder-name {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
        }
        .fq-founder-tags {
          font-size: 12px;
          color: rgba(255,255,255,0.70);
          letter-spacing: 0.04em;
        }

        /* ── RIGHT — Content ── */
        .fq-content-side {
          background: #ffffff;
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
          color: #111827;
          line-height: 1.25;
          margin: 0;
        }
        .fq-intro {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.8;
          margin: 0;
        }
        .fq-pullquote {
          background: #F0F9FF;
          border-left: 3px solid #1D8FD4;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
        }
        .fq-pullquote-mark-top {
          font-family: Georgia, serif;
          font-size: 28px;
          line-height: 1;
          color: #1D8FD4;
          font-weight: 700;
          display: block;
          margin-bottom: 6px;
        }
        .fq-pullquote-mark-bottom {
          font-family: Georgia, serif;
          font-size: 28px;
          line-height: 1;
          color: #1D8FD4;
          font-weight: 700;
          display: block;
          text-align: right;
          margin-top: 6px;
        }
        .fq-pullquote p {
          font-family: var(--font-heading);
          font-size: clamp(14px, 1.6vw, 16px);
          font-style: italic;
          color: #111827;
          line-height: 1.7;
          margin: 0;
        }
        .fq-body {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.8;
          margin: 0;
        }
        .fq-survivor-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .fq-survivor-tag {
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 600;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .fq-wrapper { grid-template-columns: 1fr; }
          .fq-photo-side { min-height: 360px; }
        }
        @media (max-width: 480px) {
          .fq-photo-side { min-height: 280px; }
        }
      `}</style>

      <div className="fq-wrapper">

        {/* ── LEFT — Real founder photo ── */}
        <div className="fq-photo-side">
          <img
            className="fq-photo-img"
            src={founderPhoto}
            alt="Clara Ada Ogbaa, Ed.D. — Founder, JoMabel Healthcare Foundation"
          />
          <div className="fq-photo-overlay" />
          <div className="fq-photo-bottom">
            <p className="fq-founder-label">Founder & Executive Director</p>
            <h3 className="fq-founder-name">Clara Ada Ogbaa, Ed.D.</h3>
            <p className="fq-founder-tags">Educator &nbsp;|&nbsp; Humanitarian &nbsp;|&nbsp; Survivor</p>
          </div>
        </div>

        {/* ── RIGHT — Content ── */}
        <div className="fq-content-side">

          <h2 className="fq-heading">
            Born From Faith. Sustained by Grace.<br />
            Built For Purpose.
          </h2>

          {/* Survivor tags */}
          <div className="fq-survivor-tags">
            <span className="fq-survivor-tag" style={{ background: '#FDF2F8', color: '#9D174D', border: '1px solid #FBCFE8' }}>
              Breast Cancer Survivor
            </span>
            <span className="fq-survivor-tag" style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}>
              Endometrial Cancer Survivor
            </span>
            <span className="fq-survivor-tag" style={{ background: '#EFF6FF', color: '#1E40AF', border: '1px solid #BFDBFE' }}>
              Kidney Transplant Recipient
            </span>
          </div>

          <p className="fq-intro">
            Clara Ada Ogbaa is a Nigerian-American educator, humanitarian, two-time
            cancer survivor, and kidney transplant recipient. Having experienced
            firsthand the life-saving power of quality healthcare, she made a
            profound decision — to use her modest retirement savings to bring that
            same standard of care to her hometown of Ufuma, Anambra State, Nigeria.
          </p>

          <div className="fq-pullquote">
            <span className="fq-pullquote-mark-top">"</span>
            <p>
              Healthcare should never be a privilege reserved for a few.
              It is a human right — and it is the legacy we are called to leave.
            </p>
            <span className="fq-pullquote-mark-bottom">"</span>
          </div>

          <p className="fq-body">
            What began as one woman's act of personal sacrifice has grown into
            JoMabel Healthcare Foundation — a nonprofit now building a 16,000+ sq. meter
            medical and training CENTER that will serve thousands of families
            for generations to come.
          </p>

        </div>
      </div>
    </section>
  );
};

export default FounderQuote;