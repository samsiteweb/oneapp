import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane, IonText } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// import LoginPage from "./pages/loginpage/login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import Avatar from "./assets/imgs/avatar.jpg";

/* Theme variables */
import "./theme/variables.css";
// import WelcomePage from "./pages/welcomepage/welcome";
import {
  IonContent,
  IonMenu,
  IonList,
  IonAvatar,
  IonItem,
  IonChip,
  IonIcon,
  IonLabel
} from "@ionic/react";
import {
  apps,
  cash,
  business,
  filing,
  card,
  today,
  megaphone
} from "ionicons/icons";
import "./App.css";
import Tabs from "./components/tabcomponent/tab";
import LoginPage from "./pages/loginpage/loginpage";

export const Menu: React.FC = () => (
  <IonMenu contentId='main' menuId='first'>
    <IonContent color='tertiary'>
      <div className='menu'>
        <IonAvatar>
          <img src={Avatar} alt='avatar' />
        </IonAvatar>
        <IonText>Samuel Lawal</IonText>
        <IonChip>
          <IonLabel color='light'>View Profile</IonLabel>
        </IonChip>
      </div>
      <IonList className='ionlist' lines='full'>
        <IonItem color='tertiary' button={true} href='/tabs'>
          <IonIcon icon={apps} slot='start'>
            Toggle
          </IonIcon>
          Dashboard
          {/* <IonIcon icon={person} slot='end'>
            Toggle
          </IonIcon> */}
        </IonItem>

        <IonItem color='tertiary' button={true} href='/tabs/airtime'>
          <IonIcon icon={business} slot='start'>
            Toggle
          </IonIcon>
          Airtime
        </IonItem>
        <IonItem color='tertiary' button={true} href='/tabs/data'>
          <IonIcon icon={today} slot='start'>
            Toggle
          </IonIcon>
          Data
        </IonItem>
        <IonItem color='tertiary' button={true} href='/tabs/bills'>
          <IonIcon icon={filing} slot='start'>
            Toggle
          </IonIcon>
          Bills Payment
        </IonItem>
        <IonItem color='tertiary' button={true} href='/tabs/history'>
          <IonIcon icon={megaphone} slot='start'>
            Toggle
          </IonIcon>
          History
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId='main'>
        <Menu />
        <IonRouterOutlet id='main'>
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          {/* <Route path='/login' component={LoginPage} exact={true} /> */}
          <Route path='/login' component={LoginPage} exact={true} />
          <Route path='/tabs' component={Tabs} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
