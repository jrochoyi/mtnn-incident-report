import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Button from '../../components/Button';
import emoji from '../../assets/emoji.png';
import backIcon from '../../assets/backBTN.png'
import {Link} from 'react-router-dom';

const ComplainScreen = () => {
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
          <p>This won't take long</p>

          <div className="emoji">
            <img src={emoji} alt="Emoji" />
          </div>
        </div>

        <div className="inputContainer">
          <input
            type="text"
            placeholder="55, Ishaga Rd, Idi-Araba, Eti-Osa L.G.A, 102215, Lagos"
          />
        </div>

        <div className="dropdown">
          <select placeholder="Complaint Type" name="complaint-type">
            <option value="ussd">USSD</option>
            <option value="call">Call</option>
            <option value="internet">Internet</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="textAreaContainer">
          <textarea name="complaint" placeholder="Complaint"></textarea>
        </div>

        <Button btnText="Send" btnColor="btnYellow" url="/complain-screen" />

        <div className="footerText">
          <p>We sincerely apologize for the poor network experience</p>
        </div>
      </Cards>
    </div>
  );
}

export default ComplainScreen;