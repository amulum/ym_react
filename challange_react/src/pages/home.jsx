import React from 'react';
import Header from '../component/header'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <section>
                    <div className="container">
                        <div className="home-content">
                            <div className="home-content--left d-flex justify-content-center">
                                <div className="home-content--left__photo">
                                    <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")}/>
                                </div>
                            </div>
                            <div className="home-content--right">
                                <div className="home-content--right__bio">
                                    <div className="wrap-home-content--right">
                                        <div className="mynameis">Hi, My name is</div>
                                        <div className="annesullivian">Anne Sullivian</div>
                                        <div className="ibuildthings">I build things for web</div>
                                        <div className="home-button__getintouch">
                                            <a href="contact.html"><button type="button" class="home-btn btn-success">Get In Touch</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;