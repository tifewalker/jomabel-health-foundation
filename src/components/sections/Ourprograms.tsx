import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Baby, 
  HardHat, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

// ── YOUR AUTHENTIC JOMABEL IMAGES ──
import roseImage from '../../assests/images/Rose.jpg';
import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';
import infrastructureImage from '../../assests/images/IMG_3338.jpg';
import educationImage from '../../assests/images/imag1.png';
import an2Image from '../../assests/images/an2.jpg';

// Hero image (using outreach image for hero)
import heroImage from '../../assests/images/outreach2.jpeg';

const programs = [
  {
    id: 1,
    icon: Building2,
    tag: 'Facility',
    title: 'JoMabel Medical Center',
    description: 'Our operational hub offering primary care, maternal and child health services, diagnostic and laboratory services, chronic disease management, and preventive health education in Ufuma, Nigeria.',
    image: an2Image,
  },
  {
    id: 2,
    icon: Heart,
    tag: 'Outreach',
    title: 'Medical Outreach Missions',
    description: 'Regular medical missions providing free consultations, medications, screenings, and referrals reaching rural and underserved communities where healthcare access is limited or nonexistent.',
    image: outreachImage,
  },
  {
    id: 3,
    icon: GraduationCap,
    tag: 'Training',
    title: 'Youth Training & Empowerment',
    description: 'Investing in the next generation of healthcare professionals through hands-on clinical training, leadership development, community service opportunities, and career mentorship.',
    image: roseImage,
  },
  {
    id: 4,
    icon: Baby,
    tag: 'Child Health',
    title: 'Maternal & Child Health Initiative',
    description: 'Programs focused on safe pregnancy and delivery, newborn care, immunization, nutrition support, and women\'s health education for families across our communities.',
    image: maternalImage,
  },
  {
    id: 5,
    icon: HardHat,
    tag: 'Infrastructure',
    title: 'Infrastructure Development',
    description: 'Building and equipping facilities that anchor long-term community health including clinics, diagnostic centers, water and sanitation systems, and youth training complexes.',
    image: infrastructureImage,
  },
  {
    id: 6,
    icon: BookOpen,
    tag: 'Education',
    title: 'Community Health Education',
    description: 'Workshops and campaigns addressing hygiene and sanitation, disease prevention, mental and emotional wellness, and nutrition and healthy lifestyle for individuals and families.',
    image: educationImage,
  },
];

const OurPrograms = () => {
  const navigate = useNavigate();

  return (
    <div className="programs-page">
      <style>{`
        .programs-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section with Image */
        .programs-hero {
          position: relative;
          height: 70vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .programs-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .programs-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 100%);
        }
        .programs-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
        }
        .programs-hero h1 {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .programs-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Impact Stats Section */
        .impact-section {
          background-color: #F9FAFB;
          padding: 64px clamp(20px, 5vw, 48px);
        }
        .impact-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .impact-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .impact-headline {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .impact-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-top: 48px;
        }
        .impact-stat {
          text-align: center;
          padding: 24px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .impact-stat-number {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #1D8FD4;
          margin-bottom: 8px;
        }
        .impact-stat-label {
          font-size: 14px;
          color: #4B5563;
          line-height: 1.4;
        }
        
        /* Programs Grid - Card Style with Images */
        .programs-section {
          padding: 80px clamp(20px, 5vw, 48px);
          background-color: #FFFFFF;
        }
        .programs-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .programs-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .programs-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .programs-headline {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 40px);
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }
        
        /* 3-Column Program Cards with Images */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .program-card {
          background: #FFFFFF;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1px solid #F0F0F0;
        }
        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
        }
        .program-card-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }
        .program-card-content {
          padding: 24px;
        }
        .program-card-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #1D8FD4;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .program-card-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .program-card-description {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .program-card-link {
          background: none;
          border: none;
          padding: 0;
          color: #1D8FD4;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          transition: all 0.2s;
        }
        .program-card-link:hover {
          gap: 10px;
          color: #1570A6;
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1D8FD4 0%, #1570A6 100%);
          padding: 64px clamp(20px, 5vw, 48px);
          text-align: center;
          color: #ffffff;
        }
        .cta-container {
          max-width: 700px;
          margin: 0 auto;
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .cta-description {
          font-size: 18px;
          opacity: 0.95;
          margin-bottom: 32px;
        }
        .cta-btn {
          background: #ffffff;
          color: #1D8FD4;
          border: none;
          border-radius: 8px;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .impact-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .programs-hero {
            min-height: 400px;
          }
          .programs-hero h1 {
            font-size: 32px;
          }
          .programs-hero p {
            font-size: 16px;
          }
          .impact-stats {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        @media (max-width: 700px) {
          .programs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero with Your Authentic Image */}
      <div className="programs-hero">
        <img 
          src={heroImage} 
          alt="JoMabel Healthcare Foundation medical outreach" 
          className="programs-hero-image"
        />
        <div className="programs-hero-overlay" />
        <div className="programs-hero-content">
          <h1>Healthcare That Transforms Communities</h1>
          <p>
            Through six program areas, JoMabel Healthcare Foundation delivers care,
            training, and lasting community impact across Nigeria — from a growing
            16,000+ sq. meter medical campus to outreach missions that reach the most vulnerable.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="impact-section">
        <div className="impact-container">
          <div className="impact-label">Our Impact</div>
          <h2 className="impact-headline">Making Healthcare Accessible<br />to Those Who Need It Most</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-stat-number">16,000+</div>
              <div className="impact-stat-label">sqm medical & training campus under construction</div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-number">5,000+</div>
              <div className="impact-stat-label">patients served through outreach missions</div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-number">200+</div>
              <div className="impact-stat-label">community health workers trained</div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-number">1,000+</div>
              <div className="impact-stat-label">women & children receiving maternal health services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs with Your Authentic Images */}
      <div className="programs-section">
        <div className="programs-container">
          <div className="programs-header">
            <div className="programs-label">Our Programs & Services</div>
            <h2 className="programs-headline">Six Ways We Serve</h2>
          </div>
          
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="program-card-image"
                />
                <div className="program-card-content">
                  <div className="program-card-tag">{program.tag}</div>
                  <h3 className="program-card-title">{program.title}</h3>
                  <p className="program-card-description">{program.description}</p>
                  <button className="program-card-link" onClick={() => navigate('/programs')}>
                    Learn more
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h3 className="cta-title">Ready to Make an Impact?</h3>
          <p className="cta-description">
            Your support helps us build healthcare infrastructure, train local professionals, 
            and save lives in underserved communities across Nigeria.
          </p>
          <button className="cta-btn" onClick={() => navigate('/donate')}>
            Support Our Mission
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;