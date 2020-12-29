import React, { Component } from 'react';
import './SideImage.css'
class SideImageText extends Component {
    render() {
        let { image, text ,heading} = this.props;
        return (
            <div className="SideImageText">
                <div className="imageContainer">
                    <img src={image} alt="ctf" className="sideimage" />
                </div>
                <div className="textContainer">
                    <h2 className="subHeading">{heading}</h2>
                    <p className="main-text">{text}</p>
                </div>
            </div>
        )
    }
}
export default SideImageText;