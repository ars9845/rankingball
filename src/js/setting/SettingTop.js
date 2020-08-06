import React from "react";
import * as utils from '../common/utils';
class SettingTop extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    
  };
  render() {        
    const {} = this.state;    
    return(    
        <div className="setting-top">
            <div className="tit featured">
              <div className="info-txt game-104002">
                  <span className="tit">Baseball SCORE DERBY</span>                    
                  <span className="date">Thu, Aug 06, 2020 08:05 AM</span>                    
              </div>
              <div className="team-txt">Baseball - NL MIN@PIT  </div>                                                                     
            </div>
            <div className="tit-group">
              <div className="titbox">
                <span className="tit">Starts in</span>
                <p className="time">90:50:00</p>
              </div>
              <div className="grp-box">
                <div className="grp-txt">
                  <span className="txt">Entries</span>
                  <div className="sum">1 / 1</div>
                  <div className="sum-percent"><span className="count">76</span>%</div>
                </div>          
                <div className="grp"><span className="grp-bar" style={{}}></span></div>																				
              </div> 
              <div className="titbox">
                <span className="tit">In Prizes</span>
                <p><span className="asset-121002">3000</span></p>
              </div>
              <div className="titbox">
                <span className="tit">Single Entry</span>
                <p><span className="asset-121002">4</span></p>
              </div>                  
            </div>                                         
        </div>
    )
  }
};
export default SettingTop;