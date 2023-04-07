import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Button from '../../components/Button';
import emoji from '../../assets/emoji.png';
import backIcon from '../../assets/backBTN.png'
import {Link} from 'react-router-dom';


const TrackScreen = () => {
  return (
    <div>
      <Header />
      <Cards>
        <div className="backBTN">
          <Link to="/welcome-raise-complaint">
            <img src={backIcon} alt="Icon" />
          </Link>
        </div>
        <div className="title">
          <h3>
            <em>Y'ello</em> Jane
          </h3>
          <div className="emoji">
            <img src={emoji} alt="Emoji" />
          </div>
        </div>

        <p className="inputLabel">Your Complaint</p>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Internet"
          />
        </div>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Internet has been bad for several days now"
          />
        </div>

        <h4 className="statusHeader">Tracking</h4>

        <div className="statusContainer">
          <div className="pending"></div>
          <div className='inProgress'></div>
          <div className="resolved"></div>
        </div>
        <div className="statusLabel">
          <p>Pending</p>
          <p>In Progress</p>
          <p>Resolved</p>
        </div>

        <Button btnText="Exit" btnColor="btnYellow" btnSize="btnSize" url="/" />


        <div className="footerText">
          <p>We sincerely apologize for the poor network experience</p>
        </div>

      </Cards>
    </div>
  );
}

export default TrackScreen