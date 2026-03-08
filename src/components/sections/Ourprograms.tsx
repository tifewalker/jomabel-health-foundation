import React from 'react';
import { useNavigate } from 'react-router-dom';

// ── Real outreach photos from client ──
import outreach1 from '../../assests/images/outreach1.jpeg';
import outreach2 from '../../assests/images/outreach2.jpeg';
import outreach3 from '../../assests/images/outreach3.jpeg';
import outreach4 from '../../assests/images/outreach4.jpeg';
import outreach5 from '../../assests/images/outreach5.jpeg';

const MedicalCenterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v6M9 9h6" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const OutreachIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="var(--color-primary-dark)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="var(--color-primary-dark)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="var(--color-primary-dark)" strokeWidth="1.5"/>
  </svg>
);
const SkillsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--color-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const MaternalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="var(--color-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const InfrastructureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="var(--color-orange-dark)" strokeWidth="1.5"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="var(--color-orange-dark)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12v4M10 14h4" stroke="var(--color-orange-dark)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const EducationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="var(--color-navy-mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const programs = [
  {
    id: 1,
    icon: <MedicalCenterIcon />,
    iconBg: 'var(--color-navy-light)',
    tag: 'Facility',
    title: 'JoMabel Medical Center',
    description: 'Our operational hub offering primary care, maternal and child health services, diagnostic and laboratory services, chronic disease management, and preventive health education in Ufuma, Nigeria.',
  },
  {
    id: 2,
    icon: <OutreachIcon />,
    iconBg: 'var(--color-primary-light)',
    tag: 'Outreach',
    title: 'Medical Outreach Missions',
    description: 'Regular medical missions providing free consultations, medications, screenings, and referrals — reaching rural and underserved communities where healthcare access is limited or nonexistent.',
  },
  {
    id: 3,
    icon: <SkillsIcon />,
    iconBg: 'var(--color-orange-light)',
    tag: 'Training',
    title: 'Youth Training & Empowerment',
    description: 'Investing in the next generation of healthcare professionals through hands-on clinical training, leadership development, community service opportunities, and career mentorship.',
  },
  {
    id: 4,
    icon: <MaternalIcon />,
    iconBg: 'var(--color-green-light)',
    tag: 'Child Health',
    title: 'Maternal & Child Health Initiative',
    description: 'Programs focused on safe pregnancy and delivery, newborn care, immunization, nutrition support, and women\'s health education for families across our communities.',
  },
  {
    id: 5,
    icon: <InfrastructureIcon />,
    iconBg: 'var(--color-orange-light)',
    tag: 'Infrastructure',
    title: 'Infrastructure Development',
    description: 'Building and equipping facilities that anchor long-term community health — including clinics, diagnostic centers, water and sanitation systems, and youth training complexes.',
  },
  {
    id: 6,
    icon: <EducationIcon />,
    iconBg: 'var(--color-navy-light)',
    tag: 'Education',
    title: 'Community Health Education',
    description: 'Workshops and campaigns addressing hygiene and sanitation, disease prevention, mental and emotional wellness, and nutrition and lifestyle health for individuals and families.',
  },
];

const OurPrograms = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <style>{`
        /* ── HERO BANNER ── */
        .programs-hero {
          position: relative;
          padding: clamp(56px, 8vw, 96px) clamp(20px, 5vw, 40px);
          text-align: center;
          overflow: hidden;
        }
        .programs-hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .programs-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(27,42,74,0.75) 0%,
            rgba(41,197,246,0.60) 100%);
        }
        .programs-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
        }
        .programs-hero-label {
          display: inline-block;
          background: rgba(41,197,246,0.18);
          border: 1px solid rgba(41,197,246,0.35);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 700;
          padding: 5px 16px;
          border-radius: 999px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .programs-hero h1 {
          color: var(--color-white);
          font-family: var(--font-heading);
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 700;
          margin: 0 0 14px;
          line-height: 1.2;
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .programs-hero p {
          color: rgba(255,255,255,0.80);
          font-size: clamp(13px, 2vw, 15px);
          line-height: 1.8;
          margin: 0 auto;
        }

        /* ── CARDS SECTION ── */
        .programs-section {
          background-color: var(--color-surface);
          padding: clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px) clamp(52px, 6vw, 80px);
          border-top: 4px solid var(--color-primary);
        }
        .programs-section-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary-dark);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .programs-section-title {
          text-align: center;
          font-family: var(--font-heading);
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: var(--color-navy);
          margin-bottom: 12px;
        }
        .programs-section-sub {
          text-align: center;
          font-size: 14px;
          color: var(--color-text-muted);
          max-width: 520px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto 40px;
        }
        .program-card {
          background-color: var(--color-white);
          border-radius: var(--card-radius);
          border: 1px solid var(--color-border);
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .program-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
          border-color: var(--color-primary);
        }
        .card-tag {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          color: var(--color-navy-mid);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--color-navy-light);
          padding: 3px 10px;
          border-radius: 999px;
          width: fit-content;
        }
        .card-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.3;
        }
        .card-desc {
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }
        .learn-more-btn {
          background: none;
          border: none;
          padding: 0;
          color: var(--color-primary-dark);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          font-family: inherit;
          transition: var(--transition);
        }
        .learn-more-btn:hover { color: var(--color-navy); gap: 8px; }

        /* ── VIEW ALL CTA ── */
        .programs-cta {
          text-align: center;
          margin-top: 8px;
        }
        .programs-cta-btn {
          background: var(--color-green);
          color: var(--color-white);
          border: none;
          border-radius: var(--btn-radius);
          padding: 13px 32px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }
        .programs-cta-btn:hover {
          background: var(--color-green-dark);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 540px) {
          .programs-grid { grid-template-columns: 1fr; gap: 14px; }
          .program-card  { padding: 22px 18px 20px; }
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <section className="programs-hero">
        {/* Using real outreach photo — swap to any of outreach1–5 */}
        <img
          className="programs-hero-bg"
          src={outreach5}
          alt="JoMabel outreach mission in Ufuma"
        />
        <div className="programs-hero-overlay" />
        <div className="programs-hero-inner">
          <h1>Healthcare That Transforms Communities</h1>
          <p>
            Through six program areas, JoMabel Healthcare Foundation delivers care,
            training, and lasting community impact across Nigeria — from a growing
            16,000+ sq. meter medical campus in Ufuma to outreach missions that reach
            the most vulnerable.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="programs-section">
        <p className="programs-section-label">Our Programs & Services</p>
        <h2 className="programs-section-title">Six Ways We Serve</h2>
        <p className="programs-section-sub">
          Every program is designed to address a critical gap in healthcare access —
          from the clinic floor to the classroom, from the delivery room to the community well.
        </p>

        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                backgroundColor: program.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {program.icon}
              </div>
              <span className="card-tag">{program.tag}</span>
              <h3 className="card-title">{program.title}</h3>
              <p className="card-desc">{program.description}</p>
              <button className="learn-more-btn" onClick={() => navigate('/programs')}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="programs-cta">
          <button className="programs-cta-btn" onClick={() => navigate('/programs')}>
            View All Programs
          </button>
        </div>

      </section>
    </div>
  );
};

export default OurPrograms;