import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatisticsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #222;
`;

const StatisticsTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const StatisticItem = styled(motion.div)`
  text-align: center;
`;

const StatisticValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #00ffff;
`;

const StatisticLabel = styled.div`
  font-size: 1.2rem;
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