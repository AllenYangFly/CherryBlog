import React from 'react'
import { connect } from 'react-redux'
import Style from './Page.scss'
import CSSBase from './../common/github-markdown.css'
import CSSDark from './../common/highlight/styles/github.css'
import CommentForm from './../CommentForm/CommentForm.jsx'
import { FetchPost } from './../../action/action.js'
import {Link} from 'react-router'
import Comment from './../Comment/Comment.jsx'
import ContentTitle from './../ContentTitle/ContentTitle.jsx'

var Highlight = require('react-highlight');

class Page extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.onFetchPost(this.props.params.linkId)   
    }
    render() {
        const { data, state } = this.props;
        let PostInfo = {}, Post = [], Comment = []; PostInfo.content = '';

        let WeekList = ['一', '二', '三', '四', '五', '六', '日'];

        for(var item in data) {
            if(data[item].content) {
                PostInfo.content = data[item].content;
                PostInfo.title = data[item].title;
                PostInfo.nickName = data[item].nickName;
                PostInfo.time = new Date(Date.parse(data[item].createDate));


                Post.push(
                    <div className="post-header" key={item}>
                        <div className="post-title">{PostInfo.title}</div>
                        <div className="post-meta"> {PostInfo.time.getFullYear()}-{PostInfo.time.getMonth()+1}-{PostInfo.time.getDate()}  /  生活  /  作者  {PostInfo.nickName}</div>
                    </div>                
                );

                
                data[item].commit.forEach(function(commit, index) {
                    Comment.push(
                        <div className="comment-item" key={index+'comment'}>
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
                            </div>
                        </div>
                    );
                });
                
            }  
        }

        return (
            <section className="post">
                {Post}
                <Highlight innerHTML={true}>
                    {PostInfo.content}
                </Highlight>
                <ContentTitle title="最新评论" isSingle="true"/>
                {Comment}
               
                <CommentForm url="http://localhost:3000/post/saveComment" pageId={this.props.params.linkId}/>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.fetchPost.data,
        state: state.fetchPost.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPost: (linkId) => {
            dispatch(FetchPost(linkId))
        }
    }
}


const PageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)


export default PageContainer