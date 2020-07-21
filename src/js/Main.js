import React from 'react';
import axios from "axios";
import * as utils from './common/utils';
import TopMenu from "./common/TopMenu";
import MatchList from "./MatchList";
import "../css/main.css";

class Main extends React.Component {
  state = {
    isLoading: true,
    matchs: []    
  };
  getMatch = async () =>{
    const  {data : {result: matchs }} = await axios.get(utils.DATA_URL+"/game/106001/103001/105001?type=code");
    //console.log(matchs);
    this.setState({matchs, isLoading :false}) ;    
    console.log(matchs);
  }; 
  componentDidMount(){
    this.getMatch();
  };
  getMatchChange = async (gametype) =>{
    this.setState({isLoading :true});
    console.log(gametype);
    const  {data : {result: matchs }} = await axios.get(utils.DATA_URL+"/game/106001/103001/"+`${gametype}`+"?type=code");    
    this.setState({matchs, isLoading :false});
  };
  render() {   
    const {isLoading, matchs} = this.state;
    
    return (      
        <div className="content">
          <TopMenu onChange={this.getMatchChange} />
          {isLoading ? (
            <div className="loader">
              <span className="loader-text">Loading...</span>
            </div>
          ) : (
            <div>               
              <ul className="match-list">  
              {matchs.length || 0 ? (
                  matchs.map(match =>(                    
                    <MatchList                     
                      key={match.gi}
                      id={match.gi}   
                      gameid={match.gi} 
                      gametype={match.gt} 
                      hometeam={match.hta} 
                      awayteam={match.ata} 
                      gp={match.gp} 
                      cc={match.cc}              
                      ln={match.ln}
                    />                  
                  ))
                  
              ):(
                <div>no data </div>
              )}                
              </ul>
            </div>            
          )}          
        </div>
      )
  }
}
export default Main;