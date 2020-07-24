import React from 'react';
import axios from "axios";
import * as utils from './common/utils';
import TopMenu from "./common/TopMenu";
import UpComing from "./UpComing";
import MatchLive from "./MatchLive";
import "../css/main.css";

class Main extends React.Component {
  state = {
    isLoading: true,
    matchs: [],
    submenu: 106001
  };
  getMatch = async () =>{
    const {data : {result: matchslist }} = await axios.get(utils.DATA_URL+"/game/106001/103001/105001?type=code");               
    const matchs = utils.groupBy(matchslist, "st");        
    this.setState({matchs, isLoading :false});        
    //console.log(matchs);        
  }; 
  componentDidMount(){
    this.getMatch();
  };
  getMatchChange = async (gametype, submenu) =>{
    this.setState({isLoading :true});    
    const {data : {result: matchslist }} = await axios.get(utils.DATA_URL+"game/"+`${submenu}`+"/103001/"+`${gametype}`+"?type=code");         
    const matchs = utils.groupBy(matchslist, "st");    
    this.setState({matchs, submenu, isLoading :false});
    console.log(matchs);  
  };  
  render() {   
    const {isLoading, matchs} = this.state;
      var local_gametype = localStorage.getItem('gametype');      
      if(local_gametype === undefined){
          localStorage.setItem('gametype',105001);    
      }                 
    return (      
        <div className="content">
          <TopMenu onChange={this.getMatchChange} />
          {isLoading ? (
            <div className="loader">
              <span className="loader-text">Loading...</span>
            </div>
          ) : (
            <div>                
              {Object.keys(matchs).length < 1 && Object.getOwnPropertyNames(matchs) < 1 ? 
                (
                  <div className="no-list"><div className="txt1">no data</div></div>  
                ):(
                  <div className="match-content">
                    
                    {this.state.submenu === 106001 && (                      
                      <ul className="match-list"> 
                      {Object.keys(matchs).map((key) => {
                          return (
                            <li key={key}>                    
                              <div className="date-tit">{key}</div>
                              {matchs[key].map((match) => {                                
                                return (                                                                                    
                                  <UpComing                        
                                    key={match.gi}
                                    id={match.gi}   
                                    gameid={match.gi} 
                                    gametype={match.gt} 
                                    homeabbr={match.hta} 
                                    awayabbr={match.ata}
                                    hometeam={match.htn} 
                                    awayteam={match.atn} 
                                    gp={match.gp} 
                                    cc={match.cc}   
                                    ln={match.ln}
                                    hs={match.hs}
                                    as={match.as}
                                    st={match.st}                      
                                  />                             
                                )                                                    
                              })}                        
                            </li>
                          )
                      })}
                      </ul>                                    
                    )}                                 
                    {this.state.submenu === 106002 && (
                      <div>
                      {Object.keys(matchs).map((key) => {
                        return ( 
                          <ul className="match-list" key={key}>                                 
                              {matchs[key].map((match) => {                                
                                return (                   
                                  <li key={match.gi}>                                                  
                                    <MatchLive                        
                                      key={match.gi}
                                      id={match.gi}   
                                      gameid={match.gi} 
                                      gametype={match.gt} 
                                      homeabbr={match.hta} 
                                      awayabbr={match.ata}
                                      hometeam={match.htn} 
                                      awayteam={match.atn} 
                                      gp={match.gp} 
                                      cc={match.cc}   
                                      ln={match.ln}
                                      hs={match.hs}
                                      as={match.as}
                                      st={match.st}     
                                      gs={match.gs}                 
                                    /> 
                                  </li>
                                )                                                    
                              })}                                                    
                        </ul> 
                        )
                      })}
                      </div>
                    )}                                 
                    {this.state.submenu === 106003 && (
                      <ul className="match-list"> 
                      {Object.keys(matchs).map((key) => {
                          return (
                            <li key={key}>                    
                              <div className="date-tit">{key}</div>
                              {matchs[key].map((match) => {                                
                                return (                                                                                    
                                  <UpComing                        
                                    key={match.gi}
                                    id={match.gi}   
                                    gameid={match.gi} 
                                    gametype={match.gt} 
                                    homeabbr={match.hta} 
                                    awayabbr={match.ata}
                                    hometeam={match.htn} 
                                    awayteam={match.atn} 
                                    gp={match.gp} 
                                    cc={match.cc}   
                                    ln={match.ln}
                                    hs={match.hs}
                                    as={match.as}
                                    st={match.st}                      
                                  />                             
                                )                                                    
                              })}                        
                            </li>
                          )
                      })}
                      </ul>                       
                    )}                                                              
                  </div>
                )
              }
            </div>            
          )}          
        </div>
      )
  }
};
export default Main;