import React from 'react';
import {Link} from "react-router-dom";
import * as utils from './common/utils';
import Moment from "react-moment";
import Countdown,{zeroPad} from 'react-countdown';

function MatchLive({ key, id, gameid, gametype, homeabbr, awayabbr, hometeam, awayteam, gp, cc, ln, hs, as, st, gs}){          
  return (    
    <div id={id} key={key} className={"match-live-list " +utils.getAbbr(gametype)}>

      {gametype===104001 && (//soccer
        <div className="match-live">
          <div className="tm-first"> 
            <span className="t-first">{hometeam}</span>            
            <span className="t-board">2</span>
          </div>
          <div className="tm-infor">
            <span><em className={"i-"+gametype}></em>{utils.getGame(gametype)} - {ln}</span>	
            <span><Moment format="MM D hh:mm A z">{st}</Moment></span>	      
            <span>{gs}</span>
          </div>		
          <div className="tm-second">
            <span className="t-board">1</span>            
            <span className="t-second">{awayteam}</span>
          </div>	
        </div>
      )}

      {gametype===104002 || gametype===104012 && (//kbo,mlb
        <div className="match-live">
          <div className="tm-first"> 
            <span className="t-first">{homeabbr}</span>
            <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+homeabbr}></span>
            <span className="t-board">2</span>
          </div>
          <div className="tm-infor">
            <span><em className={"i-"+gametype}></em>{utils.getGame(gametype)} - {ln}</span>	
            <span><Moment format="MM D hh:mm A z">{st}</Moment></span>	      
            <span>{gs}</span>
          </div>		
          <div className="tm-second">
            <span className="t-board">1</span>
            <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+awayabbr}></span>
            <span className="t-second">{awayabbr}</span>
          </div>	
        </div>
      )}

      {gametype===104003 || gametype===104004 || gametype===105001 && (//lol, nfl, nba 
        <div className="match-live">
          <div className="tm-first"> 
            <span className="t-first">{homeabbr}</span>
            <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+homeabbr}></span>
            <span className="t-board">2</span>
          </div>
          <div className="tm-infor">
            <span><em className={"i-"+gametype}></em>{utils.getGame(gametype)} - {ln}</span>	
            <span><Moment format="MM D hh:mm A z">{st}</Moment></span>	      
            <span>{gs}</span>
          </div>		
          <div className="tm-second">
            <span className="t-board">1</span>
            <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+awayabbr}></span>
            <span className="t-second">{awayabbr}</span>
          </div>	
        </div>
      )}

    </div>           
  )
};  
export default MatchLive;