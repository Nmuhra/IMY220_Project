import React from 'react';
import './styles/CreatePlaylist.css';

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            isPublic: true,
            coverImage: null
        };
    }

    handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        this.setState({ [name]: inputValue });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreatePlaylist(this.state);
        this.setState({
            title: '',
            description: '',
            isPublic: true,
            coverImage: null
        });
    }

    render() {
        return (
            <div className="playlist-creation">
                <h2>Create New Playlist</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Playlist Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="isPublic">
                            <input
                                type="checkbox"
                                id="isPublic"
                                name="isPublic"
                                checked={this.state.isPublic}
                                onChange={this.handleInputChange}
                            />
                            Make playlist public
                        </label>
                    </div>
                    <button type="submit">Create Playlist</button>
                </form>
            </div>
        );
    }
}

export default CreatePlaylist;