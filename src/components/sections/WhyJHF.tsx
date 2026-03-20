import React from 'react';

const differentiators = [
  {
    icon: '🏗️',
    title: 'Infrastructure Already Underway',
    desc: 'This is not a promise or a proposal. Two facilities are actively under construction — 70% and 30% complete. Donors can see real progress, real bricks, real buildings rising in Ufuma.',
  },
  {
    icon: '👩‍⚕️',
    title: 'Founder-Led Credibility',
    desc: 'Clara Ada Ogbaa launched this initiative from her own retirement savings. Her personal sacrifice, survival story, and decades of service give this foundation unmatched authenticity.',
  },
  {
    icon: '🔗',
    title: 'Integrated Systems Approach',
    desc: 'We are not building a single clinic. We are building an ecosystem — medical center, training campus, outreach programs, digital health, and community education working as one.',
  },
  {
    icon: '📍',
    title: 'Deeply Rooted Locally',
    desc: 'Founded by someone from Ufuma, for Ufuma. Our work is driven by intimate knowledge of the community\'s needs, culture, and long-term vision — not outside assumptions.',
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
    backgroundColor: '#F9FAFB',
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    fontFamily: 'var(--font-body)',
  }}>
    <style>{`
      .why-inner { max-width: 1080px; margin: 0 auto; }
      .why-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .why-card {
        background: #ffffff;
        border-radius: 12px;
        border: 1px solid #E5E7EB;
        padding: 28px 22px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: all 0.2s;
      }
      .why-card:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        border-color: #1D8FD4;
        transform: translateY(-3px);
      }

      @media (max-width: 860px) {
        .why-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      }
      @media (max-width: 540px) {
        .why-grid { grid-template-columns: 1fr; gap: 14px; }
        .why-card { padding: 22px 18px; }
      }
    `}</style>

    <div className="why-inner">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{
          display: 'inline-block',
          background: '#EBF5FB', color: '#1D8FD4',
          fontSize: '11px', fontWeight: '700',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          padding: '5px 14px', borderRadius: '999px',
          marginBottom: '16px',
        }}>
          Why JHF Is Different
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(24px, 3.5vw, 38px)',
          fontWeight: '700', color: '#111827',
          lineHeight: '1.2', margin: '0 0 14px',
        }}>
          More Than a Nonprofit.<br />A Movement Built to Last.
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 1.5vw, 16px)',
          color: '#4B5563', lineHeight: '1.85',
          maxWidth: '560px', margin: '0 auto',
        }}>
          JoMabel Healthcare Foundation stands apart from typical health organizations
          in ways that matter deeply to donors, partners, and the communities we serve.
        </p>
      </div>

      {/* 3×2 grid */}
      <div className="why-grid">
        {differentiators.map((d, i) => (
          <div key={i} className="why-card">
            <span style={{ fontSize: '30px' }}>{d.icon}</span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '15px', fontWeight: '700',
              color: '#111827', margin: 0, lineHeight: '1.3',
            }}>{d.title}</h3>
            <p style={{
              fontSize: '13.5px', color: '#4B5563',
              lineHeight: '1.75', margin: 0,
            }}>{d.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyJHF;