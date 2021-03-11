import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import styles from './About.css'
import profileImg from "../../images/profile_dp.jpg"
import * as Icon from 'react-feather'

const About = () => {
    return (
        <div className="hero" >
            <img src={profileImg} alt="Rajat Kumar Gupta" className="circle-profile-img"/> 
            <h1>Rajat Kumar Gupta </h1> 
            <p className="description">Android Developer | AR / VR Consultant | Writer</p> 
            {/* <p><Button variant="info"> Download Resume </Button> </p> */}
            <div className="social-media-row">
                <a href="https://twitter.com/@knightcube"><Icon.Twitter></Icon.Twitter></a>
                <a href="https://linkedin.com/in/knightcube"><Icon.Linkedin></Icon.Linkedin></a>
                <a href="https://github.com/knightcube"><Icon.GitHub></Icon.GitHub></a>
                <h5>@knightcube</h5>
            </div>
        </div>

    )
}

export default About