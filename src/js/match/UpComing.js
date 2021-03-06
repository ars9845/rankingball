import React from 'react';
import Moment from "react-moment";
import Countdown,{zeroPad} from 'react-countdown';
import * as utils from '../common/utils';

class UpComing extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {        
    id: this.props.gi,
    submenu: this.props.submenu,
    gameid: this.props.gi,
    gametype: this.props.gt,
    homeabbr: this.props.hta,
    awayabbr: this.props.ata,
    hometeam: this.props.htn,
    awayteam: this.props.atn, 
    gp: this.props.gp, 
    cc: this.props.cc,   
    ln: this.props.ln,
    hs: this.props.hs,
    as: this.props.as,
    st: this.props.st  
  };
  getContestClick(gametype, gameid, submenu){ 
    this.props.onChange(gametype, gameid, submenu);
  }
  render() {     
    const {submenu, gameid, gametype, homeabbr, awayabbr, hometeam, awayteam, gp, cc, ln, hs, as, st} = this.state;
    return (    
      <div className={"match-box " +utils.getAbbr(gametype)} onClick={() => this.getContestClick(gametype, gameid, submenu)}>        
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
            st => <div>{st.days || 0 ? (st.days+"d "):("")}{zeroPad(st.hours)}:{zeroPad(st.minutes)}:{zeroPad(st.seconds)}</div>
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
          {(gametype===104002 || gametype===104012) && (//kbo,mlb
            <div className="team-box">
              <div>
                <span className={"t-logo logo-"+utils.getGame(104012)+"-"+awayabbr}></span>             
                <span className="t-team home">{awayteam} <em>&#40;{as}&#41;</em></span>							
              </div>
              <div>
                <span className={"t-logo logo-"+utils.getGame(104012)+"-"+homeabbr}></span>
                <span className="t-team away">{hometeam} <em>&#40;{hs}&#41;</em></span>							
              </div>
            </div>
          )}
          {(gametype===104003 || gametype===104004 || gametype===105001) && (//lol, nfl, nba 
            <div className="team-box">              
              <div>
                <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+homeabbr}></span>
                <span className="t-team away">{homeabbr} <em>&#40;{hs}&#41;</em></span>							                
              </div>
              <div>
                <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+awayabbr}></span>             
                <span className="t-team home">{awayabbr} <em>&#40;{as}&#41;</em></span>							
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
    //return end
  }
  //render end
};
export default UpComing;