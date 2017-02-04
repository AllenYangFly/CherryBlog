import React from 'react';

import ContentTitle from './../ContentTitle/ContentTitle.jsx';
import CommentForm from './../CommentForm/CommentForm.jsx';

import Style from './About.scss';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render () {
        return (
            <section>
                <ContentTitle title="个人介绍" isSingle={true}/>          
                <div className="intro">
                    我是个人介绍
                </div>
                <ContentTitle title="给我留言" isSingle={true}/>
                <CommentForm url="http://localhost:3000/about/saveLeave"/>
            </section>
        );
    }
}

export default About