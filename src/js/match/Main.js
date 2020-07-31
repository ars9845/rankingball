import React from 'react';
import axios from "axios";
import * as utils from '../common/utils';
import Moment from "react-moment";
import TopMenu from "../common/TopMenu";
import UpComing from "./UpComing";
import MatchLive from "./MatchLive";
import MatchHistory from "./MatchHistory";
import "../../css/main.css";

class Main extends React.Component {
  state = {
    isLoading: true,
    matchs: [],
    contestlist:[],
    submenu: 106001,
    main: true,
    contest: false
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
    //console.log(matchs);    
  };    
  getContest = async () =>{
    const {data : {result: contestlist }} = await axios.get(utils.DATA_URL+"/contestnew?filterType=lobby&gameType=105001&page=0&rows=20&order=date&asc=true&gameId=565090&menuType=106001");               
    //const matchs = utils.groupBy(matchslist, "st");        
    this.setState({contestlist, main: false, isLoading :false});                  
    console.log(contestlist);  

  };
  render() {   
    const {isLoading, matchs, contestlist, main, contest} = this.state;
      var local_gametype = localStorage.getItem('gametype');    
      console.log(main);  
      if(local_gametype === undefined){
          localStorage.setItem('gametype',105001);
      }                 
    return (      
        <div className={"content bg-color " +  utils.getAbbr(Number(local_gametype))}>
          <TopMenu contest={contest} onChange={this.getMatchChange} />
          <div className="stat-icon">                      
            <span className="lineup">Lineup released</span>
            <span className="stream">Live Stream match</span>
            <span className="live">Exclusive Live</span>                                            
            <div className="btn-box">
              <span className="tit">RankingBall App</span>
              <span className="btn-ios"></span>
              <span className="btn-aos"></span>
            </div>                                            
          </div>
          {isLoading ? (
            <div className="loader">
              <span className="loader-text">Loading...</span>
            </div>
          ) : (
            <div>
              
              { main ? (
                             
              Object.keys(matchs).length < 1 && Object.getOwnPropertyNames(matchs) < 1 ? 
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
                                  <UpComing                        
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
                                    onChange={this.getContest}                  
                                  />                             
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


                ):(
                  <div>contestlist</div>

                )


              }
              
            </div>            
          )}          
        </div>
      )
  }
};
export default Main;