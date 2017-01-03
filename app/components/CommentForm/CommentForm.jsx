import React from 'react';
import Style from './CommentForm.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var nickName = this.refs.nickName,
            Link = this.refs.link,
            Email = this.refs.email,
            TextContent = this.refs.textarea;

        
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

export default Form