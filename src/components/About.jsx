import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="about" style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 10%' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">About</span>

          {/* Two-column: title left, bio card right — vertically centered */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 48,
            alignItems: 'center',   /* vertical center */
          }} className="about-grid">

            {/* LEFT — Section Title, vertically centered */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 className="sec-heading" style={{ margin: 0 }}>
                Professional<br />Summary
              </h2>
            </div>

            {/* RIGHT — glassmorphism bio card */}
            <div className="hyper-glass" style={{
              padding: '36px 44px',
            }}>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 18,
                fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text)',
                fontFamily: 'var(--sans)'
              }}>
                <p>
                  I'm a Data Scientist and ML Engineer who builds{' '}
                  <strong style={{ color: 'var(--white)', fontWeight: 600 }}>scalable digital solutions</strong>{' '}
                  at the intersection of data, intelligence, and product.
                </p>
                <p>
                  My work is defined by technical depth and{' '}
                  <strong style={{ color: 'var(--white)', fontWeight: 600 }}>strategic clarity</strong>{' '}
                  — I don't just train models, I architect systems that solve real business problems.
                </p>
                <p>
                  From fraud detection pipelines to NLP-driven customer intelligence, I bring a focus on{' '}
                  <strong style={{ color: 'var(--white)', fontWeight: 600 }}>performance optimization</strong>{' '}
                  and measurable outcomes.
                </p>
                <p>
                  I operate with a{' '}
                  <strong style={{ color: 'var(--white)', fontWeight: 600 }}>strong bias for action</strong>{' '}
                  — shipping fast, iterating faster, and always keeping the end user in focus.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

