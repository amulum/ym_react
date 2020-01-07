import React from 'react'
import Header from '../component/Header'
import '../styles/bootstrap.min.css'
import axios from 'axios'

class SignIn extends React.Component {
    state = {
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
    
    cobaClick = async (sesuatu) => {
        await this.setState({selected : sesuatu})
        console.log(this.state.selected)
    }

    inputForm = ele => {
        this.setState({ [ele.target.name]: ele.target.value });    
      };
    
    postLogin = () => {
        const {email, password} = this.state
        console.log('click')
        // simpan data login dari form ke state
        const data = {
            inputEmail : email,
            inputPassword : password
        };
        const self = this;
        axios
            .post("https://miamiami.free.beeceptor.com/auth", data)
            .then(function(response) {
                console.log(response.data)
                if (response.data.hasOwnProperty("api_key")) {
                    localStorage.setItem('api_key', response.data.api_key)
                    localStorage.setItem("isLogin", true)
                    localStorage.setItem("email", response.data.email)
                    localStorage.setItem("password", response.data.password)
                    self.props.history.push('/profile')
                }
            })
            .catch(function(error){
                console.log(error)
            }) 
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Header 
                            lstCategory={this.state.catHeader} 
                            cobaClick={this.cobaClick}
                            keyword={this.state.search}
                            placeholder="mau cari apa"
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

export default SignIn;