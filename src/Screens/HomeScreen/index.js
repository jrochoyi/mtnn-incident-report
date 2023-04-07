import React from 'react';
import './style.css';
import mtnLogo from '../../assets/logo.png'
import Button from '../../components/Button';

const HomeScreen = () => {
    return (
      <div className="mainContainer">
        <div className="bgContainer"></div>

        <div className="textContainer">
          <div className="logo">
            <img src={mtnLogo} alt="Logo" />
          </div>

          <div className="textContent">
            <h1><strong>Welcome to <span>MTN <br/>Nigeria </span></strong> Network <br/>Incident Complaint <br/>Form.</h1>
          </div>

          <div className="btnContainer">
            <Button btnText="Raise Complaint" btnColor="btnYellow" url="/welcome-raise-complaint"/>
            <Button btnText="Track Complaint" btnColor="btnYellowOutline" url="/welcome-track-complaint"/>
            <div />
          </div>
        </div>
      </div>
    );
}

export default HomeScreen;