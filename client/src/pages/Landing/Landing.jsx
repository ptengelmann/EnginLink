import React from 'react';
import HeroSection from '../../features/HeroSection/HeroSection';
import PlatformOverview from '../../features/PlatformOverview/PlatformOverview';
import CommunityShowcase from '../../features/CommunityShowcase/CommunityShowcase';
import FinalCTA from '../../features/FinalCTA/FinalCTA';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <HeroSection />
      <PlatformOverview />
      <CommunityShowcase />
      <FinalCTA />
    </div>
  );
}