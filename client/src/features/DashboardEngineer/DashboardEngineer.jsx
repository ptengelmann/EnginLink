import React, { useEffect, useState } from 'react';
import styles from './DashboardEngineer.module.scss';
import useAuthGuard from '../../hooks/useAuthGuard';


export default function DashboardEngineer() {
      useAuthGuard();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  if (!user) return <p className={styles.message}>Loading engineer dashboard...</p>;

  return (
    <section className={styles.dashboard}>
      <h1>Welcome, {user.username}</h1>
      <p>This is your Engineer Dashboard — soon you'll upload projects, track XP, and get hired.</p>
    </section>
  );
}
