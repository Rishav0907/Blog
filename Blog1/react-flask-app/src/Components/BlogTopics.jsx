import React, { Component } from 'react';
import './BlogTopic.css'
class BlogTopics extends Component{
    render(){
        let {topicImage,topicName} = this.props;
        console.log(topicName);
        return(
            <div className="BlogTopics">
                <div className="topicImage">
                    <img src={topicImage} alt={topicImage} className="image" />
                    <p className='name'>{topicName}</p>
                </div>
                {/* <div className="topicName">
                    <p>{topicName}</p>
                </div> */}
            </div>
        )
    }
}
export default BlogTopics