import React from 'react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Where Engineers Build Careers — With Proof</h1>
        <p>
          EnginLink is the first platform built exclusively for engineers to showcase real projects,
          verify skills, earn certifications, and get discovered based on what they’ve actually built.
        </p>

        <div className={styles.actions}>
          <a href="/join" className={styles.cta}>Get Started</a>
          <a href="/login" className={styles.alt}>Log In</a>
        </div>
      </div>
    </section>
  );
}
