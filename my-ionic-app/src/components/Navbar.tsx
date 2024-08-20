import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, flash, statsChart, ellipsisHorizontal } from 'ionicons/icons';
import styled from 'styled-components';

const StyledTabBar = styled(IonTabBar)`
  --background: #000000;
  --border: none;

  ion-tab-button {
    --color: #ffffff;
    --color-selected: #007aff;

    &.tab-selected ion-icon {
      filter: drop-shadow(0 0 5px #007aff);
    }
  }

  ion-icon {
    font-size: 24px;
  }

  ion-label {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Navbar: React.FC = () => (
  <StyledTabBar slot="bottom">
    <IonTabButton tab="dashboard" href="/dashboard">
      <IonIcon icon={home} />
      <IonLabel>Home</IonLabel>
    </IonTabButton>
    <IonTabButton tab="strict-mode" href="/strict-mode">
      <IonIcon icon={flash} />
      <IonLabel>Strict Mode</IonLabel>
    </IonTabButton>
    <IonTabButton tab="statistics" href="/statistics">
      <IonIcon icon={statsChart} />
      <IonLabel>Statistics</IonLabel>
    </IonTabButton>
    <IonTabButton tab="more" href="/more">
      <IonIcon icon={ellipsisHorizontal} />
      <IonLabel>More</IonLabel>
    </IonTabButton>
  </StyledTabBar>
);

export default Navbar;