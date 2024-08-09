import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const HeroContent = styled.div`
  max-width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: #fff;
  color: #000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;

const GraphContainer = styled(motion.div)`
  width: 100%;
  height: 200px;
  background-color: #333;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 40%;
    height: 300px;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TAKE CONTROL OF YOUR DAY
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Utilize each day to its fullest potential with our focus-driven productivity app.
        </HeroSubtitle>
        <CTAButton
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          TRY FOR FREE
        </CTAButton>
      </HeroContent>
      <GraphContainer
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Add graph component here */}
      </GraphContainer>
    </HeroContainer>
  );
};

export default HeroSection;
