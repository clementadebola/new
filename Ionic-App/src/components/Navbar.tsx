import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, flash, statsChart, ellipsisHorizontal } from 'ionicons/icons';
import styled from 'styled-components';

const StyledTabBar = styled(IonTabBar)`
  --background: #000000;
  --border: none;
`;

const StyledTabButton = styled(IonTabButton)`
  --color: #ffffff;
  --color-selected: #007aff;

  &.tab-selected ion-icon {
    filter: drop-shadow(0 0 5px #007aff);
  }
`;

const StyledIcon = styled(IonIcon)`
  font-size: 24px;
`;

const StyledLabel = styled(IonLabel)`
  font-size: 12px;
  font-weight: 500;
`;

const Navbar: React.FC = () => (
  <StyledTabBar slot="bottom">
    <StyledTabButton tab="dashboard" href="/dashboard">
      <StyledIcon icon={home} />
      <StyledLabel>Home</StyledLabel>
    </StyledTabButton>
    <StyledTabButton tab="strict-mode" href="/strict-mode">
      <StyledIcon icon={flash} />
      <StyledLabel>Strict Mode</StyledLabel>
    </StyledTabButton>
    <StyledTabButton tab="statistics" href="/statistics">
      <StyledIcon icon={statsChart} />
      <StyledLabel>Statistics</StyledLabel>
    </StyledTabButton>
    <StyledTabButton tab="more" href="/more">
      <StyledIcon icon={ellipsisHorizontal} />
      <StyledLabel>More</StyledLabel>
    </StyledTabButton>
  </StyledTabBar>
);

export default Navbar;