import React from 'react';
import { useNavigate } from 'react-router-dom';

const MedicalCenterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v6M9 9h6" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const OutreachIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="#2563eb" strokeWidth="1.5"/>
  </svg>
);
const SkillsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const MaternalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const InfrastructureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#f59e0b" strokeWidth="1.5"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12v4M10 14h4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const EducationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const programs = [
  { id: 1, icon: <MedicalCenterIcon />, iconBg: '#eff6ff', tag: 'Facility',       title: 'JoMabel Medical Center',            description: 'A growing hub for primary care, diagnostics, maternal health services and healthcare workforce training in Ufuma, Nigeria.' },
  { id: 2, icon: <OutreachIcon />,      iconBg: '#eff6ff', tag: 'Outreach',       title: 'Medical Outreach Missions',          description: 'Providing free consultations, medications, screenings and referrals to underserved communities across Nigeria.' },
  { id: 3, icon: <SkillsIcon />,        iconBg: '#faf5ff', tag: 'Training',       title: 'Skills Acquisition Center',          description: 'Hands-on training for young people in healthcare, leadership, and community service — building a pipeline of future professionals.' },
  { id: 4, icon: <MaternalIcon />,      iconBg: '#fdf2f8', tag: 'Child Health',   title: 'Maternal & Child Health Initiative', description: 'Expanding access to safe pregnancy care, delivery support, newborn care, and maternal education for families.' },
  { id: 5, icon: <InfrastructureIcon />,iconBg: '#fffbeb', tag: 'Infrastructure', title: 'Healthcare Infrastructure Projects', description: 'Building the physical foundations for sustainable, high-quality healthcare delivery across underserved regions.' },
  { id: 6, icon: <EducationIcon />,     iconBg: '#eff6ff', tag: 'Education',      title: 'Community Health Education',         description: 'Empowering individuals and families with vital health knowledge, disease prevention strategies and wellness practices.' },
];

const OurPrograms = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
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
          background: linear-gradient(135deg, rgba(13,31,78,0.90) 0%, rgba(30,58,138,0.86) 50%, rgba(13,31,78,0.90) 100%);
        }
        .programs-hero-inner {
          position: relative;
          z-index: 2;
        }
        .programs-hero-pills {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hero-pill {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 999px;
          letter-spacing: 0.06em;
        }
        .programs-hero h1 {
          color: #ffffff;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 800;
          margin: 0 0 12px;
          letter-spacing: 0.01em;
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .programs-hero h2 {
          color: #93c5fd;
          font-size: clamp(15px, 2.5vw, 20px);
          font-weight: 600;
          margin: 0 0 16px;
        }
        .programs-hero p {
          color: rgba(255,255,255,0.85);
          font-size: clamp(13px, 2vw, 15px);
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ── CARDS SECTION ── */
        .programs-section {
          background-color: #f0f4ff;
          padding: clamp(40px, 5vw, 60px) clamp(16px, 4vw, 40px) clamp(52px, 6vw, 80px);
          border-top: 4px solid #1e3a8a;
        }
        .programs-section-label {
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          color: #1e3a8a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .programs-section-title {
          text-align: center;
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 700;
          color: #111827;
          margin-bottom: 40px;
        }
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .program-card {
          background-color: #ffffff;
          border-radius: 14px;
          border: 1px solid #dbeafe;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .program-card:hover {
          box-shadow: 0 6px 24px rgba(30,58,138,0.12);
          transform: translateY(-2px);
        }
        .card-tag {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: #dbeafe;
          padding: 3px 10px;
          border-radius: 999px;
          width: fit-content;
        }
        .learn-more-btn {
          background: none;
          border: none;
          padding: 0;
          color: #1e3a8a;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          font-family: inherit;
        }
        .learn-more-btn:hover { color: #0d1f4e; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 540px) {
          .programs-grid { grid-template-columns: 1fr; gap: 14px; }
          .program-card { padding: 22px 18px 20px; }
          .hero-pill { font-size: 11px; padding: 4px 10px; }
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <section className="programs-hero">
        <img
          className="programs-hero-bg"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
          alt=""
          aria-hidden="true"
        />
        <div className="programs-hero-overlay" />
        <div className="programs-hero-inner">
          <h1>Our Programs</h1>
          <h2>Healthcare That Transforms Communities</h2>
          <p>
            Through our world-class facilities and six program areas, we deliver care,
            training and lasting community impact across Nigeria.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="programs-section">
        <p className="programs-section-label">What We Do</p>
        <h2 className="programs-section-title">Six Ways We Serve</h2>
        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px',
                backgroundColor: program.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {program.icon}
              </div>
              <span className="card-tag">{program.tag}</span>
              <h3 style={{ fontSize: '15.5px', fontWeight: '700', color: '#111827', margin: 0, lineHeight: 1.3 }}>
                {program.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.65', margin: 0, flex: 1 }}>
                {program.description}
              </p>
              <button className="learn-more-btn" onClick={() => navigate('/programs')}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPrograms;