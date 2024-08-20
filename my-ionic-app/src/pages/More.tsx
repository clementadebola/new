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
  IonCol,
  IonApp,
} from "@ionic/react";
import {
  personCircle,
  library,
  arrowForwardSharp,
  diamond,
  settings,
  help,
} from "ionicons/icons";
import styled from "styled-components";

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

const StyledHead = styled.div``;

const StyledSignInHead = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  ion-text {
    font-size: 19px;
    text-align: center;
  }
`;

const StyledHeadCard = styled.div`
  ion-card {
    width: 80%;
    border-radius: 16px;
    --background: grey;
    margin: 0 auto;
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2 ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
  }

  ion-icon {
    font-size: 24px;
  }
`;

const StyledCardText = styled.div``;

const StyledCard = styled.div`
  ion-card {
    width: 80%;
    border-radius: 16px;
    --background: grey;
    margin: 0 auto;
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2 ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
  }
    ion-label{
    font-size: 17px;
    color: #fff;
    }

    ion-icon{
        color: gold;
    }

  ion-icon {
    font-size: 24px;
  }
`;

const StyledList = styled.div``;

const More = () => {
  return (
    <IonApp>
      <StyledPage>
        <Header>
          <IonToolbar>
            <IonTitle>More</IonTitle>
          </IonToolbar>
        </Header>
        <IonContent fullscreen>
          <StyledHead>
            <StyledSignInHead>
              <IonText>
                you are not signed in, some features will not be available.
              </IonText>
              <IonLabel color={"primary"}>
                Sign in, or create an account
              </IonLabel>
            </StyledSignInHead>

            <StyledHeadCard>
              <IonCard>
                <IonIcon icon={library} color={"primary"} />
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>
            </StyledHeadCard>
          </StyledHead>

          <StyledList>
            <StyledCardText>
              <IonTitle>About App</IonTitle>
            </StyledCardText>

            <StyledCard>
              <IonCard>
                <IonIcon icon={diamond} />
                <IonLabel >Premium</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>

              <IonCard>
                <IonIcon color={"primary"} icon={settings} />
                <IonLabel>  TroubleShooting</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>

              <IonCard>
                <IonIcon color={"primary"} icon={help} />
                <IonLabel>  Help & FAQ</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>
            </StyledCard>
          </StyledList>
        </IonContent>
      </StyledPage>
    </IonApp>
  );
};

export default More;
