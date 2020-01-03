import React from "react";

import "./data.css";
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

const dataOptions = [
  {
    id: 1,
    data: "50mb",
    balance: "N100"
  },
  {
    id: 1,
    data: "100mb",
    balance: "N200"
  },
  {
    id: 1,
    data: "500mb",
    balance: "N900"
  },
  {
    id: 1,
    data: "1Gb",
    balance: "N1000"
  },
  {
    id: 1,
    data: "2Gb",
    balance: "N1900"
  },
  {
    id: 1,
    data: "4.5Gb",
    balance: "N2500"
  },
  {
    id: 1,
    data: "10Gb",
    balance: "N4500"
  }
];

const DataPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color='tertiary'>
        <IonButtons slot='start'>
          <IonMenuButton auto-hide='false' color='light'></IonMenuButton>
        </IonButtons>
        <IonTitle>Buy Data</IonTitle>
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
      <IonItem lines='none'>
        <IonLabel position='stacked' color='tertiary'>
          How much data do you want?
        </IonLabel>
        <IonSelect>
          {dataOptions.map((payment, i) => {
            return (
              <div key={i}>
                <IonSelectOption value={payment.data}>
                  {`${payment.data} balance: ${payment.balance}`}
                </IonSelectOption>
              </div>
            );
          })}
        </IonSelect>
      </IonItem>
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <IonButton shape='round' color='tertiary' fill='outline' size='small'>
          Purchase
        </IonButton>
      </div>
    </IonContent>
  </IonPage>
);

export default DataPage;
