import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  LineChart,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function AcademicSpotlight() {
  const [activeDomain, setActiveDomain] = useState('decision-sciences');

  const domains = [
    {
      id: 'decision-sciences',
      name: 'Decision Sciences',
      icon: LineChart,
      color: 'violet',
      desc: 'Quantitative modeling, mathematical optimization, and data-driven decision frameworks.',
      courses: [
        'Predictive Analytics & Forecasting',
        'Quantitative Decision Analysis',
        'Operations Research & Optimization',
        'Statistical Inference & Probability',
        'Risk Evaluation & Scoring Models'
      ]
    },
    {
      id: 'computing-sciences',
      name: 'Computing Sciences',
      icon: Cpu,
      color: 'cyan',
      desc: 'Rigorous computational theory, software design patterns, and distributed data systems.',
      courses: [
        'Advanced Data Structures & Algorithms',
        'Database Management Systems (RDBMS & Vector)',
        'Object-Oriented Software Engineering',
        'Distributed Computing & Systems',
        'Cloud & Microservice Architecture'
      ]
    },
    {
      id: 'applied-ai',
      name: 'Applied AI & ML',
      icon: Layers,
      color: 'emerald',
      desc: 'Advanced machine learning, deep neural networks, NLP, and real-time computer vision.',
      courses: [
        'Deep Learning & Convolutional Neural Networks',
        'Natural Language Processing & Transformers',
        'Computer Vision & Object Detection (YOLOv8)',
        'Retrieval-Augmented Generation (RAG)',
        'Reinforcement Learning & Agentic Systems'
      ]
    }
  ];

  const currentDomain = domains.find((d) => d.id === activeDomain);

  return (
    <div className="academic-spotlight-card">
      {/* Top Academic Banner */}
      <div className="academic-header">
        <div className="academic-title-wrap">
          <div className="academic-icon-box">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="academic-degree-title">M.Sc Decision & Computing Sciences</h3>
            <p className="academic-degree-sub">5-Year Integrated Program • 2022 – 2027</p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="academic-metrics-row">
        <div className="academic-stat-box">
          <span className="stat-mini-label">Current Standing</span>
          <span className="stat-highlight gradient-text">7.9 CGPA</span>
          <span className="stat-sub-text">As of June 2026</span>
        </div>
        <div className="academic-stat-box">
          <span className="stat-mini-label">Higher Secondary</span>
          <span className="stat-highlight gradient-text-cyan">83.0%</span>
          <span className="stat-sub-text">Maths, CS, Science</span>
        </div>
        <div className="academic-stat-box">
          <span className="stat-mini-label">Program Type</span>
          <span className="stat-highlight gradient-text-violet">Integrated</span>
          <span className="stat-sub-text">Master of Science</span>
        </div>
      </div>

      {/* Interactive Curriculum Domain Selector */}
      <div className="academic-curriculum-section">
        <div className="curriculum-tabs">
          {domains.map((dom) => {
            const IconComponent = dom.icon;
            return (
              <button
                key={dom.id}
                className={`curriculum-tab-btn ${activeDomain === dom.id ? 'active' : ''}`}
                onClick={() => setActiveDomain(dom.id)}
              >
                <IconComponent size={15} />
                <span>{dom.name}</span>
              </button>
            );
          })}
        </div>

        <div className="domain-details-box">
          <p className="domain-desc">{currentDomain.desc}</p>
          <div className="domain-courses-grid">
            {currentDomain.courses.map((course, idx) => (
              <div key={idx} className="course-item">
                <CheckCircle2 size={15} className="course-check-icon" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scholastic Distinction Badge */}
      <div className="academic-footer-badge">
        <Sparkles size={16} className="sparkle-icon" />
        <div>
          <strong>Academic Focus:</strong> Synthesis of mathematical decision science with state-of-the-art scalable computing and AI pipelines.
        </div>
      </div>
    </div>
  );
}
