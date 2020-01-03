import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { IonPage, IonButton, IonContent } from "@ionic/react";
import oneApp from "../../assets/imgs/oneApp.jpg";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "cenrter"
              }}
            >
              <img src={oneApp} alt='oneapp' />
            </div>

            <form method='post' action=''>
              <label>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Input username..'
                required
              />

              <label>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Input password..'
                required
              />
            </form>
          </div>
          <div
            style={{
              marginLeft: "20%",
              marginRight: "20%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <IonButton color='tertiary' shape='round'>
              Login
            </IonButton>
            {/* <Link to='' className='forgot'>
              <h6>Forgot Password? </h6>
            </Link>
            <Link to='' className='register'>
              Register
            </Link> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default LoginPage;
