import React from 'react';
import axios from "axios";
import Moment from "react-moment";
import * as utils from '../common/utils';
import TopMenu from "../common/TopMenu";
import ContestList from "./ContestList";
import "../../css/main.css";

class Contest extends React.Component {
  state = {
    isLoading: true,
    contestlist:[],    
    contest: true
  };
  getMatch = async () =>{  
    const {data : {result: contestlist }} = await axios.get(utils.DATA_URL+"/contestnew?filterType=lobby&gameType=105001&page=0&rows=20&order=date&asc=true&gameId=565090&menuType=106001");                   
    this.setState({contestlist, main: false, isLoading :false});                  
    console.log(contestlist);     
  }; 
  componentDidMount(){
    this.getMatch();
  };  
  render() {   
    const {isLoading, contestlist, contest} = this.state;
      var local_gametype = localStorage.getItem('gametype');      
      if(local_gametype === undefined){
          localStorage.setItem('gametype',105001);
      }                 
      console.log(contest);
    return (      
        <div className={"content bg-color " +  utils.getAbbr(Number(local_gametype))}>         
          {isLoading ? (
            <div className="loader">
              <span className="loader-text">Loading...</span>
            </div>
          ) : (
            <div>                
              {contestlist.list.map((match, index) => {                                
                  return (                                                                                    
                    <ContestList                        
                      key={index}
                      id={match.gi}
                      gameid={match.gi} 
                      gametype={match.gt} 
                      homeabbr={match.hta} 
                      awayabbr={match.ata}
                      hometeam={match.htn} 
                      awayteam={match.atn} 
                      gp={match.gp} 
                      cc={match.cc}   
                      ln={match.ln}
                      hs={match.hs}
                      as={match.as}
                      st={match.st}                      
                    />                             
                  )                                                    
              })}       
            </div>            
          )}          
        </div>
      )
  }
};
export default Contest;