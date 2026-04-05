import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Target, Heart, Users, Building2 } from 'lucide-react';

// Hero image
import heroImage from '../assests/images/outreach5.jpeg';

const ROI = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animated numbers
  const [animatedTotal, setAnimatedTotal] = useState(0);

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
      let startTotal = 0;
      const totalInterval = setInterval(() => {
        if (startTotal < 547500) {
          startTotal += 5000;
          setAnimatedTotal(prev => Math.min(prev + 5000, 547500));
        } else {
          clearInterval(totalInterval);
        }
      }, 15);
    }
  }, [isVisible]);

  const impactItems = [
    { label: 'Reduced travel cost', value: '$125,000', icon: DollarSign },
    { label: 'Productivity gains', value: '$80,000', icon: TrendingUp },
    { label: 'Hospitalization savings', value: '$37,500', icon: Heart },
    { label: 'Early detection savings', value: '$100,000', icon: Target },
    { label: 'Workforce development value', value: '$50,000', icon: Users },
    { label: 'Healthcare system savings', value: '$155,000', icon: Building2 },
  ];

  return (
    <div className="roi-page">
      <style>{`
        .roi-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section */
        .roi-hero {
          position: relative;
          height: 60vh;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .roi-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .roi-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
        }
        .roi-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
        }
        .roi-hero h1 {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .roi-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* ROI Statement Card */
        .roi-statement {
          padding: 64px clamp(20px, 5vw, 48px);
          background: #FFFFFF;
          text-align: center;
        }
        .roi-statement-card {
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(135deg, #1D8FD4 0%, #1570A6 100%);
          border-radius: 28px;
          padding: 48px 40px;
          color: #ffffff;
        }
        .roi-statement-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.8;
          margin-bottom: 16px;
        }
        .roi-statement-value {
          font-family: var(--font-heading);
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 800;
          margin-bottom: 16px;
        }
        .roi-statement-text {
          font-size: 18px;
          line-height: 1.6;
          opacity: 0.95;
        }
        
        /* Annual Impact Section */
        .impact-section {
          background-color: #F9FAFB;
          padding: 64px clamp(20px, 5vw, 48px);
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
          margin-bottom: 16px;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
        }
        .section-description {
          font-size: 18px;
          color: #4B5563;
          max-width: 700px;
          margin: 16px auto 0;
          line-height: 1.6;
        }
        
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .impact-item {
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
        }
        .impact-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: #1D8FD4;
        }
        .impact-icon {
          width: 56px;
          height: 56px;
          background: #EBF5FB;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D8FD4;
          flex-shrink: 0;
        }
        .impact-icon svg {
          width: 28px;
          height: 28px;
        }
        .impact-content {
          flex: 1;
        }
        .impact-label {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 4px;
        }
        .impact-value {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: #1D8FD4;
        }
        
        /* Total Impact Card */
        .total-impact {
          max-width: 600px;
          margin: 48px auto 0;
          background: #ffffff;
          border: 2px solid #1D8FD4;
          border-radius: 24px;
          padding: 32px;
          text-align: center;
        }
        .total-label {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 8px;
        }
        .total-value {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 800;
          color: #1D8FD4;
          margin-bottom: 8px;
        }
        .total-sub {
          font-size: 14px;
          color: #4B5563;
        }
        
        /* Long Term Impact */
        .long-term-section {
          padding: 64px clamp(20px, 5vw, 48px);
          background: #FFFFFF;
        }
        .long-term-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1000px;
          margin: 48px auto 0;
        }
        .long-term-card {
          text-align: center;
          padding: 32px 24px;
          background: #F9FAFB;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        .long-term-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .long-term-number {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          color: #1D8FD4;
          margin-bottom: 12px;
        }
        .long-term-label {
          font-size: 14px;
          color: #4B5563;
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
          margin: 0 clamp(20px, 5vw, 48px) 64px;
          border-radius: 28px;
          padding: 56px 48px;
          text-align: center;
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .cta-description {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover {
          background: #15803D;
          transform: translateY(-2px);
        }
        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 10px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.6);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .roi-hero {
            min-height: 380px;
          }
          .roi-hero h1 {
            font-size: 32px;
          }
          .roi-statement-card {
            padding: 32px 24px;
          }
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .long-term-grid {
            grid-template-columns: 1fr;
          }
          .cta-section {
            padding: 40px 28px;
          }
          .cta-title {
            font-size: 24px;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .btn-primary, .btn-outline {
            justify-content: center;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="roi-hero">
        <img src={heroImage} alt="JoMabel Healthcare Foundation community outreach" className="roi-hero-image" />
        <div className="roi-hero-overlay" />
        <div className="roi-hero-content">
          <h1>Return on Investment</h1>
          <p>Healthcare Access That Delivers Measurable Impact</p>
        </div>
      </div>

      {/* ROI Statement Card */}
      <div className="roi-statement">
        <div className="roi-statement-card">
          <div className="roi-statement-label">ROI Statement</div>
          <div className="roi-statement-value">$1 = $2.7–$3.0</div>
          <p className="roi-statement-text">
            For every $1 invested in JoMabel Healthcare Foundation, approximately $2.7–$3.0 in economic and social value is created.
          </p>
        </div>
      </div>

      {/* Annual Economic Impact */}
      <div className="impact-section">
        <div className="section-header">
          <div className="section-label">Economic Impact</div>
          <h2 className="section-title">Annual Economic Impact</h2>
          <p className="section-description">
            JoMabel Healthcare Foundation generates measurable economic and social value by expanding healthcare access, reducing costs, and strengthening community health systems.
          </p>
        </div>

        <div className="impact-grid">
          {impactItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="impact-item">
                <div className="impact-icon">
                  <IconComponent />
                </div>
                <div className="impact-content">
                  <div className="impact-label">{item.label}</div>
                  <div className="impact-value">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="total-impact">
          <div className="total-label">Total Annual Impact</div>
          <div className="total-value">${animatedTotal.toLocaleString()}</div>
          <div className="total-sub">Annual economic value generated by JHF programs</div>
        </div>
      </div>

      {/* Long Term Impact */}
      <div className="long-term-section">
        <div className="section-header">
          <div className="section-label">Long Term Value</div>
          <h2 className="section-title">Multi-Year Impact</h2>
        </div>
        <div className="long-term-grid">
          <div className="long-term-card">
            <div className="long-term-number">$547,500</div>
            <div className="long-term-label">Annual Impact</div>
          </div>
          <div className="long-term-card">
            <div className="long-term-number">$2.7M</div>
            <div className="long-term-label">5-Year Impact</div>
          </div>
          <div className="long-term-card">
            <div className="long-term-number">2.7x</div>
            <div className="long-term-label">ROI Multiplier</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3 className="cta-title">Support Healthcare Access</h3>
        <p className="cta-description">
          Your investment creates lasting economic and social value for underserved communities in Nigeria.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate Now
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>
            Partner With Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ROI;