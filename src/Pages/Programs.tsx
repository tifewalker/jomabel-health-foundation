import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RecentProjects from '../components/sections/RecentProjects';
import CampaignBanner from '../components/sections/CampaignBanner';

// ─── PROGRAMS HERO ───────────────────────────────────────────────────────────
const ProgramsHero = () => (
  <section style={{ position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    {/* Background image — JoMabel Medical Center building */}
    <img
      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80"
      alt="JoMabel Medical Center"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Dark overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.40) 70%, rgba(0,0,0,0.15) 100%)',
    }} />

  {/* Content */}
    <div style={{ position: 'relative', zIndex: 2, padding: '56px 64px', maxWidth: '780px' }}>
      <p style={{
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '0.15em',
        marginBottom: '24px',
      }}>
        JOMABEL HEALTHCARE FOUNDATION
      </p>
      <h1 style={{
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '400',
        lineHeight: 1.6,
        letterSpacing: '0.06em',
        marginBottom: '36px',
      }}>
        Through our two facilities and six<br />
        program areas, JoMabel Healthcare<br />
        Foundation delivers healthcare, training,<br />
        and<br />
        community transformation
      </h1>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <button style={{
          backgroundColor: '#22c55e',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          padding: '11px 24px',
          fontSize: '13.5px',
          fontWeight: '500',
          cursor: 'pointer',
        }}>
          Join The Campaign
        </button>
        <button style={{
          backgroundColor: '#2563eb',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          padding: '11px 24px',
          fontSize: '13.5px',
          fontWeight: '500',
          cursor: 'pointer',
        }}>
          Learn Our Story
        </button>
      </div>
    </div>
  </section>
);

// ─── PROGRAMS OVERVIEW ───────────────────────────────────────────────────────
const StethoscopeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="#2563eb" strokeWidth="1.5"/>
  </svg>
);

const ThermometerIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12h6v10" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProgramsOverview = () => (
  <section style={{ backgroundColor: '#ffffff', padding: '64px 48px 72px', fontFamily: "'Inter', sans-serif" }}>
    <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Programs Overview
    </h2>

    <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Row 1 — two large feature cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

        {/* Medical Center card — green */}
        <div style={{ backgroundColor: '#16a34a', borderRadius: '16px', overflow: 'hidden', padding: '28px 28px 0' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '16px 20px', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <img src="https://via.placeholder.com/32x32/16a34a/ffffff?text=+" alt="" style={{ width: '32px' }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#16a34a', margin: 0 }}>JoMabel</p>
              <p style={{ fontSize: '10px', color: '#6b7280', margin: 0 }}>MEDICAL CENTER</p>
            </div>
          </div>
          <div style={{ borderRadius: '10px 10px 0 0', overflow: 'hidden', marginTop: '8px' }}>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80"
              alt="Medical Center"
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ padding: '20px 0 24px' }}>
            <p style={{ color: '#d1fae5', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '12px' }}>
              A growing hub for primary care, diagnostics, maternal health services and healthcare workforce training.
            </p>
            <a href="#" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Learn More →
            </a>
          </div>
        </div>

        {/* Skills Acquisition card — dark blue */}
        <div style={{ backgroundColor: '#1e3a8a', borderRadius: '16px', overflow: 'hidden', padding: '28px 28px 0' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '16px 20px', marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <img src="https://via.placeholder.com/32x32/1e3a8a/ffffff?text=S" alt="" style={{ width: '32px' }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#1e3a8a', margin: 0 }}>JoMabel</p>
              <p style={{ fontSize: '10px', color: '#6b7280', margin: 0 }}>SKILLS ACQUISITION CENTER</p>
            </div>
          </div>
          <div style={{ borderRadius: '10px 10px 0 0', overflow: 'hidden', marginTop: '8px' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
              alt="Skills Center"
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ padding: '20px 0 24px' }}>
            <p style={{ color: '#bfdbfe', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '12px' }}>
              Hands-on training for young people in healthcare, leadership, and community service — building a pipeline of future professionals.
            </p>
            <a href="#" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 — four smaller program cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {[
          {
            icon: <StethoscopeIcon />,
            category: 'Medical Outreach',
            title: 'Medical Outreach Missions',
            desc: 'Providing free consultations, medications, screenings and referrals to underserved communities.',
            img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80',
          },
          {
            icon: <ThermometerIcon />,
            category: 'Child Health',
            title: 'Maternal and Child Health Initiative',
            desc: 'Expanding access to safe pregnancy care, delivery support, newborn care, and maternal education.',
            img: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400&q=80',
          },
          {
            icon: <MegaphoneIcon />,
            category: 'Medical Outreach',
            title: 'Community Health Education',
            desc: 'Empowering individuals with vital health knowledge and prevention strategies.',
            img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80',
          },
          {
            icon: <HomeIcon />,
            category: 'Healthcare Infrastructure',
            title: 'Healthcare Infrastructure Projects',
            desc: 'Building the physical foundations for sustainable, high-quality healthcare delivery.',
            img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80',
          },
        ].map((p, i) => (
          <div key={i} style={{
            backgroundColor: '#f0fdf4',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}>
            {/* Top half: icon left, image right */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '140px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                {p.icon}
              </div>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
            </div>
            {/* Bottom: text */}
            <div style={{ padding: '20px 20px 24px' }}>
              <p style={{ color: '#16a34a', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                {p.category}
              </p>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.65', margin: '0 0 12px' }}>{p.desc}</p>
              <a href="#" style={{ color: '#111827', fontSize: '13px', fontWeight: '700', textDecoration: 'underline' }}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── PROGRAMS PAGE ───────────────────────────────────────────────────────────
const Programs = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <ProgramsHero />
    <ProgramsOverview />
    <RecentProjects />
    <CampaignBanner />
    <Footer />
  </div>
);

export default Programs;