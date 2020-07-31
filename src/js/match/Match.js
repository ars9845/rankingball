import React from 'react';
import Moment from "react-moment";
import axios from "axios";
import * as utils from '../common/utils';
import Lodding from "../common/Lodding";
import UpComing from "./UpComing";
import MatchLive from "./MatchLive";
import MatchHistory from "./MatchHistory";
import "../../css/main.css";

class Match extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {
    isLoading: true,
    matchs: [],  
    gametype: this.props.gametype,
    submenu: this.props.submenu,
    match: true,
    contest: false      
  };
  getMatch = async () =>{
    const {data : {result: matchslist }} = await axios.get(utils.DATA_URL+"/game/106001/103001/105001?type=code");               
    const matchs = utils.groupBy(matchslist, "st");        
    this.setState({matchs, isLoading :false});                 
  };   
  getMatchChange = async (gametype, submenu) =>{
    this.setState({isLoading :true});        
    const {data : {result: matchslist }} = await axios.get(utils.DATA_URL+"game/"+`${submenu}`+"/103001/"+`${gametype}`+"?type=code");                 
    const matchs = utils.groupBy(matchslist, "st");     
    this.setState({matchs, submenu, isLoading :false});                   
  }; 
  getChildContest = (gametype, gameid, submenu) =>{    
    this.props.onChange(gametype, gameid, submenu);
  }; 
  componentDidMount(){
    this.getMatch();    
  };
  componentDidUpdate(prevProps) {        
    if (this.props.gametype !== prevProps.gametype || this.props.submenu !== prevProps.submenu ) {
      this.getMatchChange(this.props.gametype, this.props.submenu);  
    }
  }    
  render() {   
    const {isLoading, matchs, match} = this.state;
      var local_gametype = localStorage.getItem('gametype');          
      if(local_gametype === undefined){
          localStorage.setItem('gametype',105001);
      }                       
    return (      
        <div>                  
          {isLoading ? (
            <Lodding />
          ) : (
            <div>              
              {Object.keys(matchs).length < 1 && Object.getOwnPropertyNames(matchs) < 1 ? 
                (
                  <div className="no-list"><div className="txt1">no data</div></div>  
                ):(

                  <div className="match-content">                    
                    {this.state.submenu === 106001 && (//UpComing                      
                      <ul className="match-list"> 
                      {Object.keys(matchs).map((key ,index) => {
                          return (
                            <li key={index}>
                              <div className="date-tit"><Moment format="MMM DD, YYYY">{matchs[key][0].st}</Moment></div>
                              {matchs[key].map((match, index) => {                                
                                return (                                                                                    
                                  <UpComing key={index} submenu={this.state.submenu} {...match} onChange={this.getChildContest} />                             
                                )                                                    
                              })}                        
                            </li>
                          )
                      })}
                      </ul>                                    
                    )}                                 
                    {this.state.submenu === 106002 && (//Live
                      <div>
                      {Object.keys(matchs).map((key, index) => {                  
                        return ( 
                          <ul className="match-list" key={index}>                                 
                              {matchs[key].map((match, index) => {                                
                                return (                   
                                  <li key={index}>                                                  
                                    <MatchLive                                                              
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
                                      hsc={match.hsc}
                                      asc={match.asc}
                                      myec={match.myec}              
                                    /> 
                                  </li>
                                )                                                    
                              })}                                                    
                        </ul> 
                        )
                      })}
                      </div>
                    )}                                 
                    {this.state.submenu === 106003 && (//History
                      <ul className="match-list"> 
                      {Object.keys(matchs).reverse().map((key ,index) => {                     
                          return (
                            <li key={index}>                    
                              <div className="date-tit"><Moment format="MMM DD, YYYY">{matchs[key][0].st}</Moment></div>
                              {matchs[key].map((match, index) => {                                
                                return (                                                                                    
                                  <MatchHistory                        
                                    key={index}
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
                                    hsc={match.hsc}
                                    asc={match.asc}      
                                    myec={match.myec}   
                                    gs={match.gs}   
                                    tp={match.tp}
                                    tw={match.tw}
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
      //return end
  }
  //render end
};
export default Match;