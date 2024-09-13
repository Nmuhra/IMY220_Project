import React from 'react';

class Comment extends React.Component {
    render() {
        const { author, content, timestamp } = this.props;
        return (
            <div className="comment">
                <p>{content}</p>
                <small>By {author} on {timestamp}</small>
            </div>
        );
    }
}

export default Comment;