import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Your authentic images ──
import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';
import roseImage from '../../assests/images/Rose.jpg';

const testimonies = [
  {
    id: 1,
    quote: "I'm excited that JoMabel Medical & Training Center is bringing knowledge and hope to our forgotten town and villages, paving the way for a healthier future in Ufuma and surrounding communities.",
    name: "Chukwudi Okonkwo",
    role: "Community Member, Ufuma",
    image: outreachImage,
  },
  {
    id: 2,
    quote: "For vulnerable families in Ufuma, the upcoming medical and training center by JoMabel Healthcare Foundation is a blessing.",
    name: "Mercy Igwegbe",
    role: "Community Member",
    image: maternalImage,
  },
  {
    id: 3,
    quote: "JoMabel Healthcare Foundation is bringing care, healing, and renewed hope to struggling families in Ufuma.",
    name: "Hope Ilorah",
    role: "Community Member",
    image: roseImage,
  },
  {
    id: 4,
    quote: "In our village, accessing medical care has been tough for many of us. Thanks to JoMabel Healthcare Foundation's medical outreach on January 2, 2025, my family and many others were able to receive treatment that we couldn't have afforded on our own.",
    name: "Emma Chukwu",
    role: "Community Member",
    image: outreachImage,
  },
  {
    id: 5,
    quote: "JoMabel Healthcare Foundation in Ufuma is a game-changer for the poor, bringing trained professionals and new jobs to improve lives in Orumba North, Orumba South, and nearby communities.",
    name: "Engr. Samuel",
    role: "Community Chairman",
    image: maternalImage,
  },
];

const Testimonies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <div ref={sectionRef} className={`testimonies-page ${isVisible ? 'visible' : ''}`}>
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
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .testimonies-headline {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4.5vw, 44px);
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          transition-delay: 0.1s;
        }
        .testimonies-description {
          font-size: 18px;
          color: #4B5563;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          transition-delay: 0.2s;
        }
        
        .testimonies-page.visible .testimonies-label,
        .testimonies-page.visible .testimonies-headline,
        .testimonies-page.visible .testimonies-description {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Scrollable Testimonials Container */
        .testimonials-scroll-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
        }
        
        .testimonials-scroll {
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
          padding: 20px 0 40px;
        }
        
        .testimonials-scroll::-webkit-scrollbar {
          height: 6px;
        }
        
        .testimonials-scroll::-webkit-scrollbar-track {
          background: #F0F0F0;
          border-radius: 10px;
        }
        
        .testimonials-scroll::-webkit-scrollbar-thumb {
          background: #1D8FD4;
          border-radius: 10px;
        }
        
        .testimonials-grid {
          display: flex;
          gap: 24px;
          padding: 0 4px;
        }
        
        /* Testimonial Card - Smaller and Compact */
        .testimonial-card {
          flex: 0 0 380px;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s ease;
          border: 1px solid #E5E7EB;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease;
        }
        
        .testimonies-page.visible .testimonial-card {
          opacity: 1;
          transform: translateY(0);
        }
        
        .testimonies-page.visible .testimonial-card:nth-child(1) { transition-delay: 0.3s; }
        .testimonies-page.visible .testimonial-card:nth-child(2) { transition-delay: 0.4s; }
        .testimonies-page.visible .testimonial-card:nth-child(3) { transition-delay: 0.5s; }
        .testimonies-page.visible .testimonial-card:nth-child(4) { transition-delay: 0.6s; }
        .testimonies-page.visible .testimonial-card:nth-child(5) { transition-delay: 0.7s; }
        
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          border-color: #1D8FD4;
        }
        
        /* Quote Icon - Smaller */
        .quote-icon {
          margin-bottom: 16px;
        }
        .quote-icon svg {
          width: 28px;
          height: 28px;
          color: #1D8FD4;
          opacity: 0.4;
        }
        
        /* Star Rating - Smaller */
        .testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 16px;
        }
        .testimonial-stars svg {
          width: 14px;
          height: 14px;
          fill: #FBBF24;
          color: #FBBF24;
        }
        
        /* Quote Text - Compact but Readable */
        .testimonial-quote {
          font-size: 14px;
          color: #4B5563;
          line-height: 1.6;
          margin-bottom: 20px;
          font-style: normal;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 90px;
        }
        
        /* Author Section - Compact */
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #F0F0F0;
          padding-top: 20px;
        }
        .author-image {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-info {
          flex: 1;
        }
        .author-name {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 2px 0;
        }
        .author-role {
          font-size: 11px;
          color: #6B7280;
          margin: 0;
        }
        
        /* Scroll Buttons */
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .scroll-btn:hover {
          background: #1D8FD4;
          border-color: #1D8FD4;
        }
        .scroll-btn:hover svg {
          color: #FFFFFF;
        }
        .scroll-btn svg {
          width: 20px;
          height: 20px;
          color: #1D8FD4;
          transition: color 0.2s ease;
        }
        .scroll-left {
          left: 0;
        }
        .scroll-right {
          right: 0;
        }
        
        /* CTA Section */
        .testimonies-cta {
          text-align: center;
          padding: 48px clamp(20px, 5vw, 48px) 80px;
          background: #F9FAFB;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          transition-delay: 0.8s;
        }
        
        .testimonies-page.visible .testimonies-cta {
          opacity: 1;
          transform: translateY(0);
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
          .testimonial-card {
            flex: 0 0 320px;
            padding: 20px;
          }
          .testimonials-scroll-container {
            padding: 0 40px;
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
            flex: 0 0 280px;
            padding: 18px;
          }
          .testimonial-quote {
            font-size: 13px;
            min-height: 80px;
          }
          .author-image {
            width: 40px;
            height: 40px;
          }
          .author-name {
            font-size: 13px;
          }
          .testimonials-scroll-container {
            padding: 0 30px;
          }
          .scroll-btn {
            width: 32px;
            height: 32px;
          }
          .scroll-btn svg {
            width: 16px;
            height: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .testimonial-card {
            flex: 0 0 260px;
          }
          .testimonials-scroll-container {
            padding: 0 20px;
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
          Real stories from community members who have experienced the life-changing 
          impact of JoMabel Healthcare Foundation's work in Ufuma and surrounding communities.
        </p>
      </div>

      {/* Scrollable Testimonials */}
      <div className="testimonials-scroll-container">
        <button className="scroll-btn scroll-left" onClick={scrollLeft}>
          <ChevronLeft />
        </button>
        
        <div className="testimonials-scroll" ref={scrollContainerRef}>
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
        </div>
        
        <button className="scroll-btn scroll-right" onClick={scrollRight}>
          <ChevronRight />
        </button>
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