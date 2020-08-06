import React from "react";
import * as utils from '../../common/utils';
import SelectTeam from "./SelectTeam";
class Condition extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    
  };
  render() {        
    const {} = this.state;    
    return(    
        <div className="condition-content">         
            <SelectTeam />
            <div className="select-content">
              <p className="select-tit">Select Batters</p>

              <div className="select-team">
                <div className="team first-team active">
                  <span id="firstImg" className="">PHI<em>(0)</em></span>                                    
                </div>			
                <div className="team second-team">                 
                  <span id="secondImg" className="">NYY<em>(0)</em></span>
                </div>
              </div>

              <p className="select-txt">At least one player from both teams must be selected.</p>
              <div className="select-player">
                <div className="tb-tit">	
                  <span className="no">No</span>
                  <span className="pos">Pos</span>
                  <span className="starters">Starters</span>
                  <span className="name">Name</span>
                  <span className="fppg">FPPG</span>
                  <span className="pick">Pick %</span>
                  <span></span>	
                </div>
                <ul className="tb-txt">
                  <li>
                    <span className="no">59</span>                  
                    <span className="pos">1B</span>
                    <span className="starters">4 DD</span>
                    <span className="name"><em></em>Luke Voit</span>
                    <span className="fppg">2.75</span>	
                    <span className="pick">51.82%</span>	
                    <span>																														
                      <button className="btn-plus-minus" type="button">
                        <span className="icon-wrapper">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>													
                        </span>                        
                      </button>																					
                    </span>
                  </li>
                  <li>
                    <span className="no">59</span>                  
                    <span className="pos">1B</span>
                    <span className="starters">4 DD</span>
                    <span className="name"><em></em>Luke Voit</span>
                    <span className="fppg">2.75</span>	
                    <span className="pick">51.82%</span>	
                    <span>																														
                      <button className="btn-plus-minus" type="button">
                        <span className="icon-wrapper">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>													
                        </span>                        
                      </button>																					
                    </span>
                  </li>
                </ul>
              </div>

            </div>
            <ul className="txt-box">
              <li>A 10% commission will be collected from your Entry Fee by RankingBall.</li>
              <li>User-created Contests will be refunded and converted to Free Contest unless three or more players enter.(TOURNAMENT, Head-to-Head)</li>
              <li>User-created Contests cannot be canceled(and refunded) by the user.</li>
              <li>Submitted Entries can be modified in the ‘Upcoming’ tab up to 5 minutes before the real game starts.</li>             
            </ul>                           
        </div>
    )
  }
};
export default Condition;