import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Testimonies from '../components/sections/Testimonies';
import logo from '../assests/images/logo.jpeg';
import OurSocials from '../components/sections/OurSocials';

// ─── ABOUT HERO ─────────────────────────────────────────────────────────────
const AboutHero = () => (
  <section style={{
    position: 'relative',
    padding: '72px 64px',
    fontFamily: "'Georgia', serif",
    overflow: 'hidden',
  }}>
    {/* Background image */}
    <img
      src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80"
      alt=""
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />

    {/* Soft white overlay so text stays readable */}
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(255,255,255,0.96) 45%, rgba(255,255,255,0.80) 100%)',
    }} />

    {/* Content */}
    <div style={{
      position: 'relative',
      zIndex: 2,
      maxWidth: '1080px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: '0',
      alignItems: 'center',
      minHeight: '260px',
    }}>
      {/* Left: text */}
      <div style={{ paddingRight: '64px' }}>
        <h1 style={{
          fontSize: '64px',
          fontWeight: '900',
          color: '#111827',
          lineHeight: 1,
          marginBottom: '24px',
          letterSpacing: '-0.02em',
        }}>
          About Us
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#4b5563',
          lineHeight: '1.75',
          maxWidth: '340px',
        }}>
          JoMabel Healthcare Foundation USA Inc. is a faith-guided, U.S.–based
          nonprofit developing a world-class medical and healthcare training
          campus in Nigeria.
        </p>
      </div>

      {/* Vertical divider */}
      <div style={{ backgroundColor: '#d1d5db', width: '1px', alignSelf: 'stretch' }} />

      {/* Right: logo card */}
      <div style={{ paddingLeft: '64px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
          <img src={logo} alt="JoMabel Healthcare Foundation" style={{ height: '120px', width: 'auto' }} />
        </div>
      </div>
    </div>
  </section>
);

// ─── FOUNDER BIO ─────────────────────────────────────────────────────────────
const FounderBio = () => (
  <section style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '480px',
    fontFamily: "'Georgia', serif",
  }}>
    {/* Left: green photo panel */}
    <div style={{
      backgroundColor: '#16a34a',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      minHeight: '480px',
    }}>
      <img
        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80"
        alt="Dr Clara Ada Ogbaa"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          position: 'absolute',
          inset: 0,
          mixBlendMode: 'luminosity',
          opacity: 0.85,
        }}
      />
      {/* Name overlay */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(0,0,0,0.45)',
        width: '100%',
        padding: '20px 28px',
      }}>
        <p style={{ color: '#22c55e', fontSize: '12px', fontWeight: '700', marginBottom: '4px', letterSpacing: '0.08em' }}>
          Founder / CEO
        </p>
        <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', margin: '0 0 4px' }}>
          Dr Clara Ada Ogbaa
        </h3>
        <p style={{ color: '#86efac', fontSize: '12px', margin: 0 }}>
          Ed.D. | Educator | Humanitarian | Survivor
        </p>
      </div>
    </div>

    {/* Right: bio content */}
    <div style={{
      backgroundColor: '#ffffff',
      padding: '56px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
    }}>
      <h2 style={{
        fontSize: '26px',
        fontWeight: '800',
        color: '#111827',
        lineHeight: 1.3,
        margin: 0,
      }}>
        Born From Faith. Sustained by Grace.<br />Built For Purpose.
      </h2>
      <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', margin: 0 }}>
        Dr. Clara Ada Ogbaa is a Nigerian-American educator, humanitarian, two-time cancer survivor, and kidney transplant recipient. Her life was sustained by advanced medicine, compassionate care, and faith — experiences that shaped her life's mission.
      </p>

      {/* Quote block */}
      <div style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        padding: '20px 24px',
        position: 'relative',
      }}>
        <span style={{ fontSize: '28px', color: '#22c55e', lineHeight: 1, position: 'absolute', top: '10px', left: '16px' }}>"</span>
        <p style={{
          fontSize: '13.5px',
          color: '#374151',
          fontStyle: 'italic',
          lineHeight: '1.7',
          margin: '10px 0 0',
          paddingLeft: '8px',
        }}>
          Dignified, life-saving healthcare should be accessible to every person —
          not only to those fortunate enough to live near it.
        </p>
        <span style={{ fontSize: '28px', color: '#22c55e', lineHeight: 1, position: 'absolute', bottom: '6px', right: '16px' }}>"</span>
      </div>

      <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8', margin: 0 }}>
        Born in Ufuma, Anambra State, Nigeria, Dr. Ogbaa envisioned a future where her hometown would be defined by possibility — not limited infrastructure. JoMabel Healthcare Foundation is her answer to that vision.
      </p>
    </div>
  </section>
);

// ─── MISSION & VISION ────────────────────────────────────────────────────────
const MissionVisionSection = () => (
  <section style={{
    backgroundColor: '#ffffff',
    padding: '72px 64px',
    fontFamily: "'Inter', sans-serif",
  }}>
    <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '48px' }}>
      Mission and Vision
    </h2>

    <div style={{
      maxWidth: '1080px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: '0',
      alignItems: 'start',
    }}>
      {/* Left: logo */}
      <div style={{ paddingRight: '48px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '40px 48px',
          backgroundColor: '#fafafa',
        }}>
          <img src={logo} alt="JoMabel" style={{ height: '100px', width: 'auto' }} />
        </div>
      </div>

      {/* Divider */}
      <div style={{ backgroundColor: '#d1d5db', width: '1px', alignSelf: 'stretch' }} />

      {/* Right: mission + vision cards */}
      <div style={{ paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Mission card */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px 28px',
          borderLeft: '4px solid #22c55e',
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Our mission</h3>
          <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.75', margin: 0 }}>
            JoMabel Healthcare Foundation exists to provide access to compassionate, high-quality healthcare, strengthen community health systems, and promote dignity, wellness, and sustainable development for underserved populations
          </p>
        </div>

        {/* Vision card */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px 28px',
          borderRight: '4px solid #2563eb',
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Our vision</h3>
          <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: '1.75', margin: 0 }}>
            A world where every person — regardless of geography, income, or social status — has access to dignified, life-saving healthcare.
          </p>
        </div>
      </div>
    </div>

    {/* Registration & Credentials */}
    <div style={{
      maxWidth: '1080px',
      margin: '56px auto 0',
      border: '1.5px solid #e5e7eb',
      borderRadius: '16px',
      padding: '48px 48px',
      backgroundColor: '#fafafa',
      textAlign: 'center',
    }}>
      <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
        Registration and Credentials
      </h3>
      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75', maxWidth: '500px', margin: '0 auto 36px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* Placeholder credential logos */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            width: '100px',
            height: '44px',
            backgroundColor: '#374151',
            borderRadius: '6px',
          }} />
        ))}
      </div>
    </div>
  </section>
);

// ─── OUR TEAM ────────────────────────────────────────────────────────────────
const teamMembers = [
  { name: 'Team Member Name', position: 'Position', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Team Member Name', position: 'Position', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Team Member Name', position: 'Position', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80' },
  { name: 'Team Member Name', position: 'Position', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
];

const OurTeam = () => (
  <section style={{
    backgroundColor: '#ffffff',
    padding: '64px 64px',
    fontFamily: "'Inter', sans-serif",
    textAlign: 'center',
  }}>
    <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>Our Team</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px',
      maxWidth: '1080px',
      margin: '0 auto',
    }}>
      {teamMembers.map((m, i) => (
        <div key={i}>
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#16a34a',
            height: '240px',
            marginBottom: '14px',
            position: 'relative',
          }}>
            <img
              src={m.img}
              alt={m.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                mixBlendMode: 'luminosity',
              }}
            />
          </div>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#111827', margin: '0 0 4px' }}>{m.name}</p>
          <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>{m.position}</p>
        </div>
      ))}
    </div>
  </section>
);


// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
const About = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <AboutHero />
      <FounderBio />
      <MissionVisionSection />
      <OurTeam />
      <OurSocials />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default About;