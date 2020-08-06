import React from "react";
import * as utils from './utils';
class SubTitle extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    
  };
  render() {        
    const {} = this.state;    
    return(    
      <div className="sub-title">
          <div className="title">Setup</div>
          <ul className="grid-set-link">
              <li>Team &amp; Player Info</li>
              <li>Entries</li>
              <li>Prizes</li>
              <li>Rules &amp; Scoring</li>                            
          </ul>
      </div>
    )
  }
};
export default SubTitle;