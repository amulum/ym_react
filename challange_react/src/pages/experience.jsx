import React from 'react';
import Header from '../component/header'
import Footer from '../component/footer'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div class="container-fluid">
                            <h1 class="exp-main-header">Experience</h1>
                    </div>
                    <div class="container">
                        <div class="exp-middle">
                            <ul>
                                <li>
                                    <div class="row">
                                        <div class="exp-mid-box">
                                            <h2>Full-Stack Engineer - Alterra Academy</h2>
                                            <h3>May, 2019 - Present</h3>
                                            <div class="exp-box-text"> - Write modern, performant, maintainable code for a diverse array of client and internal projects<br/>> - Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="row">
                                    <div class="exp-mid-box">
                                        <h2>Front Engineer - Apple</h2>
                                        <h3>May, 2018 - May, 2019</h3>
                                        <div class="exp-box-text">Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                    <div class="row">
                                    <div class="exp-mid-box">
                                        <h2>UI/UX Design - Scout</h2>
                                        <h3>January, 2018 - April, 2018</h3>
                                        <div class="exp-box-text"> - Developed and shipped highly interactive web applications for Apple Music using Ember.js<br/>> - Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browse</div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Experience;