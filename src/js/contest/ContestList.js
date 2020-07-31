import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import * as utils from '../common/utils';

class ContestList extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {
    ct: this.props.ct
  }
  render() {             
    //console.log(this.props);
    
    // i[KEYS.percent] = Math.ceil(i[KEYS.users] / i[KEYS.userMax] * 100);
    // var diff = i[KEYS.startTime].diff(moment(), 'seconds');
    
    // i[KEYS.inPrize] =  i[KEYS.fixedPrize] == 0 ? i[KEYS.metaMax] * i[KEYS.fee] * (100 - i[KEYS.rate]) / 100 : i[KEYS.fixedPrize];
        
    // i[KEYS.guarantee] = i[KEYS.fixedPrize] == 0 ?
    //       diff < 0 ? i[KEYS.inPrize] : i[KEYS.userMax] * i[KEYS.fee] * (100 - i[KEYS.rate]) / 100 : i[KEYS.fixedPrize];
            
    // i[KEYS.percent] = Math.ceil((i[KEYS.users]/i[KEYS.userMax]) * 100)

    return(    
      <div className="contest game-105001">    
        <div className="tit">TNMT</div>        
        <div className="grp-box">
          <div className="grp-txt">
            <span className="txt">ENTRIES</span>
            <div className="sum"><span className="count">5</span> / 10</div>
          </div>          
          <div className="grp"><span className="grp-bar" ></span></div>																				
        </div>        
        <div className="prizes">
          <span className="tit">IN PRIZES</span>
          <div><span className="asset-121002">30,000</span></div>
        </div>        
        <div className="entry-fee">			
          <div className="btn-box">
            <div className="entry-money"><span className="asset-121005">10</span></div>
            <div className="entry-txt">JOIN</div>
          </div>          
        </div>        
      </div>
    )
  }
};
export default ContestList;