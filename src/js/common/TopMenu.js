import React, {Component, Suspense } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import * as utils from './utils';
import { Link, NavLink } from "react-router-dom";

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
        topmenu: [],        
        contest : this.props.contest        
    };    
    getTopMenu = async () =>{
        const  {data : {result: topmenu }} = await axios.get(utils.DATA_URL+"/menu/103001");        
        this.setState({topmenu, isLoading :false});        
    };                     
    getTopMenuClick(gametype, submenu, id){    
        //console.log(submenu);             
        this.setState({tabColor: id});
        this.setState({tabsubColor: 0});

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
    getTopSubMenuClick(gametype, submenu, id){           
        this.setState({tabsubColor: id});
        //console.log(gametype);
        //console.log(submenu);
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
    componentDidMount(){
        this.getTopMenu(); 
    }; 
    render() {          
        const {isLoading, topmenu, contest} = this.state;        
        var local_gametype = localStorage.getItem('gametype');  
        const onoff = this.props.contest ? "off" : "on";  
        
        return (      
            <div>
                {isLoading ? (
                <div className="loader">
                    <span className="loader-text">Loading...</span>
                </div>
            ) : (
                <div className="top-type-menu" >
                    <ul className={`type-tab type-104002-bg`}>                                                                                                         
                    <li id={0} onClick={() => this.getTopMenuClick(1,106001, 0)} className={this.state.tabColor === 0 ? "active" : ""} >
                        <div>
                            <em className="i-000000"></em>
                            <span>MyGame</span>
                        </div>
                    </li>
                    {topmenu.map((topmenulist, index) =>(                                            
                        <li 
                            key={topmenulist.game_type} 
                            id={index+1}
                            gametype={topmenulist.game_type} 
                            display={topmenulist.web_pro_display_yn} 
                            order={topmenulist.web_pro_order}
                            onClick={() => this.getTopMenuClick(topmenulist.game_type, 106001, index+1)}
                            className={this.state.tabColor === index+1 ? "active" : ""}
                            >                                                                                     
                            <div>
                            <em className={"i-"+topmenulist.game_type}></em>
                            <Suspense fallback="loading">
                                <MyComponent gametype={topmenulist.game_type} />
                            </Suspense>
                            </div>                            
                        </li>
                    ))}
                     <li><div><span>SWEEPSTAKES</span></div></li>   
                    </ul>
                    
                    <div className={"top-sub-menubox "+onoff}>
                        <ul id="topMenuType" className="top-sub-menu">		
                            <li className={this.state.tabsubColor === 0 ? "active" : ""} onClick={() => this.getTopSubMenuClick(local_gametype, 106001, 0)}>Upcoming {local_gametype}</li>
                            <li className={this.state.tabsubColor === 1 ? "active" : ""} onClick={() => this.getTopSubMenuClick(local_gametype, 106002, 1)}>Live {local_gametype}</li>
                            <li className={this.state.tabsubColor === 2 ? "active" : ""} onClick={() => this.getTopSubMenuClick(local_gametype, 106003, 2)}>History {local_gametype}</li>
                        </ul>
                    </div>                                                
                </div>        
            )}          
            </div>
          )
    }
};
export default TopMenu;