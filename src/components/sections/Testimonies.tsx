import React from 'react';

const testimonies = [
  {
    id: 1,
    quote: "Before JoMabel Healthcare Foundation reached our community, accessing medical care was a struggle. Today, my children receive proper treatment and health education. This foundation has truly restored hope to our family",
    name: "Adewalwe Mohammed",
  },
  {
    id: 2,
    quote: "Supporting JoMabel Healthcare Foundation USA Inc. has been one of the most fulfilling decisions I've made. Their transparency, dedication, and real impact in underserved communities inspire confidence and trust.",
    name: "Emmanuel Eromax",
  },
  {
    id: 3,
    quote: "Knowing that a clinic is being built in our community gives us peace of mind. Families no longer fear medical emergencies, and we are grateful for the compassion and care JoMabel Healthcare Foundation brings",
    name: "Amarachi Osagie",
  },
  {
    id: 4,
    quote: "The presence of JoMabel Healthcare Foundation in our area has changed lives. Their outreach programs and commitment to quality healthcare have strengthened our community and improved overall wellbeing",
    name: "John Okere",
  },
];

const Testimonies = () => {
  return (
    <section style={{
      backgroundColor: '#f3f4f6',
      padding: '64px 48px 72px',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>

      {/* Heading */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '48px',
      }}>
        Testimonies
      </h2>

      {/* 2x2 Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        maxWidth: '1040px',
        margin: '0 auto',
      }}>
        {testimonies.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '32px 32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              minHeight: '180px',
            }}
          >
            {/* Quote text */}
            <p style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.75',
              textAlign: 'center',
              margin: '0 0 28px',
            }}>
              {t.quote}
            </p>

            {/* Divider line */}
            <div style={{
              height: '1px',
              backgroundColor: '#e5e7eb',
              marginBottom: '14px',
            }} />

            {/* Name */}
            <p style={{
              textAlign: 'right',
              fontSize: '13.5px',
              fontWeight: '600',
              color: '#111827',
              margin: 0,
            }}>
              -{t.name}
            </p>

            {/* Green corner curl — bottom right */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '80px',
              height: '80px',
              pointerEvents: 'none',
            }}>
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                <path
                  d="M80 80 Q80 20 20 0"
                  stroke="#22c55e"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M80 80 Q80 35 35 10"
                  stroke="#22c55e"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;