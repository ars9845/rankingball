import React, {Component, Suspense } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import * as utils from './utils';
import { Link } from "react-router-dom";

class LegacyComponentClass extends Component {
    render() {
      const { t , gametype } = this.props;  
      return (
        <span>{t(gametype)}</span>
      )
    }
};
const MyComponent = withTranslation('common')(LegacyComponentClass);

class TopMenu extends Component {
    constructor(props) {
        super(props);        
    };
    state = {
        isLoading: true,
        topmenu: []            
    };
    getTopMenu = async () =>{
        const  {data : {result: topmenu }} = await axios.get(utils.DATA_URL+"/menu/103001");        
        this.setState({topmenu, isLoading :false});        
    };            
    componentDidMount(){
        this.getTopMenu(); 
    };
    getMatchChangeClick(gametype, submenu){                       
        var local_gametype = localStorage.getItem('gametype');
        if(gametype == 104002){            
            localStorage.setItem('gametype', 104012);            
            if(gametype==undefined){                        
                this.props.onChange(local_gametype, submenu);            
            }else{                                                                                                 
                this.props.onChange(104012, submenu);
            }     
        }else{            
            localStorage.setItem('gametype', gametype);            
            if(gametype==undefined){                        
                this.props.onChange(local_gametype, submenu);            
            }else{                                                                                                 
                this.props.onChange(gametype, submenu);
            }    
        }                   
    };    
    render() {  
        const {isLoading, topmenu} = this.state;        
        var local_gametype = localStorage.getItem('gametype');                         
       
        return (      
            <div>
                {isLoading ? (
                <div className="loader">
                    <span className="loader-text">Loading...</span>
                </div>
            ) : (
                <div className="top-type-menu" >
                    <ul className={`type-tab type-104002-bg`}>                                                                                                         
                    <li onClick={() => this.getMatchChangeClick(1,106001)}><div><span>MyGame</span></div></li>
                    {topmenu.map(topmenulist =>(                                            
                        <li 
                            key={topmenulist.game_type} 
                            id={topmenulist.game_type}
                            gametype={topmenulist.game_type} 
                            display={topmenulist.web_pro_display_yn} 
                            order={topmenulist.web_pro_order}
                            onClick={() => this.getMatchChangeClick(topmenulist.game_type, 106001)}
                            >
                            <div> 
                            <Suspense fallback="loading">
                                <MyComponent gametype={topmenulist.game_type} />
                            </Suspense>
                            </div>      
                        </li>
                    ))}
                     <li><div><span>SWEEPSTAKES</span></div></li>   
                    </ul>

                    <div className="top-sub-menubox">
                        <ul id="topMenuType" className="top-sub-menu hi">		
                            <li className="106001" onClick={() => this.getMatchChangeClick(local_gametype, 106001)}>Upcoming {local_gametype}</li>
                            <li className="106002" onClick={() => this.getMatchChangeClick(local_gametype, 106002)}>Live {local_gametype}</li>
                            <li className="106003" onClick={() => this.getMatchChangeClick(local_gametype, 106003)}>History {local_gametype}</li>		
                            {/* <li className="106004">Hi-Score Challenge</li> */}
                        </ul>
                    </div>   
                </div>        
            )}          
            </div>
          )
    }
};
export default TopMenu;