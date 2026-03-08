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
        alt="JoMabel Medical Campus architectural render"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(27,42,74,0.95) 0%, rgba(27,42,74,0.80) 60%, rgba(27,42,74,0.40) 100%)',
      }} />
      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(32px, 6vw, 72px) clamp(16px, 5vw, 64px)',
        maxWidth: '720px',
        width: '100%',
      }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(41,197,246,0.18)',
          border: '1px solid rgba(41,197,246,0.35)',
          color: 'var(--color-primary)',
          fontSize: '11px', fontWeight: '700',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '5px 16px', borderRadius: '999px',
          marginBottom: '20px',
        }}>
          Capital Campaign
        </span>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          color: '#ffffff',
          fontSize: 'clamp(24px, 5vw, 52px)',
          fontWeight: '700', lineHeight: '1.15',
          marginBottom: '16px',
        }}>
          Join Us in Building<br />
          Nigeria's Next Generation<br />
          Healthcare Campus
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.78)',
          fontSize: 'clamp(13px, 1.8vw, 15px)',
          lineHeight: '1.8', marginBottom: '32px',
          maxWidth: '500px',
        }}>
          A 16,000+ sq. meter world-class medical and training campus rising
          in Ufuma, Anambra State, Nigeria — powered by compassion, designed
          for generational impact.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/donate')}
            style={{
              backgroundColor: 'var(--color-green)',
              color: '#ffffff', border: 'none',
              borderRadius: 'var(--btn-radius)',
              padding: '13px 24px', fontSize: '14px',
              fontWeight: '700', cursor: 'pointer',
              fontFamily: 'inherit', transition: 'var(--transition)',
              flex: '1 1 auto', maxWidth: '220px', minWidth: '160px',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'var(--color-green-dark)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'var(--color-green)')}
          >
            Donate to the Campaign
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('vision-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              color: '#ffffff',
              border: '1.5px solid rgba(255,255,255,0.45)',
              borderRadius: 'var(--btn-radius)',
              padding: '13px 24px', fontSize: '14px',
              fontWeight: '700', cursor: 'pointer',
              fontFamily: 'inherit', backdropFilter: 'blur(4px)',
              transition: 'var(--transition)',
              flex: '1 1 auto', maxWidth: '180px', minWidth: '140px',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
          >
            See the Vision
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── THE VISION — STATS ──────────────────────────────────────────────────────
const VisionStats = () => (
  <section id="vision-section" style={{
    backgroundColor: 'var(--color-navy)',
    padding: 'clamp(40px, 5vw, 64px) clamp(16px, 5vw, 48px)',
    fontFamily: 'var(--font-body)',
  }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', marginBottom: '36px' }}>
      <span style={{
        fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)',
        letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        The Vision
      </span>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        color: '#ffffff',
        fontSize: 'clamp(20px, 3vw, 32px)',
        fontWeight: '700', margin: '12px 0 0',
      }}>
        A Campus Built for Generations
      </h2>
    </div>

    {/* Stats row — 2 cols on mobile, 4 on desktop */}
    <div className="vision-stats-grid">
      {[
        { number: '16,000+', label: 'Square Meters',       sub: 'Total Campus Size' },
        { number: '2',       label: 'Major Facilities',    sub: 'Medical Center + Skills Center' },
        { number: '6+',      label: 'Program Areas',       sub: 'Healthcare & Training' },
        { number: '∞',       label: 'Generational Impact', sub: 'Ufuma, Anambra State' },
      ].map((s, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(41,197,246,0.20)',
          borderRadius: 'var(--card-radius)',
          padding: 'clamp(16px, 3vw, 24px) 16px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-primary)',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: '800', margin: '0 0 6px',
          }}>{s.number}</p>
          <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>{s.label}</p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', margin: 0 }}>{s.sub}</p>
        </div>
      ))}
    </div>

    {/* Description */}
    <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', marginTop: '32px' }}>
      <p style={{
        color: 'rgba(255,255,255,0.72)',
        fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.85',
      }}>
        The JoMabel Medical and Training Campus in Ufuma, Anambra State will serve as
        a transformative hub for healthcare delivery, professional training, and community
        empowerment — bringing world-class facilities to southeastern Nigeria and creating
        a lasting legacy of health, dignity, and opportunity.
      </p>
    </div>
  </section>
);

// ─── ARCHITECTURAL RENDERS GALLERY ───────────────────────────────────────────
const RendersGallery = () => {
  const [active, setActive] = useState(0);
  const renders = [
    { src: render1, label: 'Main Entrance — Front View' },
    { src: render6, label: 'J&M Nursing Training Centre, Ufuma' },
    { src: render4, label: 'Full Front Facade' },
    { src: render2, label: 'Side & Parking View' },
    { src: render5, label: 'Aerial Top-Down View' },
    { src: render3, label: 'Site Floor Plan' },
  ];

  return (
    <section style={{
      backgroundColor: 'var(--color-surface)',
      padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontSize: '11px', fontWeight: '700',
            color: 'var(--color-primary-dark)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Architectural Plans
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(20px, 3vw, 30px)',
            fontWeight: '700', color: 'var(--color-navy)',
            margin: '12px 0 0',
          }}>
            The Campus Design
          </h2>
        </div>

        {/* Main large image */}
        <div style={{
          borderRadius: '16px', overflow: 'hidden',
          marginBottom: '12px', boxShadow: 'var(--shadow-lg)',
          position: 'relative',
        }}>
          <img
            src={renders[active].src}
            alt={renders[active].label}
            style={{ width: '100%', height: 'clamp(200px, 45vw, 480px)', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(27,42,74,0.85) 0%, transparent 100%)',
            padding: '20px 20px 16px',
          }}>
            <p style={{ color: '#ffffff', fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: '600', margin: 0 }}>
              {renders[active].label}
            </p>
          </div>
        </div>

        {/* Thumbnails — 3 per row on mobile, 6 on desktop */}
        <div className="renders-thumb-grid">
          {renders.map((r, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                borderRadius: '8px', overflow: 'hidden',
                cursor: 'pointer',
                border: i === active ? '2px solid var(--color-primary)' : '2px solid transparent',
                opacity: i === active ? 1 : 0.65,
                transition: 'var(--transition)',
              }}
            >
              <img
                src={r.src}
                alt={r.label}
                style={{ width: '100%', height: 'clamp(52px, 8vw, 72px)', objectFit: 'cover', display: 'block' }}
              />
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
    backgroundColor: 'var(--color-white)',
    padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
    fontFamily: 'var(--font-body)',
  }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700',
          color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          Watch It Rise
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(20px, 3vw, 30px)',
          fontWeight: '700', color: 'var(--color-navy)',
          margin: '12px 0 8px',
        }}>
          From Blueprint to Reality
        </h2>
        <p style={{
          fontSize: 'clamp(13px, 1.5vw, 14px)', color: 'var(--color-text-muted)',
          maxWidth: '520px', margin: '0 auto', lineHeight: '1.75',
        }}>
          Watch our 16,000+ sq. meter medical campus rising in Ufuma, Anambra State.
          Every brick is a step toward dignified healthcare for generations.
        </p>
      </div>

      {/* 1 col on mobile, 2 cols on tablet+ */}
      <div className="videos-grid">
        {[
          { src: construction4, label: 'Construction Progress — Phase 1' },
          { src: construction2, label: 'Construction Progress — Phase 2' },
          { src: construction3, label: 'Construction Progress — Phase 3' },
          { src: construction1, label: 'Construction Progress — Phase 4' },
        ].map((v, i) => (
          <div key={i} style={{
            borderRadius: 'var(--card-radius)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            background: 'var(--color-navy)',
          }}>
            <video
              src={v.src}
              controls
              muted
              playsInline
              style={{ width: '100%', display: 'block', maxHeight: '280px', objectFit: 'cover' }}
            />
            <div style={{ padding: '12px 16px' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
                {v.label}
              </p>
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
    {
      img: outreach5,
      title: 'Medical Outreach Mission — Ufuma',
      desc: 'Free consultations, screenings, medications and referrals delivered directly to community members in Ufuma, Anambra State — reaching hundreds of families in a single day.',
      tag: 'Outreach Mission',
    },
    {
      img: outreach1,
      title: 'Community Health Screenings',
      desc: 'Working alongside the Nigerian Red Cross, our teams deliver free health screenings and consultations to underserved communities, identifying critical health needs early.',
      tag: 'Health Screening',
    },
    {
      img: outreach4,
      title: 'Medical Outreach Team in Action',
      desc: 'Our dedicated Medical Outreach Team — "Compassionate Care, Community Impact" — delivers essential services directly to the people who need them most.',
      tag: 'Community Impact',
    },
    {
      img: outreach3,
      title: 'Volunteer & Staff Network',
      desc: 'A growing team of committed volunteers, healthcare workers, and community leaders working together to expand JoMabel\'s reach and impact across southeastern Nigeria.',
      tag: 'Volunteers',
    },
    {
      img: outreach2,
      title: 'Registration & Preventive Care',
      desc: 'Outreach stations provide registration, triage, and preventive care services — ensuring every community member receives the attention and follow-up they deserve.',
      tag: 'Preventive Care',
    },
  ];

  return (
    <section style={{
      backgroundColor: 'var(--color-surface)',
      padding: 'var(--section-padding-y) clamp(16px, 5vw, var(--section-padding-x))',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            fontSize: '11px', fontWeight: '700',
            color: 'var(--color-primary-dark)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            On The Ground
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(20px, 3vw, 30px)',
            fontWeight: '700', color: 'var(--color-navy)',
            margin: '12px 0 0',
          }}>
            Ongoing Outreach Campaigns
          </h2>
        </div>

        {/* Mosaic layout */}
        <div className="campaign-mosaic">

          {/* Large feature card */}
          <div className="campaign-mosaic-large" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
            <img
              src={campaigns[0].img}
              alt={campaigns[0].title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(27,42,74,0.92) 0%, transparent 55%)',
            }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
              <span style={{
                display: 'inline-block',
                background: 'var(--color-primary)',
                color: '#ffffff', fontSize: '10px',
                fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '3px 10px', borderRadius: '999px', marginBottom: '8px',
              }}>
                {campaigns[0].tag}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#ffffff', fontSize: 'clamp(15px, 2vw, 18px)',
                fontWeight: '700', margin: '0 0 8px', lineHeight: '1.3',
              }}>
                {campaigns[0].title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '13px', lineHeight: '1.65', margin: 0 }}>
                {campaigns[0].desc}
              </p>
            </div>
          </div>

          {/* 4 smaller cards */}
          <div className="campaign-mosaic-grid">
            {campaigns.slice(1).map((c, i) => (
              <div key={i} style={{
                position: 'relative', borderRadius: '12px',
                overflow: 'hidden', background: 'var(--color-white)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                transition: 'var(--transition)',
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-sm)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ width: '100%', height: 'clamp(120px, 18vw, 160px)', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '12px 14px 14px' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--color-primary-light)',
                    color: 'var(--color-primary-dark)',
                    fontSize: '10px', fontWeight: '700',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '2px 8px', borderRadius: '999px', marginBottom: '7px',
                  }}>
                    {c.tag}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: '700',
                    color: 'var(--color-navy)', margin: '0 0 5px', lineHeight: '1.3',
                  }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => navigate('/donate')}
            style={{
              backgroundColor: 'var(--color-green)',
              color: '#ffffff', border: 'none',
              borderRadius: 'var(--btn-radius)',
              padding: '14px 36px', fontSize: '15px',
              fontWeight: '700', cursor: 'pointer',
              fontFamily: 'inherit', transition: 'var(--transition)',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--color-green-dark)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--color-green)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
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
      /* ── Vision Stats Grid ───────────────────────── */
      .vision-stats-grid {
        max-width: 1080px;
        margin: 0 auto 48px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }

      /* ── Renders Thumbnails ──────────────────────── */
      .renders-thumb-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
      }

      /* ── Videos Grid ─────────────────────────────── */
      .videos-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      /* ── Outreach Mosaic ─────────────────────────── */
      .campaign-mosaic {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: start;
      }
      .campaign-mosaic-large {
        height: 520px;
      }
      .campaign-mosaic-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }

      /* ── Tablet (≤860px) ─────────────────────────── */
      @media (max-width: 860px) {
        .vision-stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .renders-thumb-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .videos-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .campaign-mosaic {
          grid-template-columns: 1fr;
        }
        .campaign-mosaic-large {
          height: 340px;
        }
        .campaign-mosaic-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      /* ── Mobile (≤560px) ─────────────────────────── */
      @media (max-width: 560px) {
        .vision-stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .renders-thumb-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }
        .videos-grid {
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .campaign-mosaic-large {
          height: 280px;
        }
        .campaign-mosaic-grid {
          grid-template-columns: 1fr;
        }
      }

      /* ── Small mobile (≤380px) ───────────────────── */
      @media (max-width: 380px) {
        .vision-stats-grid {
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
      }
    `}</style>

    <Navbar />
    <CampaignHero />
    <VisionStats />
    <RendersGallery />
    <ConstructionVideos />
    <OutreachCampaigns />
    <Footer />
  </div>
);

export default Campaign;