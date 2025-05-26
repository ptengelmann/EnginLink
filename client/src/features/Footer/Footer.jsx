import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} EnginLink. Built for engineers, by engineers.</p>
    </footer>
  );
}
