import React from 'react'
import Header from '../component/Header'
import { Redirect } from "react-router-dom";
import '../styles/bootstrap.min.css'

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("isLogin"));
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const state = {
        catHeader : [
            'Football',
            'Economic',
            'Politic',
            'Entertainment',
            'Movie'
        ],
        selected : 'Popular',
        loading : true,
        email : '',
        password : ''
    }
    
    const cobaClick = async (sesuatu) => {
        await this.setState({selected : sesuatu})
        console.log(this.state.selected)
    }

    if (is_login === null) {
        return <Redirect to={{ pathname: "/sign-in" }} />;
    } else {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Header 
                            lstCategory={state.catHeader} 
                            cobaClick={cobaClick}
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
                        <label>Email:</label> {email}
                    </p>
                    <p>
                        <label>Password:</label> {password}
                    </p>
                </div>
                
            </React.Fragment>
    );
}
};

export default Profile;