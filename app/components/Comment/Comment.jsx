import React from 'react';

import ContentTitle from './../ContentTitle/ContentTitle.jsx';
import Style from './Comment.scss';
import {Link} from 'react-router'

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
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pageId: this.state.pages})
        }).then(response => {
            return response.json();
        }).then(data => {

            this.setState({
                services : data
            })

        }).catch(function(e) {
            console.log("Oops, error");
        });
    }

    render () {
        let serviceShows = [];
        let Data = this.state.services;
        for(let pages in Data) {
            
            Data[pages].commit.forEach((commit, index) => {
                serviceShows.push(
                    <div className="comment-item" key={pages +'-'+ index}>
                        <div className="comment-header">
                            <p>
                                <span><a href={commit.link}>{commit.nickName}</a></span>说:
                            </p>
                        </div>
                        <div className="comment-content">
                            <p>
                                {commit.textContent}
                            </p>
                        </div>

                        <div className="comment-footer">
                            <abbr>{commit.CreateDate}</abbr>
                            <em>/</em>
                            <Link to={'/post/'+ commit.pageId} >
                                查看
                            </Link>
                        </div>
                    </div>
                ); 
            });
        }

        return (
            <section className="comment">
                <ContentTitle title="最新评论" isSingle={true}/>
                {serviceShows}
            </section>
        );
    }
}

export default Comment