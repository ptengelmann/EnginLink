import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  FolderOpen, 
  Search, 
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Code,
  Zap,
  Building,
  FlaskConical,
  Plane,
  ArrowRight,
  Play,
  CheckCircle2,
  Eye,
  Download,
  Share2,
  Star,
  MousePointer2,
  Layers,
  Database,
  BarChart3
} from 'lucide-react';
import styles from './PlatformOverview.module.scss';

const platformFeatures = [
  {
    id: 'profiles',
    title: 'Engineer-Centric Profiles',
    description: 'Your profile showcases what matters: tools you\'ve mastered, projects you\'ve built, and certifications you\'ve earned — not vague experience bullets.',
    icon: Users,
    color: '#FF6B35',
    stats: { users: '127K+', tools: '450+', accuracy: '99%' },
    preview: {
      type: 'profile',
      data: {
        name: 'Sarah Chen',
        title: 'Mechanical Engineer',
        tools: ['SolidWorks', 'ANSYS', 'MATLAB', 'Python'],
        projects: 12,
        certifications: 8,
        skills: ['CAD Design', 'FEA Analysis', 'Thermal Modeling']
      }
    },
    benefits: [
      'Skill-first presentation',
      'Visual tool proficiency',
      'Project-based validation',
      'Industry recognition'
    ]
  },
  {
    id: 'projects',
    title: 'Project-Based Proof',
    description: 'Upload CADs, PDFs, code repositories, simulations — your work becomes your portfolio. Every project is tagged with tools and skills used.',
    icon: FolderOpen,
    color: '#4ECDC4',
    stats: { projects: '2.4M+', formats: '25+', views: '890M+' },
    preview: {
      type: 'project',
      data: {
        title: 'Autonomous Drone Navigation System',
        type: 'Aerospace Engineering',
        tools: ['MATLAB', 'Simulink', 'C++', 'ROS'],
        files: ['CAD Models', 'Simulation Results', 'Source Code', 'Technical Report'],
        views: 1247,
        likes: 89
      }
    },
    benefits: [
      'Rich media uploads',
      'Automated skill tagging',
      'Version control integration',
      'Peer review system'
    ]
  },
  {
    id: 'hiring',
    title: 'Precision Hiring',
    description: 'Recruiters filter by specific technical tools, engineering disciplines, or verified certifications. No keyword gaming — pure skill-based discovery.',
    icon: Search,
    color: '#6C5CE7',
    stats: { matches: '94%', time: '67%', quality: '8.9/10' },
    preview: {
      type: 'search',
      data: {
        filters: ['SolidWorks', 'ANSYS', 'Mechanical Design', '3-5 years'],
        results: 127,
        topMatch: 'Alex Rodriguez - Senior Mechanical Engineer',
        compatibility: 96
      }
    },
    benefits: [
      'Skill-based filtering',
      'Project verification',
      'Cultural fit matching',
      'Real-time availability'
    ]
  },
  {
    id: 'academy',
    title: 'EnginLink Academy',
    description: 'Earn industry-recognized certifications through project-based learning and real simulations. Progress is verified through practical work, not passive watching.',
    icon: BookOpen,
    color: '#A8E6CF',
    stats: { courses: '150+', completion: '89%', placement: '94%' },
    preview: {
      type: 'course',
      data: {
        title: 'Advanced FEA with ANSYS',
        progress: 67,
        modules: ['Theory', 'Simulation', 'Project', 'Certification'],
        currentProject: 'Bridge Stress Analysis',
        deadline: '3 days'
      }
    },
    benefits: [
      'Hands-on learning',
      'Industry partnerships',
      'Verified certifications',
      'Career pathways'
    ]
  }
];

const engineeringDisciplines = [
  { name: 'Mechanical', icon: Settings, projects: '847K', color: '#FF6B35' },
  { name: 'Electrical', icon: Zap, projects: '692K', color: '#FFD23F' },
  { name: 'Civil', icon: Building, projects: '534K', color: '#4ECDC4' },
  { name: 'Chemical', icon: FlaskConical, projects: '298K', color: '#A8E6CF' },
  { name: 'Aerospace', icon: Plane, projects: '187K', color: '#6C5CE7' },
];

export default function PlatformOverview() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredDiscipline, setHoveredDiscipline] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const sectionRef = useRef(null);

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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % platformFeatures.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    setInteractionCount(prev => prev + 1);
  };

  const renderPreview = (feature) => {
    const { preview } = feature;
    
    switch (preview.type) {
      case 'profile':
        return (
          <div className={styles.profilePreview}>
            <div className={styles.profileHeader}>
              <div className={styles.avatar} style={{ backgroundColor: feature.color }}></div>
              <div className={styles.profileInfo}>
                <h4>{preview.data.name}</h4>
                <span>{preview.data.title}</span>
                <div className={styles.verificationBadge}>
                  <CheckCircle2 size={12} />
                  Verified Engineer
                </div>
              </div>
            </div>
            <div className={styles.skillsSection}>
              <div className={styles.toolsList}>
                {preview.data.tools.map((tool, i) => (
                  <span key={i} className={styles.toolTag}>{tool}</span>
                ))}
              </div>
              <div className={styles.profileStats}>
                <div className={styles.stat}>
                  <FolderOpen size={14} />
                  <span>{preview.data.projects} Projects</span>
                </div>
                <div className={styles.stat}>
                  <Award size={14} />
                  <span>{preview.data.certifications} Certs</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'project':
        return (
          <div className={styles.projectPreview}>
            <div className={styles.projectHeader}>
              <h4>{preview.data.title}</h4>
              <span className={styles.projectType}>{preview.data.type}</span>
            </div>
            <div className={styles.projectFiles}>
              {preview.data.files.map((file, i) => (
                <div key={i} className={styles.fileItem}>
                  <Layers size={14} />
                  <span>{file}</span>
                </div>
              ))}
            </div>
            <div className={styles.projectStats}>
              <div className={styles.stat}>
                <Eye size={14} />
                <span>{preview.data.views}</span>
              </div>
              <div className={styles.stat}>
                <Star size={14} />
                <span>{preview.data.likes}</span>
              </div>
              <div className={styles.stat}>
                <Share2 size={14} />
                <span>Share</span>
              </div>
            </div>
          </div>
        );
      
      case 'search':
        return (
          <div className={styles.searchPreview}>
            <div className={styles.searchFilters}>
              {preview.data.filters.map((filter, i) => (
                <span key={i} className={styles.filterTag}>{filter}</span>
              ))}
            </div>
            <div className={styles.searchResults}>
              <div className={styles.resultsCount}>{preview.data.results} engineers found</div>
              <div className={styles.topResult}>
                <div className={styles.resultProfile}>
                  <div className={styles.resultAvatar}></div>
                  <div className={styles.resultInfo}>
                    <span>{preview.data.topMatch}</span>
                    <div className={styles.compatibility}>
                      {preview.data.compatibility}% match
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'course':
        return (
          <div className={styles.coursePreview}>
            <div className={styles.courseHeader}>
              <h4>{preview.data.title}</h4>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progress} 
                  style={{ width: `${preview.data.progress}%` }}
                ></div>
              </div>
              <span>{preview.data.progress}% Complete</span>
            </div>
            <div className={styles.courseModules}>
              {preview.data.modules.map((module, i) => (
                <div 
                  key={i} 
                  className={`${styles.moduleItem} ${i <= 1 ? styles.completed : ''}`}
                >
                  <CheckCircle2 size={14} />
                  <span>{module}</span>
                </div>
              ))}
            </div>
            <div className={styles.currentProject}>
              <MousePointer2 size={14} />
              <span>Current: {preview.data.currentProject}</span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <Settings size={16} />
            <span>Platform Overview</span>
          </div>
          <h2>Built for Engineers. Built on Proof.</h2>
          <p>
            EnginLink isn't just another social network. It's a precision-engineered ecosystem 
            where engineering students, professionals, mentors, and recruiters connect through 
            verified skills, real projects, and measurable technical expertise.
          </p>
          
          <div className={styles.platformStats}>
            <div className={styles.statItem}>
              <TrendingUp className={styles.statIcon} size={24} />
              <div className={styles.statValue}>127K+</div>
              <div className={styles.statLabel}>Active Engineers</div>
            </div>
            <div className={styles.statItem}>
              <Database className={styles.statIcon} size={24} />
              <div className={styles.statValue}>2.4M+</div>
              <div className={styles.statLabel}>Technical Projects</div>
            </div>
            <div className={styles.statItem}>
              <BarChart3 className={styles.statIcon} size={24} />
              <div className={styles.statValue}>{interactionCount + 47}</div>
              <div className={styles.statLabel}>Live Interactions</div>
            </div>
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className={`${styles.featuresShowcase} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.featureNavigation}>
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <button
                  key={index}
                  className={`${styles.featureTab} ${activeFeature === index ? styles.active : ''}`}
                  onClick={() => handleFeatureClick(index)}
                  style={{ '--feature-color': feature.color }}
                >
                  <IconComponent size={20} />
                  <span>{feature.title}</span>
                  {activeFeature === index && <div className={styles.activeIndicator}></div>}
                </button>
              );
            })}
          </div>

          <div className={styles.featureContent}>
            <div className={styles.featureDetails}>
              <div className={styles.featureInfo}>
                <h3>{platformFeatures[activeFeature].title}</h3>
                <p>{platformFeatures[activeFeature].description}</p>
                
                <div className={styles.featureStats}>
                  {Object.entries(platformFeatures[activeFeature].stats).map(([key, value]) => (
                    <div key={key} className={styles.featureStat}>
                      <span className={styles.statValue}>{value}</span>
                      <span className={styles.statKey}>{key}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.featureBenefits}>
                  {platformFeatures[activeFeature].benefits.map((benefit, i) => (
                    <div key={i} className={styles.benefit}>
                      <CheckCircle2 size={16} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className={styles.exploreBtn}>
                  <span>Explore This Feature</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className={styles.featurePreview}>
              <div className={styles.previewWindow}>
                <div className={styles.windowHeader}>
                  <div className={styles.windowControls}>
                    <span></span><span></span><span></span>
                  </div>
                  <span className={styles.windowTitle}>EnginLink Platform</span>
                </div>
                <div className={styles.previewContent}>
                  {renderPreview(platformFeatures[activeFeature])}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Disciplines Grid */}
        <div className={`${styles.disciplinesSection} ${isVisible ? styles.visible : ''}`}>
          <h3>Engineering Disciplines We Serve</h3>
          <p>Connecting engineers across all technical fields with specialized tools and communities</p>
          
          <div className={styles.disciplinesGrid}>
            {engineeringDisciplines.map((discipline, index) => {
              const IconComponent = discipline.icon;
              return (
                <div
                  key={index}
                  className={`${styles.disciplineCard} ${hoveredDiscipline === index ? styles.hovered : ''}`}
                  onMouseEnter={() => setHoveredDiscipline(index)}
                  onMouseLeave={() => setHoveredDiscipline(null)}
                  style={{ '--discipline-color': discipline.color }}
                >
                  <div className={styles.disciplineIcon}>
                    <IconComponent size={32} />
                  </div>
                  <h4>{discipline.name} Engineering</h4>
                  <div className={styles.disciplineStats}>
                    <span>{discipline.projects} projects</span>
                  </div>
                  <button className={styles.disciplineBtn}>
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Ready to Build Your Engineering Career?</h3>
            <p>Join 127,000+ engineers who are advancing their careers through verified skills and real projects.</p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>
                <span>Start Building Your Profile</span>
                <ArrowRight size={20} />
              </button>
              <button className={styles.secondaryCta}>
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