import React from "react";
import { Link } from "react-router-dom";
function Top(){
    return(
        <header className="top">
            <h1 className="logo">                
                <div className="home-logo"></div>
                <div className="sub-logo"></div>
                <div className="goto-gdc"></div>
            </h1> 
            <div className="infor-player login">
                <span className="noti"></span>
                <span className="guide"></span>
                <span className="inbox"></span>
                <Link to="/login" ><span className="my-infor"></span></Link>
            </div>
        </header>
    ); 
}
export default Top;