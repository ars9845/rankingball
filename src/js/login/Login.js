import React from 'react';
import Moment from "react-moment";
import axios from "axios";
import * as utils from '../common/utils';
import Lodding from "../common/Lodding";
import "../../css/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);      
  };
  state = {
    isLoading: false,
    username:'',
    password:''
  };  
  handleClick(event){        
    // document.cookie = "rankingball_id=f0f4f0ed-4703-4ea3-9e90-2afd4cb85223";    
    // axios.post('http://dev.rankingball.com:13001/login', { 
    //   id : "kurt@rankingball.com", 
    //   password : "ars0067546!" 
    // }) .then(function (response) { 
    //   console.log(response); 
    // }) .catch(error => { 
    //   console.log('error : ',error.response) 
    // });
  }
  _dbTest = async() => {    
    // const res = await axios.get('/api/test');    
    // console.log(res.data);
  }
  componentDidMount(){  
    this._dbTest();
  };  
  render() {   
    const {isLoading} = this.state;                    
    return (      
        <div className="">                  
          {isLoading ? (
            <Lodding />
          ) : (
            <div className="login-content">              
              <h1 className="logo"></h1>
              <button className="btn close" type="button">
                <div className="icon-wrapper">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>													
                </div>
              </button>
              <h2>RANKINGBALL</h2>
              <p className="sub-tit">LOGIN</p> 
              <div className="form-content">																		
                <span className="i i-user"></span>
                {/* <input type="text" className="" name="username" placeholder="Email" value="${username}"/> */}
              </div>
              <div className="form-content">
                <span className="i i-pass"></span>
                <input type="password" className="" name="password" placeholder="Password"/>
              </div>
              <div className="form-content">
                <div>				    							    	
                  <input id="remember_me" name ="remember_me" type="checkbox"/>
                  {/* <label for="remember_me"><span></span>Remember</label> */}
                </div>
                <div><a href="/forget">Forgot your password</a></div>
              </div>
              <div className="form-content">		    	
                {/* <input id="btnLogin" className="btn" type="submit" value="Login" /> */}
                <input type="submit" onClick={(event) => this.handleClick(event)} />
              </div>
            </div>                
          )}          
        </div>
      )
      //return end
  }
  //render end
};
export default Login;