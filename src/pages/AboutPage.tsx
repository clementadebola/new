import React from 'react';
import styled from 'styled-components';

const AboutPageContainer = styled.div`
  padding: 4rem 2rem;
`;

const AboutPage: React.FC = () => {
  return (
    <AboutPageContainer>
      <h1>About Us</h1>
      {/* Add about us content here */}
    </AboutPageContainer>
  );
};

export default AboutPage;