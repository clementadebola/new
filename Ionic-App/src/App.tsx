import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Notify from "./pages/Notify";
import Profile from "./pages/Profile";
// import Navbar from "./components/Navbar";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { home, flash, statsChart, ellipsisHorizontal } from "ionicons/icons";
// import styled from "styled-components";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/notify" component={Notify} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="blocking" href="/dashboard">
            <IonIcon icon={home} color="primary" />
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
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
