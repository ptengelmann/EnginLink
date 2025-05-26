import React, { useEffect, useState } from 'react';
import { 
  Settings, 
  Users, 
  Search, 
  ArrowLeft, 
  Sparkles,
  CheckCircle2,
  Award,
  TrendingUp
} from 'lucide-react';
import styles from './Signup.module.scss';
import SignupForm from '../../features/SignupForm/SignupForm';

export default function Signup() {
  const [role, setRole] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const roleConfig = {
    engineer: {
      title: 'Engineer',
      icon: Settings,
      color: '#FF6B35',
      description: 'Join 127,000+ engineers building careers through verified skills and real projects',
      benefits: [
        'Showcase your technical projects and skills',
        'Get matched with relevant opportunities',
        'Earn industry-recognized certifications',
        'Connect with engineering professionals'
      ]
    },
    recruiter: {
      title: 'Recruiter',
      icon: Search,
      color: '#4ECDC4',
      description: 'Join 890+ companies finding top engineering talent through skill-based hiring',
      benefits: [
        'Access pre-validated engineering talent',
        'Filter by specific tools and certifications',
        'Review actual project portfolios',
        'Streamline your technical hiring process'
      ]
    }
  };

  useEffect(() => {
    const savedRole = localStorage.getItem('selectedRole');
    setRole(savedRole || 'engineer');
    setIsVisible(true);
  }, []);

  const currentRole = roleConfig[role] || roleConfig.engineer;
  const IconComponent = currentRole.icon;

  const handleRoleChange = () => {
    localStorage.removeItem('selectedRole');
    window.location.href = '/role-selection';
  };

  return (
    <div className={styles.signupContainer}>
      {/* Background Effects */}
      <div className={styles.backgroundSystem}>
        <div className={styles.gridOverlay}></div>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`${styles.floatingIcon} ${styles[`icon${i + 1}`]}`}
          >
            <Settings size={18} />
          </div>
        ))}
      </div>

      <div className={styles.signupContent}>
        {/* Left Side - Role Info */}
        <div className={`${styles.roleInfoSide} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.roleInfo}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Settings size={28} />
              </div>
              <span className={styles.logoText}>EnginLink</span>
            </div>

            <div className={styles.roleHeader}>
              <div 
                className={styles.roleIconLarge}
                style={{ backgroundColor: currentRole.color }}
              >
                <IconComponent size={40} />
              </div>
              <div className={styles.roleDetails}>
                <h1>Join as a {currentRole.title}</h1>
                <p>{currentRole.description}</p>
                <button 
                  className={styles.changeRoleBtn}
                  onClick={handleRoleChange}
                >
                  <ArrowLeft size={16} />
                  <span>Change Role</span>
                </button>
              </div>
            </div>

            <div className={styles.benefitsList}>
              <h3>What you'll get:</h3>
              {currentRole.benefits.map((benefit, index) => (
                <div key={index} className={styles.benefit}>
                  <CheckCircle2 size={16} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className={styles.statsShowcase}>
              <div className={styles.statCard}>
                <Users className={styles.statIcon} size={24} />
                <div className={styles.statValue}>127K+</div>
                <div className={styles.statLabel}>Active Engineers</div>
              </div>
              <div className={styles.statCard}>
                <Award className={styles.statIcon} size={24} />
                <div className={styles.statValue}>2.4M+</div>
                <div className={styles.statLabel}>Projects Shared</div>
              </div>
              <div className={styles.statCard}>
                <TrendingUp className={styles.statIcon} size={24} />
                <div className={styles.statValue}>94%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
            </div>

            <div className={styles.trustBadge}>
              <Sparkles size={16} />
              <span>Trusted by engineers at Tesla, Boeing, Siemens, and 890+ companies</span>
           </div>
         </div>
       </div>

       {/* Right Side - Signup Form */}
       <div className={`${styles.formSide} ${isVisible ? styles.visible : ''}`}>
         <div className={styles.formContainer}>
           <div className={styles.formHeader}>
             <div className={styles.welcomeBadge}>
               <Sparkles size={14} />
               <span>Create Account</span>
             </div>
             <h2>Start Your Engineering Journey</h2>
             <p>Create your account and join the future of engineering careers</p>
           </div>

           <SignupForm />
         </div>
       </div>
     </div>
   </div>
 );
}