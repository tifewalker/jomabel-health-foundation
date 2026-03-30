import React from "react";
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assests/images/outreach5.jpeg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px clamp(24px, 5vw, 48px);
          width: 100%;
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          max-width: 800px;
        }
        
        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(42px, 8vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(16px, 1.8vw, 18px);
          font-weight: 400;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 32px;
          max-width: 600px;
        }
        
        .hero-btn {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-block;
        }
        
        .hero-btn:hover {
          background: #15803D;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .hero-root {
            min-height: 70vh;
          }
          .hero-container {
            padding: 60px 24px;
          }
          .hero-title {
            font-size: 36px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px;
          }
          .hero-subtitle {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="hero-root">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="JoMabel Healthcare Foundation community outreach"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            zIndex: 0,
          }}
        />
        
        {/* Clean Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
        }} />
        
        {/* Content */}
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Healthcare Is a Human Right
            </h1>
            <p className="hero-subtitle">
              In southeastern Nigeria, we fight healthcare injustice by delivering quality care to underserved communities working with local leaders to build stronger health systems that last.
            </p>
            <button className="hero-btn" onClick={() => navigate('/donate')}>
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;