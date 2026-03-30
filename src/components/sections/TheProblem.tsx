import React from 'react';
import { Users, Stethoscope, Navigation, Baby } from 'lucide-react';

const TheProblem = () => (
  <section className="problem-section">
    <style>{`
      .problem-section {
        background-color: #FFFFFF;
        padding: 80px clamp(20px, 5vw, 48px);
        font-family: var(--font-body);
      }
      .problem-container {
        max-width: 1100px;
        margin: 0 auto;
        text-align: center;
      }
      
      /* Headline */
      .problem-headline {
        font-family: var(--font-heading);
        font-size: clamp(36px, 5vw, 52px);
        font-weight: 700;
        color: #111827;
        line-height: 1.2;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
      
      /* Description */
      .problem-description {
        font-size: 18px;
        color: #4B5563;
        line-height: 1.6;
        max-width: 700px;
        margin: 0 auto 48px auto;
      }
      
      /* Stats Grid — 4 columns with icons */
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
        max-width: 1000px;
        margin: 0 auto;
      }
      
      .stat-card {
        text-align: center;
      }
      
      .stat-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 20px auto;
        background: #F3F4F6;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1D8FD4;
      }
      
      .stat-icon svg {
        width: 32px;
        height: 32px;
        stroke-width: 1.5;
      }
      
      .stat-number {
        font-family: var(--font-heading);
        font-size: clamp(28px, 4vw, 42px);
        font-weight: 800;
        color: #111827;
        margin: 0 0 8px 0;
        line-height: 1.2;
      }
      
      .stat-label {
        font-size: 14px;
        color: #6B7280;
        margin: 0;
        line-height: 1.4;
      }
      
      /* Responsive */
      @media (max-width: 900px) {
        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .problem-description {
          font-size: 16px;
          margin-bottom: 48px;
        }
      }
      
      @media (max-width: 550px) {
        .stats-grid {
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .problem-headline {
          font-size: 28px;
        }
        .problem-description {
          font-size: 15px;
        }
      }
    `}</style>

    <div className="problem-container">
      
      {/* Headline */}
      <h2 className="problem-headline">
        Healthcare Access Is Not a Reality<br />
        for Millions in Nigeria
      </h2>
      
      {/* Description */}
      <p className="problem-description">
        In rural southeastern Nigeria, families face impossible choices between food and medical care. 
        Geographic barriers, inadequate infrastructure, and economic hardship leave entire communities 
        without access to basic healthcare.
      </p>
      
      {/* Stats Grid with Icons */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Users />
          </div>
          <div className="stat-number">70%</div>
          <div className="stat-label">of rural Nigerians lack access to basic healthcare</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Stethoscope />
          </div>
          <div className="stat-number">1:5000</div>
          <div className="stat-label">doctor-to-patient ratio in rural Southeast Nigeria</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Navigation />
          </div>
          <div className="stat-number">80km+</div>
          <div className="stat-label">average distance to nearest specialist</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Baby />
          </div>
          <div className="stat-number">#6</div>
          <div className="stat-label">Nigeria ranks among highest maternal death rates globally</div>
        </div>
      </div>
      
    </div>
  </section>
);

export default TheProblem;