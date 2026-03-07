import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImage1 from "../../assests/images/imag1.png";
import heroImage2 from "../../assests/images/img2.png";
import heroImage3 from "../../assests/images/img3.png";


const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: "image", src: heroImage1, alt: "Medical Center Building" },
    { type: "image", src: heroImage2, alt: "Community Healthcare" },
    { type: "image", src: heroImage3, alt: "Medical Training" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number): void => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)"
        }} />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content — top-left aligned, matching image */}
      <div className="relative z-10 h-full flex items-start pt-16 md:pt-20">
        <div className="w-full px-6 sm:px-10 lg:px-14 text-white">
          <div className="max-w-2xl">

            {/* Foundation name — bold, small caps, white */}
            <p
              className="font-bold text-white mb-5"
              style={{ fontSize: '13px', letterSpacing: '0.15em' }}
            >
              JOMABEL HEALTHCARE FOUNDATION
            </p>

            {/* Main headline — large, bold, wide tracking like the image */}
           <h1
  className="font-bold text-white mb-5 leading-tight"
  style={{
    fontSize: 'clamp(28px, 4vw, 56px)',
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  }}
>
  Building a World-Class<br />
  Community Medical &<br />
  Training Center
</h1>

            {/* Tagline with pipe separators */}
            <p className="text-gray-200 mb-5" style={{ fontSize: '15px' }}>
              Transforming Healthcare in Nigeria
              <span className="mx-2">|</span>
              Powered by Compassion
              <span className="mx-2">|</span>
              Designed for Generational Impact
            </p>

            {/* Description */}
            <p className="text-gray-300 mb-10 leading-relaxed" style={{ fontSize: '15px', maxWidth: '520px' }}>
              A Texas-based non-profit organisation developing a 16,000+ Square
              meter medical and training campus in Ufuma, Anambra State, Nigeria.
            </p>

            {/* CTA Buttons — green + blue as in the image */}
          <div className="flex flex-wrap gap-4">
  <button
    onClick={() => navigate('/campaign')}
    className="font-semibold px-7 py-3 rounded transition-all duration-200 hover:opacity-90 hover:scale-105"
    style={{ backgroundColor: '#22c55e', color: '#ffffff', fontSize: '15px' }}
  >
    Join The Campaign
  </button>
  <button
    onClick={() => navigate('/about')}
    className="font-semibold px-7 py-3 rounded transition-all duration-200 hover:opacity-90 hover:scale-105"
    style={{ backgroundColor: '#2563eb', color: '#ffffff', fontSize: '15px' }}
  >
    Learn Our Story
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;