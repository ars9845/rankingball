import React from "react";
import * as utils from '../../common/utils';
class SelectTeam extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    
  };
  render() {        
    const {} = this.state;    
    return(                        
        <div className="select-team-box">
            <p className="tit">Select Pitching Team</p>
            <p className="icon-exc"></p>
            <div className="select-team-btn">
                <div className="selectTeam awayTeam">
                    <em className="t-logo logo-MLB-PHI"></em>
                    <span data-id="">PHI</span>
                </div>
                <div className="selectTeam homeTeam">
                    <span data-id="">NYY</span>
                    <em className="t-logo logo-MLB-NYY"></em>
                </div>		
            </div>
            <div className="select-team-infor">
                <div className="first">						
                    <div className="sr-txt">
                        <span><strong>W</strong></span>
                        <span>1</span>
                        <span><strong>L</strong></span>
                        <span>3</span>
                        <span><strong>S</strong></span>
                        <span>-</span>
                        <span><strong>ERA</strong></span>
                        <span>5.91</span>
                    </div>
                    <div id="away-sp-txt" className="sp-txt" >
                        <span><strong>SP</strong></span>
                        <span id="spName">Z. Wheeler</span>
                        <span id="spStat">(1-0,  1.29)</span>
                    </div>
                </div>
                <div className="middle">
                    <span>AWAY</span>
                    <span>HOME</span>
                </div>				
                <div className="second">					
                    <div className="sr-txt">
                        <span><strong>W</strong></span>
                        <span>8</span>
                        <span><strong>L</strong></span>
                        <span>1</span>                    
                        <span><strong>S</strong></span>
                        <span>5</span>
                        <span><strong>ERA</strong></span>
                        <span>3.67</span>
                    </div>
                    <div id="home-sp-txt" className="sp-txt">
                        <span><strong>SP</strong></span>
                        <span id="spName">J. Montgomery</span>
                        <span id="spStat">(1-0,  1.59)</span>
                    </div>
                </div>
            </div>
            <p className="txt">Winning and QS points are given to the selected pitching team according to the results of the competition.</p>
        </div>                                       
    )
  }
};
export default SelectTeam;