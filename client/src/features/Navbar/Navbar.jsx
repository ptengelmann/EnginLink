import React from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">EnginLink</a>
      </div>

      <nav className={styles.menu}>
        <a href="/join">Join</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}
