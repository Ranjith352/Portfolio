import React, { useEffect } from 'react';
import { X, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Banner Image */}
        {project.image && (
          <div className="modal-banner-box">
            <img src={project.image} alt={project.title} className="modal-banner-img" />
            <div className="modal-banner-overlay" />
          </div>
        )}

        <div className="modal-header">
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span className="project-tag">{project.badge}</span>
            <span className="project-date">{project.date}</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.25rem' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--accent-cyan-light)', fontSize: '0.95rem' }}>
            {project.subtitle}
          </p>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section-block">
            <h3 className="modal-section-title">
              <Layers size={18} />
              <span>Project Overview</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              {project.description}
            </p>
          </div>

          {/* Architecture Pipeline */}
          {project.architecture && (
            <div className="modal-section-block">
              <h3 className="modal-section-title">
                <Cpu size={18} />
                <span>System Architecture & Technical Flow</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                {project.architecture.overview}
              </p>
              <div
                style={{
                  background: '#070b14',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                {project.architecture.pipeline.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(139, 92, 246, 0.2)',
                        color: 'var(--accent-violet-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Innovations */}
          <div className="modal-section-block">
            <h3 className="modal-section-title">
              <CheckCircle2 size={18} />
              <span>Key Features & Innovations</span>
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <ArrowRight size={16} style={{ color: 'var(--accent-cyan-light)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section-block" style={{ marginBottom: 0 }}>
            <h3 className="modal-section-title">
              <span>Technologies Deployed</span>
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    color: 'var(--accent-cyan-light)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
