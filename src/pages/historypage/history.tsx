import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonText,
  IonIcon
} from "@ionic/react";
import { megaphone } from "ionicons/icons";

const HistoryPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='tertiary'>
          <IonButtons slot='start'>
            <IonMenuButton auto-hide='false' color='light'></IonMenuButton>
          </IonButtons>
          <IonTitle>Transaction History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <IonIcon
            color='danger'
            style={{ fontSize: "60px" }}
            icon={megaphone}
          ></IonIcon>
          <IonText color='danger'>*No history to show at this time*</IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default HistoryPage;
