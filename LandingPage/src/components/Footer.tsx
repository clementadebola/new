import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #080608;
//    background-color: #000;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 FocusApp. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;