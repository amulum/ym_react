import React from 'react'
import '../styles/bootstrap.min.css'
import Search from './Search';
import {Link, Redirect} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Header extends React.Component {
    postSignout = () => {
        try {
            let is_login  = JSON.parse(localStorage.getItem("isLogin"));
            if (is_login) {
                localStorage.removeItem("isLogin");
                localStorage.removeItem("api_key");
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                this.props.history.push("/");
        }}
         catch (error) {
            console.error(error);
            alert('BELUM LOGIN NGAPAIN LOGOUT :(')
            }
        // localStorage.clear()
      }
    clickProfile = async () => {
        try {
            let is_login  = JSON.parse(localStorage.getItem("isLogin"));
            console.log(is_login)
            if (is_login) {
                this.props.history.push("/profile")   
        }}
         catch (error) {
            console.error(error);
            alert('LOGIN BOS')
            }
        }

	render() {
        const loopnav = this.props.lstCategory.map(category => (
            <li class="nav-item">
                <Link className="nav-link" to={`/category/${category}`} onClick={() => this.props.cobaClick(category)}>
                    {category}
                </Link>
            </li>
        ))

		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					<img className='App-logo' src={require('../images/logo.svg')} width="50px"/><span>KabarKabar</span>
                </Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						{loopnav}
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Lainnya
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/category/Gaming'>
                                    <a class="dropdown-item" href='' onClick={() => this.props.cobaClick('Gaming')}>Gaming</a>
                                </Link>
                                <Link to='/category/Korea'>
                                    <a class="dropdown-item" href='' onClick={() => this.props.cobaClick('Korea')}>Korea</a>
                                </Link>
                                <Link to='/category/Japan'>
                                    <a class="dropdown-item" href='' onClick={() => this.props.cobaClick('Japan')}>Japun</a>
                                </Link>
							</div>
						</li>
					</ul>
					<Search
                        {...this.props}
                    />
					<ul class='navbar-nav ml-auto'>
						<li class="nav-item">
							<Link to="/sign-in" className="nav-link">Sign In</Link>
						</li>
						<li class="nav-item">
							<Link onClick={this.clickProfile} className="nav-link">Profile</Link>
						</li>
						<li class="nav-item">
                            <Link onClick={this.postSignout} className="nav-link">Sign Out</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default connect('catHeader, listNews, isLoading',actions)(withRouter(Header));
