import React, { Component } from 'react'
import './Logo.css'
class Logo extends Component{
    render(){
        let {image}=this.props
        return(
            <div className="logo">
                <img src={image} alt="logo" className="logoIcon" />
            </div>
        )
    }
}
export default Logo;