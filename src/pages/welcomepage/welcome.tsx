import React from "react";
import "./welcome.css";
import {
  tabletPortrait,
  wallet,
  card,
  addCircle,
  removeCircle,
  notifications,
  cash,
  megaphone,
  today,
  business,
  filing
} from "ionicons/icons";

import {
  IonContent,
  IonCard,
  IonIcon,
  IonChip,
  IonLabel,
  IonCardContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonBadge,
  IonPage
} from "@ionic/react";
// import { Icon } from "ionicons/dist/types/icon/icon";
// import TabsExample from "../../components/tabcomponent/tab";

const WelcomePage: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar color='tertiary'>
        <IonButtons slot='start'>
          <IonMenuButton auto-hide='false' color='light'></IonMenuButton>
        </IonButtons>
        <IonTitle size='small' style={{ textAlign: "center" }}>
          Hi, Samuel
        </IonTitle>
        <IonButtons slot='end'>
          <IonIcon slot='icon-only' icon={notifications}></IonIcon>
          <IonBadge color='light'>1</IonBadge>
        </IonButtons>
      </IonToolbar>
      <IonContent forceOverscroll={true} fullscreen={true} color='background'>
        <div>
          <IonCard color='tertiary' className='accountCard'>
            <IonCardContent className='accountCardItem'>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <IonChip>
                  <IonIcon icon={wallet} color='light' />
                  <IonLabel color='light'>Wallet</IonLabel>
                </IonChip>
                <IonChip>
                  <IonIcon icon={card} color='medium' />
                  <IonLabel color='medium'>Card</IonLabel>
                </IonChip>
              </div>

              <div style={{ textAlign: "center" }}>
                <h3>Balance:</h3>
                <h1>N20,990</h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <IonChip>
                  <IonIcon icon={removeCircle} color='light' />
                  <IonLabel color='light'>Withdraw</IonLabel>
                </IonChip>
                <IonChip>
                  <IonIcon icon={addCircle} color='light' />
                  <IonLabel color='light'>Fund Acount</IonLabel>
                </IonChip>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
        <div className='cardContainer'>
          <IonCard button={true} className='cardItem' color='light'>
            <IonCardContent>
              <div className='cardItemContent'>
                <div className='iconContainer'>
                  <IonIcon className='iconItem' icon={business} />
                </div>
                <div>
                  <h3 style={{ color: "var(--iconcolor)" }}>
                    <b>Airtime</b>
                  </h3>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard button={true} className='cardItem' color='light'>
            <IonCardContent>
              <div className='cardItemContent'>
                <div className='iconContainer'>
                  <IonIcon className='iconItem' icon={filing} />
                </div>
                <div>
                  <h3 style={{ color: "var(--iconcolor)" }}>
                    <b>Bills</b>
                  </h3>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard button={true} className='cardItem' color='light'>
            <IonCardContent>
              <div className='cardItemContent'>
                <div className='iconContainer'>
                  <IonIcon className='iconItem' icon={today} />
                </div>
                <div>
                  <h3 style={{ color: "var(--iconcolor)" }}>
                    <b>Data</b>
                  </h3>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
        <div className='cardContainer'>
          <IonCard button={true} className='cardItem' color='light'>
            <IonCardContent>
              <div className='cardItemContent'>
                <div className='iconContainer'>
                  <IonIcon className='iconItem' icon={megaphone} />
                </div>
                <div>
                  <h3 style={{ color: "var(--iconcolor)" }}>
                    <b>History</b>
                  </h3>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard button={true} className='cardItem' color='light'>
            <IonCardContent>
              <div className='cardItemContent'>
                <div className='iconContainer'>
                  <IonIcon className='iconItem' icon={card} />
                </div>
                <div>
                  <h3 style={{ color: "var(--iconcolor)" }}>
                    <b>Cards</b>
                  </h3>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
          <IonCard button={true} className='cardItem' color='light'>
            <IonCardContent>
              <div className='cardItemContent'>
                <div className='iconContainer'>
                  <IonIcon className='iconItem' icon={cash} />
                </div>
                <div>
                  <h3 style={{ color: "var(--iconcolor)" }}>
                    <b>Account</b>
                  </h3>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
        {/* <TabsExample /> */}
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
