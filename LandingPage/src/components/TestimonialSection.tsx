import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialContainer = styled.section`
  padding: 4rem 2rem;
 background-color: #080608;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const TestimonialContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const TestimonialItem = styled(motion.div)`
  background-color: #222;
  border-radius: 10px;
  padding: 2rem;
  flex: 1;
  min-width: 300px;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #eee;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const testimonials = [
  {
    text: `"I've been using Focus this past week, and it's been the best strategy
           for me to cut back on social media so far. I love the experience of
           using it — it doesn't feel like I'm forcing myself, but more like I'm
           protecting my time."`,
    author: `- Indiana Jones, Product Designer at Spotify`
  },
  {
    text: `"Focus has completely changed the way I work. The structured sessions and
           real-time feedback have helped me be more productive than ever."`,
    author: `- Jane Doe, Freelance Writer`
  },
  {
    text: `"I was skeptical at first, but Focus has proven to be an invaluable tool
           for managing my time and boosting my focus throughout the day."`,
    author: `- John Smith, Software Engineer`
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <TestimonialContainer>
      <TestimonialContent>
        <TestimonialList>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialItem>
          ))}
        </TestimonialList>
      </TestimonialContent>
    </TestimonialContainer>
  );
};

export default TestimonialSection;
