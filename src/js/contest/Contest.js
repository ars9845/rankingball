import React from 'react';
import axios from "axios";


import * as utils from '../common/utils';
import TopMenu from "../common/TopMenu";
import ContestInfo from "./ContestInfo";
import ContestList from "./ContestList";
import "../../css/main.css";

class Contest extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {
    isLoading: true,
    contestlist:[],    
    contest: true,
    gametype: this.props.gametype, 
    gameid: this.props.gameid,   
    submenu: this.props.submenu,
    count: 0
  };
  getContest = async (gametype, gameid, submenu) =>{  
    const {data : {result: contestlist }} = await axios.get(utils.DATA_URL+"/contestnew?filterType=lobby&gameType="+`${gametype}`+"&page=0&rows=20&order=date&asc=true&gameId="+`${gameid}`+"&menuType="+`${submenu}`);                   
    this.setState({ contestlist, 
                    main: false, 
                    count: contestlist.count,
                    gt: contestlist.list[0].gt,
                    ln: contestlist.list[0].ln,
                    hta: contestlist.list[0].hta,
                    ata: contestlist.list[0].ata,
                    st: contestlist.list[0].st,
                    isLoading :false
                  });                  
    //console.log(contestlist);     
  }; 
  componentDidMount(){
    this.getContest(this.state.gametype, this.state.gameid, this.state.submenu);
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
              <div className="contest-total">
                <span>TOTAL CONTESTS</span>
                <span className="count">{this.state.count}</span>		
              </div>
              <ContestInfo state={this.state} />
              <div className="contest-list">
              {contestlist.list.map((conlist, index) => {                                
                  return (                                                                                    
                    <ContestList key={index} {...conlist}/>                             
                  )                                                    
              })}
              </div>       
            </div>            
          )}          
        </div>
      )
  }
};
export default Contest;