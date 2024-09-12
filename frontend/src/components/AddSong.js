import React from 'react';
import { Music } from 'lucide-react'
import './styles/AddSong.css';

class AddSong extends React.Component {
    render() {
        return (
            <div className="add-song-container">
                <div className="add-song-form">
                    <div className="logo">
                        <Music size={64} />
                    </div>
                    <h2>ADD SONG</h2>
                    <form onSubmit={this.props.handleSubmit}>
                        <input type="text" name="title" placeholder="Song Title" />
                        <input type="text" name="artist" placeholder="Artist" />
                        <input type="text" name="album" placeholder="Album" />
                        <input type="text" name="year" placeholder="Year" />
                        <input type="text" name="duration" placeholder="Duration" />
                        <input type="text" name="plays" placeholder="Plays" />
                        <input type="text" name="image" placeholder="Image URL" />
                        <button type="submit">Add Song</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSong;