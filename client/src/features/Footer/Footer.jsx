import React from 'react';
import { 
  Settings,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Users,
  BookOpen,
  Briefcase,
  Award,
  TrendingUp,
  Shield,
  Globe,
  ChevronUp
} from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'For Engineers', href: '/engineers', icon: Users },
        { label: 'For Companies', href: '/companies', icon: Briefcase },
        { label: 'Project Showcase', href: '/projects', icon: Settings },
        { label: 'Skill Verification', href: '/verification', icon: Award },
        { label: 'Career Analytics', href: '/analytics', icon: TrendingUp }
      ]
    },
    {
      title: 'Academy',
      links: [
        { label: 'Courses', href: '/courses', icon: BookOpen },
        { label: 'Certifications', href: '/certifications', icon: Award },
        { label: 'Bootcamps', href: '/bootcamps', icon: Users },
        { label: 'Mentorship', href: '/mentorship', icon: Users },
        { label: 'Learning Paths', href: '/paths', icon: TrendingUp }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Engineering Blog', href: '/blog', icon: BookOpen },
        { label: 'Career Guide', href: '/guide', icon: Briefcase },
        { label: 'Industry Reports', href: '/reports', icon: TrendingUp },
        { label: 'API Documentation', href: '/docs', icon: Settings },
        { label: 'Help Center', href: '/help', icon: Shield }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Careers', href: '/careers', icon: Briefcase },
        { label: 'Press Kit', href: '/press', icon: Globe },
        { label: 'Contact', href: '/contact', icon: Mail },
        { label: 'Partner Program', href: '/partners', icon: Users }
      ]
    }
  ];

  const engineeringDisciplines = [
    'Mechanical Engineering',
    'Civil Engineering', 
    'Electrical Engineering',
    'Chemical Engineering',
    'Aerospace Engineering',
    'Software Engineering',
    'Industrial Engineering',
    'Environmental Engineering',
    'Biomedical Engineering',
    'Materials Engineering'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          {/* Footer Header */}
          <div className={styles.footerHeader}>
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <Settings size={32} />
                </div>
                <span className={styles.logoText}>EnginLink</span>
              </div>
              <p className={styles.brandDescription}>
                The definitive platform where engineers build careers through verified skills, 
                real projects, and meaningful connections. Join the future of engineering careers.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com/company/enginelink" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/enginelink" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://github.com/enginelink" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://youtube.com/enginelink" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={styles.newsletter}>
              <h3>Engineering Insights</h3>
              <p>Get weekly insights on engineering careers, industry trends, and platform updates.</p>
              <form className={styles.newsletterForm}>
                <div className={styles.inputGroup}>
                  <Mail className={styles.inputIcon} size={18} />
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.subscribeBtn}>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
              <span className={styles.privacyNote}>
                We respect your privacy. Unsubscribe anytime.
              </span>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className={styles.footerGrid}>
            {footerSections.map((section, index) => (
              <div key={index} className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link, linkIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <li key={linkIndex}>
                        <a href={link.href} className={styles.footerLink}>
                          <IconComponent size={16} />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Engineering Disciplines Section */}
          <div className={styles.disciplinesSection}>
            <h4 className={styles.disciplinesTitle}>Engineering Disciplines We Serve</h4>
            <div className={styles.disciplinesGrid}>
              {engineeringDisciplines.map((discipline, index) => (
                <a key={index} href={`/disciplines/${discipline.toLowerCase().replace(' ', '-')}`} className={styles.disciplineTag}>
                  {discipline}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>San Francisco, CA • Austin, TX • Remote Global</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <a href="mailto:hello@enginelink.com">hello@enginelink.com</a>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                <a href="tel:+1-555-0123">+1 (555) 012-3456</a>
              </div>
            </div>
            
            <button onClick={scrollToTop} className={styles.backToTop}>
              <ChevronUp size={20} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>© {currentYear} EnginLink. Built for engineers, by engineers.</p>
              <p className={styles.tagline}>Empowering engineering careers worldwide since 2024.</p>
            </div>
            
            <div className={styles.legalLinks}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/security">Security</a>
            </div>
            
            <div className={styles.certifications}>
              <div className={styles.certBadge}>
                <Shield size={16} />
                <span>SOC 2 Certified</span>
              </div>
              <div className={styles.certBadge}>
                <Globe size={16} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}