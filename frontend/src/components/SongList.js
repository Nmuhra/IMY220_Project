import React from 'react';
import { Play, Pause, MoreHorizontal } from 'lucide-react';
import './styles/SongList.css';

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: null
        };
    }

    togglePlay = (songId) => {
        this.setState(prevState => ({
            playing: prevState.playing === songId ? null : songId
        }));
    }

    render() {
        const { songs } = this.props;
        const { playing } = this.state;

        return (
            <div className="song-list">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Song Name</th>
                            <th>Artist</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => (
                            <tr key={song.id} className={playing === song.id ? 'playing' : ''}>
                                <td>
                                    <button onClick={() => this.togglePlay(song.id)} className="play-pause-button">
                                        {playing === song.id ? <Pause size={16} /> : <Play size={16} />}
                                    </button>
                                </td>
                                <td>{index + 1}</td>
                                <td>{song.name}</td>
                                <td>{song.artist}</td>
                                <td>
                                    <button className="more-options-button">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SongList;