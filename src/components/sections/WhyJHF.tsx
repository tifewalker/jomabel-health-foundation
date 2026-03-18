import React from 'react';

const differentiators = [
  {
    icon: '🏗️',
    title: 'Infrastructure Already Underway',
    desc: 'This is not a promise or a proposal. Two facilities are actively under construction 70% and 30% complete. Donors can see real progress, real bricks, real buildings.',
  },
  {
    icon: '👩‍⚕️',
    title: 'Founder-Led Credibility',
    desc: 'Dr. Clara Ada Ogbaa launched this initiative from her own retirement savings. Her personal sacrifice, lived experience, and decades of service give this foundation unmatched authenticity.',
  },
  {
    icon: '🔗',
    title: 'Integrated Systems Approach',
    desc: 'We are not building a single clinic. We are building an ecosystem medical center, training campus, outreach programs, digital health, and community education working as one.',
  },
  {
    icon: '📍',
    title: 'Deeply Rooted Locally',
    desc: 'Founded by someone from Ufuma, for Ufuma. Our work is driven by intimate knowledge of the community\'s needs, culture, and long-term vision not outside assumptions.',
  },
  {
    icon: '🌍',
    title: 'Global Diaspora Network',
    desc: 'With a Texas-based 501(c)(3) foundation and strong ties to the Nigerian diaspora, JHF bridges global resources with local impact in ways few organizations can.',
  },
  {
    icon: '📈',
    title: 'A Scalable Model',
    desc: 'The JHF campus model is designed to be replicated. What we build in Ufuma demonstrates what is possible for rural healthcare transformation across Nigeria and beyond.',
  },
];

const WhyJHF = () => (
  <section style={{
    backgroundColor: 'var(--color-white)',
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    fontFamily: 'var(--font-body)',
  }}>
    <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: 'var(--color-primary-dark)',
          letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '14px',
        }}>
          Why JHF Is Different
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(26px, 3.5vw, 40px)',
          fontWeight: '700', color: 'var(--color-navy)',
          lineHeight: '1.2', margin: '0 0 16px',
        }}>
          More Than a Nonprofit.<br />A Movement Built to Last.
        </h2>
        <p style={{
          fontSize: '15px', color: 'var(--color-text-muted)',
          lineHeight: '1.85', maxWidth: '580px', margin: '0 auto',
        }}>
          JoMabel Healthcare Foundation stands apart from typical health organizations
          in ways that matter deeply to donors, partners, and the communities we serve.
        </p>
      </div>

      {/* 3x2 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
      }}>
        {differentiators.map((d, i) => (
          <div key={i} style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--card-radius)',
            border: '1px solid var(--color-border)',
            padding: '28px 24px',
            display: 'flex', flexDirection: 'column', gap: '12px',
            transition: 'var(--transition)',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '32px' }}>{d.icon}</span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '16px', fontWeight: '700',
              color: 'var(--color-navy)', margin: 0, lineHeight: '1.3',
            }}>{d.title}</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: '1.75', margin: 0 }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 860px) {
        .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 480px) {
        .why-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default WhyJHF;