import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 2rem', background: '#0d0d1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c6ef5' }}>
            — 03. Projects
          </span>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
            Things I've Built
          </h2>
          <p style={{ color: '#8884a8', fontSize: '0.95rem', marginTop: '0.75rem', maxWidth: 500 }}>
            Production-ready full-stack applications spanning fintech, hospitality, and ed-tech domains.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: 16, overflow: 'hidden',
        border: `1px solid ${hovered ? project.accent + '40' : 'rgba(255,255,255,0.06)'}`,
        background: 'rgba(255,255,255,0.02)',
        transition: 'border-color 0.3s',
        position: 'relative',
      }}
    >
      {/* Top accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        }}
      />

      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: project.accent + '20', lineHeight: 1, userSelect: 'none' }}>
              {project.num}
            </span>
            <span style={{
              padding: '0.25rem 0.75rem', borderRadius: 6,
              background: project.accent + '15', color: project.accent,
              fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              {project.category}
            </span>
          </div>

          <h3 className="font-syne" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e8e6f0', marginBottom: '0.75rem', lineHeight: 1.3 }}>
            {project.name}
          </h3>

          <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#8884a8', marginBottom: '1.25rem' }}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {project.stack.map(tech => (
              <span key={tech} style={{
                padding: '0.3rem 0.75rem', borderRadius: 6,
                background: project.accent + '10',
                border: `1px solid ${project.accent}25`,
                color: project.accent,
                fontSize: '0.72rem', letterSpacing: '0.04em',
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden', marginBottom: '1rem' }}
              >
                <div style={{
                  padding: '1rem 1.25rem', borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: project.accent, marginBottom: '0.75rem' }}>
                    Features
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.longDesc.map((d, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.84rem', color: '#a8a4c8' }}
                      >
                        <span style={{ color: project.accent, marginTop: 2, flexShrink: 0 }}>▸</span>
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.55rem 1.1rem', borderRadius: 8,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#c8c4e8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500,
              }}
            >
              <GitFork size={15} /> GitHub
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2, boxShadow: `0 0 20px ${project.accent}40` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.55rem 1.1rem', borderRadius: 8,
                  background: project.accent, color: '#fff',
                  textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600,
                  border: 'none',
                }}
              >
                <ExternalLink size={15} /> Live Demo
              </motion.a>
            )}
            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileHover={{ color: project.accent }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#8884a8', fontSize: '0.78rem', padding: '0.4rem 0',
                fontFamily: 'inherit',
              }}
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Less' : 'Details'}
            </motion.button>
          </div>
        </div>

        {/* Right: decorative number */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', paddingTop: '0.5rem' }}>
          <motion.div
            animate={{ rotate: hovered ? 5 : 0 }}
            style={{
              width: 50, height: 50, borderRadius: 12,
              background: project.accent + '12', border: `1px solid ${project.accent}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem',
            }}
          >
            {project.id === 1 ? '🏨' : project.id === 2 ? '📚' : '🪙'}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
