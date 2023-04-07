import React from "react";
import './style.css';
import mtnLogo from "../../assets/logo.png";


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={mtnLogo} alt="logo" />
      </div>
      <div className="text">
        <h3><strong>MTN Nigeria</strong> Network Incident Complaint Form.</h3>
      </div>
    </div>
  );
};

export default Header;
