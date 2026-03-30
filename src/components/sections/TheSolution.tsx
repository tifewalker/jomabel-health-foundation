import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, GraduationCap, Users, Smartphone, TrendingUp, Target } from 'lucide-react';
import solutionImage from '../../assests/images/outreach5.jpeg'; // Use your outreach image

const pillars = [
  {
    icon: Building2,
    title: 'World-Class Medical Center',
    desc: 'A 6,000 sqm facility delivering primary care, maternal health, diagnostics, chronic disease management, and specialist services — permanently rooted in Ufuma.',
  },
  {
    icon: GraduationCap,
    title: 'Medical Training Center',
    desc: 'A 10,000 sqm skills and training center building the next generation of local healthcare professionals through clinical training, mentorship, and leadership programs.',
  },
  {
    icon: Users,
    title: 'Community-Based Programs',
    desc: 'Outreach missions, maternal and child health initiatives, community health worker training, and health education taking care directly to the people who need it most.',
  },
  {
    icon: Smartphone,
    title: 'Digital Health & Telemedicine',
    desc: 'Connecting rural communities to specialist care through telemedicine infrastructure, remote diagnostics, and digital health tools built for the realities of rural Nigeria.',
  },
];

const TheSolution = () => {
  const navigate = useNavigate();
  
  return (
    <section className="solution-section">
      <style>{`
        .solution-section {
          background-color: #FFFFFF;
          padding: var(--section-padding-y) var(--section-padding-x);
          font-family: var(--font-body);
        }
        .solution-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Header */
        .solution-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .solution-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .solution-headline {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4.5vw, 48px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .solution-description {
          font-size: 18px;
          color: #4B5563;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Two Column Layout */
        .solution-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          margin-bottom: 80px;
          align-items: center;
        }
        
        /* Left Column - Text */
        .solution-text {
          text-align: left;
        }
        .solution-subhead {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 20px;
        }
        .solution-body {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .solution-stats {
          display: flex;
          gap: 32px;
          margin-top: 32px;
        }
        .solution-stat {
          text-align: left;
        }
        .solution-stat-number {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 800;
          color: #1D8FD4;
          margin-bottom: 4px;
        }
        .solution-stat-label {
          font-size: 13px;
          color: #6B7280;
        }
        .solution-btn {
          background: #1D8FD4;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
        }
        .solution-btn:hover {
          background: #1570A6;
          transform: translateY(-1px);
        }
        
        /* Right Column - Image */
        .solution-image {
          width: 100%;
          height: auto;
          min-height: 380px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        
        /* Progress Cards */
        .progress-section {
          margin-bottom: 80px;
        }
        .progress-title {
          text-align: center;
          margin-bottom: 40px;
        }
        .progress-title h3 {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .progress-title p {
          font-size: 16px;
          color: #6B7280;
        }
        .progress-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .progress-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 28px;
          transition: all 0.2s;
        }
        .progress-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: #1D8FD4;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .progress-header h4 {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }
        .progress-size {
          font-size: 14px;
          color: #1D8FD4;
          font-weight: 600;
          margin: 0;
        }
        .progress-percent {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          color: #1D8FD4;
          line-height: 1;
        }
        .progress-detail {
          font-size: 14px;
          color: #4B5563;
          margin: 12px 0;
          line-height: 1.5;
        }
        .progress-bar {
          height: 8px;
          border-radius: 4px;
          background-color: #E5E7EB;
          overflow: hidden;
          margin: 16px 0 12px;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 4px;
          background-color: #1D8FD4;
          width: 0%;
        }
        .progress-status {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #6B7280;
        }
        
        /* Pillars Grid */
        .pillars-section {
          text-align: center;
        }
        .pillars-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 48px;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .pillar-card {
          text-align: center;
          padding: 24px;
        }
        .pillar-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 20px auto;
          background: #F3F4F6;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D8FD4;
          transition: all 0.2s;
        }
        .pillar-card:hover .pillar-icon {
          background: #EBF5FB;
          transform: scale(1.05);
        }
        .pillar-icon svg {
          width: 36px;
          height: 36px;
          stroke-width: 1.5;
        }
        .pillar-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .pillar-desc {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .progress-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 860px) {
          .solution-two-col {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .solution-stats {
            justify-content: center;
          }
          .solution-text {
            text-align: center;
          }
          .solution-stat {
            text-align: center;
          }
        }
        @media (max-width: 700px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .pillar-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="solution-container">

        {/* Header */}
        <div className="solution-header">
          <div className="solution-label">Our Solution</div>
          <h2 className="solution-headline">
            Building an Integrated<br />
            Healthcare System
          </h2>
          <p className="solution-description">
            More than a clinic — a permanent, self-sustaining campus of care, training, 
            and community health that will serve Ufuma and surrounding communities for generations.
          </p>
        </div>

        {/* Two Column: Text + Image */}
        <div className="solution-two-col">
          <div className="solution-text">
            <h3 className="solution-subhead">
              A Legacy of Care,<br />
              Built to Last
            </h3>
            <p className="solution-body">
              JoMabel Healthcare Foundation is not building a temporary clinic. 
              We are building a permanent, integrated healthcare campus — a 
              self-sustaining system of care, training, and community health 
              that will serve Ufuma and surrounding communities for generations.
            </p>
            <p className="solution-body">
              When complete, the campus will bring specialist-level care, 
              professional training, and preventive health programs to a region 
              where these have never existed at scale.
            </p>
            <div className="solution-stats">
              <div className="solution-stat">
                <div className="solution-stat-number">16,000+</div>
                <div className="solution-stat-label">sqm total campus</div>
              </div>
              <div className="solution-stat">
                <div className="solution-stat-number">50,000+</div>
                <div className="solution-stat-label">lives impacted annually</div>
              </div>
            </div>
            <button className="solution-btn" onClick={() => navigate('/campaign')}>
              See the Full Campus Plan
              <TrendingUp size={16} />
            </button>
          </div>
          <div>
            <img
              src={solutionImage}
              alt="JoMabel Healthcare Foundation campus vision"
              className="solution-image"
            />
          </div>
        </div>

        {/* Progress Cards */}
        <div className="progress-section">
          <div className="progress-title">
            <h3>Current Progress</h3>
            <p>Two phases of construction underway</p>
          </div>
          <div className="progress-grid">
            <div className="progress-card">
              <div className="progress-header">
                <div>
                  <h4>JoMabel Medical Center</h4>
                  <p className="progress-size">6,000 sqm</p>
                </div>
                <div className="progress-percent">70%</div>
              </div>
              <p className="progress-detail">
                Primary care, diagnostics, maternal health & specialist services
              </p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
              </div>
              <div className="progress-status">
                <span>Under active construction</span>
                <span>70% complete</span>
              </div>
            </div>
            <div className="progress-card">
              <div className="progress-header">
                <div>
                  <h4>Skill & Training Center</h4>
                  <p className="progress-size">10,000 sqm</p>
                </div>
                <div className="progress-percent">30%</div>
              </div>
              <p className="progress-detail">
                Clinical training, community health worker programs & mentorship
              </p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '30%' }}></div>
              </div>
              <div className="progress-status">
                <span>Foundation stage underway</span>
                <span>30% complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="pillars-section">
          <div className="pillars-label">The JHF Model</div>
          <div className="pillars-grid">
            {pillars.map((pillar, i) => {
              const IconComponent = pillar.icon;
              return (
                <div key={i} className="pillar-card">
                  <div className="pillar-icon">
                    <IconComponent />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TheSolution;