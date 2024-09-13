import React from 'react';
import Comment from './Comment.js';

class CommentList extends React.Component {
    render() {
        const { comments } = this.props;
        return (
            <div className="comment-list">
                <h3>Comments</h3>
                {comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}
            </div>
        );
    }
}

export default CommentList;