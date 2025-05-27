import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Code,
  Zap,
  Building,
  FlaskConical,
  Plane,
  Cog,
  Eye,
  TrendingUp,
  Users as UsersIcon,
  Award,
  BookOpen,
  Briefcase,
  Target,
  Leaf,
  Cpu,
  Factory,
  ChevronRight,
  Lightbulb,
  Globe,
  BarChart3
} from 'lucide-react';
import styles from './CommunityShowcase.module.scss';

const engineeringDisciplines = {
  'Mechanical Engineering': { 
    icon: Cog, 
    color: '#FF6B35',
    bgGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
    description: 'Design, build, and optimize mechanical systems from automotive engines to robotics',
    keyAreas: ['Automotive Design', 'Robotics', 'HVAC Systems', 'Manufacturing'],
    tools: ['SolidWorks', 'CATIA', 'ANSYS', 'MATLAB'],
    jobGrowth: '+8%',
    avgSalary: '$95K',
    activeProjects: '847K',
    topCompanies: ['Tesla', 'Ford', 'Boeing', 'GE'],
    skills: ['CAD Design', 'FEA Analysis', 'Thermodynamics', 'Materials Science']
  },
  'Civil Engineering': { 
    icon: Building, 
    color: '#4ECDC4',
    bgGradient: 'linear-gradient(135deg, #4ECDC4 0%, #6EE6DD 100%)',
    description: 'Plan, design, and oversee construction of infrastructure that shapes our world',
    keyAreas: ['Infrastructure', 'Transportation', 'Environmental', 'Structural'],
    tools: ['AutoCAD Civil 3D', 'Revit', 'SAP2000', 'ETABS'],
    jobGrowth: '+11%',
    avgSalary: '$88K',
    activeProjects: '692K',
    topCompanies: ['Arup', 'AECOM', 'Jacobs', 'HDR'],
    skills: ['Structural Analysis', 'Project Management', 'Environmental Impact', 'Construction']
  },
  'Electrical Engineering': { 
    icon: Zap, 
    color: '#FFD23F',
    bgGradient: 'linear-gradient(135deg, #FFD23F 0%, #FFE55C 100%)',
    description: 'Innovate with electrical systems, from microchips to power grids',
    keyAreas: ['Power Systems', 'Electronics', 'Control Systems', 'Telecommunications'],
    tools: ['MATLAB', 'Simulink', 'LabVIEW', 'Altium Designer'],
    jobGrowth: '+7%',
    avgSalary: '$103K',
    activeProjects: '534K',
    topCompanies: ['Intel', 'Qualcomm', 'Siemens', 'ABB'],
    skills: ['Circuit Design', 'Power Systems', 'Signal Processing', 'Embedded Systems']
  },
  'Chemical Engineering': { 
    icon: FlaskConical, 
    color: '#A8E6CF',
    bgGradient: 'linear-gradient(135deg, #A8E6CF 0%, #C8F2E0 100%)',
    description: 'Transform raw materials into valuable products through chemical processes',
    keyAreas: ['Process Design', 'Pharmaceuticals', 'Energy', 'Materials'],
    tools: ['Aspen Plus', 'ChemCAD', 'HYSYS', 'MATLAB'],
    jobGrowth: '+9%',
    avgSalary: '$108K',
    activeProjects: '298K',
    topCompanies: ['DuPont', 'Dow', 'ExxonMobil', 'BASF'],
    skills: ['Process Optimization', 'Reaction Engineering', 'Mass Transfer', 'Thermodynamics']
  },
  'Aerospace Engineering': { 
    icon: Plane, 
    color: '#6C5CE7',
    bgGradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
    description: 'Push the boundaries of flight and space exploration technology',
    keyAreas: ['Aircraft Design', 'Space Systems', 'Propulsion', 'Aerodynamics'],
    tools: ['CATIA', 'ANSYS Fluent', 'MATLAB', 'SolidWorks'],
    jobGrowth: '+6%',
    avgSalary: '$118K',
    activeProjects: '187K',
    topCompanies: ['Boeing', 'Airbus', 'SpaceX', 'Lockheed Martin'],
    skills: ['Aerodynamics', 'Flight Dynamics', 'Propulsion Systems', 'Materials Engineering']
  },
  'Software Engineering': { 
    icon: Code, 
    color: '#FF6B9D',
    bgGradient: 'linear-gradient(135deg, #FF6B9D 0%, #FF8BB5 100%)',
    description: 'Build the digital systems and applications that power modern technology',
    keyAreas: ['Web Development', 'Mobile Apps', 'AI/ML', 'Cloud Systems'],
    tools: ['React', 'Python', 'AWS', 'Docker'],
    jobGrowth: '+22%',
    avgSalary: '$110K',
    activeProjects: '1.2M',
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta'],
    skills: ['Full-Stack Development', 'Cloud Architecture', 'DevOps', 'Machine Learning']
  },
  'Industrial Engineering': { 
    icon: Factory, 
    color: '#FFA726',
    bgGradient: 'linear-gradient(135deg, #FFA726 0%, #FFB74D 100%)',
    description: 'Optimize complex systems and processes for maximum efficiency',
    keyAreas: ['Operations Research', 'Supply Chain', 'Quality Control', 'Manufacturing'],
    tools: ['Arena', 'Minitab', 'Excel', 'Python'],
    jobGrowth: '+10%',
    avgSalary: '$92K',
    activeProjects: '423K',
    topCompanies: ['Amazon', 'Toyota', 'GE', 'Ford'],
    skills: ['Process Optimization', 'Lean Manufacturing', 'Supply Chain', 'Quality Systems']
  },
  'Environmental Engineering': { 
    icon: Leaf, 
    color: '#66BB6A',
    bgGradient: 'linear-gradient(135deg, #66BB6A 0%, #81C784 100%)',
    description: 'Develop solutions for environmental challenges and sustainability',
    keyAreas: ['Water Treatment', 'Air Quality', 'Waste Management', 'Renewable Energy'],
    tools: ['AutoCAD', 'GIS', 'MATLAB', 'R'],
    jobGrowth: '+8%',
    avgSalary: '$93K',
    activeProjects: '234K',
    topCompanies: ['AECOM', 'Jacobs', 'Tetra Tech', 'CH2M'],
    skills: ['Environmental Modeling', 'Water Treatment', 'Air Quality', 'Sustainability']
  },
  'Biomedical Engineering': { 
    icon: TrendingUp, 
    color: '#EF5350',
    bgGradient: 'linear-gradient(135deg, #EF5350 0%, #F48FB1 100%)',
    description: 'Bridge engineering and medicine to improve human health and wellbeing',
    keyAreas: ['Medical Devices', 'Biomaterials', 'Imaging', 'Prosthetics'],
    tools: ['MATLAB', 'SolidWorks', 'COMSOL', 'LabVIEW'],
    jobGrowth: '+7%',
    avgSalary: '$98K',
    activeProjects: '156K',
    topCompanies: ['Medtronic', 'Johnson & Johnson', 'GE Healthcare', 'Siemens'],
    skills: ['Biomechanics', 'Medical Imaging', 'Biomaterials', 'Regulatory Affairs']
  },
  'Materials Engineering': { 
    icon: Cpu, 
    color: '#AB47BC',
    bgGradient: 'linear-gradient(135deg, #AB47BC 0%, #CE93D8 100%)',
    description: 'Discover and develop new materials that enable technological breakthroughs',
    keyAreas: ['Semiconductors', 'Composites', 'Nanotechnology', 'Metallurgy'],
    tools: ['Origin', 'ImageJ', 'COMSOL', 'Python'],
    jobGrowth: '+9%',
    avgSalary: '$100K',
    activeProjects: '198K',
    topCompanies: ['Intel', 'Applied Materials', '3M', 'Corning'],
    skills: ['Material Characterization', 'Nanotechnology', 'Failure Analysis', 'Process Development']
  }
};

const industryStats = [
  { label: 'Engineering Disciplines', value: '10+', icon: Wrench, color: '#4ECDC4' },
  { label: 'Active Projects', value: '4.8M+', icon: Briefcase, color: '#6C5CE7' },
  { label: 'Career Paths', value: '200+', icon: Target, color: '#FF6B35' },
  { label: 'Avg Growth Rate', value: '+9.2%', icon: TrendingUp, color: '#A8E6CF' }
];

export default function EngineeringDisciplines() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('Mechanical Engineering');
  const [hoveredDiscipline, setHoveredDiscipline] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const disciplineKeys = Object.keys(engineeringDisciplines);

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
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % disciplineKeys.length;
          setSelectedDiscipline(disciplineKeys[nextIndex]);
          return nextIndex;
        });
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, disciplineKeys]);

  const handleDisciplineSelect = (discipline) => {
    setSelectedDiscipline(discipline);
    setCurrentIndex(disciplineKeys.indexOf(discipline));
    setInteractionCount(prev => prev + 1);
  };

  const selectedData = engineeringDisciplines[selectedDiscipline];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Enhanced Header */}
        <div className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <Wrench size={16} />
            <span>Engineering Disciplines</span>
          </div>
          <h2>Engineering Fields We Serve</h2>
          <p>
            Explore diverse engineering disciplines where innovation meets opportunity. 
            From traditional fields to cutting-edge specializations — discover your engineering path.
          </p>
          
          <div className={styles.industryStats}>
            {industryStats.map((stat, index) => {
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

        {/* Interactive Controls */}
        <div className={`${styles.controls} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.controlsHeader}>
            <h3>Explore Engineering Disciplines</h3>
            <div className={styles.playbackControls}>
              <button
                className={`${styles.controlBtn} ${isAutoPlaying ? styles.playing : styles.paused}`}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                className={styles.controlBtn}
                onClick={() => {
                  setCurrentIndex(0);
                  setSelectedDiscipline(disciplineKeys[0]);
                  setIsAutoPlaying(true);
                }}
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Discipline Showcase */}
        <div className={`${styles.disciplineShowcase} ${isVisible ? styles.visible : ''}`}>
          {/* Discipline Navigation */}
          <div className={styles.disciplineNav}>
            {disciplineKeys.map((discipline, index) => {
              const config = engineeringDisciplines[discipline];
              const IconComponent = config.icon;
              const isSelected = selectedDiscipline === discipline;
              const isHovered = hoveredDiscipline === discipline;
              
              return (
                <button
                  key={discipline}
                  className={`${styles.disciplineNavItem} ${isSelected ? styles.selected : ''} ${isHovered ? styles.hovered : ''}`}
                  onClick={() => handleDisciplineSelect(discipline)}
                  onMouseEnter={() => setHoveredDiscipline(discipline)}
                  onMouseLeave={() => setHoveredDiscipline(null)}
                  style={{ 
                    '--discipline-color': config.color,
                    '--discipline-gradient': config.bgGradient,
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <div className={styles.navIcon}>
                    <IconComponent size={20} />
                  </div>
                  <span className={styles.navLabel}>{discipline.replace(' Engineering', '')}</span>
                  <div className={styles.navIndicator}></div>
                </button>
              );
            })}
          </div>

          {/* Selected Discipline Details */}
          <div className={styles.disciplineDetails}>
            <div className={styles.detailsHeader}>
              <div className={styles.disciplineTitle}>
                <div 
                  className={styles.titleIcon}
                  style={{ background: selectedData.bgGradient }}
                >
                  <selectedData.icon size={32} />
                </div>
                <div className={styles.titleText}>
                  <h3>{selectedDiscipline}</h3>
                  <p>{selectedData.description}</p>
                </div>
              </div>
              
              <div className={styles.disciplineMetrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>{selectedData.jobGrowth}</div>
                  <div className={styles.metricLabel}>Job Growth</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>{selectedData.avgSalary}</div>
                  <div className={styles.metricLabel}>Avg Salary</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>{selectedData.activeProjects}</div>
                  <div className={styles.metricLabel}>Active Projects</div>
                </div>
              </div>
            </div>

            <div className={styles.detailsContent}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailCard}>
                  <div className={styles.cardHeader}>
                    <Target size={20} />
                    <h4>Key Areas</h4>
                  </div>
                  <div className={styles.cardContent}>
                    {selectedData.keyAreas.map((area, index) => (
                      <span key={index} className={styles.areaTag}>{area}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.cardHeader}>
                    <Wrench size={20} />
                    <h4>Essential Tools</h4>
                  </div>
                  <div className={styles.cardContent}>
                    {selectedData.tools.map((tool, index) => (
                      <span key={index} className={styles.toolTag}>{tool}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.cardHeader}>
                    <Award size={20} />
                    <h4>Core Skills</h4>
                  </div>
                  <div className={styles.cardContent}>
                    {selectedData.skills.map((skill, index) => (
                      <span key={index} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.cardHeader}>
                    <Building size={20} />
                    <h4>Top Companies</h4>
                  </div>
                  <div className={styles.cardContent}>
                    {selectedData.topCompanies.map((company, index) => (
                      <span key={index} className={styles.companyTag}>{company}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.detailsActions}>
              <button className={styles.primaryAction}>
                <BookOpen size={18} />
                <span>Explore Career Paths</span>
                <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryAction}>
                <UsersIcon size={18} />
                <span>Find Engineers</span>
              </button>
              <button className={styles.tertiaryAction}>
                <Lightbulb size={18} />
                <span>View Projects</span>
              </button>
            </div>
          </div>
        </div>

        {/* Engineering Impact Section */}
        <div className={`${styles.impactSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.impactHeader}>
            <h3>Engineering Impact Worldwide</h3>
            <p>How these disciplines are shaping our future</p>
          </div>
          
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <Globe size={32} />
              </div>
              <h4>Global Reach</h4>
              <p>Engineers work across 195+ countries, solving challenges from local communities to global initiatives.</p>
              <div className={styles.impactStat}>195+ Countries</div>
            </div>
            
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <BarChart3 size={32} />
              </div>
              <h4>Economic Impact</h4>
              <p>Engineering contributes $2.3T annually to the global economy through innovation and infrastructure.</p>
              <div className={styles.impactStat}>$2.3T+ Annual Impact</div>
            </div>
            
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <Lightbulb size={32} />
              </div>
              <h4>Innovation Rate</h4>
              <p>Over 3M+ engineering patents filed annually, driving technological advancement worldwide.</p>
              <div className={styles.impactStat}>3M+ Patents/Year</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Ready to Build Your Engineering Career?</h3>
            <p>Join engineers across all disciplines who are advancing their careers through verified skills and real projects.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>Start Your Engineering Journey</span>
                <ArrowRight size={20} />
              </button>
              <button className={styles.ctaSecondary}>
                <BookOpen size={18} />
                <span>Explore All Disciplines</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}