import React from 'react';
import Header from '../component/header'
import Footer from '../component/footer'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about-back">
                    <div className= "container">
                        <div className="wrap-aboutme">
                            <div className="aboutme-block">
                                <div className="aboutme-text">
                                    ABOUT ME.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-wrap-content-left">
                                    <div className="about-wrap-versetile">
                                        <div className="versetile-text">
                                            Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.
                                        </div>
                                    </div>
                                    <div className="wrap-education-content">
                                        <div className="education-text">
                                            Education
                                        </div>
                                        <div className="education-wrap">
                                            <ul className="education__list">
                                                <li><span className="year">2014</span><br/>
                                                    <span className="degree">DIPLOMA</span><br/>
                                                    <span className="major">Computer Engineering - University of Chicago</span>
                                                </li>
                                                <li><span className="year">2014</span><br/>
                                                    <span className="degree">BACHELOR DEGREE</span><br/>
                                                    <span className="major">BS Computer Engineering - University of Chicago</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="heresfew-tableset">
                                        <div className="heresfew-text">
                                            Here’s few technologies I’ve been working with recently :
                                        </div>
                                        <div className="tableset-value">
                                            <table>
                                                <tr>
                                                    <td>HTML & CSS</td>
                                                    <td>Serverless</td>
                                                    <td>Scrum</td>
                                                </tr>
                                                <tr>
                                                    <td>Programming</td>
                                                    <td>Restful API</td>
                                                    <td>Test-Driven Dev</td>
                                                </tr>
                                                <tr>
                                                    <td>Database</td>
                                                    <td>Javascript</td>
                                                    <td>Software Testing</td>
                                                </tr>
                                                <tr>
                                                    <td>Git & Github</td>
                                                    <td>Single Page App</td>
                                                    <td>UX/UI Designer</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-wrap-picture-right">
                                    <img src={require("../assets/img/asdf.png")}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;