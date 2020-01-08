import React from 'react'
import Header from '../component/Header'
import { Redirect } from "react-router-dom"
import '../styles/bootstrap.min.css'
import { withRouter } from "react-router-dom"
import { connect } from "unistore/react"
import { actions, store } from "../store"

const Profile = props => {
    if (props.isLogin === false) {
        return (
        <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Header 
                            lstCategory={props.catHeader} 
                            cobaClick={props.cobaClick}
                            {...props}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <h2 className="text-center"> BELUM LOGIN </h2>
                </div>                    
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Header 
                            lstCategory={props.catHeader} 
                            cobaClick={props.cobaClick}
                            {...props}
                        />
                    </div>
                </div>
                <div>
                    <h1
                        style={{
                        textalign: "center"
                        }}
                    >
                        Profile
                    </h1>
                    <p>
                        <label>Email:</label> {props.email}
                    </p>
                    <p>
                        <label>Password:</label> {props.password}
                    </p>
                </div>
                
            </React.Fragment>
    );
}
};

export default connect('catHeader, email, password, isLogin',actions)(withRouter(Profile));
