import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Cards from '../../components/Cards';
import emoji from '../../assets/emoji.png';
import cancelBtn from '../../assets/btnCancel.png';
import {Link} from 'react-router-dom';

const WelcomeRaiseScreen = () => {
    return (
      <div className="appContainer">
        <Header />
        <Cards>
            <p>Raise</p>
            <div className="btnCancel">
                <Link to="/"><img src={cancelBtn} alt="Icon"/></Link>
            </div>
            <div className="title">
                <h4>Let’s get you <br/>started</h4>
                <div className='emoji'>
                    <img src={emoji} alt='Emoji'/>
                </div>
            </div>
            <div className='label'>
                <p>Please input your phone number</p>
            </div>
            <div className="inputContainer">
                <input type="text" placeholder="Phone number" />
            </div>
            <Button btnText="Proceed" btnColor="btnYellow" url="/complain-screen"/>
            <div className="footerText">
                <p>We sincerely apologize for the poor network experience</p>
            </div>
        </Cards>
      </div>
    );
}

export default WelcomeRaiseScreen