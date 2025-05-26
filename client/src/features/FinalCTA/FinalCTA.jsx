import React from 'react';
import styles from './FinalCTA.module.scss';

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Ready to Build What Proves You?</h2>
        <p>
          Join thousands of engineers validating their careers with real projects, not resumes.
          Whether you're starting out or hiring, EnginLink is built for engineering.
        </p>
        <div className={styles.actions}>
          <a href="/join" className={styles.primary}>Get Started</a>
          <a href="/login" className={styles.secondary}>Log In</a>
        </div>
      </div>
    </section>
  );
}
