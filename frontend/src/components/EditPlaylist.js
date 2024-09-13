import React from 'react';

class EditPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.playlist.name,
            image: props.playlist.image
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const updatedPlaylist = {
            ...this.props.playlist,
            name: this.state.name,
            image: this.state.image
        };
        this.props.onSave(updatedPlaylist);
    }

    render() {
        return (
            <div className="edit-playlist">
                <h2>Edit Playlist</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="Playlist Name"
                    />
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        placeholder="Image URL"
                    />
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={this.props.onCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default EditPlaylist;