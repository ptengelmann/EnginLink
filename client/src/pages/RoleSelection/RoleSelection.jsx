import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Settings, 
  TrendingUp, 
  Award, 
  FolderOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Zap,
  Target
} from 'lucide-react';
import styles from './RoleSelection.module.scss';

const roles = [
  {
    id: 'engineer',
    title: 'Engineer',
    headline: 'Show what you\'ve built.',
    description: 'Upload real projects, prove your skillset through tools you\'ve used, and get hired based on work — not buzzwords.',
    icon: Settings,
    color: '#FF6B35',
    features: [
      'Project-based portfolio showcase',
      'Skill verification through real work',
      'Tool-specific job matching',
      'Industry certification paths',
      'Peer review and feedback'
    ],
    stats: [
      { value: '127K+', label: 'Engineers' },
      { value: '94%', label: 'Hire Success' },
      { value: '2.4M+', label: 'Projects' }
    ],
    preview: {
      tools: ['SolidWorks', 'ANSYS', 'Python', 'MATLAB'],
      projects: 'Mars Rover Suspension System',
      certifications: 'Certified SolidWorks Professional'
    }
  },
  {
    id: 'recruiter',
    title: 'Recruiter',
    headline: 'Find engineers by what they\'ve done.',
    description: 'Source pre-validated engineering talent filtered by tools, certifications, and real project portfolios.',
    icon: Search,
    color: '#4ECDC4',
    features: [
      'Advanced skill-based filtering',
      'Project portfolio reviews',
      'Verified certification tracking',
      'Direct candidate messaging',
      'Hiring analytics & insights'
    ],
    stats: [
      { value: '890+', label: 'Companies' },
      { value: '67%', label: 'Time Saved' },
      { value: '8.9/10', label: 'Match Quality' }
    ],
    preview: {
      filters: ['Mechanical Engineering', 'SolidWorks', '3-5 years'],
      candidates: 247,
      topMatch: '96% compatibility'
    }
  }
];

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredRole, setHoveredRole] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSelect = (roleId) => {
    setSelectedRole(roleId);
    localStorage.setItem('selectedRole', roleId);
    
    // Add selection animation delay
    setTimeout(() => {
      window.location.href = '/signup';
    }, 800);
  };

  return (
    <div className={styles.roleSelectionContainer}>
      {/* Background Effects */}
      <div className={styles.backgroundSystem}>
        <div className={styles.gridOverlay}></div>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`${styles.floatingIcon} ${styles[`icon${i + 1}`]}`}
          >
            <Settings size={16} />
          </div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Settings size={28} />
            </div>
            <span className={styles.logoText}>EnginLink</span>
          </div>

          <div className={styles.badge}>
            <Target size={16} />
            <span>Choose Your Path</span>
          </div>

          <h1>How Will You Use EnginLink?</h1>
          <p>
            Whether you're building your engineering career or sourcing technical talent, 
            we'll create a personalized experience tailored to your professional goals.
          </p>

          <div className={styles.platformStats}>
            <div className={styles.statItem}>
              <Users size={20} />
              <span>127K+ Engineers</span>
            </div>
            <div className={styles.statItem}>
              <Building2 size={20} />
              <span>890+ Companies</span>
            </div>
            <div className={styles.statItem}>
              <Award size={20} />
              <span>2.4M+ Projects</span>
            </div>
          </div>
        </div>

        {/* Role Cards */}
        <div className={`${styles.rolesGrid} ${isVisible ? styles.visible : ''}`}>
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            const isHovered = hoveredRole === role.id;

            return (
              <div 
                key={role.id} 
                className={`${styles.roleCard} ${isSelected ? styles.selected : ''} ${isHovered ? styles.hovered : ''}`}
                onClick={() => handleSelect(role.id)}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                style={{ 
                  '--role-color': role.color,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.roleIcon}>
                    <IconComponent size={32} />
                  </div>
                  <div className={styles.roleInfo}>
                    <h2>{role.title}</h2>
                    <h3>{role.headline}</h3>
                  </div>
                </div>

                <p className={styles.roleDescription}>{role.description}</p>

                <div className={styles.roleFeatures}>
                  {role.features.map((feature, i) => (
                    <div key={i} className={styles.feature}>
                      <CheckCircle2 size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.roleStats}>
                  {role.stats.map((stat, i) => (
                    <div key={i} className={styles.roleStat}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.rolePreview}>
                  {role.id === 'engineer' ? (
                    <div className={styles.engineerPreview}>
                      <div className={styles.previewHeader}>
                        <FolderOpen size={16} />
                        <span>Your Portfolio</span>
                      </div>
                      <div className={styles.toolsList}>
                        {role.preview.tools.map((tool, i) => (
                          <span key={i} className={styles.toolTag}>{tool}</span>
                        ))}
                      </div>
                      <div className={styles.projectExample}>
                        <span>📁 {role.preview.projects}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.recruiterPreview}>
                      <div className={styles.previewHeader}>
                        <Search size={16} />
                        <span>Search Results</span>
                      </div>
                      <div className={styles.searchFilters}>
                        {role.preview.filters.map((filter, i) => (
                          <span key={i} className={styles.filterTag}>{filter}</span>
                        ))}
                      </div>
                      <div className={styles.searchResults}>
                        <span>{role.preview.candidates} candidates found</span>
                        <span className={styles.topMatch}>{role.preview.topMatch}</span>
                      </div>
                    </div>
                  )}
                </div>

                <button className={styles.selectBtn}>
                  <span>Continue as {role.title}</span>
                  <ArrowRight size={18} />
                  {isSelected && <div className={styles.selectedOverlay}></div>}
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className={`${styles.trustSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.trustBadge}>
            <Sparkles size={16} />
            <span>Trusted by engineers at Tesla, Boeing, Siemens, and 890+ leading companies</span>
          </div>
        </div>
      </div>
    </div>
  );
}