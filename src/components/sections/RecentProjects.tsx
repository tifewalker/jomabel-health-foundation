import React, { useRef } from 'react';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    status: '40% Completed',
    statusColor: '#22c55e',
    title: 'Clinic Project in East',
    description: 'nisi ut aent, sunt in culpa qui officia deserunt',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    status: 'Completed',
    statusColor: '#2563eb',
    title: 'School Computer Lab. in Kano',
    description: 'nisi ut aent, sunt in culpa qui officia deserunt',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80',
    status: 'Completed',
    statusColor: '#2563eb',
    title: 'Clean Water Provision',
    description: 'nisi ut aent, sunt in culpa qui officia deserunt',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    status: 'In Progress',
    statusColor: '#f59e0b',
    title: 'Mobile Health Outreach',
    description: 'nisi ut aent, sunt in culpa qui officia deserunt',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
    status: '70% Completed',
    statusColor: '#22c55e',
    title: 'Community Training Centre',
    description: 'nisi ut aent, sunt in culpa qui officia deserunt',
  },
];

const RecentProjects = () => {
  const scrollRef = useRef(null);

interface Project {
    id: number;
    image: string;
    status: string;
    statusColor: string;
    title: string;
    description: string;
}

const scroll = (dir: number): void => {
    if (scrollRef.current) {
        (scrollRef.current as HTMLDivElement).scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
};

  return (
    <section style={{
      backgroundColor: '#f9fafb',
      padding: '64px 0 72px',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 24px' }}>
        <h2 style={{
          fontSize: '26px',
          fontWeight: '700',
          color: '#111827',
          margin: 0,
        }}>
          Recent Projects
        </h2>
      </div>

      {/* Scroll wrapper + arrow buttons */}
      <div style={{ position: 'relative', padding: '0 48px' }}>

        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          style={{
            position: 'absolute',
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          aria-label="Scroll left"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '12px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                minWidth: '280px',
                maxWidth: '280px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                scrollSnapAlign: 'start',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image + badge */}
              <div style={{ position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <span style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  backgroundColor: project.statusColor,
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '4px',
                }}>
                  {project.status}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#111827',
                  margin: 0,
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  margin: 0,
                  lineHeight: '1.6',
                }}>
                  {project.description}
                </p>

                {/* See More button */}
                <div style={{ marginTop: '12px' }}>
                  <button
                    style={{
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 20px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseOut={e => e.currentTarget.style.opacity = '1'}
                  >
                    See More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          aria-label="Scroll right"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;