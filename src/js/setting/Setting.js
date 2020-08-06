import React from "react";
import * as utils from '../common/utils';
import Lodding from "../common/Lodding";
import Top from "../common/Top";
import Footer from "../common/Footer";
import SubTitle from "../common/SubTitle";
import SettingTop from "./SettingTop";
import MlbCondition from "./mlb/Condition";
import Grid from "./Grid";

class Setting extends React.Component {
  constructor(props) {
    super(props);        
  };
  state = {                   
    isLoading: true
  };
  componentDidMount(){
    this.setState({isLoading :false});      
  };
  render() {            
    const {isLoading} = this.state;
    return (
        <div className="container">
            <Top />
            {isLoading ? (
                <Lodding />  
            ) : (
                <div>
                    <SubTitle />
                    <SettingTop />
                    <div className="create-content mlb">
                        <MlbCondition />
                        <Grid />
                    </div>
                    <div className="btn-box-setting">
                        <button className="rb-btn btn-back">Back</button>
                        <button className="rb-btn home-logo">go game list</button>
                    </div>                   
                </div>
            )}
            <Footer />
        </div>
    )
  }
};
export default Setting;