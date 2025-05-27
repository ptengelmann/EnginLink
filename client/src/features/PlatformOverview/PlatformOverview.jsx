import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Code,
  Target,
  ArrowRight,
  Play,
  CheckCircle2,
  Eye,
  Star,
  Building,
  Zap,
  Lightbulb,
  Globe,
  BarChart3,
  Rocket,
  Shield,
  Cpu,
  Network,
  Database,
  Layers,
  Activity,
  Clock,
  MessageCircle,
  Share2,
  Download
} from 'lucide-react';
import styles from './PlatformOverview.module.scss';

const platformPillars = [
  {
    id: 'skills',
    title: 'Verified Skills',
    subtitle: 'Beyond Resumes',
    description: 'Prove your technical expertise through project-based validation, not keywords',
    icon: Award,
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
    stats: {
      verified: '127K+',
      tools: '450+',
      accuracy: '99.2%'
    },
    features: [
      'Tool proficiency mapping',
      'Project-based validation',
      'Industry certifications',
      'Peer review system'
    ]
  },
  {
    id: 'projects',
    title: 'Project Portfolio',
    subtitle: 'Show Your Work',
    description: 'Upload CADs, simulations, code — your engineering work becomes your proof',
    icon: Layers,
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #6EE6DD 100%)',
    stats: {
      projects: '2.4M+',
      formats: '25+',
      views: '890M+'
    },
    features: [
      'Rich media uploads',
      'Version control integration',
      'Technical documentation',
      'Collaborative reviews'
    ]
  },
  {
    id: 'matching',
    title: 'Precision Matching',
    subtitle: 'Skills-First Hiring',
    description: 'Connect with opportunities based on technical capabilities, not job titles',
    icon: Target,
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
    stats: {
      matches: '94%',
      faster: '67%',
      quality: '8.9/10'
    },
    features: [
      'AI-powered matching',
      'Technical skill filtering',
      'Project compatibility',
      'Real-time availability'
    ]
  },
  {
    id: 'growth',
    title: 'Career Growth',
    subtitle: 'Continuous Learning',
    description: 'Advance through hands-on learning, mentorship, and industry partnerships',
    icon: TrendingUp,
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF 0%, #C8F2E0 100%)',
    stats: {
      courses: '150+',
      completion: '89%',
      placement: '94%'
    },
    features: [
      'Project-based learning',
      'Industry mentorship',
      'Certification pathways',
      'Career analytics'
    ]
  }
];

const engineeringStats = [
  { label: 'Active Engineers', value: '127K+', icon: Users, color: '#4ECDC4' },
  { label: 'Technical Projects', value: '2.4M+', icon: Briefcase, color: '#6C5CE7' },
  { label: 'Skills Verified', value: '450+', icon: Award, color: '#FF6B35' },
  { label: 'Success Rate', value: '94%', icon: TrendingUp, color: '#A8E6CF' }
];

const realTimeData = [
  { action: 'Project uploaded', engineer: 'Sarah K.', field: 'Mechanical', time: '2 min ago', icon: Layers },
  { action: 'Skill verified', engineer: 'Ahmed R.', field: 'Software', time: '4 min ago', icon: CheckCircle2 },
  { action: 'Match found', engineer: 'Lisa M.', field: 'Electrical', time: '6 min ago', icon: Target },
  { action: 'Course completed', engineer: 'Carlos V.', field: 'Civil', time: '8 min ago', icon: Award }
];

export default function PlatformOverview() {
  const [activePillar, setActivePillar] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [liveActivityIndex, setLiveActivityIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActivePillar((prev) => (prev + 1) % platformPillars.length);
      }, 6000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  useEffect(() => {
    const activityInterval = setInterval(() => {
      setLiveActivityIndex((prev) => (prev + 1) % realTimeData.length);
    }, 3000);

    return () => clearInterval(activityInterval);
  }, []);

  const handlePillarClick = (index) => {
    setActivePillar(index);
    setInteractionCount(prev => prev + 1);
  };

  const selectedPillar = platformPillars[activePillar];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Enhanced Header */}
        <div className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <Settings size={16} />
            <span>Platform Overview</span>
          </div>
          <h2>Engineering Careers, Redefined</h2>
          <p>
            EnginLink transforms how engineers build careers — from skill verification to project 
            showcasing, from precision hiring to continuous growth. Experience the future of 
            engineering professional development.
          </p>
          
          <div className={styles.platformStats}>
            {engineeringStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className={styles.statItem} 
                  style={{ '--stat-color': stat.color }}
                >
                  <IconComponent className={styles.statIcon} size={24} />
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Pillars Interactive Showcase */}
        <div className={`${styles.pillarsShowcase} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.showcaseHeader}>
            <h3>Four Pillars of Engineering Excellence</h3>
            <div className={styles.playbackControls}>
              <button
                className={`${styles.controlBtn} ${isAutoPlaying ? styles.playing : styles.paused}`}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? <Play size={16} /> : <Play size={16} />}
                <span>{isAutoPlaying ? 'Playing' : 'Paused'}</span>
              </button>
            </div>
          </div>

          <div className={styles.pillarsContainer}>
            {/* Pillar Navigation */}
            <div className={styles.pillarsNav}>
              {platformPillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                const isActive = activePillar === index;
                
                return (
                  <button
                    key={pillar.id}
                    className={`${styles.pillarNavItem} ${isActive ? styles.active : ''}`}
                    onClick={() => handlePillarClick(index)}
                    style={{ 
                      '--pillar-color': pillar.color,
                      '--pillar-gradient': pillar.gradient,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={styles.pillarIcon}>
                      <IconComponent size={24} />
                    </div>
                    <div className={styles.pillarInfo}>
                      <h4>{pillar.title}</h4>
                      <span>{pillar.subtitle}</span>
                    </div>
                    <div className={styles.pillarProgress}>
                      <div 
                        className={styles.progressBar}
                        style={{ 
                          width: isActive ? '100%' : '0%',
                          transition: 'width 6s linear'
                        }}
                      ></div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Details */}
            <div className={styles.pillarDetails}>
              <div className={styles.detailsHeader}>
                <div className={styles.pillarTitle}>
                  <div 
                    className={styles.titleIcon}
                    style={{ background: selectedPillar.gradient }}
                  >
                    <selectedPillar.icon size={40} />
                  </div>
                  <div className={styles.titleContent}>
                    <h3>{selectedPillar.title}</h3>
                    <p>{selectedPillar.description}</p>
                  </div>
                </div>
                
                <div className={styles.pillarMetrics}>
                  {Object.entries(selectedPillar.stats).map(([key, value]) => (
                    <div key={key} className={styles.metric}>
                      <div className={styles.metricValue}>{value}</div>
                      <div className={styles.metricLabel}>{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.detailsContent}>
                <div className={styles.featuresGrid}>
                  {selectedPillar.features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.detailsActions}>
                <button className={styles.primaryAction}>
                  <Rocket size={18} />
                  <span>Experience {selectedPillar.title}</span>
                  <ArrowRight size={18} />
                </button>
                <button className={styles.secondaryAction}>
                  <Eye size={18} />
                  <span>See Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Platform Activity */}
        <div className={`${styles.liveActivity} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.activityHeader}>
            <h3>Live Platform Activity</h3>
            <div className={styles.activityIndicator}>
              <div className={styles.pulseDot}></div>
              <span>Real-time engineering activity</span>
            </div>
          </div>
          
          <div className={styles.activityFeed}>
            {realTimeData.map((activity, index) => {
              const IconComponent = activity.icon;
              const isActive = index === liveActivityIndex;
              
              return (
                <div 
                  key={index} 
                  className={`${styles.activityItem} ${isActive ? styles.active : ''}`}
                >
                  <div className={styles.activityIcon}>
                    <IconComponent size={16} />
                  </div>
                  <div className={styles.activityContent}>
                    <p>
                      <strong>{activity.engineer}</strong> {activity.action}
                      <span className={styles.fieldTag}>{activity.field}</span>
                    </p>
                    <span className={styles.activityTime}>{activity.time}</span>
                  </div>
                  <div className={styles.activityStatus}>
                    <div className={styles.statusDot}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Ecosystem */}
        <div className={`${styles.ecosystem} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ecosystemHeader}>
            <h3>Complete Engineering Ecosystem</h3>
            <p>Everything you need to build, showcase, and advance your engineering career</p>
          </div>
          
          <div className={styles.ecosystemGrid}>
            <div className={styles.ecosystemCard}>
              <div className={styles.cardIcon}>
                <Users size={28} />
              </div>
              <h4>Professional Network</h4>
              <p>Connect with engineers, mentors, and industry leaders across all disciplines</p>
              <div className={styles.cardStat}>127K+ Engineers</div>
            </div>
            
            <div className={styles.ecosystemCard}>
              <div className={styles.cardIcon}>
                <Database size={28} />
              </div>
              <h4>Project Repository</h4>
              <p>Showcase your work with rich media uploads and technical documentation</p>
              <div className={styles.cardStat}>2.4M+ Projects</div>
            </div>
            
            <div className={styles.ecosystemCard}>
              <div className={styles.cardIcon}>
                <Cpu size={28} />
              </div>
              <h4>Skills Intelligence</h4>
              <p>AI-powered skill verification and career path recommendations</p>
              <div className={styles.cardStat}>450+ Skills</div>
            </div>
            
            <div className={styles.ecosystemCard}>
              <div className={styles.cardIcon}>
                <Globe size={28} />
              </div>
              <h4>Global Opportunities</h4>
              <p>Access engineering roles worldwide with precision matching technology</p>
              <div className={styles.cardStat}>94% Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Ready to Transform Your Engineering Career?</h3>
            <p>Join the platform that's revolutionizing how engineers build careers, showcase skills, and connect with opportunities.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>Start Building Your Profile</span>
                <ArrowRight size={20} />
              </button>
              <button className={styles.ctaSecondary}>
                <Play size={18} />
                <span>Watch Platform Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}