import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonIcon,
  IonText,
  IonCard,
  IonRow,
  IonCol,
  IonApp,
  IonButton,
} from "@ionic/react";
import {
  flash

} from "ionicons/icons";
import styled from "styled-components";

const StyledPage = styled(IonPage)`
  --ion-background-color: #1c1c1e;
  --ion-text-color: #ffffff;
  

`;

const StyledHead = styled.div`
border-radius: 50%;
width: 100px;
height: 100px;
background: #4B22B4;
display: flex;
align-items: center;
justify-content: center;

ion-icon{
font-size: 30px;
}

`;

const StyledText = styled.div`

text-align:center;


`;

const StyledBtn = styled.div`


`;

const StrictMode = () => {
  return (
    <IonApp>
        <StyledPage>
            <IonContent fullscreen>
            <StyledHead>
            <IonIcon icon={flash} color={"primary"} />
            </StyledHead>
            <StyledText>
            <IonTitle>Strict Mode</IonTitle>
            <IonText>Make it easier to stick to the blockings you've set.</IonText>
            </StyledText>

            <StyledBtn>
                <IonButton>hello</IonButton>
            </StyledBtn>
             
            </IonContent>
        </StyledPage>
    </IonApp>
  )
}

export default StrictMode