import React from 'react';
import { 
  Building2, 
  UserCheck, 
  Heart, 
  MapPin, 
  Globe2, 
  TrendingUp,
  Shield,
  Target
} from 'lucide-react';

const WhyJHF = () => {
  const differentiators = [
    {
      icon: Building2,
      title: 'Infrastructure Already Underway',
      desc: 'This is not a promise or a proposal. Two facilities are actively under construction — 70% and 30% complete. Donors can see real progress, real bricks, real buildings rising in Ufuma.',
    },
    {
      icon: UserCheck,
      title: 'Founder-Led Credibility',
      desc: 'Clara Ada Ogbaa launched this initiative from her own retirement savings. Her personal sacrifice, survival story, and decades of service give this foundation unmatched authenticity.',
    },
    {
      icon: Heart,
      title: 'Integrated Systems Approach',
      desc: 'We are not building a single clinic. We are building an ecosystem — medical center, training campus, outreach programs, digital health, and community education working as one.',
    },
    {
      icon: MapPin,
      title: 'Deeply Rooted Locally',
      desc: 'Founded by someone from Ufuma, for Ufuma. Our work is driven by intimate knowledge of the community\'s needs, culture, and long-term vision — not outside assumptions.',
    },
    {
      icon: Globe2,
      title: 'Global Diaspora Network',
      desc: 'With a Texas-based 501(c)(3) foundation and strong ties to the Nigerian diaspora, JHF bridges global resources with local impact in ways few organizations can.',
    },
    {
      icon: TrendingUp,
      title: 'A Scalable Model',
      desc: 'The JHF campus model is designed to be replicated. What we build in Ufuma demonstrates what is possible for rural healthcare transformation across Nigeria and beyond.',
    },
  ];

  return (
    <section className="why-section">
      <style>{`
        .why-section {
          background-color: #FFFFFF;
          padding: var(--section-padding-y) var(--section-padding-x);
          font-family: var(--font-body);
        }
        .why-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Header */
        .why-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 64px auto;
        }
        .why-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .why-headline {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4.5vw, 48px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .why-description {
          font-size: 18px;
          color: #4B5563;
          line-height: 1.6;
        }
        
        /* Grid - 3 columns */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 32px;
          margin-top: 32px;
        }
        
        .why-card {
          text-align: left;
        }
        
        .why-icon {
          width: 56px;
          height: 56px;
          margin-bottom: 20px;
          background: #F3F4F6;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D8FD4;
          transition: all 0.2s;
        }
        
        .why-card:hover .why-icon {
          background: #EBF5FB;
          transform: scale(1.02);
        }
        
        .why-icon svg {
          width: 28px;
          height: 28px;
          stroke-width: 1.5;
        }
        
        .why-card-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        
        .why-card-desc {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .why-grid {
            gap: 40px 28px;
          }
        }
        
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }
        
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .why-headline {
            font-size: 28px;
          }
          .why-description {
            font-size: 16px;
          }
          .why-card {
            text-align: center;
          }
          .why-icon {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <div className="why-container">
        
        {/* Header */}
        <div className="why-header">
          <div className="why-label">Why JHF</div>
          <h2 className="why-headline">
            More Than a Nonprofit.<br />
            A Movement Built to Last.
          </h2>
          <p className="why-description">
            JoMabel Healthcare Foundation stands apart from typical health organizations
            in ways that matter deeply to donors, partners, and the communities we serve.
          </p>
        </div>
        
        {/* Grid Cards */}
        <div className="why-grid">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-icon">
                  <IconComponent />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default WhyJHF;