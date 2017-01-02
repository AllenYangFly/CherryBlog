import React from 'react';

import ContentTitle from './../ContentTitle/ContentTitle.jsx';
import Style from './Article.scss';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        let titleList = ["全部", "技术", "生活", "杂篇"];
        return (
            <section className="content">
                <ContentTitle title="个人文章SyntaxHighlighter" titleList={titleList} isSingle={false}/>                
                <dl className="archive">
                    <dt>
                        <span>2016</span> AUG
                    </dt>
                    <dd>
                        <a href="http://allenyang.cn">浅谈HTML5视频播放器</a>
                        <em>08/22</em>
                    </dd>
                    <dt>
                        <span>2016</span> AUG
                    </dt>
                    <dd>
                        <a href="http://allenyang.cn">浅谈HTML5视频播放器</a>
                        <em>08/22</em>
                    </dd>
                    <dd>
                        <a href="http://allenyang.cn">浅谈HTML5视频播放器</a>
                        <em>08/22</em>
                    </dd>
                    <dd>
                        <a href="http://allenyang.cn">浅谈HTML5视频播放器</a>
                        <em>08/22</em>
                    </dd>
                    <dt>
                        <span>2016</span> AUG
                    </dt>
                    <dd>
                        <a href="http://allenyang.cn">浅谈HTML5视频播放器</a>
                        <em>08/22</em>
                    </dd>

                </dl>
            </section>
            
        );
    }
}

Article.protoType = {
    
}

export default Article