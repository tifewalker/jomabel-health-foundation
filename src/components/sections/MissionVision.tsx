import React from 'react';

const HeartIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.8 3.85 12 5C12.2 3.85 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14.5 12 21 12 21Z"
      stroke="#2CA4B5"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
      stroke="#2CA4B5"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12.5" r="3" stroke="#2CA4B5" strokeWidth="1.6" />
  </svg>
);

const MissionVision = () => {
  return (
    <section
      style={{
        fontFamily: "'Georgia', serif",
        backgroundColor: '#ffffff',
        padding: '60px 40px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

          {/* Mission Block */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#EFF9FB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <HeartIcon />
              </div>
              <h2 style={{
                fontFamily: "'Georgia', serif",
                fontSize: '52px',
                fontWeight: '700',
                color: '#111111',
                lineHeight: 1.1,
                margin: 0,
              }}>
                Mission
              </h2>
            </div>
            <p style={{
              fontSize: '15px',
              color: '#444444',
              lineHeight: '1.75',
              maxWidth: '380px',
              margin: 0,
            }}>
              JoMabel Healthcare Foundation exists to provide access to
              compassionate, high-quality healthcare, strengthen community
              health systems, and promote dignity, wellness, and sustainable
              development for underserved populations
            </p>
          </div>

          {/* Vision Block */}
          <div style={{ paddingLeft: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#EFF9FB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <EyeIcon />
              </div>
              <h2 style={{
                fontFamily: "'Georgia', serif",
                fontSize: '52px',
                fontWeight: '700',
                color: '#111111',
                lineHeight: 1.1,
                margin: 0,
              }}>
                Vision
              </h2>
            </div>
            <p style={{
              fontSize: '15px',
              color: '#444444',
              lineHeight: '1.75',
              maxWidth: '380px',
              margin: 0,
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aent, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

        </div>

        {/* Right Column: Image */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80"
            alt="Healthcare worker with children"
            style={{
              width: '100%',
              maxWidth: '480px',
              height: '440px',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;