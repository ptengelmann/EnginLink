import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Settings, 
  Shield, 
  Zap,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';
import styles from './Login.module.scss';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef(null);

  const stats = [
    { icon: Users, value: '127K+', label: 'Engineers' },
    { icon: TrendingUp, value: '94%', label: 'Success Rate' },
    { icon: Award, value: '2.4M+', label: 'Projects' }
  ];

  const benefits = [
    'Skill-verified engineering profiles',
    'Project-based career advancement',
    'Industry-leading job matching',
    'Continuous learning opportunities'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (!res.ok) {
        setErrors({ general: data.message || 'Login failed' });
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Success animation before redirect
      setTimeout(() => {
        window.location.href = `/dashboard/${data.user.role}`;
      }, 1000);
      
    } catch (err) {
      console.error(err);
      setErrors({ general: 'Login error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Placeholder for social login implementation
    console.log(`Login with ${provider}`);
  };

  return (
    <div className={styles.loginContainer}>
      {/* Background Effects */}
      <div className={styles.backgroundSystem}>
        <div className={styles.gridOverlay}></div>
        <div 
          className={styles.mouseGradient}
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`
          }}
        />
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`${styles.floatingIcon} ${styles[`icon${i + 1}`]}`}
          >
            <Settings size={20} />
          </div>
        ))}
      </div>

      <div className={styles.loginContent}>
        {/* Left Side - Branding & Benefits */}
        <div className={`${styles.brandingSide} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.brandingContent}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Settings size={32} />
              </div>
              <span className={styles.logoText}>EnginLink</span>
            </div>

            <div className={styles.heroSection}>
              <h1>Welcome Back, Engineer</h1>
              <p>
                Continue building your career with the platform designed exclusively 
                for engineering professionals. Your projects and skills are waiting.
              </p>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className={styles.statCard}>
                    <IconComponent className={styles.statIcon} size={20} />
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefit}>
                  <CheckCircle2 size={16} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className={styles.trustBadge}>
              <Shield size={16} />
              <span>Trusted by engineers at Tesla, Boeing, and 890+ companies</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className={`${styles.formSide} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.formContainer} ref={formRef}>
            <div className={styles.formHeader}>
              <div className={styles.welcomeBadge}>
                <Sparkles size={14} />
                <span>Secure Login</span>
              </div>
              <h2>Sign In to Your Account</h2>
              <p>Enter your credentials to access your engineering dashboard</p>
            </div>

            {errors.general && (
              <div className={styles.errorAlert}>
                <AlertCircle size={16} />
                <span>{errors.general}</span>
              </div>
            )}

            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <div className={`${styles.inputWrapper} ${focusedField === 'email' ? styles.focused : ''} ${errors.email ? styles.error : ''}`}>
                  <Mail className={styles.inputIcon} size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="engineer@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={styles.input}
                  />
                </div>
                {errors.email && (
                  <span className={styles.fieldError}>{errors.email}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <div className={`${styles.inputWrapper} ${focusedField === 'password' ? styles.focused : ''} ${errors.password ? styles.error : ''}`}>
                  <Lock className={styles.inputIcon} size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    className={styles.togglePassword}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <span className={styles.fieldError}>{errors.password}</span>
                )}
              </div>

              <div className={styles.formOptions}>
                <label className={styles.rememberMe}>
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                  <span>Remember me</span>
                </label>
                <a href="/forgot-password" className={styles.forgotLink}>
                  Forgot password?
                </a>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitBtn} ${isLoading ? styles.loading : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className={styles.spinner}></div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className={styles.divider}>
              <span>Or continue with</span>
            </div>

            <div className={styles.socialLogin}>
              <button 
                className={styles.socialBtn}
                onClick={() => handleSocialLogin('google')}
              >
                <span className={styles.socialIcon}>G</span>
                <span>Google</span>
              </button>
              <button 
                className={styles.socialBtn}
                onClick={() => handleSocialLogin('linkedin')}
              >
                <span className={styles.socialIcon}>in</span>
                <span>LinkedIn</span>
              </button>
              <button 
                className={styles.socialBtn}
                onClick={() => handleSocialLogin('github')}
              >
                <span className={styles.socialIcon}>GH</span>
                <span>GitHub</span>
              </button>
            </div>

            <div className={styles.signupPrompt}>
              <span>Don't have an account?</span>
              <a href="/signup" className={styles.signupLink}>
                Create Account
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}