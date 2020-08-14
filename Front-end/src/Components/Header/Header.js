import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                    
                        <div className="headerContainer">
                            <div className="col-xs-1 col-sm-3 col-md-3 col-lg-2">
                                <div className="logobg">
                                    <div className="hlogo">
                                        e!
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-1 col-sm-4 col-md-4 col-lg-6"></div>
                            <div className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                <div className="login">
                                    Login
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                                <div className="createAccountBox">
                                    <div className="createAccount">
                                         Create an account 
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                    </div>
                </div>    
               
        )
    }
}
export default Header;