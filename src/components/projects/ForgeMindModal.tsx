import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  GitBranch,
  Database,
  Code,
  Layout,
  Network,
  Share2,
  Activity,
  AlertTriangle,
  Clock,
  GitPullRequest,
  Bookmark,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { projects } from '../../data/projects';
import './ForgeMindModal.css';

interface ForgeMindModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const forgemind = projects.find((p) => p.id === 'forgemind')!;

export default function ForgeMindModal({ isOpen, onClose }: ForgeMindModalProps) {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'topology' | 'blast-radius' | 'pr-gatekeeper'>('capabilities');
  const [selectedSymbol, setSelectedSymbol] = useState('UserService.ts');
  const [simulatedRisk, setSimulatedRisk] = useState<'low' | 'medium' | 'high'>('high');

  if (!isOpen) return null;

  return (
    <div className="forgemind-modal-overlay" onClick={onClose}>
      <motion.div
        className="forgemind-modal-container"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header Bar */}
        <div className="modal-header">
          <div className="modal-header-brand">
            <div className="modal-brand-badge">ForgeMind</div>
            <div>
              <h2 className="modal-title">{forgemind.title}</h2>
              <span className="modal-subtitle">{forgemind.subtitle}</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="modal-nav">
          <button
            className={`modal-nav-tab ${activeTab === 'capabilities' ? 'modal-nav-tab--active' : ''}`}
            onClick={() => setActiveTab('capabilities')}
          >
            <Sparkles size={16} />
            <span>14 SaaS Capabilities</span>
          </button>
          <button
            className={`modal-nav-tab ${activeTab === 'topology' ? 'modal-nav-tab--active' : ''}`}
            onClick={() => setActiveTab('topology')}
          >
            <Share2 size={16} />
            <span>Graph & Topology Engine</span>
          </button>
          <button
            className={`modal-nav-tab ${activeTab === 'blast-radius' ? 'modal-nav-tab--active' : ''}`}
            onClick={() => setActiveTab('blast-radius')}
          >
            <AlertTriangle size={16} />
            <span>Blast-Radius Analyzer</span>
          </button>
          <button
            className={`modal-nav-tab ${activeTab === 'pr-gatekeeper' ? 'modal-nav-tab--active' : ''}`}
            onClick={() => setActiveTab('pr-gatekeeper')}
          >
            <ShieldCheck size={16} />
            <span>PR Gatekeeper Check</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="modal-body">
          {activeTab === 'capabilities' && (
            <div className="capabilities-grid">
              {forgemind.capabilities?.map((cap, idx) => (
                <div key={idx} className="capability-card">
                  <div className="cap-icon-wrap">
                    {idx === 0 && <GitBranch size={18} />}
                    {idx === 1 && <Database size={18} />}
                    {idx === 2 && <Code size={18} />}
                    {idx === 3 && <Layout size={18} />}
                    {idx === 4 && <Network size={18} />}
                    {idx === 5 && <Share2 size={18} />}
                    {idx === 6 && <Activity size={18} />}
                    {idx === 7 && <AlertTriangle size={18} />}
                    {idx === 8 && <Clock size={18} />}
                    {idx === 9 && <GitPullRequest size={18} />}
                    {idx === 10 && <Bookmark size={18} />}
                    {idx === 11 && <ShieldCheck size={18} />}
                    {idx === 12 && <TrendingUp size={18} />}
                    {idx === 13 && <Sparkles size={18} />}
                  </div>
                  <div>
                    <h4 className="cap-title">{cap.title}</h4>
                    <p className="cap-desc">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'topology' && (
            <div className="demo-view topology-demo">
              <div className="demo-sidebar">
                <div className="demo-search-wrap">
                  <Search size={14} />
                  <input
                    type="text"
                    placeholder="Filter symbol AST..."
                    value={selectedSymbol}
                    onChange={(e) => setSelectedSymbol(e.target.value)}
                  />
                </div>
                <div className="symbol-list">
                  <button className="symbol-item symbol-item--active">
                    <Code size={14} />
                    <span>UserService.ts (Core)</span>
                  </button>
                  <button className="symbol-item">
                    <Network size={14} />
                    <span>AuthMiddleware.ts</span>
                  </button>
                  <button className="symbol-item">
                    <Database size={14} />
                    <span>DatabasePool.ts</span>
                  </button>
                  <button className="symbol-item">
                    <Layout size={14} />
                    <span>UserProfileModal.tsx</span>
                  </button>
                </div>
              </div>
              <div className="demo-stage">
                <div className="topology-graph-mock">
                  <div className="node node--central">
                    <span>{selectedSymbol}</span>
                    <small>Symbol Node</small>
                  </div>
                  <div className="edge edge-1"></div>
                  <div className="node node--dep1">
                    <span>DatabasePool.ts</span>
                  </div>
                  <div className="edge edge-2"></div>
                  <div className="node node--dep2">
                    <span>AuthTokenValidator.ts</span>
                  </div>
                  <div className="edge edge-3"></div>
                  <div className="node node--dep3">
                    <span>AuditLogger.ts</span>
                  </div>
                </div>
                <div className="graph-info-banner">
                  <Sparkles size={14} />
                  <span>Interactive Symbol & AST Dependency Topology Indexing</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blast-radius' && (
            <div className="demo-view blast-demo">
              <div className="blast-config">
                <h3>Impact Analysis Simulation</h3>
                <p>Simulating modification to <code>auth.verifySessionToken()</code></p>
                <div className="risk-selector">
                  <button
                    className={`risk-btn risk-btn--high ${simulatedRisk === 'high' ? 'active' : ''}`}
                    onClick={() => setSimulatedRisk('high')}
                  >
                    High Risk Modification
                  </button>
                  <button
                    className={`risk-btn risk-btn--medium ${simulatedRisk === 'medium' ? 'active' : ''}`}
                    onClick={() => setSimulatedRisk('medium')}
                  >
                    Isolated Refactor
                  </button>
                </div>
              </div>
              <div className="blast-report">
                <div className="blast-metric-card">
                  <span className="b-label">Affected Modules</span>
                  <span className="b-val">{simulatedRisk === 'high' ? '18 Files' : '3 Files'}</span>
                </div>
                <div className="blast-metric-card">
                  <span className="b-label">Downstream Impact</span>
                  <span className="b-val">{simulatedRisk === 'high' ? '7 Microservices' : '1 API Route'}</span>
                </div>
                <div className="blast-metric-card">
                  <span className="b-label">PR Approval Gate</span>
                  <span className={`b-val ${simulatedRisk === 'high' ? 'text-red' : 'text-green'}`}>
                    {simulatedRisk === 'high' ? 'Blocked (Requires Security Lead)' : 'Passed (Auto-Approve)'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pr-gatekeeper' && (
            <div className="demo-view pr-demo">
              <div className="pr-header">
                <GitPullRequest size={20} className="text-purple" />
                <div>
                  <h4>PR #142: Refactor Payment Processor & Gateway Handlers</h4>
                  <span>Target Branch: <code>main</code> · Status: <strong>ForgeMind Analysis Complete</strong></span>
                </div>
              </div>
              <div className="pr-checks-list">
                <div className="pr-check-row pass">
                  <CheckCircle2 size={18} />
                  <span>Circular Dependency Check — 0 cycles detected</span>
                </div>
                <div className="pr-check-row pass">
                  <CheckCircle2 size={18} />
                  <span>Architecture Boundary Rule — Payment Domain Isolated</span>
                </div>
                <div className="pr-check-row pass">
                  <CheckCircle2 size={18} />
                  <span>Code Health Index — Maintainability Score: 94/100</span>
                </div>
                <div className="pr-check-row ai-check">
                  <Sparkles size={18} />
                  <span>AI Remediation Layer — Suggested 1 optimization for async connection pool locking</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="footer-tagline">ForgeMind · Engineering & Architecture Intelligence Platform</span>
          <button className="btn btn--secondary" onClick={onClose}>
            Close Explorer
          </button>
        </div>
      </motion.div>
    </div>
  );
}
