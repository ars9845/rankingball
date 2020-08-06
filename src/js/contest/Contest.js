import React from 'react';
import axios from "axios";
import * as utils from '../common/utils';
import Lodding from "../common/Lodding";
import ContestInfo from "./ContestInfo";
import ContestList from "./ContestList";
import Modal from '../modal/Modal';
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
    count: 0,
    isModalOpen: false
  };
  getContest = async (gametype, gameid, submenu) =>{  
    const {data : {result: contestlist }} = await axios.get(utils.DATA_URL+`/contestnew?filterType=lobby&gameType=${gametype}&page=0&rows=20&order=date&asc=true&gameId=${gameid}&menuType=${submenu}`);                   
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
  openModal = () => {
    this.setState({ isModalOpen: true });
  }
  
  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }
  componentDidMount(){
    this.getContest(this.state.gametype, this.state.gameid, this.state.submenu);    
  };  
  render() {   
    const {isLoading, contestlist} = this.state;
      var local_gametype = localStorage.getItem('gametype');      
      if(local_gametype === undefined){
          localStorage.setItem('gametype',105001);
      }                       
      var userContestCnt = 0
      //console.log(contest);
      
    return (      
        <div className={"content bg-color " +  utils.getAbbr(Number(local_gametype))}>         
          {isLoading ? (
            <Lodding />          
          ) : (
            <div>                     
              <Modal isOpen={this.state.isModalOpen} close={this.closeModal} /> 
              <div className="contest-total">
                <span>TOTAL CONTESTS</span>
                <span className="count">{this.state.count}</span>		
              </div>
              <ContestInfo state={this.state} />
              <div className="contest-list">                            
              {contestlist.list.map((conlist, index) => {                                                                                                                         
                  return (                                                 
                    <div key={index}>
                    {conlist.f === 1 ? (
                      <div className="stream-tit">RankingBall Streaming contest (Guaranteed Prize)</div>
                    ):(
                      <div>                                                
                        {userContestCnt === 0 && (                          
                          <div className="cont-tit" index={userContestCnt++}>User Created Contest</div> 
                        )}                        
                      </div>
                    )}
                    <ContestList key={index} {...conlist} onChange={this.openModal} />                             
                    </div>                    
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