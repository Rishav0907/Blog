import React, { Component } from 'react';
import ctf from "../assets/ctf.png";
import SideImageText from "../Components/SideImageText";
import './ThirdScreen.css'
class ThirdScreen extends Component {
    render() {
        const subHeading="CTF Walkthroughs"
        const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sequi eligendi ab quae aut amet adipisci voluptatibus quam totam veniam sed eius laudantium doloribus libero. Voluptate culpa recusandae esse earum!"
        return (
            <div className="ThirdScreen">
                <div className="headingContainer">
                    <h1>What More ?</h1>
                </div>
                <div className="mainContainer">
                    <SideImageText
                        image={ctf}
                        heading={subHeading}
                        text={text}
                    />
                </div>
            </div>
        )
    }
}
export default ThirdScreen;