import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Play, Calendar, MapPin, Users } from 'lucide-react';

// ── Architectural Renders ──
import render1 from '../assests/images/an1.jpg';
import render2 from '../assests/images/an2.jpg';
import render3 from '../assests/images/an3.jpg';
import render4 from '../assests/images/an4.jpg';
import render5 from '../assests/images/an5.jpg';
import render6 from '../assests/images/an6.jpg';

// ── Construction Videos ──
import construction1 from '../assests/images/construction1.mp4';
import construction2 from '../assests/images/construction2.mp4';
import construction3 from '../assests/images/construction3.mp4';
import construction4 from '../assests/images/construction4.mp4';

// ── Real Outreach Photos ──
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach2 from '../assests/images/outreach2.jpeg';
import outreach3 from '../assests/images/outreach3.jpeg';
import outreach4 from '../assests/images/outreach4.jpeg';
import outreach5 from '../assests/images/outreach5.jpeg';

// ─── CAMPAIGN HERO ───────────────────────────────────────────────────────────
const CampaignHero = () => {
  const navigate = useNavigate();
  return (
    <section className="campaign-hero">
      <img src={render1} alt="JoMabel Medical Center architectural render" className="campaign-hero-bg" />
      <div className="campaign-hero-overlay" />
      <div className="campaign-hero-content">
        <span className="hero-tag">Capital Campaign</span>
        <h1 className="hero-title">
          Join Us in Building<br />Nigeria's Next Generation<br />Healthcare Center
        </h1>
        <p className="hero-description">
          A 16,000+ sq. meter world-class medical and training center rising
          in Ufuma, Anambra State, Nigeria powered by compassion, designed
          for generational impact.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate to the Campaign
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => { const el = document.getElementById('facilities-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
            See the Facilities
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── VISION STATS WITH COUNT-UP ──────────────────────────────────────────────
const VisionStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    size: 0,
    facilities: 0,
    programs: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate 16,000
      let startSize = 0;
      const sizeInterval = setInterval(() => {
        if (startSize < 16000) {
          startSize += 500;
          setAnimatedNumbers(prev => ({ ...prev, size: startSize }));
        } else {
          clearInterval(sizeInterval);
        }
      }, 15);

      // Animate 2 facilities
      let startFacilities = 0;
      const facilitiesInterval = setInterval(() => {
        if (startFacilities < 2) {
          startFacilities++;
          setAnimatedNumbers(prev => ({ ...prev, facilities: startFacilities }));
        } else {
          clearInterval(facilitiesInterval);
        }
      }, 100);

      // Animate 6 programs
      let startPrograms = 0;
      const programsInterval = setInterval(() => {
        if (startPrograms < 6) {
          startPrograms++;
          setAnimatedNumbers(prev => ({ ...prev, programs: startPrograms }));
        } else {
          clearInterval(programsInterval);
        }
      }, 100);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={`vision-stats ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Vision</span>
          <h2 className="section-title">A Center Built for Generations</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-number">{animatedNumbers.size.toLocaleString()}+</p>
            <p className="stat-label">Square Meters</p>
            <p className="stat-sub">Total Center Size</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{animatedNumbers.facilities}</p>
            <p className="stat-label">Major Facilities</p>
            <p className="stat-sub">Medical + Training Center</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">{animatedNumbers.programs}+</p>
            <p className="stat-label">Program Areas</p>
            <p className="stat-sub">Healthcare & Training</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">∞</p>
            <p className="stat-label">Generational Impact</p>
            <p className="stat-sub">Ufuma, Anambra State</p>
          </div>
        </div>

        <div className="vision-description">
          <p>
            The JoMabel Medical and Training Center in Ufuma, Anambra State will serve as
            a transformative hub for healthcare delivery, professional training, and community
            empowerment bringing world-class facilities to southeastern Nigeria and creating
            a lasting legacy of health, dignity, and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── FACILITIES BREAKDOWN WITH ANIMATION (MOBILE FIX) ────────────────────────
const FacilitiesBreakdown = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState({ medical: 0, training: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if on mobile
    const isMobile = window.innerWidth < 768;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Lower threshold for mobile
    );

    // On mobile, trigger after a short delay to ensure visibility
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate Medical Center progress to 70%
      let medicalProgress = 0;
      const medicalInterval = setInterval(() => {
        if (medicalProgress < 70) {
          medicalProgress++;
          setAnimatedProgress(prev => ({ ...prev, medical: medicalProgress }));
        } else {
          clearInterval(medicalInterval);
        }
      }, 25);

      // Animate Training Center progress to 30%
      let trainingProgress = 0;
      const trainingInterval = setInterval(() => {
        if (trainingProgress < 30) {
          trainingProgress++;
          setAnimatedProgress(prev => ({ ...prev, training: trainingProgress }));
        } else {
          clearInterval(trainingInterval);
        }
      }, 40);
    }
  }, [isVisible]);

  const facilities = [
    {
      name: 'JoMabel Medical Center',
      size: '6,000 sqm',
      status: `${animatedProgress.medical}% Completed`,
      pct: animatedProgress.medical,
      accentColor: '#1D8FD4',
      badge: 'Under Construction',
      badgeBg: '#DBEAFE',
      badgeColor: '#1E40AF',
      description: 'The operational heart of the JoMabel campus delivering primary care, diagnostics, and specialist services to Ufuma and surrounding communities.',
      services: [
        'Primary & Preventive Care',
        'Maternal & Child Health',
        'Chronic Disease Management',
        'Diagnostic & Laboratory Services',
        'Emergency & Trauma Care',
        'Digital Health & Telemedicine',
      ],
      render: render1,
    },
    {
      name: 'Skill Acquisition & Medical Training Center',
      size: '10,000 sqm',
      status: `${animatedProgress.training}% Completed`,
      pct: animatedProgress.training,
      accentColor: '#16A34A',
      badge: 'Foundation Stage',
      badgeBg: '#DCFCE7',
      badgeColor: '#166534',
      description: 'A world-class training facility investing in the next generation of healthcare professionals through hands-on clinical education and community health worker programs.',
      services: [
        'Community Health Worker Training',
        'Clinical Skills & Simulation Labs',
        'Nursing & Midwifery Programs',
        'Health Leadership Development',
        'Digital Health Training',
        'Vocational & Skills Acquisition',
      ],
      render: render6,
    },
  ];

  return (
    <section ref={sectionRef} id="facilities-section" className={`facilities-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Center Facilities</span>
          <h2 className="section-title">Two Facilities. One Integrated Vision.</h2>
          <p className="section-description">
            Together, the Medical Center and Training Center form a fully integrated
            healthcare campus delivering care today while building the workforce of tomorrow.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((f, i) => (
            <div key={i} className="facility-card">
              <div className="facility-image-wrap">
                <img src={f.render} alt={f.name} className="facility-image" />
                <div className="facility-image-overlay" />
                <div className="facility-badges">
                  <span className="facility-badge" style={{ background: f.badgeBg, color: f.badgeColor }}>
                    {f.badge}
                  </span>
                  <span className="facility-size">{f.size}</span>
                </div>
              </div>

              <div className="facility-content">
                <h3 className="facility-name">{f.name}</h3>
                <p className="facility-description">{f.description}</p>

                <div className="progress-section">
                  <div className="progress-header">
                    <span className="progress-label">Construction Progress</span>
                    <span className="progress-status" style={{ color: f.accentColor }}>{f.status}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${f.pct}%`, background: f.accentColor }} />
                  </div>
                </div>

                <div className="services-section">
                  <p className="services-label">Anticipated Services</p>
                  <div className="services-grid">
                    {f.services.map((s, j) => (
                      <div key={j} className="service-item">
                        <div className="service-dot" style={{ background: f.accentColor }} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="facility-cta" style={{ background: f.accentColor }} onClick={() => navigate('/donate')}>
                  Help Complete This Center
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Ufuma Section */}
        <div className="why-ufuma">
          <div className="why-header">
            <span className="why-label">Why Ufuma</span>
            <h3 className="why-title">Bringing World-Class Care to Those Who Need It Most</h3>
          </div>
          <div className="why-grid">
            {[
              { icon: MapPin, title: 'No Nearby Hospital', desc: 'Ufuma and surrounding communities lack access to a fully equipped medical facility within a reasonable distance.' },
              { icon: Users, title: 'Workforce Gap', desc: 'Southeastern Nigeria faces a critical shortage of trained healthcare workers — the Training Center directly addresses this.' },
              { icon: Play, title: 'Scalable Model', desc: 'The JoMabel Center model is designed as a replicable approach for rural healthcare transformation across Nigeria and Africa.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <item.icon size={28} className="why-icon" />
                <p className="why-card-title">{item.title}</p>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ARCHITECTURAL RENDERS GALLERY ───────────────────────────────────────────
const RendersGallery = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renders = [
    { src: render1, label: 'Main Entrance — Front View' },
    { src: render6, label: 'J&M Nursing Training Center, Ufuma' },
    { src: render4, label: 'Full Front Facade' },
    { src: render2, label: 'Side & Parking View' },
    { src: render5, label: 'Aerial Top-Down View' },
    { src: render3, label: 'Site Floor Plan' },
  ];
  return (
    <section ref={sectionRef} className={`gallery-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Architectural Plans</span>
          <h2 className="section-title">The Center Design</h2>
        </div>

        <div className="gallery-main">
          <img src={renders[active].src} alt={renders[active].label} />
          <div className="gallery-caption">
            <p>{renders[active].label}</p>
          </div>
        </div>

        <div className="gallery-thumbs">
          {renders.map((r, i) => (
            <div
              key={i}
              className={`gallery-thumb ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={r.src} alt={r.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONSTRUCTION VIDEOS ─────────────────────────────────────────────────────
const ConstructionVideos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`videos-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Watch It Rise</span>
          <h2 className="section-title">From Blueprint to Reality</h2>
          <p className="section-description">
            Watch our 16,000+ sq. meter medical center rising in Ufuma, Anambra State.
            Every brick is a step toward dignified healthcare for generations.
          </p>
        </div>

        <div className="videos-grid">
          {[
            { src: construction4, label: 'Construction Progress — Phase 1' },
            { src: construction2, label: 'Construction Progress — Phase 2' },
            { src: construction3, label: 'Construction Progress — Phase 3' },
            { src: construction1, label: 'Construction Progress — Phase 4' },
          ].map((v, i) => (
            <div key={i} className="video-card">
              <video src={v.src} controls muted playsInline className="video-player" />
              <div className="video-label">
                <p>{v.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ONGOING OUTREACH CAMPAIGNS ──────────────────────────────────────────────
const OutreachCampaigns = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const campaigns = [
    { img: outreach5, title: 'Medical Outreach Mission — Ufuma', desc: 'Free consultations, screenings, medications and referrals delivered directly to community members in Ufuma, Anambra State — reaching hundreds of families in a single day.', tag: 'Outreach Mission' },
    { img: outreach1, title: 'Community Health Screenings', desc: 'Working alongside the Nigerian Red Cross, our teams deliver free health screenings and consultations to underserved communities, identifying critical health needs early.', tag: 'Health Screening' },
    { img: outreach4, title: 'Medical Outreach Team in Action', desc: 'Our dedicated Medical Outreach Team delivers essential services directly to the people who need them most.', tag: 'Community Impact' },
    { img: outreach3, title: 'Volunteer & Staff Network', desc: 'A growing team of committed volunteers, healthcare workers, and community leaders working together to expand JoMabel\'s reach across southeastern Nigeria.', tag: 'Volunteers' },
    { img: outreach2, title: 'Registration & Preventive Care', desc: 'Outreach stations provide registration, triage, and preventive care services — ensuring every community member receives the attention and follow-up they deserve.', tag: 'Preventive Care' },
  ];
  return (
    <section ref={sectionRef} className={`outreach-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">On The Ground</span>
          <h2 className="section-title">Ongoing Outreach Campaigns</h2>
        </div>

        <div className="campaign-mosaic">
          <div className="campaign-large">
            <img src={campaigns[0].img} alt={campaigns[0].title} />
            <div className="campaign-large-overlay" />
            <div className="campaign-large-content">
              <span className="campaign-tag">{campaigns[0].tag}</span>
              <h3 className="campaign-title">{campaigns[0].title}</h3>
              <p className="campaign-desc">{campaigns[0].desc}</p>
            </div>
          </div>

          <div className="campaign-grid">
            {campaigns.slice(1).map((c, i) => (
              <div key={i} className="campaign-card">
                <img src={c.img} alt={c.title} className="campaign-card-image" />
                <div className="campaign-card-content">
                  <span className="campaign-card-tag">{c.tag}</span>
                  <h3 className="campaign-card-title">{c.title}</h3>
                  <p className="campaign-card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="outreach-cta">
          <button className="btn-green-large" onClick={() => navigate('/donate')}>
            Support Our Campaigns
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── MAIN CAMPAIGN COMPONENT WITH ANIMATION STYLES ───────────────────────────
const Campaign = () => (
  <div className="campaign-page">
    <style>{`
      .campaign-page {
        font-family: var(--font-body);
        background-color: #FFFFFF;
      }
      
      /* Hero Section */
      .campaign-hero {
        position: relative;
        min-height: 550px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
      .campaign-hero-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .campaign-hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 60%, rgba(17,24,39,0.4) 100%);
      }
      .campaign-hero-content {
        position: relative;
        z-index: 2;
        padding: clamp(48px, 8vw, 80px) clamp(24px, 5vw, 64px);
        max-width: 720px;
        width: 100%;
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
        font-size: clamp(32px, 5vw, 52px);
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 20px;
      }
      .hero-description {
        color: rgba(255,255,255,0.85);
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 32px;
        max-width: 500px;
      }
      .hero-buttons {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }
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
      
      /* Vision Stats with Animation */
      .vision-stats {
        background-color: #F9FAFB;
        padding: 64px clamp(20px, 5vw, 48px);
      }
      .vision-stats .stat-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .vision-stats.visible .stat-card:nth-child(1) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.1s;
      }
      .vision-stats.visible .stat-card:nth-child(2) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
      }
      .vision-stats.visible .stat-card:nth-child(3) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
      }
      .vision-stats.visible .stat-card:nth-child(4) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.4s;
      }
      .vision-stats .section-label,
      .vision-stats .section-title,
      .vision-stats .vision-description {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .vision-stats.visible .section-label {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0s;
      }
      .vision-stats.visible .section-title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.05s;
      }
      .vision-stats.visible .vision-description {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.5s;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .section-header {
        text-align: center;
        margin-bottom: 48px;
      }
      .section-label {
        display: inline-block;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #1D8FD4;
        background: #EBF5FB;
        padding: 6px 16px;
        border-radius: 40px;
      }
      .section-title {
        font-family: var(--font-heading);
        font-size: clamp(28px, 4vw, 38px);
        font-weight: 700;
        color: #111827;
        margin-top: 16px;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin-bottom: 48px;
      }
      .stat-card {
        background: #ffffff;
        border: 1px solid #E5E7EB;
        border-top: 3px solid #1D8FD4;
        border-radius: 16px;
        padding: 24px 20px;
        text-align: center;
      }
      .stat-number {
        font-family: var(--font-heading);
        font-size: clamp(32px, 4vw, 44px);
        font-weight: 800;
        color: #1D8FD4;
        margin-bottom: 8px;
      }
      .stat-label {
        font-size: 14px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 4px;
      }
      .stat-sub {
        font-size: 12px;
        color: #6B7280;
      }
      .vision-description {
        max-width: 720px;
        margin: 0 auto;
        text-align: center;
      }
      .vision-description p {
        font-size: 16px;
        color: #4B5563;
        line-height: 1.7;
      }
      
    /* Facilities Section */
.facilities-section {
  padding: 80px clamp(20px, 5vw, 48px);
  background: #ffffff;
}

/* Default visible state - always visible on mobile */
.facilities-section .facility-card {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.facilities-section .section-label,
.facilities-section .section-title,
.facilities-section .section-description {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Animation only on desktop when visible class is added */
@media (min-width: 769px) {
  .facilities-section .facility-card {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .facilities-section .section-label,
  .facilities-section .section-title,
  .facilities-section .section-description {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .facilities-section.visible .facility-card:nth-child(1) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }
  
  .facilities-section.visible .facility-card:nth-child(2) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.4s;
  }
  
  .facilities-section.visible .section-label {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0s;
  }
  
  .facilities-section.visible .section-title {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
  }
  
  .facilities-section.visible .section-description {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }
}

.section-description {
  font-size: 16px;
  color: #6B7280;
  max-width: 600px;
  margin: 16px auto 0;
  text-align: center;
}

.facilities-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

.facility-card {
  background: #ffffff;
  border: 1px solid #E5E7EB;
  border-radius: 28px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
}

.facility-image-wrap {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.facility-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.facility-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
}

.facility-badges {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
}

.facility-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 40px;
}

.facility-size {
  background: rgba(0,0,0,0.6);
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 40px;
}

.facility-content {
  padding: 28px;
}

.facility-name {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
}

.facility-description {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 20px;
}

.progress-section {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 20px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.progress-label {
  font-size: 12px;
  color: #6B7280;
  font-weight: 600;
}

.progress-status {
  font-size: 13px;
  font-weight: 700;
}

.progress-bar {
  height: 8px;
  background: #E5E7EB;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.services-section {
  margin-bottom: 24px;
}

.services-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9CA3AF;
  margin-bottom: 12px;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #4B5563;
}

.service-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}

.facility-cta {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
}

.facility-cta:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .facilities-section {
    padding: 48px 20px;
  }
  
  .facilities-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .facility-image-wrap {
    height: 180px;
  }
  
  .facility-content {
    padding: 20px;
  }
  
  .facility-name {
    font-size: 18px;
  }
  
  .facility-description {
    font-size: 13px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-item {
    font-size: 11px;
  }
  
  .facility-cta {
    padding: 10px;
    font-size: 12px;
  }
  
  .section-description {
    font-size: 14px;
  }
}

/* Small Mobile Devices */
@media (max-width: 480px) {
  .facilities-section {
    padding: 32px 16px;
  }
  
  .facility-image-wrap {
    height: 160px;
  }
  
  .facility-content {
    padding: 16px;
  }
  
  .facility-badge {
    font-size: 9px;
    padding: 3px 8px;
  }
  
  .facility-size {
    font-size: 10px;
    padding: 3px 8px;
  }
  
  .progress-section {
    padding: 10px 12px;
  }
  
  .progress-label,
  .progress-status {
    font-size: 11px;
  }
  
  .services-label {
    font-size: 9px;
  }
}
      /* Why Ufuma */
      .why-ufuma {
        background: #F0F9FF;
        border-radius: 28px;
        padding: 40px 48px;
        margin-top: 24px;
      }
      .why-header {
        text-align: center;
        margin-bottom: 32px;
      }
      .why-label {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #1D8FD4;
      }
      .why-title {
        font-family: var(--font-heading);
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 12px;
      }
      .why-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
      }
      .why-card {
        text-align: center;
      }
      .why-icon {
        color: #1D8FD4;
        margin-bottom: 16px;
      }
      .why-card-title {
        font-size: 16px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 8px;
      }
      .why-card-desc {
        font-size: 13px;
        color: #4B5563;
        line-height: 1.6;
      }
      
      /* Gallery Section */
      .gallery-section {
        background: #F9FAFB;
        padding: 80px clamp(20px, 5vw, 48px);
      }
      .gallery-section .gallery-main,
      .gallery-section .gallery-thumbs {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .gallery-section.visible .gallery-main {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
      }
      .gallery-section.visible .gallery-thumbs {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.4s;
      }
      .gallery-section .section-label,
      .gallery-section .section-title {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .gallery-section.visible .section-label {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0s;
      }
      .gallery-section.visible .section-title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.1s;
      }
      
      .gallery-main {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      }
      .gallery-main img {
        width: 100%;
        height: clamp(280px, 45vw, 520px);
        object-fit: cover;
      }
      .gallery-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        padding: 20px 20px 16px;
      }
      .gallery-caption p {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        margin: 0;
      }
      .gallery-thumbs {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 12px;
      }
      .gallery-thumb {
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.2s;
        opacity: 0.6;
      }
      .gallery-thumb.active {
        border-color: #1D8FD4;
        opacity: 1;
      }
      .gallery-thumb:hover {
        opacity: 1;
      }
      .gallery-thumb img {
        width: 100%;
        height: 70px;
        object-fit: cover;
      }
      
      /* Videos Section */
      .videos-section {
        padding: 80px clamp(20px, 5vw, 48px);
        background: #ffffff;
      }
      .videos-section .video-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .videos-section.visible .video-card:nth-child(1) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
      }
      .videos-section.visible .video-card:nth-child(2) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
      }
      .videos-section.visible .video-card:nth-child(3) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.4s;
      }
      .videos-section.visible .video-card:nth-child(4) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.5s;
      }
      .videos-section .section-label,
      .videos-section .section-title,
      .videos-section .section-description {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .videos-section.visible .section-label {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0s;
      }
      .videos-section.visible .section-title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.1s;
      }
      .videos-section.visible .section-description {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
      }
      
      .videos-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .video-card {
        background: #111827;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      }
      .video-player {
        width: 100%;
        display: block;
        max-height: 280px;
        object-fit: cover;
      }
      .video-label {
        padding: 12px 16px;
      }
      .video-label p {
        font-size: 13px;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
      }
      
      /* Outreach Section */
      .outreach-section {
        background: #F9FAFB;
        padding: 80px clamp(20px, 5vw, 48px);
      }
      .outreach-section .campaign-large,
      .outreach-section .campaign-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .outreach-section.visible .campaign-large {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
      }
      .outreach-section.visible .campaign-card:nth-child(1) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
      }
      .outreach-section.visible .campaign-card:nth-child(2) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.4s;
      }
      .outreach-section.visible .campaign-card:nth-child(3) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.5s;
      }
      .outreach-section.visible .campaign-card:nth-child(4) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.6s;
      }
      .outreach-section .section-label,
      .outreach-section .section-title {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .outreach-section.visible .section-label {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0s;
      }
      .outreach-section.visible .section-title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.1s;
      }
      
      .campaign-mosaic {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        margin-bottom: 48px;
      }
      .campaign-large {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        height: 500px;
      }
      .campaign-large img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .campaign-large-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.85), transparent 60%);
      }
      .campaign-large-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 28px;
      }
      .campaign-tag {
        display: inline-block;
        background: #1D8FD4;
        color: #ffffff;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 4px 12px;
        border-radius: 40px;
        margin-bottom: 12px;
      }
      .campaign-title {
        font-family: var(--font-heading);
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 8px;
      }
      .campaign-desc {
        font-size: 14px;
        color: rgba(255,255,255,0.8);
        line-height: 1.6;
      }
      .campaign-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      .campaign-card {
        background: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid #E5E7EB;
        transition: all 0.2s;
      }
      .campaign-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        border-color: #1D8FD4;
      }
      .campaign-card-image {
        width: 100%;
        height: 160px;
        object-fit: cover;
      }
      .campaign-card-content {
        padding: 16px;
      }
      .campaign-card-tag {
        display: inline-block;
        background: #EBF5FB;
        color: #1D8FD4;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 3px 10px;
        border-radius: 40px;
        margin-bottom: 10px;
      }
      .campaign-card-title {
        font-family: var(--font-heading);
        font-size: 15px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 6px;
      }
      .campaign-card-desc {
        font-size: 12px;
        color: #6B7280;
        line-height: 1.5;
      }
      .outreach-cta {
        text-align: center;
      }
      .btn-green-large {
        background: #16A34A;
        color: #ffffff;
        border: none;
        border-radius: 12px;
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
      .btn-green-large:hover {
        background: #15803D;
        transform: translateY(-2px);
      }
      
      /* Responsive */
      @media (max-width: 900px) {
        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .facilities-grid {
          grid-template-columns: 1fr;
        }
        .why-grid {
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .gallery-thumbs {
          grid-template-columns: repeat(3, 1fr);
        }
        .videos-grid {
          grid-template-columns: 1fr;
        }
        .campaign-mosaic {
          grid-template-columns: 1fr;
        }
        .campaign-large {
          height: 400px;
        }
        .campaign-grid {
          grid-template-columns: 1fr;
        }
      }
      @media (max-width: 600px) {
        .hero-buttons {
          flex-direction: column;
        }
        .stats-grid {
          grid-template-columns: 1fr 1fr;
        }
        .gallery-thumbs {
          grid-template-columns: repeat(3, 1fr);
        }
        .services-grid {
          grid-template-columns: 1fr;
        }
        .why-ufuma {
          padding: 32px 24px;
        }
      }
    `}</style>

    <Navbar />
    <CampaignHero />
    <VisionStats />
    <FacilitiesBreakdown />
    <RendersGallery />
    <ConstructionVideos />
    <OutreachCampaigns />
    <Footer />
  </div>
);

export default Campaign;