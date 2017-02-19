import React from 'react'
import { connect } from 'react-redux'

import ContentTitle from './../ContentTitle/ContentTitle.jsx'
import Style from './Article.scss'
import { FetchArticle } from './../../action/action.js'
import {Link} from 'react-router'

class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.onFetchArticle()   
    }
    
    render() {
        const { index, data, state } = this.props;

        let titleList = ["全部", "技术", "生活", "杂篇"];
        var MonthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        
        let currentMonth = 0,
            currentYear = 0,
            ArticleList = [];

        for(let item in data) {
            if( data[item].postType && data[item].postType.indexOf('type' + index) >= 0 || index == 0) {
                let Time = new Date(Date.parse(data[item].createDate)),
                    Year = Time.getFullYear(),
                    Month = Time.getMonth()+1,
                    Day = Time.getDate();

                Month = (Month < 10) ? '0'+Month : Month;
                Day = (Day < 10) ? '0'+Day : Day;

                if(currentMonth != Month || currentYear != Year) {
                    ArticleList.push(
                    <dt key={'M' + item}>
                        <span>{Year}</span> {MonthList[Time.getMonth()]}
                    </dt>);

                    currentMonth = Month;
                    currentYear = Year;
                }

                ArticleList.push(
                    
                        <dd key={'A' + item}>
                            <Link to={'/post/'+data[item].linkId} key={item} >
                            <span > {data[item].title} </span>
                            <em>{ Month+'/'+Day }</em>
                            </Link>
                        </dd>
                    
                );
            }
        }
        
        return (
            <section className="content">
                <ContentTitle title="个人文章SyntaxHighlighter" titleList={titleList} isSingle={false}/>                
                <dl className="archive">
                    
                    
                    {ArticleList}
                </dl>
            </section>
        );
    }
}

Article.protoType = {
    
}

const mapStateToProps = (state) => {
    return {
        index: state.changeArticle.index,
        data: state.fetchArticle.data,
        state: state.fetchArticle.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchArticle: () => {
            dispatch(FetchArticle())
        }
    }
}


const ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)

export default ArticleContainer