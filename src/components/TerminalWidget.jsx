import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState('profile.sh');
  const [commandInput, setCommandInput] = useState('');
  const [commandLogs, setCommandLogs] = useState([]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    if (cmd === 'help') {
      response = 'Available commands: whoami, skills, projects, contact, resume, clear';
    } else if (cmd === 'whoami') {
      response = `${personalInfo.name} - ${personalInfo.title} | ${personalInfo.subtitle} (CGPA: 7.9)`;
    } else if (cmd === 'skills') {
      response = 'Python, R, React, FastAPI, Flask, PostgreSQL, pgvector, YOLOv8, OpenCV, BERT, Docker';
    } else if (cmd === 'projects') {
      response = '1. Lenny Growth Assistant (RAG)\n2. Pothole Detection (YOLOv8)\n3. Complaint Management (BERT)\n4. Healthcare Prediction (ML)';
    } else if (cmd === 'contact') {
      response = `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nGitHub: ${personalInfo.github}`;
    } else if (cmd === 'resume') {
      response = `Resume located at: ${personalInfo.resumeUrl}`;
    } else if (cmd === 'clear') {
      setCommandLogs([]);
      setCommandInput('');
      return;
    } else {
      response = `command not found: "${cmd}". Type "help" for available commands.`;
    }

    setCommandLogs((prev) => [...prev, { cmd: commandInput, output: response }]);
    setCommandInput('');
  };

  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-circle red" />
          <div className="terminal-circle yellow" />
          <div className="terminal-circle green" />
        </div>

        <div className="terminal-tabs">
          <button
            className={`terminal-tab-btn ${activeTab === 'profile.sh' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile.sh')}
          >
            profile.sh
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'skills.json' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills.json')}
          >
            skills.json
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'core.yaml' ? 'active' : ''}`}
            onClick={() => setActiveTab('core.yaml')}
          >
            core.yaml
          </button>
        </div>
      </div>

      <div className="terminal-body">
        {activeTab === 'profile.sh' && (
          <div className="terminal-code">
            <div className="terminal-prompt">
              <TerminalIcon size={14} />
              <span>bash ~/ranjith-lk/init.sh</span>
            </div>
            <div>
              <span className="code-str">echo "Initializing Developer Persona..."</span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <span className="code-key">DEVELOPER</span>="<span className="code-str">Ranjith LK</span>"
              <br />
              <span className="code-key">DEGREE</span>="<span className="code-str">M.Sc Decision and Computing Sciences</span>"
              <br />
              <span className="code-key">GRADUATION</span>=<span className="code-num">2027</span>
              <br />
              <span className="code-key">CGPA</span>=<span className="code-num">7.9</span>
              <br />
              <span className="code-key">PASSION</span>="<span className="code-str">Applied AI, RAG Systems & Scalable Full-Stack</span>"
              <br />
              <span className="code-key">STATUS</span>="<span className="code-bool">Available for high-impact roles</span>"
            </div>
            <div style={{ marginTop: '0.75rem', color: '#64748b' }}>
              # "With strong adaptability and a continuous learning mindset,
              <br /># I tackle unfamiliar challenges with confidence."
            </div>
          </div>
        )}

        {activeTab === 'skills.json' && (
          <div className="terminal-code">
            <div className="terminal-prompt">
              <TerminalIcon size={14} />
              <span>cat stack.json</span>
            </div>
            <div>
              {"{\n"}
              {'  '}<span className="code-key">"ai_engineering"</span>: [<span className="code-str">"RAG"</span>, <span className="code-str">"pgvector"</span>, <span className="code-str">"YOLOv8"</span>, <span className="code-str">"BERT"</span>],{"\n"}
              {'  '}<span className="code-key">"web_frameworks"</span>: [<span className="code-str">"React"</span>, <span className="code-str">"FastAPI"</span>, <span className="code-str">"Flask"</span>, <span className="code-str">"Streamlit"</span>],{"\n"}
              {'  '}<span className="code-key">"databases"</span>: [<span className="code-str">"PostgreSQL"</span>, <span className="code-str">"MySQL"</span>, <span className="code-str">"MongoDB"</span>, <span className="code-str">"Firestore"</span>],{"\n"}
              {'  '}<span className="code-key">"languages"</span>: [<span className="code-str">"Python"</span>, <span className="code-str">"JavaScript"</span>, <span className="code-str">"R"</span>, <span className="code-str">"SQL"</span>],{"\n"}
              {'  '}<span className="code-key">"cloud_ai"</span>: [<span className="code-str">"Groq"</span>, <span className="code-str">"Ollama"</span>, <span className="code-str">"OpenAI API"</span>, <span className="code-str">"Docker"</span>]{"\n"}
              {"}"}
            </div>
          </div>
        )}

        {activeTab === 'core.yaml' && (
          <div className="terminal-code">
            <div className="terminal-prompt">
              <TerminalIcon size={14} />
              <span>cat principles.yaml</span>
            </div>
            <div>
              <span className="code-key">mindset:</span>
              <br />
              {'  '}<span className="code-key">adaptability:</span> <span className="code-bool">high</span>
              <br />
              {'  '}<span className="code-key">engineering_focus:</span> <span className="code-str">production-grade real-world utility</span>
              <br />
              {'  '}<span className="code-key">problem_solving:</span> <span className="code-str">data-driven & methodical</span>
              <br />
              <span className="code-key">experience:</span>
              <br />
              {'  '}<span className="code-key">internship:</span> <span className="code-str">QR Solutions, Trichy (Full Stack)</span>
              <br />
              {'  '}<span className="code-key">hackathons:</span> <span className="code-num">5</span> <span className="code-str">(Melinia 2nd Prize Winner)</span>
            </div>
          </div>
        )}

        {/* Interactive CLI Logs */}
        {commandLogs.length > 0 && (
          <div style={{ marginTop: '1rem', borderTop: '1px dashed #1e293b', paddingTop: '0.75rem' }}>
            {commandLogs.map((log, index) => (
              <div key={index} style={{ marginBottom: '0.5rem' }}>
                <div style={{ color: '#06b6d4' }}>$ {log.cmd}</div>
                <div style={{ color: '#94a3b8', whiteSpace: 'pre-wrap' }}>{log.output}</div>
              </div>
            ))}
          </div>
        )}

        {/* Command input */}
        <form onSubmit={handleCommandSubmit} style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#10b981' }}>visitor@ranjith:~$</span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            placeholder="type 'help', 'whoami', 'skills'..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontFamily: 'inherit',
              fontSize: '0.85rem'
            }}
          />
        </form>
      </div>
    </div>
  );
}
