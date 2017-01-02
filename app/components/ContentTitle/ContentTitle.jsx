import React from 'react';
import Style from './ContentTitle.scss'; 

class ContentTitle extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this.state = {'activeItem': 0};
    }

    clickHandle (ev) {
        if(ev.target.nodeName.toLowerCase() == "span") {
            this.setState({'activeItem': ev.target.getAttribute('data-Index')});
        }
    }


    render() {
        let Title = [],
        activeItem = this.state.activeItem;

        if(this.props.isSingle) {
            Title = <span className="single active">{this.props.title}</span>;
        }else {
            Title = (this.props.titleList).map(function(item, index) {
                if(index == activeItem) {
                    return <span className="list active" key={index} data-Index={index}> {item} </span>
                } else {
                    return <span className="list" key={index} data-Index={index}> {item} </span>
                }
            });
        }

        return (
            <div className="content-title" onClick={this.clickHandle}>
                {Title}
            </div>
        );
    }
}


export default ContentTitle