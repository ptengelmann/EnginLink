import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Settings, 
  Users, 
  BookOpen, 
  Briefcase,
  ChevronDown
} from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Platform',
      href: '/platform',
      icon: Settings,
      dropdown: [
        { label: 'For Engineers', href: '/engineers', icon: Users },
        { label: 'For Companies', href: '/companies', icon: Briefcase },
        { label: 'Project Showcase', href: '/projects', icon: Settings }
      ]
    },
    {
      label: 'Academy',
      href: '/academy',
      icon: BookOpen
    },
    {
      label: 'Community',
      href: '/community',
      icon: Users
    }
  ];

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <div className={styles.logoIcon}>
              <Settings size={28} />
            </div>
            <span className={styles.logoText}>EnginLink</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className={styles.navItem}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.href} className={styles.navLink}>
                  <IconComponent size={16} />
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
                
                {item.dropdown && activeDropdown === index && (
                  <div className={styles.dropdown}>
                    {item.dropdown.map((dropItem, dropIndex) => {
                      const DropIconComponent = dropItem.icon;
                      return (
                        <a key={dropIndex} href={dropItem.href} className={styles.dropdownItem}>
                          <DropIconComponent size={16} />
                          <span>{dropItem.label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className={styles.ctaSection}>
          <a href="/login" className={styles.loginBtn}>
            Log In
          </a>
          <a href="/join" className={styles.joinBtn}>
            <span>Get Started</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className={styles.mobileNavItem}>
                  <a href={item.href} className={styles.mobileNavLink}>
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </a>
                  {item.dropdown && (
                    <div className={styles.mobileDropdown}>
                      {item.dropdown.map((dropItem, dropIndex) => {
                        const DropIconComponent = dropItem.icon;
                        return (
                          <a key={dropIndex} href={dropItem.href} className={styles.mobileDropdownItem}>
                            <DropIconComponent size={16} />
                            <span>{dropItem.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className={styles.mobileCta}>
              <a href="/login" className={styles.mobileLogin}>Log In</a>
              <a href="/join" className={styles.mobileJoin}>
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}