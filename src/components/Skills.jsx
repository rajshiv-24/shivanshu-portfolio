import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

const categoryColors = {
  Language: '#f0997b',
  Frontend: '#61dafb',
  Backend: '#7c6ef5',
  Database: '#5dcaa5',
  Tool: '#ef9f27',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" ref={ref} style={{ padding: '7rem 2rem', background: '#070710' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5' }}>
            — 02. Skills
          </span>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            My Tech Stack
          </h2>
        </motion.div>

        {/* Skill cards by category */}
        {categories.map((cat, ci) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
            style={{ marginBottom: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: categoryColors[cat] }} />
              <span className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: categoryColors[cat] }}>
                {cat}
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.filter(s => s.category === cat).map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} delay={ci * 0.1 + i * 0.08} inView={inView} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            marginTop: '3rem', padding: '2rem', borderRadius: 16,
            background: 'rgba(124,110,245,0.04)', border: '1px solid rgba(124,110,245,0.1)',
          }}
        >
          <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5', marginBottom: '1.5rem' }}>
            Proficiency Overview
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {skills.slice(0, 8).map((skill, i) => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.82rem', color: '#c8c4e8' }}>{skill.name}</span>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: skill.color }}>{skill.level}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.8 + i * 0.06, duration: 1, ease: 'easeOut' }}
                    style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.06, y: -3, borderColor: `${skill.color}55` }}
      style={{
        padding: '0.6rem 1.1rem', borderRadius: 10,
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid rgba(255,255,255,0.08)`,
        cursor: 'default', transition: 'border-color 0.2s',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: skill.color, flexShrink: 0 }} />
      <span style={{ fontSize: '0.85rem', color: '#c8c4e8', whiteSpace: 'nowrap' }}>{skill.name}</span>
    </motion.div>
  );
}
