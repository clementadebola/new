import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Search from "./components/Search";
import Notify from "./components/Notify";
import Profile from "./pages/Profile";
import StatsPage from "./pages/StatsPage";
import More from './pages/More';
import StrictMode from "./pages/StrictMode";
import { home, flash, statsChart, ellipsisHorizontal } from "ionicons/icons";
import './App.css';


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
import styled from "styled-components";

setupIonicReact();




const App: React.FC = () => (
  <IonApp >
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
          <Route path="/signin" component={SignIn} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/search" component={Search} exact={true} />
          <Route path="/notify" component={Notify} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/stats" component={StatsPage} exact={true} />
          <Route path="/more" component={More} exact={true} />
          <Route path="/strict-mode" component={StrictMode} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          </Switch>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color={"dark"}>
        <IonTabButton tab="dashboard" href="/dashboard">
          <IonIcon icon={home}  />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="strict-mode" href="/strict-mode">
          <IonIcon icon={flash} />
          <IonLabel>Strict Mode</IonLabel>
        </IonTabButton>
        <IonTabButton tab="stats" href="/stats">
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
