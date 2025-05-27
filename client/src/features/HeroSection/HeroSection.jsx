import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  Zap, 
  Building, 
  FlaskConical, 
  Plane,
  Cog,
  Factory,
  Leaf,
  Heart,
  Cpu,
  ArrowRight,
  Play,
  Award,
  TrendingUp,
  Users,
  CheckCircle2,
  Star,
  Eye,
  Briefcase,
  Target,
  Rocket,
  Globe,
  Shield,
  Database,
  Layers,
  Code
} from 'lucide-react';
import styles from './HeroSection.module.scss';

const engineeringDisciplines = [
  { name: 'Mechanical Engineering', icon: Cog, color: '#FF6B35', projects: '847K' },
  { name: 'Civil Engineering', icon: Building, color: '#4ECDC4', projects: '692K' },
  { name: 'Electrical Engineering', icon: Zap, color: '#FFD23F', projects: '534K' },
  { name: 'Chemical Engineering', icon: FlaskConical, color: '#A8E6CF', projects: '298K' },
  { name: 'Aerospace Engineering', icon: Plane, color: '#6C5CE7', projects: '187K' },
  { name: 'Software Engineering', icon: Code, color: '#FF6B9D', projects: '1.2M' },
  { name: 'Industrial Engineering', icon: Factory, color: '#FFA726', projects: '423K' },
  { name: 'Environmental Engineering', icon: Leaf, color: '#66BB6A', projects: '234K' },
  { name: 'Biomedical Engineering', icon: Heart, color: '#EF5350', projects: '156K' },
  { name: 'Materials Engineering', icon: Cpu, color: '#AB47BC', projects: '198K' }
];

const platformHighlights = [
  {
    icon: Award,
    title: 'Skills Verification',
    description: 'Prove technical expertise through projects',
    color: '#FF6B35'
  },
  {
    icon: Layers,
    title: 'Project Portfolios',
    description: 'Showcase CADs, simulations, prototypes',
    color: '#4ECDC4'
  },
  {
    icon: Target,
    title: 'Precision Matching',
    description: 'Connect with skill-based opportunities',
    color: '#6C5CE7'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Learn through hands-on certification',
    color: '#A8E6CF'
  }
];

const platformStats = [
  { value: '127K+', label: 'Active Engineers', icon: Users, color: '#4ECDC4' },
  { value: '4.8M+', label: 'Technical Projects', icon: Briefcase, color: '#6C5CE7' },
  { value: '450+', label: 'Tools & Skills', icon: Settings, color: '#FF6B35' },
  { value: '890+', label: 'Partner Companies', icon: Building, color: '#A8E6CF' }
];

export default function HeroSection() {
  const [hoveredDiscipline, setHoveredDiscipline] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const [interactionCount, setInteractionCount] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDisciplineHover = (index) => {
    setHoveredDiscipline(index);
    setInteractionCount(prev => prev + 1);
  };

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Enhanced Background */}
      <div className={styles.backgroundSystem}>
        <div className={styles.gradientMesh}></div>
        <div className={styles.gridPattern}></div>
        <div className={styles.floatingElements}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={styles.floatingIcon}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              {React.createElement(engineeringDisciplines[i % engineeringDisciplines.length].icon, { 
                size: 16,
                style: { color: engineeringDisciplines[i % engineeringDisciplines.length].color }
              })}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Main Hero Content */}
        <div className={`${styles.heroContent} ${isLoaded ? styles.loaded : ''}`}>
          {/* Platform Badge */}
          <div className={styles.platformBadge}>
            <Award size={16} />
            <span>The Engineering Career Ecosystem</span>
            <div className={styles.badgeGlow}></div>
          </div>

          {/* Main Headline */}
          <h1 className={styles.mainHeadline}>
            <span className={styles.headlineMain}>
              Where Engineers Build Careers With
            </span>
            <span className={styles.headlineEmphasis}>
              Verified Skills & Real Projects
            </span>
          </h1>

          {/* Clear Value Proposition */}
          <div className={styles.valueProposition}>
            <p className={styles.mainDescription}>
              EnginLink is the <strong>first platform exclusively for engineers</strong> — showcase 
              technical projects, verify skills through work, and connect with opportunities 
              based on what you've actually built, not empty resumes.
            </p>
          </div>

          {/* Platform Highlights */}
          <div className={styles.platformHighlights}>
            {platformHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className={`${styles.highlightCard} ${hoveredHighlight === index ? styles.hovered : ''}`}
                  onMouseEnter={() => setHoveredHighlight(index)}
                  onMouseLeave={() => setHoveredHighlight(null)}
                  style={{ '--highlight-color': highlight.color }}
                >
                  <div className={styles.highlightIcon}>
                    <IconComponent size={20} />
                  </div>
                  <div className={styles.highlightContent}>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Primary CTA */}
          <div className={styles.ctaSection}>
            <button className={styles.primaryCta}>
              <Rocket size={20} />
              <span>Build Your Engineering Profile</span>
              <ArrowRight size={20} />
              <div className={styles.ctaShine}></div>
            </button>
            
            <button className={styles.secondaryCta}>
              <Play size={18} />
              <span>Watch Platform Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustSection}>
            <span className={styles.trustLabel}>Trusted by engineers from</span>
            <div className={styles.companyLogos}>
              {['Tesla', 'Boeing', 'Google', 'Siemens', 'GE', 'Microsoft'].map((company, i) => (
                <div key={i} className={styles.companyLogo}>{company}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Disciplines Showcase */}
        <div className={`${styles.disciplinesShowcase} ${isLoaded ? styles.loaded : ''}`}>
          <div className={styles.showcaseHeader}>
            <h2>All Engineering Disciplines</h2>
            <p>Connect engineers across every technical field</p>
          </div>

          <div className={styles.disciplinesGrid}>
            {engineeringDisciplines.map((discipline, index) => {
              const IconComponent = discipline.icon;
              const isHovered = hoveredDiscipline === index;
              
              return (
                <div
                  key={index}
                  className={`${styles.disciplineCard} ${isHovered ? styles.hovered : ''}`}
                  onMouseEnter={() => handleDisciplineHover(index)}
                  onMouseLeave={() => setHoveredDiscipline(null)}
                  style={{ 
                    '--discipline-color': discipline.color,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={styles.disciplineIcon}>
                    <IconComponent size={32} />
                  </div>
                  <div className={styles.disciplineInfo}>
                    <h3>{discipline.name}</h3>
                    <div className={styles.disciplineStats}>
                      <span>{discipline.projects} projects</span>
                    </div>
                  </div>
                  <div className={styles.disciplineHover}>
                    <ArrowRight size={16} />
                    <span>Explore</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Platform Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {platformStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={styles.statItem}>
                  <IconComponent size={24} style={{ color: stat.color }} />
                  <div className={styles.statContent}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Live Platform Preview */}
      <div className={`${styles.platformPreview} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.container}>
          <div className={styles.previewWindow}>
            <div className={styles.windowHeader}>
              <div className={styles.windowControls}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.windowTitle}>EnginLink Platform</span>
              <div className={styles.windowActions}>
                <Settings size={14} />
              </div>
            </div>
            
            <div className={styles.previewContent}>
              <div className={styles.previewNav}>
                <div className={styles.navItem}>
                  <Users size={16} />
                  <span>Engineers</span>
                </div>
                <div className={styles.navItem}>
                  <Briefcase size={16} />
                  <span>Projects</span>
                </div>
                <div className={styles.navItem}>
                  <Award size={16} />
                  <span>Skills</span>
                </div>
                <div className={styles.navItem}>
                  <Target size={16} />
                  <span>Opportunities</span>
                </div>
              </div>

              <div className={styles.previewDashboard}>
                <div className={styles.dashboardSection}>
                  <h4>Featured Engineers</h4>
                  <div className={styles.engineerCards}>
                    {engineeringDisciplines.slice(0, 3).map((discipline, i) => {
                      const IconComponent = discipline.icon;
                      return (
                        <div key={i} className={styles.engineerCard}>
                          <div 
                            className={styles.engineerAvatar}
                            style={{ background: `linear-gradient(135deg, ${discipline.color}20, ${discipline.color}40)` }}
                          >
                            <IconComponent size={20} style={{ color: discipline.color }} />
                          </div>
                          <div className={styles.engineerInfo}>
                            <div className={styles.engineerName}></div>
                            <div className={styles.engineerTitle} style={{ color: discipline.color }}>
                              {discipline.name.split(' ')[0]} Engineer
                            </div>
                            <div className={styles.engineerBadge}>
                              <CheckCircle2 size={12} />
                              <span>Verified</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.dashboardSection}>
                  <h4>Live Project Activity</h4>
                  <div className={styles.activityFeed}>
                    {[
                      { action: 'CAD model uploaded', engineer: 'Sarah K.', field: 'Mechanical' },
                      { action: 'Simulation completed', engineer: 'Ahmed R.', field: 'Aerospace' },
                      { action: 'Skill verified', engineer: 'Lisa M.', field: 'Electrical' }
                    ].map((activity, i) => (
                      <div key={i} className={styles.activityItem}>
                        <div className={styles.activityDot}></div>
                        <div className={styles.activityContent}>
                          <p><strong>{activity.engineer}</strong> {activity.action}</p>
                          <span className={styles.activityField}>{activity.field}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}