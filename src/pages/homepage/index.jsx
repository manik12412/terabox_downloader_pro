import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveActivityFeed from './components/LiveActivityFeed';
import FeaturesSection from './components/FeaturesSection';
import SpeedComparison from './components/SpeedComparison';
import TestimonialsSection from './components/TestimonialsSection';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24">
        <HeroSection />
        <LiveActivityFeed />
        <FeaturesSection />
        <SpeedComparison />
        <TestimonialsSection />
        <TrustIndicators />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;