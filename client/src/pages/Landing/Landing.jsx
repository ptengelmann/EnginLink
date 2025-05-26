import React from 'react';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <section className={styles.landing}>
      <h1>Welcome to EnginLink</h1>
      <p>Where Engineers Build Careers.</p>
      <button onClick={() => window.location.href = '/join'}>Get Started</button>
    </section>
  );
}
