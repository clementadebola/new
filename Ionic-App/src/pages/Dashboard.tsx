// src/pages/Dashboard.tsx
import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonButton, IonIcon, IonList, IonItem, IonLabel, IonToggle } from '@ionic/react';
import { chevronForward, personCircle } from 'ionicons/icons';
import styled from 'styled-components';

const StyledPage = styled(IonPage)`
  --ion-background-color: #1c1c1e;
  --ion-text-color: #ffffff;
`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #1c1c1e;
    --color: #ffffff;
  }
`;

const Greeting = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  padding: 20px;
`;

const ProgressCard = styled(IonCard)`
  --background: linear-gradient(90deg, #8e2de2, #4a00e0);
  border-radius: 16px;
`;

const ProgressText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: #ffffff;
    transition: width 0.3s ease-in-out;
  }
`;

const StyledCard = styled(IonCard)`
  --background: #2c2c2e;
  border-radius: 16px;
`;

const Dashboard: React.FC = () => {
  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonIcon icon={personCircle} slot="end" size="large" />
        </IonToolbar>
      </Header>
      <IonContent fullscreen>
        <Greeting>Hello, Derek Doyle 👋</Greeting>
        <ProgressCard>
          <IonCardContent>
            <ProgressText>Priority Task Progress</ProgressText>
            <ProgressBar progress={68} />
            <p>68.09% completed</p>
          </IonCardContent>
        </ProgressCard>
        <StyledCard>
          <IonCardContent>
            <IonList>
              <IonItem lines="full">
                <IonLabel>Total Task</IonLabel>
                <IonLabel slot="end">15</IonLabel>
                <IonIcon icon={chevronForward} slot="end" />
              </IonItem>
              <IonItem lines="full">
                <IonLabel>Completed</IonLabel>
                <IonLabel slot="end">32</IonLabel>
                <IonIcon icon={chevronForward} slot="end" />
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Total Projects</IonLabel>
                <IonLabel slot="end">8</IonLabel>
                <IonIcon icon={chevronForward} slot="end" />
              </IonItem>
            </IonList>
          </IonCardContent>
        </StyledCard>
      </IonContent>
    </StyledPage>
  );
};

export default Dashboard;