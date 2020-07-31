import React from "react";

class Staticon extends React.Component {
  constructor(props) {
    super(props);        
  };
  render() {        
    const onoff = this.props.contest ? "off" : "on";    
    return(    
        <div className={"stat-icon "+onoff}>                      
          <span className="lineup">Lineup released</span>
          <span className="stream">Live Stream match</span>
          <span className="live">Exclusive Live</span>                                            
          <div className="btn-box">
            <span className="tit">RankingBall App</span>
            <span className="btn-ios"></span>
            <span className="btn-aos"></span>
          </div>                                            
        </div>
    )
  }
};
export default Staticon;