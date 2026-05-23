import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : ''}`}
      style={{ padding: scrolled ? '0.75rem 0' : '1.2rem 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={e => { e.preventDefault(); handleNav('#hero'); }}
          whileHover={{ scale: 1.05 }}
          className="font-syne"
          style={{ fontSize: '1.4rem', fontWeight: 800, textDecoration: 'none', color: '#e8e6f0', letterSpacing: '-0.02em' }}
        >
          SR<span style={{ color: '#7c6ef5' }}>.</span>
        </motion.a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '0.25rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              whileHover={{ color: '#7c6ef5' }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.5rem 1rem', borderRadius: 8,
                fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase',
                color: active === link.href ? '#7c6ef5' : '#8884a8',
                fontFamily: 'JetBrains Mono, monospace',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(124,110,245,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: '0.75rem', padding: '0.5rem 1.2rem',
              background: 'linear-gradient(135deg,#7c6ef5,#6a5de0)',
              borderRadius: 8, textDecoration: 'none', color: '#fff',
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
              border: 'none', cursor: 'pointer',
            }}
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e8e6f0', padding: '0.5rem' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(7,7,16,0.98)', borderTop: '1px solid rgba(124,110,245,0.1)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', padding: '0.75rem 0',
                    fontSize: '0.9rem', color: '#8884a8',
                    borderBottom: '1px solid rgba(124,110,245,0.08)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
