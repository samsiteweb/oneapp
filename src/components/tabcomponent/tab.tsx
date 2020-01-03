import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonApp,
  IonRouterOutlet
} from "@ionic/react";
import { apps, business, filing, today, megaphone } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import WelcomePage from "../../pages/welcomepage/welcome";
import AirtimePage from "../../pages/airtimepage/airtimepage";
import { IonReactRouter } from "@ionic/react-router";
import BillsPage from "../../pages/billspage/bills";
import HistoryPage from "../../pages/historypage/history";
import DataPage from "../../pages/datapage/datapage";

interface MainTabsProps {}

export const Tabs: React.FC<MainTabsProps> = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path='/tabs/welcomepage'
            component={WelcomePage}
            exact={true}
          />
          <Route path='/tabs/airtime' component={AirtimePage} exact={true} />
          <Route path='/tabs/bills' component={BillsPage} exact={true} />
          <Route path='/tabs/data' component={DataPage} exact={true} />
          <Route path='/tabs/history' component={HistoryPage} exact={true} />
          <Redirect exact path='/tabs' to='/tabs/welcomepage' />
        </IonRouterOutlet>

        <IonTabBar color='menushade' slot='bottom'>
          <IonTabButton tab='dashboard' href='/tabs/welcomepage'>
            <IonIcon icon={apps} />
            <IonLabel>Dashboard</IonLabel>
            <IonBadge color='danger'>1</IonBadge>
          </IonTabButton>

          <IonTabButton tab='Airtime' href='/tabs/airtime'>
            <IonIcon icon={business} />
            <IonLabel>Airtime</IonLabel>
          </IonTabButton>
          <IonTabButton tab='Data' href='/tabs/data'>
            <IonIcon icon={today} />
            <IonLabel>Data</IonLabel>
          </IonTabButton>

          <IonTabButton tab='Bills' href='/tabs/bills'>
            <IonIcon icon={filing} />
            <IonLabel>Bills</IonLabel>
          </IonTabButton>

          <IonTabButton tab='History' href='/tabs/history'>
            <IonIcon icon={megaphone} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default Tabs;
