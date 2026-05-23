import { motion } from 'framer-motion';
import { GitFork, Link2, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      padding: '2rem',
      background: '#070710',
      borderTop: '1px solid rgba(124,110,245,0.1)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <span className="font-mono" style={{ fontSize: '0.7rem', color: '#8884a8', letterSpacing: '0.08em' }}>
          © {year} <span style={{ color: '#7c6ef5' }}>Shivanshu Rajput</span> — Designed & Built with ❤️
        </span>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { icon: <GitFork size={15} />, href: 'https://github.com', label: 'GitHub' },
            { icon: <Link2 size={15} />, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: <Mail size={15} />, href: 'mailto:rajputshivanshu589@gmail.com', label: 'Email' },
          ].map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#7c6ef5' }}
              aria-label={s.label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: 8,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,110,245,0.1)',
                color: '#8884a8', textDecoration: 'none', transition: 'color 0.2s',
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
