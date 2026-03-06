import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ─── CAMPAIGN HERO ───────────────────────────────────────────────────────────
const CampaignHero = () => (
  <section style={{ position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
      alt="Healthcare students"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.10) 100%)',
    }} />
    <div style={{ position: 'relative', zIndex: 2, padding: '48px 64px 56px', maxWidth: '680px' }}>
      <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', letterSpacing: '0.15em', marginBottom: '20px' }}>
        JOMABEL HEALTHCARE FOUNDATION
      </p>
      <h1 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '400', lineHeight: 1.6, letterSpacing: '0.04em', marginBottom: '32px' }}>
        Join Us in Building Nigeria's<br />
        <strong style={{ fontWeight: '700' }}>Next Generation<br />Healthcare Campus</strong>
      </h1>
      <div style={{ display: 'flex', gap: '14px' }}>
        <button style={{ backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '6px', padding: '11px 24px', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer' }}>
          Join The Campaign
        </button>
        <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', padding: '11px 24px', fontSize: '13.5px', fontWeight: '500', cursor: 'pointer' }}>
          Donate
        </button>
      </div>
    </div>
  </section>
);

// ─── RECENT ACTIVITIES MOSAIC ────────────────────────────────────────────────
const RecentActivitiesMosaic = () => (
  <section style={{ backgroundColor: '#ffffff', padding: '64px 48px', fontFamily: "'Inter', sans-serif" }}>
    <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Recent Activities
    </h2>

    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '280px 280px',
      gap: '12px',
    }}>
      {/* Large left — Skills and Youth Training */}
      <div style={{
        gridRow: '1 / 3',
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
          alt="Skills and Youth Training"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
        }} />
        <span style={{
          position: 'absolute', bottom: '16px', left: '16px',
          color: '#ffffff', fontSize: '14px', fontWeight: '700',
        }}>
          Skills and Youth Training
        </span>
      </div>

      {/* Top right — Maternal and Child */}
      <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80"
          alt="Maternal and Child Health Initiative"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
        }} />
        <span style={{
          position: 'absolute', bottom: '14px', left: '14px',
          color: '#ffffff', fontSize: '13px', fontWeight: '700',
        }}>
          Maternal and Child Health Initiative
        </span>
      </div>

      {/* Bottom right — two small side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {/* Healthcare Infrastructure */}
        <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80"
            alt="Healthcare Infrastructure Projects"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)',
          }} />
          <span style={{
            position: 'absolute', bottom: '10px', left: '10px',
            color: '#ffffff', fontSize: '11px', fontWeight: '700', lineHeight: 1.3,
          }}>
            Healthcare<br />Infrastructure Projects
          </span>
        </div>

        {/* Youth Empowerment */}
        <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80"
            alt="Youth Empowerment"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)',
          }} />
          <span style={{
            position: 'absolute', bottom: '10px', left: '10px',
            color: '#ffffff', fontSize: '11px', fontWeight: '700',
          }}>
            Youth Empowerment
          </span>
        </div>
      </div>
    </div>
  </section>
);

// ─── ACTIVITY DETAIL — image right, text left ────────────────────────────────
const ActivityLeft = ({ title, body, img }: { title: string; body: string; img: string }) => (
  <section style={{ backgroundColor: '#ffffff', padding: '56px 48px', fontFamily: "'Inter', sans-serif" }}>
    <h2 style={{ textAlign: 'center', fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Recent Activities
    </h2>
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center',
    }}>
      {/* Left: image */}
      <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
      </div>
      {/* Right: text */}
      <div>
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', lineHeight: 1.3, marginBottom: '16px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
          {body}
        </p>
        <a href="#" style={{ color: '#111827', fontSize: '13.5px', fontWeight: '700', textDecoration: 'underline' }}>
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// ─── ACTIVITY DETAIL — text left, image right ────────────────────────────────
const ActivityRight = ({ title, body, img }: { title: string; body: string; img: string }) => (
  <section style={{ backgroundColor: '#f9fafb', padding: '56px 48px', fontFamily: "'Inter', sans-serif" }}>
    <h2 style={{ textAlign: 'center', fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Recent Activities
    </h2>
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center',
    }}>
      {/* Left: text */}
      <div>
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', lineHeight: 1.3, marginBottom: '16px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
          {body}
        </p>
        <a href="#" style={{ color: '#111827', fontSize: '13.5px', fontWeight: '700', textDecoration: 'underline' }}>
          Learn More
        </a>
      </div>
      {/* Right: image */}
      <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
      </div>
    </div>
  </section>
);

// ─── CAMPAIGN PAGE ───────────────────────────────────────────────────────────
const Campaign = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <CampaignHero />
    <RecentActivitiesMosaic />

    <ActivityLeft
      title="Delivering Lifesaving Medical Kits to Hospitals That Need Them Most."
      body="Access to basic medical supplies can mean the difference between life and death. Through this initiative, we provide essential medical kits to hospitals and healthcare centers serving vulnerable communities. These kits help healthcare workers respond quickly to emergencies, improve patient care, and save more lives every day."
      img="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80"
    />

    <ActivityRight
      title="Clean water provision"
      body="Through our water initiatives, we support hospitals and local communities with reliable sources of clean water, helping to improve sanitation, prevent waterborne diseases, and create healthier environments for patients and families."
      img="https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=700&q=80"
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