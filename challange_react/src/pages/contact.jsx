import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

class Contact extends React.Component {
    render() {
        return (
            <div className='contact-body'>
                <div className="section-contact">
                    <div className="row h-100">
                        <div className="col-md-5">
                            <div className="contact-side-image h-100">
                                <div className="contact-side-layer">
                                </div>
                                <div className="contact-side-front-image">
                                    <img src={require("../assets/img/logo-ALTA-v2@2x.png")} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 contact-form-font-all">
                            <div className="contact-form h-100 ">
                                <h1>Contact Us</h1>
                                <form action="">
                                    <div className="form-group contact-form--item-1">
                                        <label id="contact-f-name" className="col-12">Full Name<span className="contact-f-redstar">*</span></label>
                                        <input type="text" className="form-control" placeholder="Fadhil Abdulkarim"></input>
                                    </div>
                                    <div className="contact-form--item-2">
                                        <label id="contact-f-email" className="col-12">Email Address<span className="contact-f-redstar">*</span></label>
                                        <input type="email" className="form-control" placeholder="example@alterra.id"></input>
                                    </div>
                                    <div className="contact-form--item-3">
                                        <label id="contact-f-number" className="col-12">Phone Number<span className="contact-f-redstar">*</span></label>
                                        <input type="text" className="form-control" placeholder="085554447900"></input>
                                    </div>
                                    <div className="contact-form--item-4">
                                        <label id="contact-f-role" className="col-12">Role</label>
                                        <select className="form-control">
                                            <option selected="selected">Selected...</option>
                                            <option value="">Fullstack Developer</option>
                                            <option value="">Site-Reliability Engineer</option>
                                            <option value="">Human Resources</option>
                                        </select>
                                    </div>
                                    <div className="contact-form--item-5">
                                        <label id="contact-f-name" className="col-12">Message</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                    <div className="contact-button--1">
                                        <input className="pencetan" type="button" value="Submit"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;