import React from "react";

import "./airtime.css";
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
  IonSelectOption
} from "@ionic/react";
import AirtimeComponent from "../../components/airtimecomponent.tsx/airtemcomp";
import { Mtn, Glo, Airtel, nMobile } from "../../components/airtimeNetworks";

type Airtime = {
  company: string;
  logo: any;
};
const airtimeServiceProvider: Airtime[] = [
  { company: "Glo", logo: Glo },
  { company: "Mtn", logo: Mtn },
  { company: "Airtel", logo: Airtel },
  { company: "9Mobile", logo: nMobile }
];

const paymentOptions = [
  {
    id: 1,
    first: "Wallet",
    balance: "20,999"
  },
  {
    id: 2,
    first: "Card",
    balance: "No Card added"
  }
];

const AirtimePage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color='tertiary'>
        <IonButtons slot='start'>
          <IonMenuButton auto-hide='false' color='light'></IonMenuButton>
        </IonButtons>
        <IonTitle>Buy Airtime</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonItem lines='none'>
        <IonLabel position='stacked' color='tertiary'>
          Select Payment Method
        </IonLabel>
        <IonSelect>
          {paymentOptions.map((payment, i) => {
            return (
              <div key={i}>
                <IonSelectOption value={payment.first}>
                  {`${payment.first} balance: ${payment.balance}`}
                </IonSelectOption>
              </div>
            );
          })}
        </IonSelect>
      </IonItem>

      <div style={{ marginLeft: "15px", marginTop: "20px" }} color='tertiary'>
        <span style={{ color: "background" }}>Select a nework: </span>
      </div>
      <div className='airtimeContainer'>
        {airtimeServiceProvider.map((res, index) => (
          <AirtimeComponent key={index} company={res.company} logo={res.logo} />
        ))}
      </div>
      <IonItem lines='inset'>
        <IonLabel position='stacked' color='tertiary'>
          Phone Number
        </IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <br></br>
      <IonItem lines='inset'>
        <IonLabel position='stacked' color='tertiary'>
          How much airtime do you want?
        </IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <IonButton shape='round' color='tertiary' fill='outline' size='small'>
          Purchase
        </IonButton>
      </div>
    </IonContent>
  </IonPage>
);

export default AirtimePage;
