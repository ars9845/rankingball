import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import * as utils from './common/utils';
import Moment from "react-moment";
import Countdown,{zeroPad} from 'react-countdown';

function MatchList({ id, gameid, gametype, hometeam, awayteam, gp, cc, ln, hs, as, st}){    
  return (
    <li>
      <div className={"match-box " +utils.getAbbr(Number(gametype))}>
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
          <div className="team-box">
            <div>
              <span className="t-logo logo-LOL-RW"></span>							
              <span className="t-team home">{hometeam} <em>&#40;{hs}&#41;</em></span>							
            </div>
            <div>
              <span className="t-logo logo-LOL-ES"></span>
              <span className="t-team away">{awayteam} <em>&#40;{as}&#41;</em></span>							
            </div>
          </div>
          <div className="total-box">
            <p className="t-prize">GUARANTEED PRIZE</p>
            <div className="t-sum">            
              <span className="asset-121002">{gp.toLocaleString()}</span>			
            </div>
            <p className="t-total">TOTAL <span>13</span> CONTESTS</p>
          </div>
        </div>
      </div>          
    </li>   
  )
};  
export default MatchList;