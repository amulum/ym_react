import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

class Footer extends React.Component {
    render () {
        return (
            <div class="container-fluid">
                <div class="row footer-class">
                    <div class="col-sm-4 align-items-center d-flex justify-content-center">
                        <div class="footer-image-alterra">
                            <img src={require("../assets/img/logo-ALTA-v2.png")} />
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex align-items-center justify-content-center">
                        <div class="footer-middle">
                            <div class="wrap-footer--socmed">
                                <span>
                                    Social Media
                                </span>
                                <ul class="list-unstyled">
                                    <li><a href=""><img src={require("../assets/img/ic_fb.png")}/></a></li>
                                    <li><a href=""><img src={require("../assets/img/ic-twitter.png")}/></a></li>
                                    <li><a href=""><img src={require("../assets/img/ic-instagram.png")}/></a></li>
                                    <li><a href=""><img src={require("../assets/img/ic-linkedin.png")}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 align-items-center justify-content-center d-flex">
                        <div class="footer-copyright">
                            <span>Copyright &copy 2019 Alterra</span>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;