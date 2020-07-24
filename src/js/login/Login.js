import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import FacebookLoginWithButton from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);    
}
  
const componentClicked = () => {
    console.log( "Clicked!" )
}

export default function App() {
    return (
        <div style={{position:"relative", height:"700px"}}>
            <div style={{position:"absolute", top: "50%", left: "50%", margin:"0 0 0 -200px"}}>
                <FacebookLoginWithButton
                    appId="729418677855391"
                    autoLoad
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                    icon="fa-facebook"/>
            </div>            
         </div>
      )             
}
