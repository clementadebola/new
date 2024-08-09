import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #111;
`;

const TestimonialContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialText = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const TestimonialAuthor = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const TestimonialSection: React.FC = () => {
  return (
    <TestimonialContainer>
      <TestimonialContent>
        <TestimonialText
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          "I've been using Focus this past week, and it's been the best strategy
          for me to cut back on social media so far. I love the experience of
          using it — it doesn't feel like I'm forcing myself, but more like I'm
          protecting my time."
        </TestimonialText>
        <TestimonialAuthor
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          - Indiana Jones, Product Designer at Spotify
        </TestimonialAuthor>
      </TestimonialContent>
    </TestimonialContainer>
  );
};

export default TestimonialSection;