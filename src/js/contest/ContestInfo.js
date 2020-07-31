import React from "react";
import Moment from "react-moment";
import Countdown,{zeroPad} from 'react-countdown';
import * as utils from '../common/utils';
class ContestInfo extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    submenu: this.props.state.submenu,
    gameid: this.props.state.gameid, 
    gametype: this.props.state.gametype,
    hta: this.props.state.hta,          
    ata: this.props.state.ata,             
    gt: this.props.state.gt,     
    ln: this.props.state.ln,     
    st: this.props.state.st     
  };
  render() {        
    const {submenu, gameid, gametype, hta, ata, gt, ln, st} = this.state;
    const onoff = this.props.contest ? "off" : "on";    
    return(    
      <div className="contest-info">	
        <div className={"tm-first back-logo backlogo-"+utils.getGame(gametype)+"-"+hta}> 
          <span className="t-first">{hta}</span>
          <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+hta}></span>
        </div>
        <div className="tm-infor">			
          <span>{utils.getGame(gametype)} - {ln}</span>	
          <span><Moment format="ddd, MMM D, hh:mm A z">{st}</Moment></span>					          
          <span>
          <Countdown date={st} renderer={
            st => <div>{st.days || 0 ? (st.days+"d "):("")}{zeroPad(st.hours)}:{zeroPad(st.minutes)}:{zeroPad(st.seconds)}</div>
          } />
          </span>
        </div>		
        <div className={"tm-second back-logo backlogo-"+utils.getGame(gametype)+"-"+ata}>
          <span className={"t-logo logo-"+utils.getGame(gametype)+"-"+ata}></span>
          <span className="t-second">{ata}</span>
        </div>	    
      </div>
    )
  }
};
export default ContestInfo;