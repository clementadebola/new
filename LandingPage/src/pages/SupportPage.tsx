import React from 'react';
import styled from 'styled-components';

const SupportPageContainer = styled.div`
  padding: 4rem 2rem;
`;

const SupportPage: React.FC = () => {
  return (
    <SupportPageContainer>
      <h1>Support</h1>
      {/* Add support content here */}
    </SupportPageContainer>
  );
};

export default SupportPage;