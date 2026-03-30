import React from 'react';
import { Star, Quote } from 'lucide-react';

// ── Your authentic images ──
import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';
import roseImage from '../../assests/images/Rose.jpg';

const testimonies = [
  {
    id: 1,
    quote: "Before JoMabel Healthcare Foundation reached our community, accessing medical care was a struggle. Today, my children receive proper treatment and health education. This foundation has truly restored hope to our family.",
    name: "Adewale Mohammed",
    role: "Community Member, Ufuma",
    image: outreachImage,
  },
  {
    id: 2,
    quote: "Supporting JoMabel Healthcare Foundation has been one of the most fulfilling decisions I've made. Their transparency, dedication, and real impact in underserved communities inspire confidence and trust.",
    name: "Emmanuel Eromax",
    role: "Donor & Partner",
    image: roseImage,
  },
  {
    id: 3,
    quote: "Knowing that a clinic is being built in our community gives us peace of mind. Families no longer fear medical emergencies, and we are grateful for the compassion and care JoMabel Healthcare Foundation brings.",
    name: "Amarachi Osagie",
    role: "Community Member, Anambra State",
    image: maternalImage,
  },
  {
    id: 4,
    quote: "The presence of JoMabel Healthcare Foundation in our area has changed lives. Their outreach programs and commitment to quality healthcare have strengthened our community and improved overall wellbeing.",
    name: "John Okere",
    role: "Community Leader",
    image: outreachImage,
  },
];

const Testimonies = () => {
  return (
    <div className="testimonies-page">
      <style>{`
        .testimonies-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        /* Header Section */
        .testimonies-header {
          text-align: center;
          padding: 64px clamp(20px, 5vw, 48px) 48px;
          background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
        }
        .testimonies-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1D8FD4;
          margin-bottom: 16px;
        }
        .testimonies-headline {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4.5vw, 44px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .testimonies-description {
          font-size: 18px;
          color: #4B5563;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Testimonials Grid */
        .testimonials-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 48px) 80px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        
        /* Testimonial Card */
        .testimonial-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 32px;
          transition: all 0.3s ease;
          border: 1px solid #F0F0F0;
          position: relative;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
          border-color: #E5E7EB;
        }
        
        /* Quote Icon */
        .quote-icon {
          margin-bottom: 20px;
        }
        .quote-icon svg {
          width: 32px;
          height: 32px;
          color: #1D8FD4;
          opacity: 0.5;
        }
        
        /* Quote Text */
        .testimonial-quote {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 24px;
          font-style: normal;
        }
        
        /* Star Rating */
        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }
        .testimonial-stars svg {
          width: 16px;
          height: 16px;
          fill: #FBBF24;
          color: #FBBF24;
        }
        
        /* Author Section */
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid #F0F0F0;
          padding-top: 24px;
        }
        .author-image {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-info {
          flex: 1;
        }
        .author-name {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }
        .author-role {
          font-size: 13px;
          color: #6B7280;
          margin: 0;
        }
        
        /* CTA Section */
        .testimonies-cta {
          text-align: center;
          padding: 48px clamp(20px, 5vw, 48px) 80px;
          background: #F9FAFB;
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }
        .cta-text {
          font-size: 16px;
          color: #6B7280;
          margin-bottom: 24px;
        }
        .cta-button {
          background: #1D8FD4;
          color: #ffffff;
          border: none;
          border-radius: 60px;
          padding: 12px 32px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta-button:hover {
          background: #1570A6;
          transform: translateY(-2px);
        }
        
        /* Responsive */
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .testimonies-header {
            padding: 48px 24px 32px;
          }
          .testimonies-headline {
            font-size: 28px;
          }
          .testimonies-description {
            font-size: 16px;
          }
          .testimonial-card {
            padding: 24px;
          }
          .testimonial-quote {
            font-size: 15px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="testimonies-header">
        <div className="testimonies-label">Testimonials</div>
        <h2 className="testimonies-headline">
          Voices of Hope & Healing
        </h2>
        <p className="testimonies-description">
          Real stories from community members, donors, and partners who have experienced 
          the impact of JoMabel Healthcare Foundation firsthand.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonies.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-icon">
              <Quote />
            </div>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="testimonies-cta">
        <h3 className="cta-title">Share Your Story</h3>
        <p className="cta-text">
          Have you been impacted by JoMabel Healthcare Foundation?<br />
          We'd love to hear your story.
        </p>
        <button className="cta-button" onClick={() => window.location.href = '/contact'}>
          Share Your Experience
        </button>
      </div>
    </div>
  );
};

export default Testimonies;