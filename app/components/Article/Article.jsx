import React from 'react';

import ContentTitle from './../ContentTitle/ContentTitle.jsx';
class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentTitle title="个人文章"/>                
        );
    }
}

Article.protoType = {
    
}

export default Article