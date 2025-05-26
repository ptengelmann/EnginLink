import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Briefcase, 
  Wrench,
  MapPin,
  Star,
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
  Heart,
  MessageCircle,
  Share2,
  Award,
  TrendingUp,
  Users as UsersIcon,
  Clock,
  CheckCircle2,
  Filter,
  Activity
} from 'lucide-react';
import styles from './CommunityShowcase.module.scss';

const engineeringFields = {
  'Biomechanics': { icon: Heart, color: '#FF6B35', bgGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)' },
  'Structural Simulation': { icon: Building, color: '#4ECDC4', bgGradient: 'linear-gradient(135deg, #4ECDC4 0%, #6EE6DD 100%)' },
  'Fluid Dynamics': { icon: Plane, color: '#6C5CE7', bgGradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)' },
  'Mobility & Energy': { icon: Zap, color: '#FFD23F', bgGradient: 'linear-gradient(135deg, #FFD23F 0%, #FFE55C 100%)' },
  'Software Engineering': { icon: Code, color: '#A8E6CF', bgGradient: 'linear-gradient(135deg, #A8E6CF 0%, #C8F2E0 100%)' },
  'Mechanical Design': { icon: Cog, color: '#FF6B9D', bgGradient: 'linear-gradient(135deg, #FF6B9D 0%, #FF8BB5 100%)' }
};

const users = [
  {
    id: 1,
    name: 'Olivia Zhang',
    role: 'Senior Mechanical Engineer',
    company: 'Tesla',
    project: 'Modular prosthetic joint system using FEA + SolidWorks',
    field: 'Biomechanics',
    location: 'San Francisco, CA',
    tools: ['SolidWorks', 'ANSYS', 'MATLAB', 'Python'],
    achievements: 12,
    followers: 2847,
    rating: 4.9,
    projectViews: 15420,
    joinedMonths: 14,
    status: 'active'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Structural Engineer',
    company: 'Arup',
    project: 'Dynamic load bridge simulation — real-time deformation visualization',
    field: 'Structural Simulation',
    location: 'London, UK',
    tools: ['SAP2000', 'ETABS', 'Revit', 'Python'],
    achievements: 8,
    followers: 1923,
    rating: 4.8,
    projectViews: 9876,
    joinedMonths: 11,
    status: 'active'
  },
  {
    id: 3,
    name: 'Sara Lee',
    role: 'Aerospace Engineering Student',
    company: 'MIT',
    project: 'Low-drag winglet optimization using OpenFOAM + MATLAB',
    field: 'Fluid Dynamics',
    location: 'Boston, MA',
    tools: ['OpenFOAM', 'MATLAB', 'CATIA', 'CFX'],
    achievements: 5,
    followers: 1456,
    rating: 4.7,
    projectViews: 7234,
    joinedMonths: 8,
    status: 'active'
  },
  {
    id: 4,
    name: 'Dev Patel',
    role: 'Technical Recruiter',
    company: 'Microsoft',
    project: 'Sourcing simulation-focused talent for EV R&D team',
    field: 'Mobility & Energy',
    location: 'Seattle, WA',
    tools: ['LinkedIn Recruiter', 'HackerRank', 'GitHub', 'Slack'],
    achievements: 15,
    followers: 3421,
    rating: 4.9,
    projectViews: 12890,
    joinedMonths: 18,
    status: 'hiring'
  },
  {
    id: 5,
    name: 'Elena Kowalski',
    role: 'Software Engineer',
    company: 'Google',
    project: 'AI-powered structural health monitoring system',
    field: 'Software Engineering',
    location: 'Mountain View, CA',
    tools: ['TensorFlow', 'Python', 'React', 'Docker'],
    achievements: 18,
    followers: 4567,
    rating: 4.9,
    projectViews: 23456,
    joinedMonths: 22,
    status: 'active'
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    role: 'Manufacturing Engineer',
    company: 'Boeing',
    project: 'Automated quality inspection using computer vision',
    field: 'Mechanical Design',
    location: 'Chicago, IL',
    tools: ['Inventor', 'AutoCAD', 'OpenCV', 'ROS'],
    achievements: 10,
    followers: 2134,
    rating: 4.8,
    projectViews: 11234,
    joinedMonths: 16,
    status: 'active'
  }
];

const stats = [
  { label: 'Active Engineers', value: '127K+', icon: UsersIcon, color: '#4ECDC4' },
  { label: 'Projects Shared', value: '2.4M+', icon: Briefcase, color: '#6C5CE7' },
  { label: 'Tools Mastered', value: '450+', icon: Wrench, color: '#FF6B35' },
  { label: 'Success Rate', value: '94%', icon: TrendingUp, color: '#A8E6CF' }
];

export default function CommunityShowcase() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
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
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % users.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const filteredUsers = filter === 'all' ? users : users.filter(user => 
    user.field.toLowerCase().includes(filter.toLowerCase())
  );

  const handleUserInteraction = (user) => {
    setSelectedUser(user);
    setInteractionCount(prev => prev + 1);
  };

  const fieldFilters = ['all', ...Object.keys(engineeringFields)];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Enhanced Header */}
        <div className={`${styles.intro} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <UsersIcon size={16} />
            <span>Engineering Community</span>
          </div>
          <h2>Where Engineers Connect & Create</h2>
          <p>
            From students building their first projects to senior engineers leading innovation — 
            discover the diverse engineering community driving technological advancement worldwide.
          </p>
          
          <div className={styles.communityStats}>
            {stats.map((stat, index) => {
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
        <div className={`${styles.showcaseControls} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.filterTabs}>
            {fieldFilters.map((filterOption) => (
              <button
                key={filterOption}
                className={`${styles.filterTab} ${filter === filterOption ? styles.active : ''}`}
                onClick={() => {
                  setFilter(filterOption);
                  setInteractionCount(prev => prev + 1);
                }}
              >
                {filterOption === 'all' ? 'All Fields' : filterOption}
              </button>
            ))}
          </div>

          <div className={styles.playbackControls}>
            <button
              className={`${styles.controlBtn} ${isPlaying ? styles.playing : styles.paused}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              className={styles.controlBtn}
              onClick={() => {
                setCurrentIndex(0);
                setIsPlaying(true);
              }}
            >
              <RotateCcw size={16} />
              <span>Restart</span>
            </button>
          </div>
        </div>

        {/* Enhanced User Cards Grid */}
        <div className={`${styles.userGrid} ${isVisible ? styles.visible : ''}`}>
          {filteredUsers.map((user, index) => {
            const fieldConfig = engineeringFields[user.field];
            const FieldIcon = fieldConfig?.icon || User;
            const isHighlighted = index === currentIndex % filteredUsers.length;
            const isHovered = hoveredUser === user.id;

            return (
              <div
                key={user.id}
                className={`${styles.userCard} ${isHighlighted ? styles.highlighted : ''} ${isHovered ? styles.hovered : ''}`}
                onMouseEnter={() => setHoveredUser(user.id)}
                onMouseLeave={() => setHoveredUser(null)}
                onClick={() => handleUserInteraction(user)}
                style={{ 
                  '--field-color': fieldConfig?.color,
                  '--field-gradient': fieldConfig?.bgGradient,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.profileSection}>
                    <div className={styles.avatarContainer}>
                      <div 
                        className={styles.avatar} 
                        style={{ background: fieldConfig?.bgGradient }}
                      >
                        <User size={24} />
                      </div>
                      <div className={`${styles.statusIndicator} ${styles[user.status]}`}></div>
                    </div>
                    <div className={styles.userInfo}>
                      <h3>{user.name}</h3>
                      <p className={styles.role}>{user.role}</p>
                      <div className={styles.companyLocation}>
                        <span className={styles.company}>{user.company}</span>
                        <span className={styles.location}>
                          <MapPin size={12} />
                          {user.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.fieldBadge}>
                    <FieldIcon size={16} />
                    <span>{user.field}</span>
                  </div>
                </div>

                <div className={styles.projectShowcase}>
                  <h4>Latest Project</h4>
                  <p className={styles.projectDescription}>{user.project}</p>
                  
                  <div className={styles.projectTools}>
                    {user.tools.slice(0, 3).map((tool, i) => (
                      <span key={i} className={styles.toolTag}>{tool}</span>
                    ))}
                    {user.tools.length > 3 && (
                      <span className={styles.toolMore}>+{user.tools.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className={styles.userMetrics}>
                  <div className={styles.metricRow}>
                    <div className={styles.metric}>
                      <Eye size={14} />
                      <span>{user.projectViews.toLocaleString()}</span>
                    </div>
                    <div className={styles.metric}>
                      <Heart size={14} />
                      <span>{user.followers.toLocaleString()}</span>
                    </div>
                    <div className={styles.metric}>
                      <Award size={14} />
                      <span>{user.achievements}</span>
                    </div>
                  </div>
                  
                  <div className={styles.ratingSection}>
                    <div className={styles.rating}>
                      <Star size={14} fill="currentColor" />
                      <span>{user.rating}</span>
                    </div>
                    <div className={styles.joinDate}>
                      <Clock size={12} />
                      <span>{user.joinedMonths}mo</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button className={`${styles.actionBtn} ${styles.primary}`}>
                    <MessageCircle size={16} />
                    <span>Connect</span>
                  </button>
                  <button className={`${styles.actionBtn} ${styles.secondary}`}>
                    <Eye size={16} />
                    <span>View Profile</span>
                  </button>
                  <button className={`${styles.actionBtn} ${styles.iconOnly}`}>
                    <Share2 size={16} />
                  </button>
                </div>

                <div className={styles.cardOverlay}>
                  <div className={styles.overlayContent}>
                    <CheckCircle2 size={24} />
                    <span>Verified Engineer</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Activity Feed */}
        <div className={`${styles.activityFeed} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.feedHeader}>
            <h3>Live Community Activity</h3>
            <div className={styles.activityIndicator}>
              <div className={styles.pulseDot}></div>
              <span>{interactionCount + 847} interactions in the last hour</span>
            </div>
          </div>
          
          <div className={styles.activityItems}>
            <div className={styles.activityItem}>
              <div 
                className={styles.activityAvatar} 
                style={{ background: engineeringFields['Software Engineering'].bgGradient }}
              ></div>
              <div className={styles.activityContent}>
                <p><strong>Elena K.</strong> shared a new ML model for structural analysis</p>
                <span className={styles.activityTime}>2 min ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div 
                className={styles.activityAvatar} 
                style={{ background: engineeringFields['Fluid Dynamics'].bgGradient }}
              ></div>
              <div className={styles.activityContent}>
                <p><strong>Sara L.</strong> completed "Advanced CFD Certification"</p>
                <span className={styles.activityTime}>5 min ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div 
                className={styles.activityAvatar} 
                style={{ background: engineeringFields['Mechanical Design'].bgGradient }}
              ></div>
              <div className={styles.activityContent}>
                <p><strong>Ahmed H.</strong> joined the Robotics Innovation Challenge</p>
                <span className={styles.activityTime}>8 min ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.communityCta} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Join the Engineering Revolution</h3>
            <p>Connect with engineers worldwide, showcase your projects, and accelerate your career through verified skills.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>Join the Community</span>
                <ArrowRight size={20} />
              </button>
              <button className={styles.ctaSecondary}>
                <UsersIcon size={18} />
                <span>Explore More Profiles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}