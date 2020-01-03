import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonIcon
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

const billers = [
  {
    biller: "Cable TV Bills"
  },
  {
    biller: "Invoice Payments"
  },
  {
    biller: "Prepaid Card Services"
  },
  {
    biller: "Donations"
  },
  {
    biller: "Utility Bills"
  },
  {
    biller: "Transport and Toll Payments"
  },
  {
    biller: "Embassy Payments"
  }
];

const BillsPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color='tertiary'>
        <IonButtons slot='start'>
          <IonMenuButton auto-hide='false' color='light'></IonMenuButton>
        </IonButtons>
        <IonTitle>Bills Payment</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {billers.map((biller, i) => {
          return (
            <IonItem key={i} button={true} lines='full'>
              <IonLabel>{biller.biller}</IonLabel>
              <IonIcon icon={arrowForward} slot='end' />
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  </IonPage>
);
export default BillsPage;
