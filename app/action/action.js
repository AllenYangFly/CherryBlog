export const ChangeTitle = (index) => {
    return {
        type: 'CHANGE_ARTICLE',
        index
    }
}


export const FetchArticle = (subreddit) => {
    return dispatch => {
        dispatch(ArticleData({status: 0}))
        return fetch("http://localhost:3000/",{
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            if(data.status == 0) {
                alert("请检查您的网络!");
            }
            dispatch(ArticleData(data))
        }).catch(function(e) {
            console.log("Oops, error");
        });
    }
}

export const FetchPost = (subreddit) => {
    return dispatch => {
        dispatch(PostData({status: 0}))
        return fetch("http://localhost:3000/post",{
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                linkId: subreddit
            })
        }).then(response => {
            return response.json();
        }).then(data => {
            if(data.status == 0) {
                alert("请检查您的网络!");
            }
            dispatch(PostData(data))
        }).catch(function(e) {
            console.log("Oops, error");
        });
    }
}

const ArticleData = (data) => {
    return {
        type: 'FETCH_ARTICLE',
        data: data
    }
}

const PostData = (data) => {
    return {
        type: 'FETCH_POST',
        data: data
    }
}