import React from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import { chevronForward, personCircle, addCircle, notifications } from 'ionicons/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


// Styled Components
const StyledPage = styled(IonPage)`
  --ion-background-color: #090B22;
  --ion-text-color: #ffffff;
`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #090B22;
    --color: #ffffff;
    padding: 10px 10px;
    margin: 0 auto;
  }
`;

const Greeting = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const ProgressCard = styled(IonCard)`
  --background: linear-gradient(90deg, #8e2de2, #4a00e0);
  border-radius: 16px;
  margin: 20px;
  padding: 16px;
`;

const ProgressText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: #ffffff;
    transition: width 0.3s ease-in-out;
  }
`;

const StyledCard = styled(IonCard)`
  --background: #2c2c2e;
  border-radius: 16px;
  margin: 20px;
  padding: 16px;
`;

const TaskText = styled.p`
  font-size: 16px;
  color: #a9a9a9;
  margin-bottom: 8px;
`;

const AddTaskButton = styled(IonFab)`
  position: fixed;
  bottom: 20px;
  right: 20px;

  ion-fab-button {
    --background: #4a00e0;
  }
`;

const Dashboard: React.FC = () => {

  const history = useHistory(); 

  const goToProfile = () => {
    history.push('/profile'); 
  };

  const goToNotify = () => {
    history.push('/notify');
  }
  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonButton fill="clear" slot="end"  onClick={goToProfile} >
            <IonIcon  icon={personCircle} size="large" />
          </IonButton>
          <IonButton fill="clear" slot="end" onClick={goToNotify} >
             <IonIcon icon={notifications} size="large"/>
          </IonButton>
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

        <AddTaskButton vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </AddTaskButton>
      </IonContent>
    </StyledPage>
  );
};

export default Dashboard;
