import React from 'react';
import * as utils from './common/utils';
import Top from "./common/Top";
import Footer from "./common/Footer";
import Lodding from "./common/Lodding";
import TopMenu from "./common/TopMenu";
import Staticon from "./match/StatIcon";
import Match from "./match/Match";
import Contest from "./contest/Contest";
import "../css/main.css";

class Main extends React.Component {
  state = {
    isLoading: true,
    gametype: 105001,    
    submenu: 106001,
    match: true,
    contest: false
  };  
  getParentsTopMenu = (gametype, submenu) =>{       
    this.setState({gametype :gametype, submenu: submenu, match:true , contest:false });    
  };
  getParentsContest = (gametype, gameid, submenu) =>{            
    this.setState({ match : false, 
                    contest: true, 
                    gametype: gametype, 
                    gameid: gameid, 
                    submenu: submenu});      
  };
  componentDidMount(){
    this.setState({isLoading :false});      
  };
  render() {
    const {isLoading, match, contest} = this.state;
    var local_gametype = localStorage.getItem('gametype');          
    if(local_gametype === undefined){
      localStorage.setItem('gametype',105001);
    }                     
    return (
      <div className="container">
        <Top />
      
        <div className={"content bg-color " +  utils.getAbbr(Number(local_gametype))}>
          <TopMenu state={this.state} contest={contest} onChange={this.getParentsTopMenu} />
          <Staticon contest={contest} />        
          {isLoading ? (
            <Lodding />          
          ) : (
            <div>                
              {match ? (                             
                  <Match gametype={this.state.gametype} submenu={this.state.submenu} onChange={this.getParentsContest} />
                ):(
                  <Contest gametype={this.state.gametype} gameid={this.state.gameid} submenu={this.state.submenu} />
                )
              }              
            </div>            
          )}          
        </div>

        <Footer />
      </div>    
    )
    //return end
  }
  //render end
};
export default Main;