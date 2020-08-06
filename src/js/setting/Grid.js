import React from "react";
import * as utils from '../common/utils';
class Grid extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    
  };
  render() {        
    const {} = this.state;    
    return(    
        <div className="grid-content">
            <ul className="txt-box">
              <li>Drag your mouse to change each cell’s position.</li>
              <li>After arranging all the players, click ‘Submit’ to participate in the Contest.</li>
            </ul>
            <div className="grid-page">
              <span className="active">1</span><span className="btn-add">+</span>
              <button className="btn btn-del" type="button">
                <span className="icon-wrapper">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>													
                </span>										
              </button>
            </div>
            <div className="grid-infor">              
              <p>Field No. <span id="gridCount">1/1</span></p>	
              <p>Total Entry Fee <span id="entryFee">0</span></p>              
            </div>

            <div className="cell-content">
              <div  className="cell-box">

                <div className="cell active home">
                  <p className="player-name">Pitcher</p>                   
                  <div className="player-photo">
                    <span className="tm">NYY</span>
                    <span className="num">14</span>
                    <span className="pos">SS</span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                 
                </div>
                <div className="cell active away">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm">NYY</span>
                    <span className="num">14</span>
                    <span className="pos">SS</span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                 
                </div>
                <div className="cell">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>
                <div className="cell">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>
                <div className="cell">
                  <p className="player-name">Select Team</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>
                <div className="cell">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>
                <div className="cell">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>
                <div className="cell">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>
                <div className="cell">
                  <p className="player-name">Select Player</p> 
                  <div className="player-photo" data-id="2142e1ba-3b40-445c-b8bb-f1f8b1054220">
                    <span className="tm-5">PHI</span>
                    <span className="t-logo logo-MLB-PHI"></span>
                  </div>
                  <button className="btn btn-add-del open" type="button">
                    <span className="icon-wrapper">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </span>
                  </button>                  
                </div>

              </div>
            </div>

        </div>
    )
  }
};
export default Grid;