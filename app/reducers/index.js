import { combineReducers } from 'redux'


//  改变显示文章类型
const initArticle = {
    index: 0
};

const changeArticle = (state = initArticle, action) => {
    switch (action.type) { 
        case 'ALL_ARTICLE': 
            return initArticle;
        case 'TECHNOLOGY': 
            return Object.assign({}, state, {index: 1})
        case 'LIFE': 
            return Object.assign({}, state, {index: 2})
        case 'OTHER': 
            return Object.assign({}, state, {index: 3})
        default: 
            return state
    }
}


const initState = {
    status: 0
}

export const fetchArticle = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ARTICLE':
            return Object.assign({}, state, {data: action.data})
        default:
            return {state}
    }
}

export const fetchPost = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return Object.assign({}, state, {data: action.data})
        default:
            return {state}
    }
}

export const fetchMusic = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MUSIC':
            return Object.assign({}, state, {data: action.data})
        default:
            return {state}
    }
}

export default combineReducers ({
    changeArticle,
    fetchArticle,
    fetchPost,
    fetchMusic
}) 