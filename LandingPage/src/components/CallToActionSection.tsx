import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTAContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #080608;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: #00ffff;
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #00cccc;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CallToActionSection: React.FC = () => {
  return (
    <CTAContainer>
      <CTATitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        STAY FOCUSED, STAY PRODUCTIVE
      </CTATitle>
      <CTASubtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get started with Focus today and take control of your time
      </CTASubtitle>
      <CTAButton
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        TRY FOR FREE
      </CTAButton>
    </CTAContainer>
  );
};

export default CallToActionSection;
