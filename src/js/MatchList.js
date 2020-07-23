import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import * as utils from './common/utils';
import Moment from "react-moment";
import Countdown,{zeroPad} from 'react-countdown';

function MatchList({ id, gameid, gametype,homeabbr, awayabbr, hometeam, awayteam, gp, cc, ln, hs, as, st}){          
  return (    
      <div className={"match-box " +utils.getAbbr(gametype)}>
        <div className="match-top">
          <div className="league-box">
            <div>
              <p className={"i-"+gametype}></p>
              <span>{ln}</span>
            </div>
            <p><Moment format="hh:mm A z">{st}</Moment></p>			
          </div>  
          <span className="join" >JOINED</span>
          <span className="match-time">
          <Countdown date={st} renderer={
            st => <div>{st.days || 0 ? (st.days+"d:"):("")}{zeroPad(st.hours)}:{zeroPad(st.minutes)}:{zeroPad(st.seconds)}</div>
          } />
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
          {gametype===104002 || gametype===104012 && (//kbo,mlb
            <div className="team-box">
              <div>
                <span className="t-logo logo-LOL-RW"></span>             
                <span className="t-team home">{awayteam} <em>&#40;{as}&#41;</em></span>							
              </div>
              <div>
                <span className="t-logo logo-LOL-ES"></span>
                <span className="t-team away">{hometeam} <em>&#40;{hs}&#41;</em></span>							
              </div>
            </div>
          )}
          {gametype===104003 || gametype===104004 || gametype===105001 && (//lol, nfl, nba 
            <div className="team-box">
              <div>
                <span className="t-logo logo-LOL-RW"></span>             
                <span className="t-team home">{awayabbr} <em>&#40;{as}&#41;</em></span>							
              </div>
              <div>
                <span className="t-logo logo-LOL-ES"></span>
                <span className="t-team away">{homeabbr} <em>&#40;{hs}&#41;</em></span>							
              </div>
            </div>
          )}
          <div className="total-box">
            <p className="t-prize">GUARANTEED PRIZE</p>
            <div className="t-sum">            
              <span className="asset-121002">{                
                gp || undefined ? (gp.toLocaleString()):(0)              
              }</span>			
            </div>
            <p className="t-total">TOTAL <span>{cc}</span> CONTESTS</p>
          </div>
        </div>
      </div>             
  )
};  
export default MatchList;