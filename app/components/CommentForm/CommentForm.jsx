import React from 'react';
import Style from './CommentForm.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <form className="commentForm">
                <input type="text" placeholder="昵称" maxLength="10"/>
                <input type="text" placeholder="个人链接" />
                <div className="textAreaWrap">
                    <textarea placeholder="想说点儿什么" rows="3">
                    </textarea>
                    <div className="submitBtn">
                        发表
                    </div>
                </div>
            </form>
        );
    }
}

export default Form