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
    this.setState({matchs, isLoading :false}) ;    
    console.log(matchs);        
  }; 
  componentDidMount(){
    this.getMatch();
  };
  getMatchChange = async (gametype, submenu) =>{
    this.setState({isLoading :true});
    //console.log(gametype);
    //console.log(submenu);
    const  {data : {result: matchs }} = await axios.get(utils.DATA_URL+"game/"+`${submenu}`+"/103001/"+`${gametype}`+"?type=code");    
    this.setState({matchs, isLoading :false});    
    console.log(matchs);  
  };  
  render() {   
    const {isLoading, matchs} = this.state;
      var local_gametype = localStorage.getItem('gametype');      
      if(local_gametype || undefined){
          localStorage.setItem('gametype',105001);    
      }
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
                      hs={match.hs}
                      as={match.as}
                      st={match.st}
                    />                  
                  ))                  
              ):(
                <div className="no-list"><div className="txt1">no data</div></div>
              )}                
              </ul>
            </div>            
          )}          
        </div>
      )
  }
};
export default Main;