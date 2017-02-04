import React from 'react';
import Style from './common/layout.scss'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux'

import About from './About/About.jsx';
import Collection from './Collection/Collection.jsx';
import Comment from './Comment/Comment.jsx';
import Article from './Article/Article.jsx'

import SideNav from './SideNav/SideNav.jsx';
import Page from './Page/Page.jsx';


class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={ store }>
                <div className="contentWrap">
                    <Router history={hashHistory}>
                            <IndexRoute  component={Article} />
                            <Route path="/comment" component={Comment} />
                            <Route path="/collection" component={Collection} />
                            <Route path="/about" component={About} />
                            <Route path="/post/:linkId" component={Page} />
                    </Router>
                </div>
            </Provider>
        );
    }
}

Content.protoType = {

}

export default Content 