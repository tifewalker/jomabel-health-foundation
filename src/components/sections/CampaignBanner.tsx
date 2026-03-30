import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Building2, Users } from 'lucide-react';
import outreach4 from '../../assests/images/outreach4.jpeg';

const CampaignBanner = () => {
  const navigate = useNavigate();
  const raised = 7500000;
  const goal = 10000000;
  const percentage = Math.round((raised / goal) * 100);

  const formatNaira = (amount: number): string =>
    '₦' + amount.toLocaleString('en-NG');

  return (
    <div className="campaign-banner">
      <style>{`
        .campaign-banner {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          overflow: hidden;
        }
        
        /* Background Image */
        .campaign-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        /* Overlay */
        .campaign-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);
        }
        
        /* Content Container */
        .campaign-container {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 32px;
          text-align: center;
        }
        
        /* Tag */
        .campaign-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          padding: 6px 16px;
          border-radius: 40px;
          margin-bottom: 24px;
        }
        
        /* Title */
        .campaign-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        /* Description */
        .campaign-description {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 32px auto;
        }
        
        /* Progress Card */
        .progress-card {
          background: rgba(255,255,255,0.98);
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 32px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .progress-stats {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .progress-percentage {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 800;
          color: #1D8FD4;
        }
        .progress-amounts {
          font-size: 16px;
          color: #4B5563;
        }
        .progress-raised {
          font-weight: 700;
          color: #1D8FD4;
        }
        .progress-goal {
          font-weight: 700;
          color: #16A34A;
        }
        .progress-bar {
          background-color: #E5E7EB;
          border-radius: 100px;
          height: 12px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #1D8FD4 0%, #16A34A 100%);
          border-radius: 100px;
          transition: width 1s ease;
        }
        
        /* Mini Stats Row */
        .mini-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .mini-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.9);
        }
        .mini-stat svg {
          width: 20px;
          height: 20px;
          opacity: 0.8;
        }
        .mini-stat span {
          font-size: 14px;
          font-weight: 500;
        }
        
        /* Buttons */
        .campaign-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 60px;
          padding: 14px 40px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background: #15803D;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(22,163,74,0.4);
        }
        .btn-outline {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 60px;
          padding: 14px 40px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.6);
          transform: translateY(-2px);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .campaign-container {
            padding: 48px 24px;
          }
          .campaign-title {
            font-size: 28px;
          }
          .campaign-description {
            font-size: 16px;
          }
          .progress-card {
            padding: 20px 24px;
          }
          .progress-stats {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .mini-stats {
            gap: 24px;
          }
          .campaign-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-outline {
            justify-content: center;
          }
        }
      `}</style>

      {/* Background Image */}
      <img
        src={outreach4}
        alt="JoMabel Healthcare Foundation medical outreach"
        className="campaign-bg-image"
      />
      <div className="campaign-overlay" />

      {/* Content */}
      <div className="campaign-container">
        <div className="campaign-tag">Active Campaign</div>
        
        <h2 className="campaign-title">
          Complete the JoMabel Medical Campus
        </h2>
        
        <p className="campaign-description">
          Help us finish the 16,000+ sq. meter medical and training center in Ufuma, 
          Anambra State — bringing dignified healthcare to thousands of families.
        </p>

        {/* Progress Card */}
        <div className="progress-card">
          <div className="progress-stats">
            <div className="progress-percentage">{percentage}% Complete</div>
            <div className="progress-amounts">
              <span className="progress-raised">{formatNaira(raised)}</span>
              <span style={{ color: '#9CA3AF' }}> raised of </span>
              <span className="progress-goal">{formatNaira(goal)}</span>
              <span style={{ color: '#9CA3AF' }}> goal</span>
            </div>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Mini Stats */}
        <div className="mini-stats">
          <div className="mini-stat">
            <Heart size={18} />
            <span>16,000+ sqm campus</span>
          </div>
          <div className="mini-stat">
            <Building2 size={18} />
            <span>Medical Center + Training Center</span>
          </div>
          <div className="mini-stat">
            <Users size={18} />
            <span>50,000+ lives impacted annually</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="campaign-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate Now
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;