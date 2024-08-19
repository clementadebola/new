import React from 'react';
import styled from 'styled-components';

const CommunityPageContainer = styled.div`
  padding: 4rem 2rem;
`;

const CommunityPage: React.FC = () => {
  return (
    <CommunityPageContainer>
      <h1>Community</h1>
      {/* Add community content here */}
    </CommunityPageContainer>
  );
};

export default CommunityPage;