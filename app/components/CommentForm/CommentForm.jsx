import React from 'react';
import Style from './CommentForm.scss';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch(this.props.url,{
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickName: this.refs.nickName.value,
                link: this.refs.link.value,
                email: this.refs.email.value,
                textContent: this.refs.textarea.value,
                pageId: this.props.pageId})
            }
        ).then(response => {
            return response.json();
        }).then(data => {
            if(data.status == 1) {
                window.location.reload();
            }
        }).catch(e => {
            console.log("Oops, error");
        });
    }



    render () {
        return (
            <form className="commentForm">
                <input type="text" ref="nickName" placeholder="昵称" maxLength="10"/>
                <input type="text" ref="link" placeholder="个人链接" />
                <input type="text" ref="email" placeholder="个人E-mail" />
                <div className="textAreaWrap">
                    <textarea ref="textarea" placeholder="想说点儿什么" rows="3">
                    </textarea>
                    <div onClick={this.handleClick} className="submitBtn">
                        发表
                    </div>
                </div>
            </form>
        );
    }
}

export default CommentForm