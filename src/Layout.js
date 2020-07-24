import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Top from "./js/common/Top";
import Footer from "./js/common/Footer";
import Main from './js/Main';
import Login from './js/login/Login';
import './css/layout.css';
import "./css/team.css";

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
      <HashRouter>
        <Top />
          <Route path="/" exact={true} component={Main} />
          <Route path="/login" component={Login} />      
        <Footer />
      </HashRouter>
      </div>  
    );
  };
};
export default Layout;
