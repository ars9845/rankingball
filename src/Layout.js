import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Login from './js/login/Login';
import Main from './js/Main';
import Contest from './js/contest/Contest';
import Setting from './js/setting/Setting';
import './css/layout.css';
import "./css/team.css";

class Layout extends React.Component {
  render() {
    return (      
      <HashRouter>        
          <Route path="/" exact={true} component={Main} />
          <Route path="/login" component={Login} />          
          <Route path="/set/:id" component={Setting} />
      </HashRouter>      
    );
  };
};
export default Layout;
