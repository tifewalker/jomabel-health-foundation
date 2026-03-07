import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import cleanWaterImg from '../assests/images/cleanwater.jpeg';

const campaignStyles = `
  /* ── HERO ── */
  .campaign-hero {
    position: relative;
    min-height: 380px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }
  .campaign-hero-content {
    position: relative;
    z-index: 2;
    padding: clamp(32px, 5vw, 56px) clamp(20px, 5vw, 64px);
    max-width: 680px;
  }
  .campaign-hero-buttons {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }
  .c-btn-green {
    background-color: #22c55e; color: #fff; border: none;
    border-radius: 6px; padding: 11px 24px; font-size: 13.5px;
    font-weight: 500; cursor: pointer;
  }
  .c-btn-blue {
    background-color: #2563eb; color: #fff; border: none;
    border-radius: 6px; padding: 11px 24px; font-size: 13.5px;
    font-weight: 500; cursor: pointer;
  }

  /* ── MOSAIC ── */
  .mosaic-section {
    background-color: #ffffff;
    padding: clamp(40px, 5vw, 64px) clamp(16px, 4vw, 48px);
    font-family: 'Inter', sans-serif;
  }
  .mosaic-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 280px 280px;
    gap: 12px;
  }
  .mosaic-large {
    grid-row: 1 / 3;
    position: relative;
    border-radius: 14px;
    overflow: hidden;
  }
  .mosaic-small-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  /* ── ACTIVITY SECTIONS ── */
  .activity-section-white {
    background-color: #ffffff;
    padding: clamp(36px, 5vw, 56px) clamp(16px, 4vw, 48px);
    font-family: 'Inter', sans-serif;
  }
  .activity-section-grey {
    background-color: #f9fafb;
    padding: clamp(36px, 5vw, 56px) clamp(16px, 4vw, 48px);
    font-family: 'Inter', sans-serif;
  }
  .activity-grid-img-left,
  .activity-grid-img-right {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }
  .activity-img {
    border-radius: 14px;
    overflow: hidden;
  }
  .activity-img img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
  }
  .activity-heading {
    text-align: center;
    font-size: clamp(18px, 3vw, 22px);
    font-weight: 700;
    color: #111827;
    margin-bottom: 36px;
  }
  .activity-title {
    font-size: clamp(18px, 3vw, 22px);
    font-weight: 800;
    color: #111827;
    line-height: 1.3;
    margin-bottom: 16px;
  }

  /* ── TABLET (≤760px) ── */
  @media (max-width: 760px) {
    .mosaic-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 200px 200px 160px;
    }
    .mosaic-large {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }
    .mosaic-small-pair {
      grid-column: 1 / 3;
    }
    .activity-grid-img-left,
    .activity-grid-img-right {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .activity-grid-img-right .activity-text-col { order: 2; }
    .activity-grid-img-right .activity-img      { order: 1; }
    .activity-img img { height: 240px; }
  }

  /* ── MOBILE (≤480px) ── */
  @media (max-width: 480px) {
    .campaign-hero-buttons { flex-direction: column; }
    .c-btn-green, .c-btn-blue { width: 100%; text-align: center; }
    .mosaic-grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    .mosaic-large {
      grid-column: 1;
      height: 220px;
    }
    .mosaic-small-pair {
      grid-column: 1;
      grid-template-columns: 1fr 1fr;
    }
    .activity-img img { height: 200px; }
  }
`;

// ─── CAMPAIGN HERO ───────────────────────────────────────────────────────────
const CampaignHero = () => {
  const navigate = useNavigate();

  const scrollToContent = () => {
    const el = document.getElementById('campaign-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="campaign-hero">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
        alt="Healthcare students"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.10) 100%)',
      }} />
      <div className="campaign-hero-content">
        <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', marginBottom: '20px' }}>
          JOMABEL HEALTHCARE FOUNDATION
        </p>
        <h1 style={{ color: '#ffffff', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: '400', lineHeight: 1.6, letterSpacing: '0.04em', marginBottom: '32px' }}>
          Join Us in Building Nigeria's<br />
          <strong style={{ fontWeight: '700' }}>Next Generation<br />Healthcare Campus</strong>
        </h1>
        <div className="campaign-hero-buttons">
          <button className="c-btn-green" onClick={scrollToContent}>
            Join The Campaign
          </button>
          <button className="c-btn-blue" onClick={() => navigate('/donate')}>
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── MOSAIC ──────────────────────────────────────────────────────────────────
const PhotoCard = ({ src, alt, label, small = false }: { src: string; alt: string; label: React.ReactNode; small?: boolean }) => (
  <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '100%' }}>
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />
    <span style={{
      position: 'absolute', bottom: small ? '10px' : '16px', left: small ? '10px' : '16px',
      color: '#ffffff', fontSize: small ? '11px' : '14px', fontWeight: '700', lineHeight: 1.3,
    }}>
      {label}
    </span>
  </div>
);

const RecentActivitiesMosaic = () => (
  <section className="mosaic-section" id="campaign-content">
    <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Ongoing Campaigns
    </h2>
    <div className="mosaic-grid">
      <div className="mosaic-large">
        <PhotoCard src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80" alt="Skills and Youth Training" label="Skills and Youth Training" />
      </div>
      <PhotoCard src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80" alt="Maternal and Child Health Initiative" label="Maternal and Child Health Initiative" />
      <div className="mosaic-small-pair">
        <PhotoCard src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80" alt="Healthcare Infrastructure Projects" label={<>Healthcare<br />Infrastructure Projects</>} small />
        <PhotoCard src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" alt="Youth Empowerment" label="Youth Empowerment" small />
      </div>
    </div>
  </section>
);

// ─── ACTIVITY SECTIONS ───────────────────────────────────────────────────────
const ActivityLeft = ({ title, body, img }: { title: string; body: string; img: string }) => (
  <section className="activity-section-white">
    <h2 className="activity-heading">Ongoing Campaigns</h2>
    <div className="activity-grid-img-left">
      <div className="activity-img"><img src={img} alt={title} /></div>
      <div className="activity-text-col">
        <h3 className="activity-title">{title}</h3>
        <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>{body}</p>
        <a href="#" style={{ color: '#111827', fontSize: '13.5px', fontWeight: '700', textDecoration: 'underline' }}>Learn More</a>
      </div>
    </div>
  </section>
);

const ActivityRight = ({ title, body, img }: { title: string; body: string; img: string }) => (
  <section className="activity-section-grey">
    <h2 className="activity-heading">Ongoing Campaigns</h2>
    <div className="activity-grid-img-right">
      <div className="activity-text-col">
        <h3 className="activity-title">{title}</h3>
        <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>{body}</p>
        <a href="#" style={{ color: '#111827', fontSize: '13.5px', fontWeight: '700', textDecoration: 'underline' }}>Learn More</a>
      </div>
      <div className="activity-img"><img src={img} alt={title} /></div>
    </div>
  </section>
);

// ─── CAMPAIGN PAGE ───────────────────────────────────────────────────────────
const Campaign = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <style>{campaignStyles}</style>
    <Navbar />
    <CampaignHero />
    <RecentActivitiesMosaic />
    <ActivityLeft
      title="Delivering Lifesaving Medical Kits to Hospitals That Need Them Most."
      body="Access to basic medical supplies can mean the difference between life and death. Through this initiative, we provide essential medical kits to hospitals and healthcare centers serving vulnerable communities. These kits help healthcare workers respond quickly to emergencies, improve patient care, and save more lives every day."
      img="https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=700&q=80"
    />
    <ActivityRight
      title="Clean Water Provision"
      body="Through our water initiatives, we support hospitals and local communities with reliable sources of clean water, helping to improve sanitation, prevent waterborne diseases, and create healthier environments for patients and families."
      img={cleanWaterImg}
    />
    <ActivityLeft
      title="Training the Next Generation of Healthcare Professionals"
      body="Our skills acquisition programs equip young Nigerians with practical healthcare training, leadership skills, and community service experience — building a sustainable pipeline of future medical professionals committed to serving underserved communities."
      img="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80"
    />
    <Footer />
  </div>
);

export default Campaign;