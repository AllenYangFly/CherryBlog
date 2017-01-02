import React from 'react';

import ContentTitle from './../ContentTitle/ContentTitle.jsx';
import Style from './Comment.scss';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       
    }

    render () {
        return (
            <section className="comment">
                <ContentTitle title="最新评论" isSingle={true}/>
                <div className="comment-item">
                    <div className="comment-header">
                        <p>
                            <span><a href="http://allenyang.com">一世浮云</a></span>说:
                        </p>
                    </div>
                    <div className="comment-content">
                        <p>
                            界面设计的不错，很好看
                        </p>
                    </div>

                    <div className="comment-footer">
                        <abbr>2015-05-30 02:10</abbr>
                        <em>/</em>
                        <a href="allenyang.com">查看</a>
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <p>
                            <span><a href="http://allenyang.com">一世浮云</a></span>说:
                        </p>
                    </div>
                    <div className="comment-content">
                        <p>
                            界面设计的不错，很好看界面设计的不错，很好看界面设计的不错，很好看界面设计的不错，很好看界面设计的不错，很好看界面设计的不错，很好看
                        </p>
                    </div>

                    <div className="comment-footer">
                        <abbr>2015-05-30 02:10</abbr>
                        <em>/</em>
                        <a href="http://allenyang.cn">查看</a>
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <p>
                            <span>一世浮云</span>说:
                        </p>
                    </div>
                    <div className="comment-content">
                        <p>
                            界面设计的不错，很好看界面设计的不错，很好看界面设计的不错，很好看界面设计的不错，很好看
                        </p>
                    </div>

                    <div className="comment-footer">
                        <abbr>2015-05-30 02:10</abbr>
                        <em>/</em>
                        <a>查看</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Comment