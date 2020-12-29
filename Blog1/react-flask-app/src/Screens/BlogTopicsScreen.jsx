import React, { Component } from 'react';
import './BlogTopicScreen.css' ;
import BlogTopics from "../Components/BlogTopics";
import web from "../assets/web.png";
import ml from "../assets/ml.png";
import security from "../assets/security.png";
import flutter from '../assets/flutter.png'
class BlogTopicScreen extends Component{
    static defaultProps={
        blogNames:[
           {name:'Web Development',image:web},
           {name:'Flutter Development',image:flutter},
           {name:'Machine Learning',image:ml},
           {name:'Cyber Security',image:security}
        ]
    }
    render(){
        return(
            <div className="BlogTopicScreen">
                <div className="heading-container">
                    <div className="heading">
                        <h1 className="heading-text" >Blog Topics</h1>
                    </div>
                </div>
                <div className="Topics">
                    {
                        this.props.blogNames.map((topic)=>(
                            <BlogTopics topicImage={topic.image} topicName={topic.name} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default BlogTopicScreen;