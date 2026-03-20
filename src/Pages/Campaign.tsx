import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
    <section style={{
      position: 'relative',
      minHeight: 'clamp(380px, 60vw, 520px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
    }}>
      <img
        src={render1}
        alt="JoMabel Medical CENTER architectural render"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(10,20,55,0.93) 0%, rgba(15,30,70,0.80) 55%, rgba(15,30,70,0.30) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(32px, 6vw, 72px) clamp(16px, 5vw, 64px)', maxWidth: '720px', width: '100%' }}>
        <span style={{
          display: 'inline-block', background: 'rgba(41,197,246,0.18)',
          border: '1px solid rgba(41,197,246,0.35)', color: '#29C5F6',
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em',
          textTransform: 'uppercase', padding: '5px 16px', borderRadius: '999px', marginBottom: '20px',
        }}>
          Capital Campaign
        </span>
        <h1 style={{
          fontFamily: 'var(--font-heading)', color: '#ffffff',
          fontSize: 'clamp(24px, 5vw, 52px)', fontWeight: '700',
          lineHeight: '1.15', marginBottom: '16px',
        }}>
          Join Us in Building<br />Nigeria's Next Generation<br />Healthcare CENTER
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.8', marginBottom: '32px', maxWidth: '500px' }}>
          A 16,000+ sq. meter world-class medical and training CENTER rising
          in Ufuma, Anambra State, Nigeria — powered by compassion, designed
          for generational impact.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/donate')}
            style={{ backgroundColor: '#16A34A', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '13px 24px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', flex: '1 1 auto', maxWidth: '220px', minWidth: '160px' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#15803D')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#16A34A')}>
            Donate to the Campaign
          </button>
          <button onClick={() => { const el = document.getElementById('facilities-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.45)', borderRadius: '8px', padding: '13px 24px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', backdropFilter: 'blur(4px)', transition: 'all 0.2s', flex: '1 1 auto', maxWidth: '180px', minWidth: '140px' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}>
            See the Facilities
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── VISION STATS — light bg ─────────────────────────────────────────────────
const VisionStats = () => (
  <section id="vision-section" style={{
    backgroundColor: '#F9FAFB',
    padding: 'clamp(40px, 5vw, 64px) clamp(16px, 5vw, 48px)',
    fontFamily: 'var(--font-body)',
  }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', marginBottom: '36px' }}>
      <span style={{
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      }}>
        The Vision
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', color: '#111827', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: '700', margin: '12px 0 0' }}>
        A CENTER Built for Generations
      </h2>
    </div>

    <div className="vision-stats-grid">
      {[
        { number: '16,000+', label: 'Square Meters',       sub: 'Total CENTER Size' },
        { number: '2',       label: 'Major Facilities',    sub: 'Medical + Training CENTER' },
        { number: '6+',      label: 'Program Areas',       sub: 'Healthcare & Training' },
        { number: '∞',       label: 'Generational Impact', sub: 'Ufuma, Anambra State' },
      ].map((s, i) => (
        <div key={i} style={{
          background: '#ffffff', border: '1px solid #E5E7EB',
          borderTop: '3px solid #1D8FD4',
          borderRadius: '12px', padding: 'clamp(16px, 3vw, 24px) 16px',
          textAlign: 'center', transition: 'all 0.2s',
        }}>
          <p style={{ fontFamily: 'var(--font-heading)', color: '#1D8FD4', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: '800', margin: '0 0 6px' }}>{s.number}</p>
          <p style={{ color: '#111827', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>{s.label}</p>
          <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>{s.sub}</p>
        </div>
      ))}
    </div>

    <div style={{ maxWidth: '720px', margin: '32px auto 0', textAlign: 'center' }}>
      <p style={{ color: '#4B5563', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.85' }}>
        The JoMabel Medical and Training CENTER in Ufuma, Anambra State will serve as
        a transformative hub for healthcare delivery, professional training, and community
        empowerment — bringing world-class facilities to southeastern Nigeria and creating
        a lasting legacy of health, dignity, and opportunity.
      </p>
    </div>
  </section>
);

// ─── FACILITIES BREAKDOWN — clean white cards ─────────────────────────────────
const FacilitiesBreakdown = () => {
  const navigate = useNavigate();
  const facilities = [
    {
      name: 'JoMabel Medical CENTER',
      size: '6,000 sqm',
      status: '70% Completed',
      pct: 70,
      accentColor: '#1D8FD4',
      accentBg: '#EBF5FB',
      badge: 'Under Construction',
      badgeBg: '#DBEAFE',
      badgeColor: '#1E40AF',
      description: 'The operational heart of the JoMabel campus — delivering primary care, diagnostics, and specialist services to Ufuma and surrounding communities.',
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
      name: 'Skill Acquisition & Medical Training CENTER',
      size: '10,000 sqm',
      status: '30% Completed',
      pct: 30,
      accentColor: '#16A34A',
      accentBg: '#DCFCE7',
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
    <section id="facilities-section" style={{
      backgroundColor: '#ffffff',
      padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
            fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', marginBottom: '14px',
          }}>
            The CENTER Facilities
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '0 0 12px' }}>
            Two Facilities. One Integrated Vision.
          </h2>
          <p style={{ fontSize: '14px', color: '#4B5563', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75' }}>
            Together, the Medical CENTER and Training CENTER form a fully integrated
            healthcare campus — delivering care today while building the workforce of tomorrow.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((f, i) => (
            <div key={i} style={{
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
              display: 'flex', flexDirection: 'column',
              background: '#ffffff',
            }}>
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img src={f.render} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <span style={{ background: f.badgeBg, color: f.badgeColor, fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '999px' }}>
                    {f.badge}
                  </span>
                  <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', background: 'rgba(0,0,0,0.40)', padding: '3px 10px', borderRadius: '999px' }}>
                    {f.size}
                  </span>
                </div>
              </div>

              {/* Content — clean white */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: '#111827', fontSize: 'clamp(16px, 2vw, 19px)', fontWeight: '700', margin: '0 0 8px', lineHeight: '1.3' }}>
                    {f.name}
                  </h3>
                  <p style={{ color: '#4B5563', fontSize: '13.5px', lineHeight: '1.75', margin: 0 }}>
                    {f.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div style={{ background: '#F9FAFB', borderRadius: '10px', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600' }}>Construction Progress</span>
                    <span style={{ color: f.accentColor, fontSize: '14px', fontWeight: '800' }}>{f.status}</span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '999px', backgroundColor: '#E5E7EB', overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: '999px', backgroundColor: f.accentColor, width: `${f.pct}%` }} />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 10px' }}>
                    Anticipated Services
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
                    {f.services.map((s, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: f.accentColor, flexShrink: 0, marginTop: '5px' }} />
                        <span style={{ color: '#4B5563', fontSize: '12px', lineHeight: '1.5' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate('/donate')}
                  style={{
                    marginTop: 'auto', backgroundColor: f.accentColor, color: '#ffffff',
                    border: 'none', borderRadius: '8px', padding: '12px 24px',
                    fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                    fontFamily: 'inherit', transition: 'all 0.2s', width: '100%',
                  }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                  Help Complete This CENTER
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Ufuma */}
        <div style={{
          marginTop: '40px', background: '#F0F9FF',
          border: '1px solid #BAE6FD', borderRadius: '16px',
          padding: '28px 32px', display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'start',
        }}>
          <div style={{ gridColumn: '1 / -1', marginBottom: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#1D8FD4', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Why Ufuma</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: '700', color: '#111827', margin: '8px 0 0' }}>
              Bringing World-Class Care to Those Who Need It Most
            </h3>
          </div>
          {[
            { icon: '🏥', title: 'No Nearby Hospital', desc: 'Ufuma and surrounding communities lack access to a fully equipped medical facility within a reasonable distance.' },
            { icon: '👩‍⚕️', title: 'Workforce Gap', desc: 'Southeastern Nigeria faces a critical shortage of trained healthcare workers — the Training CENTER directly addresses this.' },
            { icon: '🌍', title: 'Scalable Model', desc: 'The JoMabel CENTER model is designed as a replicable approach for rural healthcare transformation across Nigeria and Africa.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>{item.icon}</span>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#111827', margin: 0 }}>{item.title}</p>
              <p style={{ fontSize: '12.5px', color: '#4B5563', lineHeight: '1.65', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ARCHITECTURAL RENDERS GALLERY ───────────────────────────────────────────
const RendersGallery = () => {
  const [active, setActive] = useState(0);
  const renders = [
    { src: render1, label: 'Main Entrance — Front View' },
    { src: render6, label: 'J&M Nursing Training CENTER, Ufuma' },
    { src: render4, label: 'Full Front Facade' },
    { src: render2, label: 'Side & Parking View' },
    { src: render5, label: 'Aerial Top-Down View' },
    { src: render3, label: 'Site Floor Plan' },
  ];
  return (
    <section style={{
      backgroundColor: '#F9FAFB',
      padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
            Architectural Plans
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '700', color: '#111827', margin: '12px 0 0' }}>
            The CENTER Design
          </h2>
        </div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', position: 'relative' }}>
          <img src={renders[active].src} alt={renders[active].label} style={{ width: '100%', height: 'clamp(200px, 45vw, 480px)', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)', padding: '20px 20px 16px' }}>
            <p style={{ color: '#ffffff', fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: '600', margin: 0 }}>{renders[active].label}</p>
          </div>
        </div>
        <div className="renders-thumb-grid">
          {renders.map((r, i) => (
            <div key={i} onClick={() => setActive(i)} style={{
              borderRadius: '8px', overflow: 'hidden', cursor: 'pointer',
              border: i === active ? '2px solid #1D8FD4' : '2px solid transparent',
              opacity: i === active ? 1 : 0.60, transition: 'all 0.2s',
            }}>
              <img src={r.src} alt={r.label} style={{ width: '100%', height: 'clamp(52px, 8vw, 72px)', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONSTRUCTION VIDEOS ─────────────────────────────────────────────────────
const ConstructionVideos = () => (
  <section style={{
    backgroundColor: '#ffffff',
    padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
    fontFamily: 'var(--font-body)',
  }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
          Watch It Rise
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
          From Blueprint to Reality
        </h2>
        <p style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#4B5563', maxWidth: '520px', margin: '0 auto', lineHeight: '1.75' }}>
          Watch our 16,000+ sq. meter medical CENTER rising in Ufuma, Anambra State.
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
          <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', background: '#111827' }}>
            <video src={v.src} controls muted playsInline style={{ width: '100%', display: 'block', maxHeight: '280px', objectFit: 'cover' }} />
            <div style={{ padding: '12px 16px' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff', margin: 0 }}>{v.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── ONGOING OUTREACH CAMPAIGNS ──────────────────────────────────────────────
const OutreachCampaigns = () => {
  const navigate = useNavigate();
  const campaigns = [
    { img: outreach5, title: 'Medical Outreach Mission — Ufuma', desc: 'Free consultations, screenings, medications and referrals delivered directly to community members in Ufuma, Anambra State — reaching hundreds of families in a single day.', tag: 'Outreach Mission' },
    { img: outreach1, title: 'Community Health Screenings', desc: 'Working alongside the Nigerian Red Cross, our teams deliver free health screenings and consultations to underserved communities, identifying critical health needs early.', tag: 'Health Screening' },
    { img: outreach4, title: 'Medical Outreach Team in Action', desc: 'Our dedicated Medical Outreach Team delivers essential services directly to the people who need them most.', tag: 'Community Impact' },
    { img: outreach3, title: 'Volunteer & Staff Network', desc: 'A growing team of committed volunteers, healthcare workers, and community leaders working together to expand JoMabel\'s reach across southeastern Nigeria.', tag: 'Volunteers' },
    { img: outreach2, title: 'Registration & Preventive Care', desc: 'Outreach stations provide registration, triage, and preventive care services — ensuring every community member receives the attention and follow-up they deserve.', tag: 'Preventive Care' },
  ];
  return (
    <section style={{
      backgroundColor: '#F9FAFB',
      padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
            On The Ground
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '700', color: '#111827', margin: '12px 0 0' }}>
            Ongoing Outreach Campaigns
          </h2>
        </div>
        <div className="campaign-mosaic">
          <div className="campaign-mosaic-large" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
            <img src={campaigns[0].img} alt={campaigns[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
              <span style={{ display: 'inline-block', background: '#1D8FD4', color: '#ffffff', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', marginBottom: '8px' }}>{campaigns[0].tag}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: '700', margin: '0 0 8px', lineHeight: '1.3' }}>{campaigns[0].title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '13px', lineHeight: '1.65', margin: 0 }}>{campaigns[0].desc}</p>
            </div>
          </div>
          <div className="campaign-mosaic-grid">
            {campaigns.slice(1).map((c, i) => (
              <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', background: '#ffffff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #E5E7EB', transition: 'all 0.2s' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#1D8FD4'; }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB'; }}
              >
                <img src={c.img} alt={c.title} style={{ width: '100%', height: 'clamp(120px, 18vw, 160px)', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '12px 14px 14px' }}>
                  <span style={{ display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '999px', marginBottom: '7px' }}>{c.tag}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: '700', color: '#111827', margin: '0 0 5px', lineHeight: '1.3' }}>{c.title}</h3>
                  <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: '1.6', margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={() => navigate('/donate')}
            style={{ backgroundColor: '#16A34A', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '14px 36px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(22,163,74,0.30)' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#15803D'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#16A34A'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
          >
            Support Our Campaigns
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── CAMPAIGN PAGE ───────────────────────────────────────────────────────────
const Campaign = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{`
      .vision-stats-grid { max-width: 1080px; margin: 0 auto 48px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      .renders-thumb-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
      .videos-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
      .campaign-mosaic { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; }
      .campaign-mosaic-large { height: 520px; }
      .campaign-mosaic-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      .facilities-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }

      @media (max-width: 860px) {
        .vision-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .renders-thumb-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .videos-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .campaign-mosaic { grid-template-columns: 1fr; }
        .campaign-mosaic-large { height: 340px; }
        .campaign-mosaic-grid { grid-template-columns: 1fr 1fr; }
        .facilities-grid { grid-template-columns: 1fr; gap: 24px; }
      }
      @media (max-width: 560px) {
        .vision-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .renders-thumb-grid { grid-template-columns: repeat(3, 1fr); gap: 6px; }
        .videos-grid { grid-template-columns: 1fr; gap: 14px; }
        .campaign-mosaic-large { height: 280px; }
        .campaign-mosaic-grid { grid-template-columns: 1fr; }
      }
      @media (max-width: 380px) {
        .vision-stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
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