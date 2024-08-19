import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';

const LandingPageContainer = styled.div`
  // Add any specific styles for the landing page container
`;

const LandingPage: React.FC = () => {
  return (
    <LandingPageContainer>
      <HeroSection />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialSection />
      <CallToActionSection />
    </LandingPageContainer>
  );
};

export default LandingPage;