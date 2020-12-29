import React, { Component } from 'react';
import './ContactScreen.css'
import Logo from "../Components/Logo";
import fb from '../assets/fb_logo.png'
import insta from '../assets/insta_logo.png'
import linkedin from "../assets/linkedin_logo.png";
import github from '../assets/github_logo.png'
import medium from "../assets/medium_logo.png";
class ContactScreen extends Component{
    render(){
        return(
            <div className="ContactScreen">
                <div className="contactHeading">
                    <h2>contact me</h2>
                </div>
                <div className="detailContainer">
                    <p className="detail">Email : rishavsaha0907@gmail.com</p>
                    <p className="detail">Contact: 8017544231</p>
                </div>
                <div className="socialLogo">
                    <Logo image={fb} />
                    <Logo image={insta} />
                    <Logo image={linkedin} />
                    <Logo image={github} />
                    <Logo image={medium} />
                </div>
            </div>
        )
    }
}
export default ContactScreen;