import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="header-logo text-center">
                                <img src={require("../assets/img/logo-ALTA.png")} />
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-6">
                            <div className="header--nav">
                                <ul className="header--nav__list list-unstyled">
                                    <li>
                                        <a className="home-active" href="home.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="experience.html">Experience</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;