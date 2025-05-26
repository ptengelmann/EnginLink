import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Settings, 
  Hammer, 
  Zap, 
  FlaskConical, 
  Plane,
  Building,
  Cog,
  Wrench,
  ArrowRight,
  Play,
  Award,
  TrendingUp,
  Users,
  FolderOpen,
  Building2,
  CheckCircle2,
  Sparkles,
  MousePointer2
} from 'lucide-react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const [activeEngineering, setActiveEngineering] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const particlesRef = useRef([]);

  const engineeringFields = [
    { 
      name: 'Mechanical Engineers', 
      icon: Settings, 
      color: '#FF6B35',
      project: 'Mars Rover Suspension System',
      tools: ['SolidWorks', 'ANSYS', 'MATLAB']
    },
    { 
      name: 'Civil Engineers', 
      icon: Building, 
      color: '#4ECDC4',
      project: 'Earthquake-Resistant Bridge Design',
      tools: ['AutoCAD', 'SAP2000', 'Civil 3D']
    },
    { 
      name: 'Electrical Engineers', 
      icon: Zap, 
      color: '#FFD23F',
      project: 'Smart Grid Control System',
      tools: ['MATLAB', 'PSpice', 'Altium']
    },
    { 
      name: 'Chemical Engineers', 
      icon: FlaskConical, 
      color: '#A8E6CF',
      project: 'Sustainable Polymer Production',
      tools: ['Aspen Plus', 'ChemCAD', 'COMSOL']
    },
    { 
      name: 'Aerospace Engineers', 
      icon: Plane, 
      color: '#6C5CE7',
      project: 'Hypersonic Vehicle Design',
      tools: ['CATIA', 'ANSYS Fluent', 'X-Plane']
    },
    { 
      name: 'Manufacturing Engineers', 
      icon: Cog, 
      color: '#FD79A8',
      project: 'Industry 4.0 Assembly Line',
      tools: ['Siemens NX', 'Arena', 'Tecnomatix']
    }
  ];

  const platformStats = [
    { 
      value: '127K', 
      suffix: '+', 
      label: 'Active Engineers',
      subtext: 'Across all disciplines',
      icon: Users,
      color: '#FF6B35'
    },
    { 
      value: '2.4M', 
      suffix: '+', 
      label: 'Technical Projects',
      subtext: 'CAD, Simulations, Prototypes',
      icon: FolderOpen,
      color: '#4ECDC4'
    },
    { 
      value: '890', 
      suffix: '+', 
      label: 'Industry Partners',
      subtext: 'Fortune 500 & Startups',
      icon: Building2,
      color: '#6C5CE7'
    },
    { 
      value: '94', 
      suffix: '%', 
      label: 'Project Success Rate',
      subtext: 'Skills to opportunity match',
      icon: TrendingUp,
      color: '#A8E6CF'
    }
  ];

  const valueProps = [
    'Showcase CAD models, simulations & prototypes',
    'Verify skills through project-based assessments',
    'Connect with engineering-specific opportunities',
    'Access microlearning from industry leaders'
  ];

  // Advanced particle system for engineering visualization
  const initializeParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    particlesRef.current = [];
    
    // Create engineering-themed particles
    for (let i = 0; i < 80; i++) {
      particlesRef.current.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        color: engineeringFields[Math.floor(Math.random() * engineeringFields.length)].color,
        type: Math.random() > 0.7 ? 'gear' : 'circle'
      });
    }
  }, []);

  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    ctx.clearRect(0, 0, rect.width, rect.height);

    particlesRef.current.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= rect.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= rect.height) particle.vy *= -1;

      // Draw particle based on type
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      
      if (particle.type === 'gear') {
        // Draw simple gear shape
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(Date.now() * 0.001 + particle.x);
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const radius = particle.size * (i % 2 === 0 ? 1 : 0.6);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      } else {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw connections between nearby particles
    particlesRef.current.forEach((p1, i) => {
      particlesRef.current.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.globalAlpha = 0.1 * (1 - distance / 120);
          ctx.strokeStyle = p1.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    
    // Cycle through engineering fields
    const fieldInterval = setInterval(() => {
      setActiveEngineering(prev => (prev + 1) % engineeringFields.length);
    }, 4000);

    // Mouse tracking for interactive elements
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    // Initialize particle system
    const initTimer = setTimeout(() => {
      initializeParticles();
      animateParticles();
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initializeParticles);

    return () => {
      clearInterval(fieldInterval);
      clearTimeout(initTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initializeParticles);
    };
  }, [initializeParticles, animateParticles]);

  const currentField = engineeringFields[activeEngineering];
  const CurrentIcon = currentField.icon;

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Advanced Background System */}
      <div className={styles.backgroundSystem}>
        <canvas 
          ref={canvasRef}
          className={styles.particleCanvas}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
        
        <div 
          className={styles.dynamicGradient}
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`,
            background: `radial-gradient(circle at center, ${currentField.color}15 0%, transparent 70%)`
          }}
        />

        <div className={styles.gridSystem}>
          <div className={styles.primaryGrid}></div>
          <div className={styles.secondaryGrid}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Main Content */}
        <div className={`${styles.heroContent} ${isLoaded ? styles.loaded : ''}`}>
          {/* Platform Badge */}
          <div className={styles.platformBadge}>
            <Award size={16} />
            <span>The Engineering Career Ecosystem</span>
            <Sparkles size={14} />
          </div>

          {/* Dynamic Headline */}
          <h1 className={styles.dynamicHeadline}>
            <span className={styles.lineOne}>Where</span>
            <span 
              className={styles.lineTwo}
              style={{ '--field-color': currentField.color }}
            >
              <CurrentIcon className={styles.fieldIcon} size={52} />
              <span className={styles.fieldText}>
                {currentField.name}
              </span>
            </span>
            <span className={styles.lineThree}>
              Build Careers With <span className={styles.emphasis}>Proof</span>
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className={styles.subtitleSection}>
            <p className={styles.mainSubtitle}>
              The first platform exclusively built for engineers to showcase real projects, 
              verify technical skills, and connect with opportunities based on 
              <strong> what you've actually built</strong> — not empty resumes.
            </p>
            
            <div className={styles.currentProject}>
              <MousePointer2 size={16} />
              <span>Featured: {currentField.project}</span>
              <div className={styles.toolsList}>
                {currentField.tools.map((tool, i) => (
                  <span key={i} className={styles.tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Value Propositions */}
          <div className={styles.valueProps}>
            {valueProps.map((prop, index) => (
              <div key={index} className={styles.valueProp}>
                <CheckCircle2 size={18} />
                <span>{prop}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className={styles.ctaSection}>
            <button className={styles.primaryCta}>
              <span>Build Your Engineering Profile</span>
              <ArrowRight size={20} />
              <div className={styles.ctaGlow}></div>
            </button>
            
            <button className={styles.secondaryCta}>
              <Play size={18} />
              <span>See Platform Demo</span>
            </button>
          </div>

          <div className={styles.trustIndicators}>
            <span>Join engineers from</span>
            <div className={styles.companyGrid}>
              {['Tesla', 'Boeing', 'Siemens', 'GE', 'Lockheed Martin', 'Caterpillar'].map((company, i) => (
                <div key={i} className={styles.companyBadge}>{company}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Stats Dashboard */}
        <div className={`${styles.statsDashboard} ${isLoaded ? styles.loaded : ''}`}>
          <div className={styles.dashboardHeader}>
            <h3>Platform Impact</h3>
            <div className={styles.liveIndicator}>
              <div className={styles.pulse}></div>
              <span>Live Data</span>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {platformStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className={`${styles.statCard} ${hoveredStat === index ? styles.hovered : ''}`}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    '--stat-color': stat.color
                  }}
                >
                  <div className={styles.statHeader}>
                    <IconComponent className={styles.statIcon} size={24} />
                    <div className={styles.statTrend}>
                      <TrendingUp size={14} />
                    </div>
                  </div>
                  
                  <div className={styles.statValue}>
                    {stat.value}<span className={styles.suffix}>{stat.suffix}</span>
                  </div>
                  
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statSubtext}>{stat.subtext}</div>
                  
                  <div className={styles.statProgress}>
                    <div className={styles.progressBar}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Platform Preview */}
          <div className={styles.platformPreview}>
            <div className={styles.previewHeader}>
              <div className={styles.windowControls}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.previewTitle}>EnginLink Dashboard</span>
              <div className={styles.previewActions}>
                <Wrench size={14} />
              </div>
            </div>
            
            <div className={styles.previewContent}>
              <div className={styles.engineerProfile}>
                <div className={styles.profileAvatar}>
                  <CurrentIcon size={24} />
                </div>
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>
                    <div className={styles.nameShimmer}></div>
                  </div>
                  <div className={styles.profileDiscipline}
                       style={{ color: currentField.color }}>
                    {currentField.name.split(' ')[0]} Engineer
                  </div>
                  <div className={styles.verificationBadge}>
                    <CheckCircle2 size={12} />
                    <span>Skills Verified</span>
                  </div>
                </div>
              </div>

              <div className={styles.projectShowcase}>
                <div className={styles.showcaseHeader}>
                  <FolderOpen size={16} />
                  <span>Featured Projects</span>
                </div>
                <div className={styles.projectGrid}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={styles.projectCard}>
                      <div className={styles.projectPreview}
                           style={{ backgroundColor: `${currentField.color}20` }}>
                        <CurrentIcon size={20} style={{ color: currentField.color }} />
                      </div>
                      <div className={styles.projectMeta}>
                        <div className={styles.projectTitle}></div>
                        <div className={styles.projectStats}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Explore Platform</div>
        <div className={styles.scrollArrow}>
          <ArrowRight size={16} />
        </div>
      </div>
    </section>
  );
}