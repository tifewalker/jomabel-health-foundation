import React from 'react';

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="10" width="18" height="11" rx="1" stroke="#93c5fd" strokeWidth="1.5"/>
    <path d="M9 21V14h6v7" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 10l9-7 9 7" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StethoscopeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="#93c5fd" strokeWidth="1.5"/>
    <line x1="7" y1="3" x2="7" y2="5" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="17" y1="3" x2="17" y2="5" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="3" stroke="#93c5fd" strokeWidth="1.5"/>
    <circle cx="17" cy="7" r="3" stroke="#93c5fd" strokeWidth="1.5"/>
    <path d="M3 21v-1a6 6 0 0112 0v1" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 21v-1a5.96 5.96 0 00-2-4.47" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const YouthIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4" stroke="#93c5fd" strokeWidth="1.5"/>
    <path d="M7 21v-2a5 5 0 0110 0v2" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 13v4" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 17l3 3 3-3" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const stats = [
  { icon: <BuildingIcon />,    number: '16k+', line1: 'Square Meters',      line2: 'Medical Campus' },
  { icon: <StethoscopeIcon />, number: '100+', line1: 'Healthcare',         line2: 'Professional Trained' },
  { icon: <CommunityIcon />,   number: '5k+',  line1: 'Community Members',  line2: 'Served Annually' },
  { icon: <YouthIcon />,       number: '50+',  line1: 'Youth Empowered',    line2: 'Through Skills Training' },
];

const PriorityStats = () => {
  return (
    <section style={{
      backgroundColor: '#0d1f4e',
      padding: '70px 48px 80px',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '22px',
        }}>
          Our Priority is to Keep You Healthy
        </h2>
        <p style={{
          color: '#94a3b8',
          fontSize: '15px',
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Stay updated with the latest news from JoMabel, along with impactful medical
          developments and global healthcare trends. Designed to deliver premier and
          compassionate care.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        maxWidth: '1080px',
        margin: '0 auto',
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            backgroundColor: '#1e3a8a',
            borderRadius: '14px',
            padding: '30px 26px 34px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {/* Icon bubble */}
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#0d1f4e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {stat.icon}
            </div>

            {/* Number */}
            <div style={{
              color: '#22c55e',
              fontSize: '44px',
              fontWeight: '800',
              lineHeight: '1',
              letterSpacing: '-0.02em',
            }}>
              {stat.number}
            </div>

            {/* Label */}
            <div>
              <p style={{ color: '#94a3b8', fontSize: '13px', margin: '0 0 2px' }}>{stat.line1}</p>
              <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>{stat.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriorityStats;