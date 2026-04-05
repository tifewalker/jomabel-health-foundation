import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import founderPhoto from '../../assests/images/founderphoto.jpeg';

const FounderStory = () => {
  const navigate = useNavigate();
  
  return (
    <section className="founder-section">
      <style>{`
        .founder-section {
          background-color: #FFFFFF;
          padding: var(--section-padding-y) var(--section-padding-x);
          font-family: var(--font-body);
        }
        .founder-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        /* Layout: Image left, text right */
        .founder-layout {
          display: flex;
          gap: 56px;
          align-items: flex-start;
        }
        
        /* Left Column - Small Circular Image */
        .founder-image-col {
          flex-shrink: 0;
        }
        .founder-image-wrap {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        
        /* Right Column - Text Content */
        .founder-content-col {
          flex: 1;
        }
        .founder-headline {
          font-family: var(--font-heading);
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .founder-text {
          font-size: 17px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .founder-btn {
          background: transparent;
          color: #1D8FD4;
          border: none;
          padding: 0;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .founder-btn:hover {
          gap: 12px;
          color: #1570A6;
        }
        
        /* Responsive */
        @media (max-width: 700px) {
          .founder-layout {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 24px;
          }
          .founder-headline {
            font-size: 28px;
          }
          .founder-text {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="founder-container">
        
        <div className="founder-layout">
          
          {/* Left: Small Circular Image */}
          <div className="founder-image-col">
            <div className="founder-image-wrap">
              <img
                src={founderPhoto}
                alt="Clara Ada Ogbaa, Ed.D. — Founder, JoMabel Healthcare Foundation"
                className="founder-img"
              />
            </div>
          </div>
          
          {/* Right: Text Content */}
          <div className="founder-content-col">
            <h2 className="founder-headline">
              Following Clara's Vision
            </h2>
            <p className="founder-text">
              Dr. Clara Ada Ogbaa founded JoMabel Healthcare Foundation based on the belief 
              that every person deserves access to quality healthcare regardless of where 
              they are born or what they can afford. A two-time cancer survivor and kidney 
              transplant recipient, Clara experienced firsthand the life-saving power of 
              quality medical care. She returned to her hometown of Ufuma, Nigeria, and 
              began building a healthcare campus with her own retirement savings.
            </p>
            <p className="founder-text">
              Today, Clara's vision is becoming reality. She cares for the sick, trains 
              local healthcare workers, and is transforming healthcare in rural southeastern 
              Nigeria saving lives and building a movement toward health equity. We carry 
              forward her legacy and vision.
            </p>
            <button className="founder-btn" onClick={() => navigate('/about')}>
              Read Her Full Story
              <ArrowRight size={16} />
            </button>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default FounderStory;