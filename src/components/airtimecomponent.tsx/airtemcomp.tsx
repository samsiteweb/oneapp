import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

type Airtime = {
  company: string;
  logo: any;
};

const AirtimeComponent: React.FC<Airtime> = ({ company, logo }) => {
  return (
    <IonCard
      style={{
        flex: 1,
        height: "15vh"
      }}
      button={true}
    >
      <IonCardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignContent: "center",
          height: "15vh",
          margin: 0,
          padding: 0
        }}
      >
        <img
          style={{ paddingRight: "2px", paddingLeft: "2px", paddingTop: "5px" }}
          src={logo}
          alt={company}
        />
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          <b>{company} </b>
        </p>
      </IonCardContent>
    </IonCard>
  );
};
export default AirtimeComponent;
