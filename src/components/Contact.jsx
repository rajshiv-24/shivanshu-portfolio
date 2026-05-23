import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Link2, GitFork, Code2, Trophy, ArrowUpRight } from 'lucide-react';
import { contactLinks } from '../data/portfolio';

const iconMap = { Mail, Link2, GitFork, Code2, Trophy };

const colors = ['#7c6ef5', '#0077b5', '#333', '#ef9f27', '#2ec866'];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 2rem', background: '#0d0d1a', position: 'relative', overflow: 'hidden' }}>
      {/* Background orb */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,110,245,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5' }}>
            — 05. Contact
          </span>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Let's Build Together
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#8884a8', maxWidth: 480, margin: '0 auto 3rem' }}>
            I'm actively looking for internships and full-time full-stack roles. Got an interesting project or opportunity? I'd love to hear about it.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <motion.a
            href="mailto:rajputshivanshu589@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124,110,245,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 2.5rem', borderRadius: 12,
              background: 'linear-gradient(135deg, #7c6ef5, #6a5de0)',
              color: '#fff', textDecoration: 'none',
              fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em',
            }}
          >
            <Mail size={18} /> Say Hello
          </motion.a>
        </motion.div>

        {/* Contact links grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}
        >
          {contactLinks.map((link, i) => {
            const Icon = iconMap[link.icon] || Mail;
            const color = colors[i % colors.length];
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3, borderColor: color + '60' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '1rem 1.25rem', borderRadius: 12, textDecoration: 'none',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                  color: '#c8c4e8', transition: 'border-color 0.2s',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: color + '12', border: `1px solid ${color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: color,
                }}>
                  <Icon size={16} />
                </div>
                <div style={{ textAlign: 'left', minWidth: 0, flex: 1 }}>
                  <div className="font-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: color, marginBottom: '0.15rem' }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#8884a8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {link.value}
                  </div>
                </div>
                <ArrowUpRight size={14} style={{ color: '#8884a8', flexShrink: 0, opacity: 0.5 }} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.6rem 1.25rem', borderRadius: 999,
            background: 'rgba(93,202,165,0.08)', border: '1px solid rgba(93,202,165,0.2)',
            fontSize: '0.8rem', color: '#5dcaa5',
          }}>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#5dcaa5' }}
            />
            Available for Internship & Full-time Roles
          </div>
        </motion.div>
      </div>
    </section>
  );
}
