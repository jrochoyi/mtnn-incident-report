import React from 'react';
import './style.css';

const Cards = (props) => {
  return (
    <div className="pageContents">
      <div className="formContainer">
        <div className="formBgContainer"></div>
        <div className="form">{props.children}</div>
      </div>
    </div>
  );
}

export default Cards