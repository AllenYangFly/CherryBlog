import React from 'react';
import Style from './common/layout.scss'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import About from './About/About.jsx';
import Collection from './Collection/Collection.jsx';
import Comment from './Comment/Comment.jsx';
import Article from './Article/Article.jsx'

import SideNav from './SideNav/SideNav.jsx';

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="contentWrap">
                <Router history={hashHistory}>
                        <IndexRoute  component={Article} />
                        <Route path="/Comment" component={Comment} />
                        <Route path="/Collection" component={Collection} />
                        <Route path="/about" component={About} />
                </Router>
            </div>
        );
    }
}

Content.protoType = {

}

export default Content 