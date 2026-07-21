import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, GitFork, Link2 } from 'lucide-react';

const floatingCode = [
  { text: 'const dev = "Shivanshu";', top: '18%', left: '5%', delay: 0 },
  { text: '@RestController', top: '35%', right: '4%', delay: 0.4 },
  { text: 'SELECT * FROM skills;', bottom: '30%', left: '3%', delay: 0.8 },
  { text: '<Component />', bottom: '20%', right: '6%', delay: 1.2 },
  { text: 'git push origin main', top: '60%', left: '7%', delay: 0.6 },
  { text: 'npm run build', top: '75%', right: '5%', delay: 1 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', position: 'relative', overflow: 'hidden',
        padding: '8rem 2rem 4rem',
      }}
    >
      {/* Orbs */}
      <div style={{
        position: 'absolute', top: '-150px', right: '-150px',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,110,245,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(93,202,165,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating code snippets */}
      {floatingCode.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ delay: c.delay + 1, duration: 1 }}
          style={{
            position: 'absolute', ...{ top: c.top, bottom: c.bottom, left: c.left, right: c.right },
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
            color: '#7c6ef5', whiteSpace: 'nowrap', pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {c.text}
        </motion.div>
      ))}

      {/* Main content */}
      <div style={{ maxWidth: 800, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: 999,
              background: 'rgba(124,110,245,0.12)', border: '1px solid rgba(124,110,245,0.25)',
              fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c6ef5',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5dcaa5', display: 'inline-block' }} className="pulse-glow" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-syne"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}
          >
            Shivanshu
          </motion.h1>
          <motion.h1
            variants={item}
            className="font-syne gradient-text"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}
          >
            Rajput
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
            <span className="font-mono" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: '#8884a8', letterSpacing: '0.08em' }}>
              {'<'}<span style={{ color: '#5dcaa5' }}>Full Stack Developer</span>{' />'}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            style={{
              maxWidth: 520, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.85,
              color: '#8884a8',
            }}
          >
            B.Tech CS student at ABES Engineering College building scalable web applications with{' '}
            <span style={{ color: '#e8e6f0' }}>Angular</span>,{' '}
            <span style={{ color: '#e8e6f0' }}>Spring Boot</span>, and the{' '}
            <span style={{ color: '#e8e6f0' }}>MERN stack</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <motion.button
              onClick={() => handleScroll('#projects')}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(124,110,245,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 2rem', borderRadius: 10,
                background: 'linear-gradient(135deg, #7c6ef5 0%, #6a5de0 100%)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.03em',
              }}
            >
              View Projects <ArrowRight size={16} />
            </motion.button>
            <motion.a
              href="/Shivanshu-Resume-Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 2rem', borderRadius: 10,
                background: 'rgba(255,255,255,0.04)', color: '#e8e6f0',
                border: '1px solid rgba(124,110,245,0.2)', cursor: 'pointer',
                fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none',
              }}
            >
              <Download size={16} /> Resume
            </motion.a>
            <motion.button
              onClick={() => handleScroll('#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 2rem', borderRadius: 10,
                background: 'rgba(93,202,165,0.08)', color: '#5dcaa5',
                border: '1px solid rgba(93,202,165,0.2)', cursor: 'pointer',
                fontSize: '0.88rem', fontWeight: 500,
              }}
            >
              <Mail size={16} /> Contact
            </motion.button>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
          >
            {[
              { icon: <GitFork size={18} />, href: 'https://github.com/rajshiv-24', label: 'GitHub' },
              { icon: <Link2 size={18} />, href: 'https://www.linkedin.com/in/rajshivan/', label: 'LinkedIn' },
              { icon: <Mail size={18} />, href: 'mailto:rajputshivanshu589@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: '#7c6ef5' }}
                aria-label={s.label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,110,245,0.15)',
                  color: '#8884a8', textDecoration: 'none', transition: 'color 0.2s',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}
      >
        <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#8884a8', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #7c6ef5, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
