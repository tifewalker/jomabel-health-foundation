import React from 'react';
import { Quote, Heart, Shield } from 'lucide-react';
import founderPhoto from '../../assests/images/founderphoto.jpeg';

const FounderQuote = () => {
  return (
    <section className="founder-quote-section">
      <style>{`
        .founder-quote-section {
          background-color: #F9FAFB;
          font-family: var(--font-body);
          padding: var(--section-padding-y) var(--section-padding-x);
        }
        
        .fq-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 48px;
          align-items: center;
        }
        
        /* LEFT - Small Circular Image */
        .fq-image-col {
          flex-shrink: 0;
        }
        .fq-image-wrap {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border: 4px solid #ffffff;
        }
        .fq-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .fq-founder-info {
          text-align: center;
          margin-top: 16px;
        }
        .fq-founder-name {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px;
        }
        .fq-founder-title {
          font-size: 12px;
          color: #6B7280;
          margin: 0;
        }
        
        /* RIGHT - Content */
        .fq-content-col {
          flex: 1;
        }
        .fq-heading {
          font-family: var(--font-heading);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin: 0 0 20px;
        }
        .fq-survivor-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .fq-survivor-tag {
          border-radius: 40px;
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 600;
        }
        .fq-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .fq-pullquote {
          background: #F0F9FF;
          border-left: 4px solid #1D8FD4;
          border-radius: 0 16px 16px 0;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .fq-pullquote p {
          font-family: var(--font-heading);
          font-size: 18px;
          font-style: italic;
          color: #111827;
          line-height: 1.6;
          margin: 0;
        }
        .fq-pullquote-author {
          font-size: 13px;
          font-weight: 600;
          color: #1D8FD4;
          margin-top: 12px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .fq-container {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }
          .fq-pullquote {
            text-align: left;
          }
          .fq-survivor-tags {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .fq-image-wrap {
            width: 120px;
            height: 120px;
          }
          .fq-pullquote p {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="fq-container">
        
        {/* LEFT - Small Circular Image */}
        <div className="fq-image-col">
          <div className="fq-image-wrap">
            <img
              className="fq-image"
              src={founderPhoto}
              alt="Clara Ada Ogbaa, Ed.D. — Founder, JoMabel Healthcare Foundation"
            />
          </div>
          <div className="fq-founder-info">
            <h3 className="fq-founder-name">Clara Ada Ogbaa, Ed.D.</h3>
            <p className="fq-founder-title">Founder & Executive Director</p>
          </div>
        </div>
        
        {/* RIGHT - Content */}
        <div className="fq-content-col">
          
          <h2 className="fq-heading">
            Born From Faith. Sustained by Grace.<br />
            Built For Purpose.
          </h2>
          
          {/* Survivor Tags */}
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
          
          <p className="fq-text">
            Clara Ada Ogbaa is a Nigerian-American educator, humanitarian, two-time
            cancer survivor, and kidney transplant recipient. Having experienced
            firsthand the life-saving power of quality healthcare, she made a
            profound decision to use her modest retirement savings to bring that
            same standard of care to her hometown of Ufuma, Anambra State, Nigeria.
          </p>
          
          <div className="fq-pullquote">
            <p>
              "Healthcare should never be a privilege reserved for a few.
              It is a human right — and it is the legacy we are called to leave."
            </p>
            <div className="fq-pullquote-author">
              Clara Ada Ogbaa, Ed.D.
            </div>
          </div>
          
          <p className="fq-text" style={{ marginBottom: 0 }}>
            What began as one woman's act of personal sacrifice has grown into
            JoMabel Healthcare Foundation — a nonprofit now building a 16,000+ sq. meter
            medical and training center that will serve thousands of families
            for generations to come.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;