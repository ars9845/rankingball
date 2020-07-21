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
  }
const MyComponent = withTranslation('common')(LegacyComponentClass)

class TopMenu extends Component {
    constructor(props) {
        super(props);         
    }
    state = {
        isLoading: true,
        topmenu: []            
    };
    getTopMenu = async () =>{
        const  {data : {result: topmenu }} = await axios.get(utils.DATA_URL+"/menu/103001");        
        this.setState({topmenu, isLoading :false})         
        console.log(topmenu);
    }    
    componentDidMount(){
        this.getTopMenu();
    };
    getMatchChangeClick(gametype){        
        this.props.onChange(gametype);
        console.log(gametype);      
        const statusToClassName = {
            gametype: gametype           
        };               
    }    
    render() {  
        const {isLoading, topmenu} = this.state;          
        return (      
            <div>
                {isLoading ? (
                <div className="loader">
                    <span className="loader-text">Loading...</span>
                </div>
            ) : (
                <div className="top-type-menu" >
                    <ul className={`type-tab type-104002-bg`}>                                                                                                         
                    <li onClick={() => this.getMatchChangeClick("1")}><div><span>MyGame</span></div></li>
                    {topmenu.map(topmenulist =>(                                            
                        <li 
                            key={topmenulist.game_type} 
                            id={topmenulist.game_type}
                            gametype={topmenulist.game_type} 
                            display={topmenulist.web_pro_display_yn} 
                            order={topmenulist.web_pro_order}
                            onClick={() => this.getMatchChangeClick(topmenulist.game_type)}
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
                </div>         
            )}          
            </div>
          )
    }
}

//const HighOrderComponentTranslated = withTranslation('common')(TopMenu)
export default TopMenu;