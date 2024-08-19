import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatisticsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #080608;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const StatisticsTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatisticItem = styled(motion.div)`
  text-align: center;
`;

const StatisticValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatisticLabel = styled.div`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatisticsSection: React.FC = () => {
  return (
    <StatisticsContainer>
      <StatisticsTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        THE FOCUS IMPACT STUDY
      </StatisticsTitle>
      <StatisticsGrid>
        <StatisticItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatisticValue>95%</StatisticValue>
          <StatisticLabel>More Productivity</StatisticLabel>
        </StatisticItem>
        <StatisticItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StatisticValue>92%</StatisticValue>
          <StatisticLabel>Less Distraction</StatisticLabel>
        </StatisticItem>
        <StatisticItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <StatisticValue>79%</StatisticValue>
          <StatisticLabel>Save Time</StatisticLabel>
        </StatisticItem>
      </StatisticsGrid>
    </StatisticsContainer>
  );
};

export default StatisticsSection;
