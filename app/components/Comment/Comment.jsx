import React from 'react';

import ContentTitle from './../ContentTitle/ContentTitle.jsx';
import Style from './Comment.scss';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            services:[],
            pages: 1
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/comment/getComment',{
            method: "GET", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: this.state.pages
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                services : data
            })
        }).catch(function(e) {
            console.log("Oops, error");
        });
    }

    render () {
        let serviceShows = this.state.services.map((service, index) => {
            return (
                <div className="comment-item" key={index}>
                    <div className="comment-header">
                        <p>
                            <span><a href={service.link}>{service.nickName}</a></span>说:
                        </p>
                    </div>
                    <div className="comment-content">
                        <p>
                            {service.content}
                        </p>
                    </div>

                    <div className="comment-footer">
                        <abbr>{service.time}</abbr>
                        <em>/</em>
                        <a href={service.pagesLink}>查看</a>
                    </div>
                </div>
            );
           
        });
        return (
            <section className="comment">
                <ContentTitle title="最新评论" isSingle={true}/>
                {serviceShows}
            </section>
        );
    }
}

export default Comment