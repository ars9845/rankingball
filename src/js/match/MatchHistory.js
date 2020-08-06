import React from 'react';
import {Link} from "react-router-dom";
import * as utils from '../common/utils';
import Moment from "react-moment";

function MatchHistory({ gametype, homeabbr, awayabbr, hometeam, awayteam, gp, cc, ln, hs, as, st, gs ,hsc , asc, myec, tp, tw}){          
  const my = myec = "0" ? "" : "mygm";    
  const hWin = hsc > asc || hsc === asc ? "" : "lose";  
  const AWin = asc > hsc || asc === hsc ? "" : "lose";    
  const lns = ln.indexOf("-") ? ln.split("-")[0] : ln;  
  
  return (
      <div className={"match-box " +utils.getAbbr(gametype)+" his"}>
        <div className="match-top">
          <div className="league-box">
            <div>
              <p className={"i-"+gametype}></p>
              <span>{lns}</span>
            </div>
            <p><Moment format="hh:mm A z">{st}</Moment></p>
          </div>  
          <span className="join" >JOINED</span>
          <span className="match-time">
            {gs}
          </span>
          <div className="stats-box">
              <span className="stream"></span>
              <span className="live" ></span>
              <span className="lineup"></span>
              <span className="btn-stats off">Game Stats</span>
          </div>					
        </div> 
        <div className="match-bottom">           
          {gametype===104001 && (//soccer
            <div className="soccer-team-box">
              <div className="home">
                <span className="t-team home">{hometeam} </span>
                <span className="score"><em>&#40;{hs}&#41;</em></span>
              </div>
              <div className="away">
                <span className="t-team away">{awayteam} </span>
                <span className="score"><em>&#40;{as}&#41;</em></span>
              </div>
            </div>
          )}
          {(gametype===104002 || gametype===104012) && (//kbo,mlb
            <div className="team-box">
              <div className={AWin}>
                <span className={"t-logo logo-"+utils.getGame(104012)+"-"+awayabbr}></span>             
                <span className="t-team home">{awayteam} </span>							
                <span className="score">{asc}</span>	                					                
              </div>
              <div className={hWin}>
                <span className={"t-logo logo-"+utils.getGame(104012)+"-"+homeabbr}></span>
                <span className="t-team away">{hometeam} </span>							
                <span className="score">{hsc}</span>	
              </div>
            </div>
          )}
          {(gametype===104003 || gametype===104004 || gametype===105001) && (//lol, nfl, nba 
            <div className="team-box">              
              <div className={hWin}>
                <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+homeabbr}></span>
                <span className="t-team away">{homeabbr} <em>&#40;{hs}&#41;</em></span>	
                <span className="score">{hsc}</span>						                
              </div>
              <div className={AWin}>
                <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+awayabbr}></span>             
                <span className="t-team home">{awayabbr} <em>&#40;{as}&#41;</em></span>							
                <span className="score">{asc}</span>						                
              </div>
            </div>
          )}
          <div className="total-box">
            <p className="t-prize">TOTAL PRIZES</p>
            <div className="t-sum">            
              <span className="asset-121002">{                
                tp || undefined ? (tp.toLocaleString()):(0)              
              }</span>			
            </div>
            <p className="t-total">TOTAL <span> <strong>{ tw || undefined ? (tw):(0) }</strong>  WINNERS</span></p>
          </div>
        </div>
      </div>             
  )
};  
export default MatchHistory;