import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Top from "./js/common/Top";
import Footer from "./js/common/Footer";
import Login from './js/login/Login';
import Main from './js/Main';
import Contest from './js/contest/Contest';
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
          <Route path="/main/:id" component={Main} />          
          <Route path="/contest/:id" component={Contest} />      
        <Footer />
      </HashRouter>
      </div>  
    );
  };
};
export default Layout;
