import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import mockup from '../assets/mockup.png';

const FeatureSectionContainer = styled.section`
  background-color: #111;
  color: #fff;
  height: 300vh; // Increased height to allow for scrolling
  position: relative;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const FeatureCard = styled(motion.div)`
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 3rem;
  display: flex;
//   flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  width: 90%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  position: absolute;
  opacity: 0;
  transform-origin: center;
`;

const FeatureContent = styled.div`
  text-align: center;
  z-index: 2;
`;

const FeatureTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f5f5f5;
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ccc;
`;

const FeatureImage = styled(motion.img)`
  width: 100%;
  max-width: 250px;
  border-radius: 15px;
  margin-top: 1.5rem;
`;

const featureData = [
  {
    title: "Start Activities with Sessions",
    description: "Begin your focused work with custom-tailored sessions. Set your goals, choose your duration, and eliminate distractions to maximize productivity.",
    image: `${mockup}`
  },
  {
    title: "Real-Time Score Report",
    description: "Track your progress with instant feedback. Our real-time score report keeps you motivated and helps you understand your productivity patterns.",
    image: `${mockup}`
  },
  {
    title: "Get Your Focus Report",
    description: "Receive comprehensive focus reports that analyze your productivity trends over time. Gain insights to optimize your work habits and achieve more.",
   image: `${mockup}`
  }
];

const FeatureSection: React.FC = () => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the scroll progress (0 to 1) over the entire container
      const scrollProgress = Math.min(
        Math.max((windowHeight - top) / height, 0),
        1
      );

      // Determine which card should be visible
      const totalCards = featureData.length;
      const cardIndex = Math.floor(scrollProgress * totalCards);

      setVisibleCardIndex(cardIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FeatureSectionContainer ref={containerRef}>
      <StickyContainer>
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            animate={{
              opacity: index === visibleCardIndex ? 1 : 0,
              y: index === visibleCardIndex ? 0 : 50,
              scale: index === visibleCardIndex ? 1.1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
            style={{
              zIndex: index === visibleCardIndex ? 3 : 2,
              transform: `scale(${1 + 0.05 * (index - visibleCardIndex)})`,
            }}
          >
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
            <FeatureImage
              src={feature.image}
              alt={feature.title}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === visibleCardIndex ? 1 : 0,
                x: index === visibleCardIndex ? 0 : 100,
              }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </FeatureCard>
        ))}
      </StickyContainer>
    </FeatureSectionContainer>
  );
};

export default FeatureSection;
