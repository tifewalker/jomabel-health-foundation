import React from 'react';

const socials = [
  {
    handle: 'JoMabel Official',
    description: 'JoMabel Healthcare Foundation USA Inc. is a faith-guided, U.S.-based nonprofit developing a world-class medical and healthcare training campus in Nigeria.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    handle: 'JoMabel1',
    description: 'Faith-guided nonprofit\nBuilding a world-class medical & training campus in Nigeria\nHealthcare. Dignity. Impact.\n🔗 Join us in building the future',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#ig-social)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="ig-social" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#dc2743" stroke="none"/>
      </svg>
    ),
  },
  {
    handle: 'Jomabel_Official',
    description: 'Faith-guided nonprofit\nBuilding a world-class medical & healthcare training campus in Nigeria\nDignity • Equity • Impact',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    handle: 'Jomabel',
    description: 'Faith-guided nonprofit\nBuilding a world-class medical & healthcare training campus in Nigeria\nHealthcare. Dignity. Impact.\n🔗 Join us in building the future',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#000000">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.82 1.55V6.79a4.85 4.85 0 01-1.05-.1z"/>
      </svg>
    ),
  },
];

const OurSocials = () => (
  <section style={{
    backgroundColor: '#f9fafb',
    padding: '64px 64px 72px',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    textAlign: 'center',
  }}>
    <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
      Our Socials
    </h2>
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      padding: '40px 32px',
      maxWidth: '1080px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px',
      backgroundColor: '#ffffff',
    }}>
      {socials.map((s, i) => (
        <div key={i} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 12px',
          borderRight: i < 3 ? '1px solid #f3f4f6' : 'none',
        }}>
          {s.icon}
          <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: 0 }}>{s.handle}</h4>
          <p style={{
            fontSize: '12.5px', color: '#6b7280', lineHeight: '1.65',
            margin: 0, whiteSpace: 'pre-line', textAlign: 'center',
          }}>
            {s.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default OurSocials;