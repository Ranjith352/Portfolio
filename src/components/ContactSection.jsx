import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Download,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function LinkedinIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function GithubIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

export default function ContactSection({ onShowToast }) {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    onShowToast(`Copied ${type} to clipboard!`);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    onShowToast('Thank you! Your message has been prepared.');
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag emerald">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Open to AI engineering roles, full-stack opportunities, research collaborations, and impactful technical internships.
          </p>
        </div>

        <div className="contact-grid">
          {/* Quick Direct Info Stack */}
          <div className="contact-cards-stack">
            {/* Email Card */}
            <div className="contact-quick-card">
              <div className="contact-quick-left">
                <div className="contact-quick-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-quick-label">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="contact-quick-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                className="copy-badge-btn"
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                title="Copy Email"
              >
                {copiedItem === 'Email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedItem === 'Email' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-quick-card">
              <div className="contact-quick-left">
                <div className="contact-quick-icon" style={{ color: 'var(--accent-violet-light)', background: 'rgba(139, 92, 246, 0.12)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-quick-label">Phone & WhatsApp</div>
                  <a href={`tel:${personalInfo.phone}`} className="contact-quick-value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                className="copy-badge-btn"
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                title="Copy Phone"
              >
                {copiedItem === 'Phone' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedItem === 'Phone' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-quick-card"
            >
              <div className="contact-quick-left">
                <div className="contact-quick-icon" style={{ color: '#0a66c2', background: 'rgba(10, 102, 194, 0.12)' }}>
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div className="contact-quick-label">LinkedIn Profile</div>
                  <div className="contact-quick-value">{personalInfo.linkedinName}</div>
                </div>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="contact-quick-card"
            >
              <div className="contact-quick-left">
                <div className="contact-quick-icon" style={{ color: '#ffffff', background: 'rgba(255, 255, 255, 0.1)' }}>
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div className="contact-quick-label">GitHub Repository</div>
                  <div className="contact-quick-value">{personalInfo.githubUsername}</div>
                </div>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </a>

            {/* Resume Download Banner */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
                borderColor: 'rgba(139, 92, 246, 0.3)'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                  Looking for my Full Resume?
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Download updated curriculum vitae in PDF format.
                </div>
              </div>
              <a
                href={personalInfo.resumeUrl}
                download="Ranjith_LK_Resume.pdf"
                className="btn btn-primary btn-sm"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', color: '#ffffff' }}>
              Send Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Have a project, job proposition, or question? Send a note directly to my inbox.
            </p>

            {submitted ? (
              <div className="form-success-banner">
                <Check size={20} />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <div style={{ fontSize: '0.85rem', marginTop: '2px' }}>
                    Thank you for reaching out. I will get back to you shortly.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject / Purpose</label>
                  <input
                    type="text"
                    placeholder="AI Project Collaboration / Internship Offer"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    required
                    placeholder="Hi Ranjith, I came across your portfolio and would like to discuss..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
