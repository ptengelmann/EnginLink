import React, { useEffect, useState } from 'react';
import styles from './DashboardRecruiter.module.scss';
import useAuthGuard from '../../hooks/useAuthGuard';


export default function DashboardRecruiter() {
      useAuthGuard();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  if (!user) return <p className={styles.message}>Loading recruiter dashboard...</p>;

  return (
    <section className={styles.dashboard}>
      <h1>Welcome, {user.username}</h1>
      <p>This is your Recruiter Dashboard — soon you'll search engineers and post jobs.</p>
    </section>
  );
}
