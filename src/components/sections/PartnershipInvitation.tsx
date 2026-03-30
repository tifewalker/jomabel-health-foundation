import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Globe, 
  Building2, 
  Handshake, 
  ArrowRight,
  DollarSign,
  Users,
  Target
} from 'lucide-react';

// ── Your authentic images ──
import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';
import roseImage from '../../assests/images/Rose.jpg';

const partnerTypes = [
  {
    icon: Heart,
    title: 'Individual Donors',
    desc: 'From $100 to $100,000+, every gift moves us closer to completion. Choose a giving level that reflects your commitment.',
    cta: 'Donate Now',
    path: '/donate',
    bg: '#FFF7ED',
    iconBg: '#FED7AA',
    btnColor: '#EA580C',
  },
  {
    icon: Globe,
    title: 'Diaspora Supporters',
    desc: 'Join Nigerians abroad who are investing in the healthcare transformation of their homeland. Your roots, your impact.',
    cta: 'Join the Campaign',
    path: '/donate',
    bg: '#EBF5FB',
    iconBg: '#BFDBFE',
    btnColor: '#1D8FD4',
  },
  {
    icon: Building2,
    title: 'Institutional Funders',
    desc: 'Foundations, grant-making bodies, and development organizations — we welcome strategic partnership conversations.',
    cta: 'Request a Briefing',
    path: '/contact',
    bg: '#F0F9FF',
    iconBg: '#BAE6FD',
    btnColor: '#0369A1',
  },
  {
    icon: Handshake,
    title: 'Corporate Sponsors',
    desc: 'Align your brand with a credible, high-impact healthcare initiative. Naming rights, equipment sponsorship, and program funding available.',
    cta: 'Partner With JHF',
    path: '/contact',
    bg: '#F0FDF4',
    iconBg: '#BBF7D0',
    btnColor: '#16A34A',
  },
];

const PartnershipInvitation = () => {
  const navigate = useNavigate();

  return (
    <div className="partnership-page">
      <style>{`
        .partnership-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section with Image */
        .partnership-hero {
          position: relative;
          height: 60vh;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .partnership-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .partnership-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
        }
        .partnership-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
        }
        .partnership-hero h1 {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .partnership-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Ways to Give Section */
        .ways-section {
          padding: 80px clamp(20px, 5vw, 48px);
          background-color: #FFFFFF;
        }
        .ways-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .ways-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .ways-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .ways-headline {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .ways-description {
          font-size: 18px;
          color: #4B5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        /* Partner Cards Grid */
        .partner-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }
        .partner-card {
          border-radius: 20px;
          padding: 32px 24px;
          transition: all 0.3s ease;
          text-align: center;
          border: 1px solid #F0F0F0;
        }
        .partner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        .partner-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px auto;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .partner-icon svg {
          width: 32px;
          height: 32px;
          stroke-width: 1.5;
        }
        .partner-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .partner-desc {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .partner-btn {
          background: none;
          border: none;
          padding: 0;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          transition: all 0.2s;
        }
        .partner-btn:hover {
          gap: 10px;
        }
        
        /* Impact Numbers Section */
        .impact-numbers {
          background-color: #F9FAFB;
          padding: 64px clamp(20px, 5vw, 48px);
          text-align: center;
        }
        .impact-numbers-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .impact-numbers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          margin-top: 32px;
        }
        .impact-number {
          text-align: center;
        }
        .impact-number-value {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 800;
          color: #1D8FD4;
          margin-bottom: 8px;
        }
        .impact-number-label {
          font-size: 14px;
          color: #4B5563;
        }
        
        /* CTA Banner */
        .cta-banner {
          background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
          margin: 64px clamp(20px, 5vw, 48px);
          border-radius: 28px;
          padding: 56px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .cta-banner-content {
          flex: 1;
        }
        .cta-banner-title {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .cta-banner-text {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          max-width: 500px;
        }
        .cta-banner-buttons {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
        }
        .btn-primary {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          padding: 14px 32px;
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
        }
        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 10px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .partner-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .impact-numbers-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
        }
        @media (max-width: 768px) {
          .partnership-hero {
            min-height: 400px;
          }
          .partnership-hero h1 {
            font-size: 32px;
          }
          .impact-numbers-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 40px 32px;
          }
          .cta-banner-buttons {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .partner-grid {
            grid-template-columns: 1fr;
          }
          .cta-banner-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-outline {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>


      {/* Ways to Give Section */}
      <div className="ways-section">
        <div className="ways-container">
          <div className="ways-header">
            <div className="ways-label">Ways to Give</div>
            <h2 className="ways-headline">There's a Place for You</h2>
            <p className="ways-description">
              JoMabel Healthcare Foundation is actively seeking partners at every level 
              from individual donors to global institutions. There is a role here for you.
            </p>
          </div>

          {/* Partner Cards */}
          <div className="partner-grid">
            {partnerTypes.map((partner, i) => {
              const IconComponent = partner.icon;
              return (
                <div key={i} className="partner-card" style={{ background: partner.bg }}>
                  <div className="partner-icon" style={{ background: partner.iconBg }}>
                    <IconComponent style={{ color: partner.btnColor }} />
                  </div>
                  <h3 className="partner-title">{partner.title}</h3>
                  <p className="partner-desc">{partner.desc}</p>
                  <button
                    onClick={() => navigate(partner.path)}
                    className="partner-btn"
                    style={{ color: partner.btnColor }}
                  >
                    {partner.cta}
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="impact-numbers">
        <div className="impact-numbers-container">
          <div className="ways-label">Your Impact</div>
          <h2 className="ways-headline" style={{ marginBottom: '0' }}>What Your Support Achieves</h2>
          <div className="impact-numbers-grid">
            <div className="impact-number">
              <div className="impact-number-value">$100</div>
              <div className="impact-number-label">Provides medical supplies for 50 patients</div>
            </div>
            <div className="impact-number">
              <div className="impact-number-value">$500</div>
              <div className="impact-number-label">Trains one community health worker</div>
            </div>
            <div className="impact-number">
              <div className="impact-number-value">$5,000</div>
              <div className="impact-number-label">Funds a full outreach mission</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-banner-content">
          <h3 className="cta-banner-title">Ready to Make History With Us?</h3>
          <p className="cta-banner-text">
            Whether you give $100 or $100,000 whether you're an individual, a foundation, 
            or a corporation JoMabel Healthcare Foundation has a place for your partnership.
          </p>
        </div>
        <div className="cta-banner-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate Now
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipInvitation;