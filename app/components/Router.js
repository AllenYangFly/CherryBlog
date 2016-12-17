import React from 'react';
import ReactDOM from 'react-dom';
import Style from './common/layout.scss'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import About from './About/About.jsx';
import Collection from './Collection/Collection.jsx';
import Comment from './Comment/Comment.jsx';
import Article from './Article/Article.jsx'

import App from './app.js';

class Wrap extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content">
                <Router history={hashHistory}>  
                    <Route path="/" component={App}>                  
                        <IndexRoute  component={Article} />
                        <Route path="/Comment" component={Comment} />
                        <Route path="/Collection" component={Collection} />
                        <Route path="/about" component={About} />
                    </Route>
                </Router>
            </div>
        );
    }
}

Wrap.protoType = {

}

ReactDOM.render(<Wrap />, document.getElementById("app"));