import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Heart, Users, Building2, Activity, TrendingUp, Target, Globe } from 'lucide-react';

// Images
import heroImage from '../assests/images/outreach5.jpeg';
import outreachImage from '../assests/images/outreach2.jpeg';
import maternalImage from '../assests/images/maternal-and-child-health-.jpg';

const Impact = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animated numbers
  const [animatedStats, setAnimatedStats] = useState({
    patients: 0,
    workers: 0,
    campus: 0,
    communities: 0
  });
  
  const [animatedEconomic, setAnimatedEconomic] = useState({
    annual: 0,
    fiveYear: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate patients
      let startPatients = 0;
      const patientsInterval = setInterval(() => {
        if (startPatients < 5000) {
          startPatients += 100;
          setAnimatedStats(prev => ({ ...prev, patients: startPatients }));
        } else {
          clearInterval(patientsInterval);
        }
      }, 15);

      // Animate workers
      let startWorkers = 0;
      const workersInterval = setInterval(() => {
        if (startWorkers < 250) {
          startWorkers += 5;
          setAnimatedStats(prev => ({ ...prev, workers: startWorkers }));
        } else {
          clearInterval(workersInterval);
        }
      }, 20);

      // Animate campus
      let startCampus = 0;
      const campusInterval = setInterval(() => {
        if (startCampus < 16000) {
          startCampus += 500;
          setAnimatedStats(prev => ({ ...prev, campus: startCampus }));
        } else {
          clearInterval(campusInterval);
        }
      }, 15);

      // Animate communities
      let startCommunities = 0;
      const communitiesInterval = setInterval(() => {
        if (startCommunities < 25) {
          startCommunities++;
          setAnimatedStats(prev => ({ ...prev, communities: startCommunities }));
        } else {
          clearInterval(communitiesInterval);
        }
      }, 40);

      // Animate economic impact
      let startAnnual = 0;
      const annualInterval = setInterval(() => {
        if (startAnnual < 547500) {
          startAnnual += 5000;
          setAnimatedEconomic(prev => ({ ...prev, annual: startAnnual }));
        } else {
          clearInterval(annualInterval);
        }
      }, 15);

      let startFiveYear = 0;
      const fiveYearInterval = setInterval(() => {
        if (startFiveYear < 2700000) {
          startFiveYear += 25000;
          setAnimatedEconomic(prev => ({ ...prev, fiveYear: startFiveYear }));
        } else {
          clearInterval(fiveYearInterval);
        }
      }, 15);
    }
  }, [isVisible]);

  const impactMetrics = [
    { icon: Heart, number: animatedStats.patients.toLocaleString(), suffix: '+', label: 'Patients Served Annually' },
    { icon: Users, number: animatedStats.workers.toLocaleString(), suffix: '+', label: 'Health Workers Trained' },
    { icon: Building2, number: animatedStats.campus.toLocaleString(), suffix: '+ sqm', label: 'Healthcare Campus' },
    { icon: Globe, number: animatedStats.communities.toLocaleString(), suffix: '+', label: 'Communities Served' },
  ];

  const impactAreas = [
    { icon: Activity, title: 'Primary & Preventive Care', description: 'Delivering essential healthcare services to underserved populations.', image: heroImage },
    { icon: Heart, title: 'Maternal & Child Health', description: 'Safe pregnancy, delivery services, newborn care, and immunization.', image: maternalImage },
    { icon: Target, title: 'Community Outreach', description: 'Mobile medical missions bringing free consultations to remote communities.', image: outreachImage },
    { icon: Users, title: 'Workforce Development', description: 'Training community health workers to build sustainable local capacity.', image: heroImage },
  ];

  return (
    <div ref={sectionRef} className="impact-page">
      <style>{`
        .impact-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Hero Section */
        .impact-hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .impact-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .impact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
        }
        .impact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
        }
        .impact-hero h1 {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .impact-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
        }
        
        /* Metrics Grid */
        .metrics-section {
          padding: 64px 24px;
          background: #F9FAFB;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .metric-card {
          text-align: center;
          padding: 32px 24px;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
        }
        .metric-card:hover {
          transform: translateY(-4px);
        }
        .metric-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          background: #EBF5FB;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D8FD4;
        }
        .metric-icon svg {
          width: 32px;
          height: 32px;
        }
        .metric-number {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 800;
          color: #1D8FD4;
          margin-bottom: 8px;
        }
        .metric-label {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }
        
        /* Areas Section */
        .areas-section {
          padding: 80px 24px;
          background: #FFFFFF;
        }
        .section-header {
          text-align: center;
          margin-bottom: 56px;
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
          font-size: 38px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }
        .section-description {
          font-size: 18px;
          color: #4B5563;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .areas-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .area-card {
          display: flex;
          gap: 24px;
          background: #F9FAFB;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .area-card:hover {
          transform: translateY(-4px);
        }
        .area-image {
          width: 40%;
          object-fit: cover;
        }
        .area-content {
          flex: 1;
          padding: 24px 24px 24px 0;
        }
        .area-icon {
          width: 48px;
          height: 48px;
          background: #EBF5FB;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .area-icon svg {
          width: 24px;
          height: 24px;
        }
        .area-title {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .area-description {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
        }
        
        /* Economic Section */
        .economic-section {
          background: linear-gradient(135deg, #1D8FD4 0%, #1570A6 100%);
          padding: 64px 24px;
          text-align: center;
          color: #ffffff;
        }
        .economic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          max-width: 900px;
          margin: 48px auto 0;
        }
        .economic-card {
          text-align: center;
          padding: 24px;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          transition: transform 0.3s ease;
        }
        .economic-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.2);
        }
        .economic-number {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .economic-label {
          font-size: 14px;
          opacity: 0.9;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 64px 24px;
          text-align: center;
          background: #FFFFFF;
        }
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 32px;
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
          color: #1D8FD4;
          border: 1.5px solid #1D8FD4;
          border-radius: 10px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-outline:hover {
          background: #EBF5FB;
          transform: translateY(-2px);
        }
        
        @media (max-width: 1024px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .areas-grid { grid-template-columns: 1fr; }
          .economic-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .impact-hero h1 { font-size: 32px; }
          .metrics-grid { grid-template-columns: 1fr; }
          .area-card { flex-direction: column; }
          .area-image { width: 100%; height: 180px; }
          .area-content { padding: 20px; }
          .economic-grid { grid-template-columns: 1fr; gap: 20px; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="impact-hero">
        <img src={heroImage} alt="Impact" className="impact-hero-image" />
        <div className="impact-hero-overlay" />
        <div className="impact-hero-content">
          <h1>Transforming Healthcare Access</h1>
          <p>Measurable impact across communities in southeastern Nigeria</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics-section">
        <div className="metrics-grid">
          {impactMetrics.map((metric, i) => {
            const IconComponent = metric.icon;
            return (
              <div key={i} className="metric-card">
                <div className="metric-icon"><IconComponent /></div>
                <div className="metric-number">{metric.number}{metric.suffix}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Areas */}
      <div className="areas-section">
        <div className="section-header">
          <div className="section-label">Our Impact</div>
          <h2 className="section-title">How We Make a Difference</h2>
          <p className="section-description">Creating lasting change in healthcare delivery</p>
        </div>
        <div className="areas-grid">
          {impactAreas.map((area, i) => {
            const IconComponent = area.icon;
            return (
              <div key={i} className="area-card">
                <img src={area.image} alt={area.title} className="area-image" />
                <div className="area-content">
                  <div className="area-icon"><IconComponent /></div>
                  <h3 className="area-title">{area.title}</h3>
                  <p className="area-description">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Economic Impact */}
      <div className="economic-section">
        <div className="section-header">
          <div className="section-label" style={{ background: 'rgba(255,255,255,0.2)' }}>Economic Impact</div>
          <h2 className="section-title" style={{ color: '#fff' }}>Return on Investment</h2>
        </div>
        <div className="economic-grid">
          <div className="economic-card">
            <div className="economic-number">${animatedEconomic.annual.toLocaleString()}</div>
            <div className="economic-label">Annual Impact</div>
          </div>
          <div className="economic-card">
            <div className="economic-number">${(animatedEconomic.fiveYear / 1000000).toFixed(1)}M</div>
            <div className="economic-label">5-Year Impact</div>
          </div>
          <div className="economic-card">
            <div className="economic-number">2.7x</div>
            <div className="economic-label">ROI Multiplier</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h3 className="section-title">Help Us Scale Our Impact</h3>
        <p className="section-description">Your support enables us to reach more communities and save more lives.</p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate Now <ArrowRight size={16} />
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

export default Impact;