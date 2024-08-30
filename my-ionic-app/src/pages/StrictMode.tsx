import React from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonTitle,
  IonText,
  IonButton,
  IonApp,
} from "@ionic/react";
import { flash } from "ionicons/icons";
import styled from "styled-components";

const StrictModePage = styled(IonPage)`
  --ion-background-color: #090B22;
  --ion-text-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StrictModeContent = styled(IonContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
`;

const StrictModeIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4b22b4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  ion-icon {
    font-size: 48px;
    color: #ffffff;
  }
`;

const StrictModeTitle = styled(IonTitle)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const StrictModeDescription = styled(IonText)`
  font-size: 16px;
  color: #999999;
  margin-bottom: 24px;
`;

const StrictModeButton = styled(IonButton)`
  width: 100%;
  max-width: 240px;
`;

const StrictMode: React.FC = () => {
  return (
    <IonApp>
          <StrictModePage>
      <StrictModeContent>

         <StrictModeIcon>
          <IonIcon icon={flash} size="large" />
        </StrictModeIcon>
     
        <StrictModeTitle>Strict Mode</StrictModeTitle>
        <StrictModeDescription>
          Make it easier to stick to the blockings you've set.
        </StrictModeDescription>
        <StrictModeButton>Explore</StrictModeButton>
      </StrictModeContent>
    </StrictModePage>

    </IonApp>
  
  );
};

export default StrictMode;