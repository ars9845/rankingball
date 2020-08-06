import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import * as utils from '../common/utils';

class ContestList extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {
    gameId: this.props.gi,
    featured: this.props.f,
    contestType: this.props.ct,
    users: this.props.u,
    userMax: this.props.um,
    percent: Math.ceil(this.props.u / this.props.um * 100),
    totalPrize: this.props.tp,
    fee: this.props.fe,
    topValue : this.props.tv,
    //asc: "0"
    // at: 121005
    // ata: "DMO"
    // ati: "126056"
    // atn: "Dominus Esports"
    // awayScore: "0"
    // bgt: 33
    // bmi: 0
    // br: 0
    // bt: 0
    // cgi: 500101
    // convertValue: "300"
    // ct: 114005
    // dlt: 0
    // dm: 0
    // f: 1
    // fe: 1
    // fp: 0
    // gi: "565102"
    // gst: 202001
    // gt: 105001
    // homeScore: "0"
    // hsc: "0"
    // hta: "FPX"
    // hti: "1568"
    // htn: "FunPlus Phoenix"
    // id: 67746
    // it: 0
    // j: 0
    // li: "294"
    // ln: "LPL"
    // mbi: 0
    // mc: 1
    // mi: 41003
    // mm: 200
    // point: 0
    // r: 0
    // ra: 10
    // rank: 0
    // rat: 121002
    // rd: 0
    // rm: 0
    // rt: 116001
    // s: 1
    // st: 1596445200000
    // streamYn: 0
    // t: "LOL - LPL FPX@DMO |~| "
    // tp: 3500
    // tv: 3500
    // u: 36
    // um: 200    
  }
  getContestModalClick(){ 
    this.props.onChange();
  }
  render() {             
    //console.log(this.props);
    const {gameId, featured, contestType, users, userMax, percent, totalPrize, fee, topValue} = this.state;
    return(    
      <div className="contest-box" id={gameId}>
        {featured ===1 ?(
          <div className="contest featured">
            <div className="tit" onClick={() => this.getContestModalClick()}>
              <p>{utils.getContestType(contestType)}</p>
              <p className="subtxt">The Prize is determined by the score(or the number of lines) acquired, not by ranking.</p>
            </div>                         
            <div className="prizes" onClick={() => this.getContestModalClick()}>
              <span className="tit">GUARANTEED IN PRIZES</span>
              <div><span className="asset-121002">{topValue.toLocaleString()}</span></div>
            </div>        
            <div className="entry-fee">
              <Link to={{pathname: `set/${gameId}`}}>			
              <div className="btn-box">
                <div className="entry-money"><span className="asset-121005">{fee}</span></div>
                <div className="entry-txt">JOIN</div>
              </div>          
              </Link>
            </div> 
          </div>
        ) : (
          <div className="contest" >
            <div className="tit" onClick={() => this.getContestModalClick()}>{utils.getContestType(contestType)}</div>        
            <div className="grp-box" onClick={() => this.getContestModalClick()}>
              <div className="grp-txt">
                <span className="txt">ENTRIES</span>
                <div className="sum"><span className="count">{users}</span> / {userMax}</div>
              </div>          
              <div className="grp"><span className="grp-bar" style={{width: percent+"%"}} ></span></div>																				
            </div>        
            <div className="prizes" onClick={() => this.getContestModalClick()}>
              <span className="tit">IN PRIZES</span>
              <div><span className="asset-121002">{totalPrize.toLocaleString()}</span></div>
            </div>        
            <div className="entry-fee">
              <Link to={{pathname: `set/${gameId}`}}>
              <div className="btn-box">
                <div className="entry-money"><span className="asset-121005">{fee}</span></div>
                <div className="entry-txt">JOIN</div>
              </div>      
              </Link>    
            </div> 
          </div> 
        )}                 
      </div>
    )
  }
};
export default ContestList;