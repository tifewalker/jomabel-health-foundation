import React from "react";
import { useNavigate } from 'react-router-dom';
import campusRender from '../../assests/images/an1.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .hero-wrap {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* ── MAIN CONTENT — centered ── */
        .hero-body {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: clamp(100px, 12vw, 140px) clamp(20px, 6vw, 80px) clamp(60px, 8vw, 100px);
        }

        /* ── FOUNDATION NAME ── */
        .hero-org-name {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          justify-content: center;
        }
        .hero-org-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #29C5F6;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(41,197,246,0.7);
        }
        .hero-org-text {
          font-size: clamp(10px, 1.2vw, 12px);
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.90);
        }

        /* ── HEADLINE ── */
        .hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(30px, 5.5vw, 64px);
          font-weight: 800;
          line-height: 1.12;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 24px rgba(0,0,0,0.15);
          max-width: 820px;
        }
        .hero-h1 span { color: #29C5F6; }

        /* ── SUBHEADLINE ── */
        .hero-sub {
          font-size: clamp(14px, 1.6vw, 17px);
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 32px;
        }

        /* ── PROGRESS BARS ── */
        .hero-progress-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
          justify-content: center;
          max-width: 480px;
        }
        .hero-progress-card {
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 10px;
          padding: 12px 18px;
          backdrop-filter: blur(10px);
          flex: 1 1 150px;
          max-width: 220px;
          text-align: left;
        }

        /* ── BUTTONS ── */
        .hero-btn-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-btn-solid {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(22,163,74,0.35);
        }
        .hero-btn-solid:hover { background: #15803D; transform: translateY(-2px); }

        .hero-btn-ghost {
          background: rgba(255,255,255,0.10);
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 6px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          white-space: nowrap;
          backdrop-filter: blur(4px);
        }
        .hero-btn-ghost:hover { background: rgba(255,255,255,0.20); transform: translateY(-2px); }

        .hero-btn-outline {
          background: transparent;
          color: #29C5F6;
          border: 1.5px solid rgba(41,197,246,0.50);
          border-radius: 6px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .hero-btn-outline:hover { background: rgba(41,197,246,0.12); transform: translateY(-2px); }

        /* ── 3 BOTTOM BOXES — contained, not full width ── */
        .hero-boxes-wrap {
          position: relative;
          z-index: 4;
          padding: 0 clamp(20px, 5vw, 80px) 0;
          margin-top: -2px;
        }
        .hero-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1080px;
          margin: 0 auto;
          border-radius: 0 0 16px 16px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.20);
        }
        .hero-box {
          padding: clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
          transition: filter 0.2s;
          border-right: 1px solid rgba(255,255,255,0.10);
        }
        .hero-box:last-child { border-right: none; }
        .hero-box:hover { filter: brightness(1.10); }
        .hero-box-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.15);
          margin-bottom: 4px;
        }
        .hero-box-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(15px, 1.8vw, 19px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }
        .hero-box-desc {
          font-size: 12.5px;
          color: rgba(255,255,255,0.70);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .hero-box-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 4px;
          padding: 7px 14px;
          width: fit-content;
          transition: all 0.2s;
          background: rgba(255,255,255,0.08);
          margin-top: 4px;
        }
        .hero-box-link:hover { background: rgba(255,255,255,0.22); }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hero-boxes { grid-template-columns: 1fr; border-radius: 0 0 12px 12px; }
          .hero-box { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.10); }
          .hero-box:last-child { border-bottom: none; }
          .hero-boxes-wrap { padding: 0 clamp(16px, 4vw, 40px); }
        }
        @media (max-width: 600px) {
          .hero-body { padding: 90px 20px 40px; }
          .hero-btn-row { flex-direction: column; align-items: stretch; }
          .hero-btn-solid, .hero-btn-ghost, .hero-btn-outline { text-align: center; }
          .hero-progress-row { flex-direction: column; max-width: 100%; }
          .hero-progress-card { max-width: 100%; }
        }
        @media (max-width: 400px) {
          .hero-h1 { font-size: 26px; }
        }
      `}</style>

      <div className="hero-wrap">

        {/* Background */}
        <img
          src={campusRender}
          alt="JoMabel Healthcare Medical CENTER — Ufuma, Anambra State"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(160deg, rgba(10,20,55,0.93) 0%, rgba(15,30,70,0.85) 50%, rgba(15,30,70,0.60) 100%)',
        }} />

        {/* ── CENTERED CONTENT ── */}
        <div className="hero-body">

          {/* Foundation name */}
          <div className="hero-org-name">
            <div className="hero-org-dot" />
            <span className="hero-org-text">JoMabel Healthcare Foundation USA</span>
          </div>

          {/* Headline */}
          <h1 className="hero-h1">
            Building a Healthcare CENTER<br />
            That Will Transform Rural Care<br />
            <span>in Nigeria</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub">
            Expanding access to quality healthcare in Ufuma, Anambra State through
            a <strong style={{ color: '#ffffff' }}>6,000 sqm Medical CENTER</strong>,
            a <strong style={{ color: '#ffffff' }}>10,000 sqm Training CENTER</strong>,
            and community-based health programs.
          </p>

        

          {/* Buttons */}
          <div className="hero-btn-row">
            <button className="hero-btn-solid" onClick={() => navigate('/donate')}>
              Donate to Complete the CENTER
            </button>
            <button className="hero-btn-ghost" onClick={() => navigate('/campaign')}>
              See the Vision
            </button>
            <button className="hero-btn-outline" onClick={() => navigate('/contact')}>
              Request a Briefing
            </button>
          </div>

        </div>

        {/* ── 3 BOTTOM BOXES — contained with side padding ── */}
        <div className="hero-boxes-wrap">
          <div className="hero-boxes">

            {/* Box 1 — Donate */}
            <div className="hero-box" style={{ background: '#1B2A4A' }} onClick={() => navigate('/donate')}>
              <div className="hero-box-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C12 21 3 14.5 3 8.5a5.5 5.5 0 0111 0 5.5 5.5 0 0111 0c0 6-9 12.5-9 12.5z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hero-box-title">Donate Now!</h3>
              <p className="hero-box-desc">
                Every dollar completes a life-changing medical and training CENTER
                serving thousands of families in southeastern Nigeria.
              </p>
              <span className="hero-box-link">
                Give Today
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>

            {/* Box 2 — Campaign */}
            <div className="hero-box" style={{ background: '#1D8FD4' }} onClick={() => navigate('/campaign')}>
              <div className="hero-box-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hero-box-title">Join Us Now</h3>
              <p className="hero-box-desc">
                Follow the construction of our 16,000+ sqm campus and become
                part of a movement transforming rural healthcare in Nigeria.
              </p>
              <span className="hero-box-link">
                See Progress
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>

            {/* Box 3 — Partner */}
            <div className="hero-box" style={{ background: '#16A34A' }} onClick={() => navigate('/contact')}>
              <div className="hero-box-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#ffffff" strokeWidth="1.5"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="hero-box-title">Get Involved</h3>
              <p className="hero-box-desc">
                We welcome institutional funders, healthcare partners, diaspora
                supporters, and corporate sponsors ready to make a lasting impact.
              </p>
              <span className="hero-box-link">
                Partner With JHF
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;