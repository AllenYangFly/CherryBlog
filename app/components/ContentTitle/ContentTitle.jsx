import React from 'react'
import Style from './ContentTitle.scss' 
import { connect } from 'react-redux'
import { FetchArticle } from './../../action/action.js'

class ContentTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { onArticle, onTechnology, onLife, onOther } = this.props;
        const Action = [onArticle, onTechnology, onLife, onOther];
        let Title = [],
            activeItem = this.props.activeItem;

        if(this.props.isSingle) {
            Title = <span className="single active">{this.props.title}</span>;
        }else {
            Title = (this.props.titleList).map(function(item, index) {
                if(index == activeItem) {
                    return <span className="list active" onClick={() => Action[index]()} key={index} data-Index={index}> {item} </span>
                } else {
                    return <span className="list" onClick={() => Action[index]()} key={index} data-Index={index}> {item} </span>
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

const mapStateToProps = (state) => {
    return {
        activeItem: state.changeArticle.index
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onArticle: () => {
            dispatch({type: 'ALL_ARTICLE'})
            dispatch(FetchArticle())
        },
        onTechnology: () => {
            dispatch({type: 'TECHNOLOGY'})
            dispatch(FetchArticle())
        },
        onLife: () => {
            dispatch({type: 'LIFE'})
            dispatch(FetchArticle())
        },
        onOther: () => {
            dispatch({type: 'OTHER'})
            dispatch(FetchArticle())
        }
    }
}


const ContentTitleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentTitle)

export default ContentTitleContainer