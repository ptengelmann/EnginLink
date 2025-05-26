import React from 'react';
import Navbar from '../../features/Navbar/Navbar';
import HeroSection from '../../features/HeroSection/HeroSection';
import PlatformOverview from '../../features/PlatformOverview/PlatformOverview';
import CommunityShowcase from '../../features/CommunityShowcase/CommunityShowcase';
import FinalCTA from '../../features/FinalCTA/FinalCTA';
import Footer from '../../features/Footer/Footer';

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PlatformOverview />
      <CommunityShowcase />
      <FinalCTA />
      <Footer />
    </>
  );
}
