import React from 'react';
import './style.css'
import {Link} from 'react-router-dom';

const Button = (props) => {
    return(
        <Link to={props.url} className={`btn ${props.btnColor} ${props.btnSize}`}>{props.btnText}</Link>

    );

}

export default Button