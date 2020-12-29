import React, { Component } from 'react';
import ques from "../assets/ques.png";
import SideImageText from "../Components/SideImageText";

class MyInfoScreen extends Component{
    render(){
        const text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nesciunt debitis fugit non eius! Vel doloribus dolorum corrupti commodi ullam placeat quisquam nulla veniam nesciunt, dolore quia modi temporibus quibusdam?"
        return(
            <div className="MyInfoScreen">
                <div className="headingContainer">
                    <h1>What More ?</h1>
                </div>
                <div className="mainContainer">
                    <SideImageText
                        image={ques}
                        text={text}
                    />
                </div>
            </div>
        )
    }
}
export default MyInfoScreen;