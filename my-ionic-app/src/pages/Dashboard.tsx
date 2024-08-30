import React, { useState } from "react";
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
  IonFab,
  IonFabButton,
  IonAlert,
} from "@ionic/react";
import {
  personCircle,
  addCircle,
  notifications,
  trash,
} from "ionicons/icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CreateTaskModal from '../components/CreateTaskModal';

// Styled Components
const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #090b22;
    --color: #ffffff;
    padding: 10px 10px;
    margin: 0 auto;
  }
`;

const Greeting = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  padding: 0 20px;
  color: #ffffff;
`;

const ProgressCard = styled(IonCard)`
  --background: linear-gradient(90deg, #8e2de2, #4a00e0);
  border-radius: 16px;
  margin: 20px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ProgressText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
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
  background-color: #5656C0;
  border-radius: 16px;
  margin: 20px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledCardContent = styled(IonCardContent)`
  padding: 16px;
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
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState<Array<{ name: string, blockedApps: string[], blockedWebsites: string[] }>>([]);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const goToProfile = () => {
    history.push("/profile");
  };

  const goToNotify = () => {
    history.push("/notify");
  };

  const handleCreateTask = (taskName: string, blockedApps: string[], blockedWebsites: string[]) => {
    setTasks([...tasks, { name: taskName, blockedApps, blockedWebsites }]);
    setShowModal(false);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setShowAlert(false);
  };

  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonButton fill="clear" slot="end" onClick={goToProfile}>
            <IonIcon icon={personCircle} size="large" />
          </IonButton>
          <IonButton fill="clear" slot="end" onClick={goToNotify}>
            <IonIcon icon={notifications} size="large" />
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
          <StyledCardContent>
            <IonList>
              {tasks.length === 0 ? (
                <IonItem>No tasks created yet</IonItem>
              ) : (
                tasks.map((task, index) => (
                  <IonItem key={index}>
                    <IonLabel>
                      <h2>{task.name}</h2>
                      <p>Blocked Apps: {task.blockedApps.join(', ')}</p>
                      <p>Blocked Websites: {task.blockedWebsites.join(', ')}</p>
                    </IonLabel>
                    <IonButton 
                      fill="clear" 
                      color="danger" 
                      slot="end"
                      onClick={() => {
                        setTaskToDelete(index);
                        setShowAlert(true);
                      }}
                    >
                      <IonIcon icon={trash} />
                    </IonButton>
                  </IonItem>
                ))
              )}
            </IonList>
          </StyledCardContent>
        </StyledCard>

        <AddTaskButton
          onClick={() => setShowModal(true)}
          vertical="bottom"
          horizontal="end"
          slot="fixed"
        >
          <IonFabButton>
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </AddTaskButton>

        <CreateTaskModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
          onCreateTask={handleCreateTask}
        />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Confirm Delete'}
          message={'Are you sure you want to delete this task?'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                setTaskToDelete(null);
              }
            },
            {
              text: 'Delete',
              role: 'destructive',
              handler: () => {
                if (taskToDelete !== null) {
                  handleDeleteTask(taskToDelete);
                }
              }
            }
          ]}
        />
      </IonContent>
    </StyledPage>
  );
};

export default Dashboard;
