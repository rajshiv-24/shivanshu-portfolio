import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code2, Star } from 'lucide-react';

const stats = [
  { num: '8.07', label: 'CGPA', suffix: '' },
  { num: '170', label: 'DSA Solved', suffix: '+' },
  { num: '3', label: 'Projects', suffix: '' },
  { num: '6', label: 'Tech Stacks', suffix: '+' },
];

const highlights = [
  { icon: <GraduationCap size={18} />, text: 'B.Tech CS @ ABES Engineering College (2022–2026)', color: '#7c6ef5' },
  { icon: <Code2 size={18} />, text: 'Full Stack: Angular, Spring Boot, MERN, PostgreSQL', color: '#5dcaa5' },
  { icon: <Star size={18} />, text: 'HackerRank 3-Star: Problem Solving, Python, C', color: '#ef9f27' },
  { icon: <MapPin size={18} />, text: 'Ghaziabad, Uttar Pradesh', color: '#f0997b' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 2rem', background: '#0d0d1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5' }}>
            — 01. About Me
          </span>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Who I Am
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#8884a8', marginBottom: '1.25rem' }}>
              I'm a <span style={{ color: '#e8e6f0', fontWeight: 500 }}>final-year Computer Science student</span> passionate about building real-world, production-grade web applications that solve meaningful problems.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#8884a8', marginBottom: '1.25rem' }}>
              My expertise spans <span style={{ color: '#7c6ef5', fontWeight: 500 }}>Angular + Spring Boot</span> for enterprise applications and <span style={{ color: '#5dcaa5', fontWeight: 500 }}>MERN Stack</span> for modern JavaScript platforms. I focus on clean architecture, secure REST APIs, and scalable database design.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#8884a8', marginBottom: '2rem' }}>
              Beyond development, I've solved <span style={{ color: '#ef9f27', fontWeight: 500 }}>170+ DSA problems</span> across LeetCode, Code360, and HackerRank, continuously sharpening my problem-solving fundamentals.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.7rem 1rem', borderRadius: 10,
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span style={{ color: h.color, flexShrink: 0 }}>{h.icon}</span>
                  <span style={{ fontSize: '0.85rem', color: '#a8a4c8' }}>{h.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: stats + education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(124,110,245,0.35)' }}
                  style={{
                    padding: '1.5rem', borderRadius: 14, textAlign: 'center',
                    background: 'rgba(124,110,245,0.05)', border: '1px solid rgba(124,110,245,0.12)',
                    cursor: 'default',
                  }}
                >
                  <div className="font-syne" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#7c6ef5', lineHeight: 1 }}>
                    {s.num}<span style={{ fontSize: '1.2rem' }}>{s.suffix}</span>
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: '#8884a8', marginTop: '0.4rem', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education timeline */}
            <div style={{ padding: '1.5rem', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5', marginBottom: '1rem' }}>
                Education
              </div>
              {[
                { year: '2022–26', place: 'ABES Engineering College', sub: 'B.Tech CSE', score: '8.07 CGPA', color: '#7c6ef5' },
                { year: '2022', place: 'Ch. Chhabil Dass Public School', sub: 'CBSE Class XII', score: '93%', color: '#5dcaa5' },
                { year: '2020', place: 'Ch. Chhabil Dass Public School', sub: 'CBSE Class X', score: '94.4%', color: '#ef9f27' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: i < 2 ? '1rem' : 0, marginBottom: i < 2 ? '1rem' : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: e.color, marginTop: 4 }} />
                    {i < 2 && <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.06)' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="font-mono" style={{ fontSize: '0.65rem', color: e.color, marginBottom: '0.2rem' }}>{e.year}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e8e6f0', marginBottom: '0.15rem' }}>{e.place}</div>
                    <div style={{ fontSize: '0.78rem', color: '#8884a8' }}>{e.sub}</div>
                  </div>
                  <div className="font-syne" style={{ fontSize: '1rem', fontWeight: 700, color: e.color, flexShrink: 0, alignSelf: 'center' }}>{e.score}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
