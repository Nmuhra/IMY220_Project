import React from 'react';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            content: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ author: '', content: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-comment-form">
                <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    placeholder="Your Name"
                />
                <textarea
                    name="content"
                    value={this.state.content}
                    onChange={this.handleInputChange}
                    placeholder="Your Comment"
                />
                <button type="submit">Add Comment</button>
            </form>
        );
    }
}

export default AddComment;