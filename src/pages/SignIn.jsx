import React from 'react'
import Header from '../component/Header'
import '../styles/bootstrap.min.css'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class SignIn extends React.Component {

    inputForm = ele => {
        store.setState({ [ele.target.name]: ele.target.value });    
    }
    
    postLogin = () => {
        const {email, password} = this.props
        console.log('clickLogin')
        // simpan data login dari form ke state
        const data = {
            inputEmail : email,
            inputPassword : password
        };

        
        const self = this;
        // AXIOS
        axios
            .post("https://miamiami.free.beeceptor.com/auth", data)
            .then(function(response) {
                console.log(response.data)
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({api_key : response.data.api_key})
                    store.setState({isLogin : true})
                    store.setState({email : response.data.email})
                    store.setState({password : response.data.password})
                    self.props.history.push('/profile')
                }
            })
            .catch(function(error){
                console.log(error)
            }) 
        // END AXIOS

    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Header 
                            lstCategory={this.props.catHeader} 
                            cobaClick={this.props.cobaClick}
                        />
                    </div>
                <div className="row">
                    <div className="col-8">
                        <form class="px-4 py-3" onSubmit={ele => ele.preventDefault()}>
                            <div class="form-group">
                            <label for="exampleDropdownFormEmail1">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                placeholder="email@example.com"
                                name="email"
                                onChange={ele => this.inputForm(ele)}
                            />
                            </div>
                            <div class="form-group">
                            <label for="exampleDropdownFormPassword1">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                placeholder="Password"
                                name = "password"
                                onChange={ele => this.inputForm(ele)}
                            />
                            </div>
                            <button 
                                type="submit"   
                                class="btn btn-primary" 
                                onClick={this.postLogin}
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
             </div>
            </React.Fragment>
        )
    }
}

export default connect('email, password, catHeader', actions)(withRouter(SignIn));