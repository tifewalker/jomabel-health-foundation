import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignBanner from '../components/sections/CampaignBanner';
import { 
  Stethoscope, 
  Heart, 
  Megaphone, 
  Building2,
  ArrowRight,
  MapPin,
  Users,
  GraduationCap,
  Baby,
  BookOpen
} from 'lucide-react';

// ─── YOUR AUTHENTIC IMAGES ───
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach2 from '../assests/images/outreach2.jpeg';
import outreach4 from '../assests/images/outreach4.jpeg';
import outreach5 from '../assests/images/outreach5.jpeg';


// ─── PROGRAMS HERO ───────────────────────────────────────────────────────────
const ProgramsHero = () => {
  const navigate = useNavigate();
  return (
    <section className="programs-hero">
      <img
        src={outreach5}
        alt="JoMabel outreach mission in Ufuma"
        className="programs-hero-bg"
      />
      <div className="programs-hero-overlay" />
      <div className="programs-hero-content">
        <span className="hero-tag">JoMabel Healthcare Foundation</span>
        <h1 className="hero-title">
          Our Programs & Services
        </h1>
        <p className="hero-description">
          Through our two facilities and six program areas, JoMabel Healthcare
          Foundation delivers healthcare, training, and lasting community
          transformation across Nigeria.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/campaign')}>
            Join The Campaign
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/about')}>
            Learn Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── FACILITY CARDS (NO IMAGES) ──────────────────────────────────────────────
interface FacilityCardProps {
  logo: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const FacilityCard = ({ logo, title, description, features, gradient }: FacilityCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="facility-card" style={{ background: gradient }}>
      <div className="facility-logo-wrap">
        <img src={logo} alt={title} className="facility-logo" />
      </div>
      <h3 className="facility-title">{title}</h3>
      <p className="facility-description">{description}</p>
      <ul className="facility-features">
        {features.map((item, i) => (
          <li key={i}>
            <div className="feature-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="facility-link" onClick={() => navigate('/campaign')}>
        Learn More
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

// ─── PROGRAM CARD ────────────────────────────────────────────────────────────
interface ProgramCardProps {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  color: string;
}

const ProgramCard = ({ icon: Icon, category, title, description, bullets, image, color }: ProgramCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="program-card">
      <div className="program-card-image-wrap">
        <img src={image} alt={title} className="program-card-image" />
        <div className="program-card-icon">
          <Icon size={24} />
        </div>
      </div>
      <div className="program-card-content">
        <span className="program-category" style={{ background: `${color}15`, color: color }}>
          {category}
        </span>
        <h3 className="program-title">{title}</h3>
        <p className="program-description">{description}</p>
        <ul className="program-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>
              <div className="bullet-dot" style={{ background: color }} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <button className="program-link" onClick={() => navigate('/donate')}>
          Support This Program
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

// ─── GEOGRAPHIC FOCUS ────────────────────────────────────────────────────────
const GeographicFocus = () => (
  <div className="geo-section">
    <div className="geo-content">
      <span className="geo-label">Where We Work</span>
      <h3 className="geo-title">Geographic Focus</h3>
      <p className="geo-description">
        Our primary work is rooted in southeastern Nigeria — specifically
        Anambra State and surrounding regions — with a growing diaspora
        network and global partnerships that amplify our reach and impact.
      </p>
    </div>
    <div className="geo-cards">
      <div className="geo-card">
        <MapPin size={20} className="geo-icon" />
        <div>
          <p className="geo-card-label">Primary</p>
          <p className="geo-card-value">Southeastern Nigeria (Anambra State & surrounding regions)</p>
        </div>
      </div>
      <div className="geo-card">
        <Users size={20} className="geo-icon" />
        <div>
          <p className="geo-card-label">Secondary</p>
          <p className="geo-card-value">Nigerian diaspora communities & global partners</p>
        </div>
      </div>
    </div>
  </div>
);

// ─── MAIN PROGRAMS COMPONENT ─────────────────────────────────────────────────
const Programs = () => {
  const navigate = useNavigate();

  const medicalCenterFeatures = [
    'Primary care & diagnostics',
    'Maternal & child health services',
    'Chronic disease management',
    'Preventive health education',
  ];

  const trainingCenterFeatures = [
    'Hands-on clinical training',
    'Leadership development',
    'Community service opportunities',
    'Career mentorship programs',
  ];

  const programCards = [
    {
      icon: Stethoscope,
      category: 'Medical Outreach',
      title: 'Medical Outreach Missions',
      description: 'Regular medical missions providing free consultations, medications, screenings, and referrals — reaching rural and underserved communities.',
      bullets: ['Free consultations & medications', 'Health screenings & referrals', 'Reaching rural communities'],
      image: outreach1,
      color: '#1D8FD4',
    },
    {
      icon: Baby,
      category: 'Maternal & Child Health',
      title: 'Maternal & Child Health Initiative',
      description: 'Programs focused on safe pregnancy and delivery, newborn care, immunization, nutrition support, and women\'s health education.',
      bullets: ['Safe pregnancy & delivery', 'Newborn care & immunization', 'Nutrition & women\'s health'],
      image: outreach2,
      color: '#16A34A',
    },
    {
      icon: BookOpen,
      category: 'Community Education',
      title: 'Community Health Education',
      description: 'Workshops and campaigns addressing hygiene and sanitation, disease prevention, mental and emotional wellness, and nutrition.',
      bullets: ['Hygiene & sanitation workshops', 'Disease prevention campaigns', 'Mental & emotional wellness'],
      image: outreach4,
      color: '#EA580C',
    },
    {
      icon: Building2,
      category: 'Infrastructure',
      title: 'Healthcare Infrastructure Development',
      description: 'Building and equipping facilities that anchor long-term community health — including clinics, diagnostic centers, and water systems.',
      bullets: ['Clinics & diagnostic centers', 'Water & sanitation systems', 'Youth training complexes'],
      image: outreach5,
      color: '#1D4ED8',
    },
  ];

  return (
    <div className="programs-page">
      <style>{`
        .programs-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section */
        .programs-hero {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .programs-hero-bg {
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
          background: linear-gradient(to right, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 60%, rgba(17,24,39,0.4) 100%);
        }
        .programs-hero-content {
          position: relative;
          z-index: 2;
          padding: clamp(48px, 8vw, 80px) clamp(24px, 5vw, 64px);
          max-width: 700px;
        }
        .hero-tag {
          display: inline-block;
          background: rgba(29,143,212,0.2);
          border: 1px solid rgba(29,143,212,0.4);
          color: #1D8FD4;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 40px;
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: var(--font-heading);
          color: #ffffff;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .hero-description {
          color: rgba(255,255,255,0.85);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 520px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        /* Buttons */
        .btn-primary {
          background-color: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background-color: #15803D;
          transform: translateY(-1px);
        }
        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 10px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.6);
        }
        
        /* Overview Section */
        .programs-overview {
          padding: 80px clamp(24px, 5vw, 48px);
          max-width: 1280px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 700;
          color: #111827;
          margin-top: 12px;
        }
        
        /* Facility Cards Row */
        .facility-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 48px;
        }
        .facility-card {
          border-radius: 28px;
          overflow: hidden;
          padding: 32px 28px;
          transition: all 0.3s ease;
        }
        .facility-card:hover {
          transform: translateY(-4px);
        }
        .facility-logo-wrap {
          background: #ffffff;
          border-radius: 16px;
          padding: 20px 24px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100px;
        }
        .facility-logo {
          height: auto;
          width: 280px;
          object-fit: contain;
        }
        .facility-title {
          font-family: var(--font-heading);
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .facility-description {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .facility-features {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .facility-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.75);
          font-size: 13px;
        }
        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #1D8FD4;
          flex-shrink: 0;
        }
        .facility-link {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          font-family: inherit;
          transition: all 0.2s;
        }
        .facility-link:hover {
          gap: 10px;
          opacity: 0.85;
        }
        
        /* Program Cards Grid */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin: 48px 0;
        }
        .program-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
          border-color: #1D8FD4;
        }
        .program-card-image-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .program-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .program-card-icon {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(255,255,255,0.95);
          border-radius: 12px;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .program-card-content {
          padding: 24px;
        }
        .program-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
        }
        .program-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .program-description {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .program-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .program-bullets li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #4B5563;
        }
        .bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .program-link {
          background: none;
          border: none;
          color: #1D8FD4;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          transition: all 0.2s;
        }
        .program-link:hover {
          gap: 10px;
        }
        
        /* Geographic Focus */
        .geo-section {
          background: #F0F9FF;
          border-radius: 28px;
          padding: 40px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .geo-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
        }
        .geo-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 12px 0 16px;
        }
        .geo-description {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.6;
        }
        .geo-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .geo-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .geo-icon {
          color: #1D8FD4;
          flex-shrink: 0;
        }
        .geo-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #1D8FD4;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }
        .geo-card-value {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }
        
        /* Responsive */
        @media (max-width: 900px) {
          .facility-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .programs-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .geo-section {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 32px 28px;
          }
        }
        @media (max-width: 600px) {
          .hero-buttons {
            flex-direction: column;
          }
          .btn-primary, .btn-outline {
            text-align: center;
            justify-content: center;
          }
          .geo-section {
            padding: 28px 24px;
          }
          .facility-logo {
            width: 220px;
          }
        }
      `}</style>

      <Navbar />
      <ProgramsHero />
      
      <div className="programs-overview">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Programs Overview</h2>
        </div>

        {/* Two Main Facility Cards - NO IMAGES */}
        <div className="facility-row">
          <FacilityCard
            logo={logo2}
            title="JoMabel Medical Center"
            description="Our operational hub offering primary care, maternal and child health services, diagnostic and laboratory services, chronic disease management, and preventive health education in Ufuma, Anambra State, Nigeria."
            features={medicalCenterFeatures}
            gradient="linear-gradient(160deg, #111827 0%, #1D4ED8 100%)"
          />
          <FacilityCard
            logo={logo3}
            title="Youth Training & Skills Center"
            description="Investing in the next generation of healthcare professionals through hands-on clinical training, leadership development, community service opportunities, and career mentorship programs."
            features={trainingCenterFeatures}
            gradient="linear-gradient(160deg, #1D4ED8 0%, #1D8FD4 100%)"
          />
        </div>

        {/* Four Program Cards */}
        <div className="programs-grid">
          {programCards.map((program, i) => (
            <ProgramCard key={i} {...program} />
          ))}
        </div>

        {/* Geographic Focus */}
        <GeographicFocus />
      </div>

      <CampaignBanner />
      <Footer />
    </div>
  );
};

export default Programs;