import React, { useState, useEffect } from 'react';
import {
  Brain,
  Code2,
  Database,
  Cpu,
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  FileDown,
  Terminal,
  CheckCircle2,
  Layers,
  ArrowUp
} from 'lucide-react';

import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import AcademicSpotlight from './components/AcademicSpotlight';
import ProjectModal from './components/ProjectModal';
import ContactSection from './components/ContactSection';

import {
  personalInfo,
  statsData,
  skillsCategories,
  projectsData,
  experienceData,
  educationData,
  hackathonsData
} from './data/portfolioData';

import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [projectFilter, setProjectFilter] = useState('All');
  const [skillsFilter, setSkillsFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Typewriter effect states
  const roles = [
    'AI Engineer & Researcher',
    'Full Stack Web Developer',
    'RAG & GenAI Specialist',
    'Computer Vision Enthusiast'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Section observer for navbar active spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'hackathons', 'contact'];
      const scrollY = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filter projects
  const filteredProjects =
    projectFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase().includes(projectFilter.toLowerCase()));

  // Filter skills
  const filteredSkillCategories =
    skillsFilter === 'All'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === skillsFilter);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain size={22} />;
      case 'Code2': return <Code2 size={22} />;
      case 'Database': return <Database size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Ambient background glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section id="hero" className="hero">
        <HeroCanvas />
        <div className="container">
          <div className="hero-content">
            <div className="hero-layout-grid">
              {/* Left Column: Hero Copy */}
              <div>
                <div className="status-pill">
                  <span className="pulse-dot" />
                  <span>Available for Opportunities • AI & Full-Stack</span>
                </div>

                <h1 className="hero-name">
                  Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                <div className="typewriter-wrapper">
                  <span>{currentText}</span>
                  <span className="typewriter-cursor">|</span>
                </div>

                <p className="hero-description">
                  Bridging cutting-edge <strong>Artificial Intelligence</strong> with robust, scalable <strong>Full-Stack Architecture</strong>. Currently pursuing <strong>M.Sc in Decision and Computing Sciences</strong> (CGPA: 7.9) with proven experience architecting RAG pipelines, deep learning computer vision, and high-performance web systems.
                </p>

                <div className="hero-cta-group">
                  <a href="#projects" className="btn btn-primary">
                    <span>Explore Flagship Projects</span>
                    <ChevronRight size={18} />
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download="Ranjith_LK_Resume.pdf"
                    className="btn btn-outline-cyan"
                  >
                    <FileDown size={18} />
                    <span>Download Resume</span>
                  </a>
                  <a href="#contact" className="btn btn-secondary">
                    <span>Get In Touch</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-End Avatar Card */}
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar-glow" />
                <div className="hero-avatar-frame">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="hero-avatar-img"
                  />
                  <div className="hero-avatar-badge">
                    <Sparkles size={15} color="#06b6d4" />
                    <span>AI & Full Stack Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick highlight cards */}
            <div className="hero-quick-stats">
              <div className="quick-stat-item">
                <div className="stat-icon-wrapper">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="stat-text-title">Academic Merit</div>
                  <div className="stat-text-value">M.Sc DCS (CGPA: 7.9)</div>
                </div>
              </div>

              <div className="quick-stat-item cyan">
                <div className="stat-icon-wrapper">
                  <Briefcase size={22} />
                </div>
                <div>
                  <div className="stat-text-title">Experience</div>
                  <div className="stat-text-value">QR Solutions (Intern)</div>
                </div>
              </div>

              <div className="quick-stat-item emerald">
                <div className="stat-icon-wrapper">
                  <Trophy size={22} />
                </div>
                <div>
                  <div className="stat-text-title">Hackathons</div>
                  <div className="stat-text-value">Melinia 2nd Prize</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Ribbon */}
      <div className="container stats-ribbon">
        <div className="stats-ribbon-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-counter-box">
              <div className="stat-big-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About & Academic Focus Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">About & Academics</div>
            <h2 className="section-title">
              Driven by <span className="gradient-text">Curiosity</span> & Practical Impact
            </h2>
            <p className="section-subtitle">
              Transforming theoretical machine learning and statistical computing into production-grade systems.
            </p>
          </div>

          <div className="about-grid">
            <div>
              <p className="about-bio-text">
                {personalInfo.bio}
              </p>
              <p className="about-bio-text">
                My academic journey in Decision and Computing Sciences gives me a deep algorithmic perspective spanning data science, computational modeling, and distributed systems. Whether it's architecting a RAG system with runtime LLM switching or deploying YOLOv8 models for real-time hazard detection, I focus on building software that solves concrete, real-world problems.
              </p>

              <div className="about-features-list">
                {personalInfo.summaryBullets.map((bullet, idx) => (
                  <div key={idx} className="about-feature-item">
                    <CheckCircle2 size={18} className="about-feature-bullet" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Spotlight Component */}
            <AcademicSpotlight />
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section id="skills" className="section" style={{ background: 'rgba(7, 11, 20, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag cyan">Skills Matrix</div>
            <h2 className="section-title">
              Technical <span className="gradient-text">Proficiencies</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive expertise across modern AI frameworks, full-stack stacks, vector databases, and cloud tooling.
            </p>
          </div>

          <div className="skills-filter-container">
            <button
              className={`filter-btn ${skillsFilter === 'All' ? 'active' : ''}`}
              onClick={() => setSkillsFilter('All')}
            >
              All Skills
            </button>
            <button
              className={`filter-btn ${skillsFilter === 'ai-ml' ? 'active' : ''}`}
              onClick={() => setSkillsFilter('ai-ml')}
            >
              AI & Deep Learning
            </button>
            <button
              className={`filter-btn ${skillsFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setSkillsFilter('fullstack')}
            >
              Full Stack & Web
            </button>
            <button
              className={`filter-btn ${skillsFilter === 'databases' ? 'active' : ''}`}
              onClick={() => setSkillsFilter('databases')}
            >
              Databases & Vector Stores
            </button>
            <button
              className={`filter-btn ${skillsFilter === 'cloud-devops' ? 'active' : ''}`}
              onClick={() => setSkillsFilter('cloud-devops')}
            >
              Cloud & DevOps
            </button>
          </div>

          <div className="skills-grid">
            {filteredSkillCategories.map((cat) => (
              <div key={cat.id} className="glass-card skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">{getCategoryIcon(cat.icon)}</div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                </div>
                <div className="skill-chips-container">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Portfolio Work</div>
            <h2 className="section-title">
              Flagship <span className="gradient-text">Engineered Projects</span>
            </h2>
            <p className="section-subtitle">
              Production-ready systems demonstrating end-to-end capabilities across Generative AI, Computer Vision, NLP, and Full Stack.
            </p>
          </div>

          {/* Project Filter Pills */}
          <div className="skills-filter-container">
            {['All', 'GenAI', 'Computer Vision', 'NLP', 'Data Science'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${projectFilter === category ? 'active' : ''}`}
                onClick={() => setProjectFilter(category)}
              >
                {category === 'All' ? 'All Projects' : category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="project-card">
                <div>
                  {/* Project Image Banner */}
                  {proj.image && (
                    <div className="project-image-box" onClick={() => setSelectedProject(proj)} style={{ cursor: 'pointer' }}>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="project-card-image"
                        loading="lazy"
                      />
                      <div className="project-image-overlay" />
                    </div>
                  )}

                  <div className="project-meta-row">
                    <span className="project-tag">{proj.badge}</span>
                    <span className="project-date">{proj.date}</span>
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <div style={{ color: 'var(--accent-cyan-light)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                    {proj.subtitle}
                  </div>
                  <p className="project-desc">{proj.description}</p>

                  <ul className="project-highlights">
                    {proj.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="project-highlight-item">
                        <CheckCircle2 size={16} className="highlight-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech-pills">
                    {proj.tech.map((t) => (
                      <span key={t} className="project-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer-actions">
                  <button
                    className="btn btn-outline-cyan btn-sm"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <Layers size={15} />
                    <span>View Architecture & Details</span>
                  </button>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Production Stack
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Dual Timeline */}
      <section id="experience" className="section" style={{ background: 'rgba(7, 11, 20, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag emerald">Career & Academics</div>
            <h2 className="section-title">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subtitle">
              Hands-on software engineering internship experience coupled with rigorous computational academics.
            </p>
          </div>

          <div className="timeline-dual-grid">
            {/* Work Experience */}
            <div>
              <div className="timeline-column-header">
                <div className="timeline-col-icon">
                  <Briefcase size={22} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Work Experience</h3>
              </div>

              <div className="timeline-flow">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="timeline-card-item">
                    <div className="timeline-marker" />
                    <div className="timeline-period">{exp.period}</div>
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-org">
                      {exp.company} • {exp.location} ({exp.type})
                    </div>
                    <ul className="timeline-points-list">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="timeline-point">
                          <CheckCircle2 size={15} color="#8b5cf6" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="timeline-column-header education">
                <div className="timeline-col-icon">
                  <GraduationCap size={22} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Academic Journey</h3>
              </div>

              <div className="timeline-flow">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="timeline-card-item">
                    <div className="timeline-marker" />
                    <div className="timeline-period">{edu.period}</div>
                    <div className="timeline-role">{edu.degree}</div>
                    <div className="timeline-org" style={{ color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                      {edu.score}
                    </div>
                    <p className="timeline-details">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons & Accolades */}
      <section id="hackathons" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Competitions & Certifications</div>
            <h2 className="section-title">
              Hackathons & <span className="gradient-text">Honors</span>
            </h2>
            <p className="section-subtitle">
              Active participant in competitive algorithmic challenges, tech sprints, and advanced AI workshops.
            </p>
          </div>

          <div className="hackathons-grid">
            {hackathonsData.map((h, idx) => (
              <div key={idx} className="glass-card hackathon-card">
                <div className={`hackathon-badge-icon ${h.color}`}>
                  {h.color === 'amber' ? (
                    <Trophy size={26} />
                  ) : h.color === 'emerald' ? (
                    <Award size={26} />
                  ) : (
                    <Sparkles size={26} />
                  )}
                </div>
                <div>
                  <h4 className="hackathon-name">{h.title}</h4>
                  <div className="hackathon-award">{h.award}</div>
                  <p className="hackathon-desc">{h.description}</p>
                  <div style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Year: {h.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection onShowToast={showToast} />

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-credits">
            Designed & Engineered with React by <strong style={{ color: '#ffffff' }}>{personalInfo.name}</strong> • 2026
          </div>
          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer-social-icon">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer-social-icon">
              LinkedIn
            </a>
            <button onClick={scrollToTop} className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem' }}>
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Toast notifications */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={18} color="#10b981" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
