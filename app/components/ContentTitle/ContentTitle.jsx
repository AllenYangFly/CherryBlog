import React from 'react';
import Style from './ContentTitle.scss'; 

class ContentTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="content-title">
                <span className="active single">{this.props.title}</span>
            </div>
        );
    }
}


export default ContentTitle