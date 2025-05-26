import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../features/Navbar/Navbar';
import Footer from '../../features/Footer/Footer';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const location = useLocation();
  
  // Only exclude footer from dashboard pages to keep them clean
  const isDashboardPage = location.pathname.startsWith('/dashboard');
  const showFooter = !isDashboardPage;

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}