import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={ref} style={{ padding: '7rem 2rem', background: '#070710' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5' }}>
            — 04. Achievements
          </span>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            What I've Earned
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -4, borderColor: a.color + '40' }}
              style={{
                padding: '1.75rem', borderRadius: 16,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.3s',
                position: 'relative', overflow: 'hidden', cursor: 'default',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 100, height: 100, borderRadius: '50%',
                background: a.color + '08', pointerEvents: 'none',
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 12, marginBottom: '1.25rem',
                background: a.color + '12', border: `1px solid ${a.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                {a.icon}
              </div>

              <h3 className="font-syne" style={{ fontSize: '1rem', fontWeight: 700, color: '#e8e6f0', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.75, color: '#8884a8' }}>
                {a.desc}
              </p>

              {/* Bottom accent */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${a.color}60, transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Extracurricular */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            marginTop: '2rem', padding: '2rem', borderRadius: 16,
            background: 'rgba(124,110,245,0.04)', border: '1px solid rgba(124,110,245,0.12)',
          }}
        >
          <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5', marginBottom: '1.25rem' }}>
            Extracurricular
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              {
                title: 'Event Coordination',
                desc: 'Served on the Discipline Team for college technical and cultural events — managing logistics, crowd coordination, and execution.',
                icon: '🎪',
              },
              {
                title: 'Communication & Presentation',
                desc: 'Actively led project presentations and technical discussions, demonstrating strong communication and teamwork abilities.',
                icon: '🎤',
              },
            ].map((e, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: 2 }}>{e.icon}</span>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e8e6f0', marginBottom: '0.3rem' }}>{e.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#8884a8', lineHeight: 1.7 }}>{e.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
