import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="about" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(24px, 5%, 80px)' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>

          <span className="sec-label">About</span>

          {/* Full-width horizontal glassmorphism card */}
          <div style={{
            background: 'rgba(8,12,20,0.55)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 16,
            padding: '40px 48px',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: '#e2e8f0',
            }}>
              <p>
                I'm a Data Scientist and ML Engineer who builds{' '}
                <strong style={{ color: '#ffffff', fontWeight: 700 }}>scalable digital solutions</strong>{' '}
                at the intersection of data, intelligence, and product.
              </p>
              <p>
                My work is defined by technical depth and{' '}
                <strong style={{ color: '#ffffff', fontWeight: 700 }}>strategic clarity</strong>{' '}
                — I don't just train models, I architect systems that solve real business problems.
              </p>
              <p>
                From fraud detection pipelines to NLP-driven customer intelligence, I bring a focus on{' '}
                <strong style={{ color: '#ffffff', fontWeight: 700 }}>performance optimization</strong>{' '}
                and measurable outcomes.
              </p>
              <p>
                I operate with a{' '}
                <strong style={{ color: '#ffffff', fontWeight: 700 }}>strong bias for action</strong>{' '}
                — shipping fast, iterating faster, and always keeping the end user in focus.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
