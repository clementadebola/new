import React, { useState } from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonFab, IonFabButton, IonPopover, IonContent, IonList, IonItem, IonRippleEffect } from '@ionic/react';
import { home, receiptOutline, walletOutline, globeOutline, swapHorizontal, arrowDownOutline, arrowUpOutline, repeatOutline } from 'ionicons/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledTabBar = styled(IonTabBar)`
  --background: var(--ion-color-light);
  --border: none;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
`;

const CenterFab = styled(IonFab)`
  margin-bottom: 8px;
`;

const StyledFabButton = styled(IonFabButton)`
  --background: var(--ion-color-primary);
  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.4);
`;

const StyledPopover = styled(IonPopover)`
  --width: 250px;
`;

const StyledIonItem = styled(IonItem)`
  --background-hover: var(--ion-color-light-shade);
`;

interface NavBarProps {
  onAction?: (action: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onAction }) => {
  const [popoverState, setPopoverState] = useState({ showPopover: false, event: undefined as Event | undefined });
  const navigate = useNavigate();
  const location = useLocation();

  const openPopover = (e: React.MouseEvent) => {
    e.persist();
    setPopoverState({ showPopover: true, event: e.nativeEvent });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setPopoverState({ showPopover: false, event: undefined });
  };

  const handleAction = (action: string) => {
    if (onAction) {
      onAction(action);
    }
    setPopoverState({ showPopover: false, event: undefined });
  };

  return (
    <>
      <StyledTabBar slot="bottom">
        <IonTabButton tab="home" href="/home" selected={location.pathname === '/home'}>
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="transactions" href="/transactions" selected={location.pathname === '/transactions'}>
          <IonIcon icon={receiptOutline} />
          <IonLabel>Transactions</IonLabel>
        </IonTabButton>
        <IonTabButton tab="portfolio" href="/portfolio" selected={location.pathname === '/portfolio'}>
          <IonIcon icon={walletOutline} />
          <IonLabel>Portfolio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="explore" href="/explore" selected={location.pathname === '/explore'}>
          <IonIcon icon={globeOutline} />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>
      </StyledTabBar>

      <CenterFab vertical="bottom" horizontal="center" slot="fixed">
        <StyledFabButton onClick={openPopover}>
          <IonIcon icon={swapHorizontal} />
        </StyledFabButton>
      </CenterFab>

      <StyledPopover
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setPopoverState({ showPopover: false, event: undefined })}
      >
        <IonContent>
          <IonList>
            <StyledIonItem button detail={false} className="ion-activatable ripple-parent" onClick={() => handleAction('deposit')}>
              <IonIcon icon={arrowDownOutline} slot="start" />
              <IonLabel>Deposit</IonLabel>
              <IonRippleEffect />
            </StyledIonItem>
            <StyledIonItem button detail={false} className="ion-activatable ripple-parent" onClick={() => handleAction('transfer')}>
              <IonIcon icon={arrowUpOutline} slot="start" />
              <IonLabel>Transfer</IonLabel>
              <IonRippleEffect />
            </StyledIonItem>
            <StyledIonItem button detail={false} className="ion-activatable ripple-parent" onClick={() => handleAction('convert')}>
              <IonIcon icon={repeatOutline} slot="start" />
              <IonLabel>Convert</IonLabel>
              <IonRippleEffect />
            </StyledIonItem>
          </IonList>
        </IonContent>
      </StyledPopover>
    </>
  );
};

export default NavBar;