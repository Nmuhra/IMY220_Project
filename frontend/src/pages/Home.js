import React, { Component } from 'react';
import './styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <main>
                    <aside className="friends-list">
                        <h2>Friends</h2>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="friend-item">
                                <div className="friend-avatar">◯</div>
                                <div className="friend-username">friend's username</div>
                            </div>
                        ))}
                    </aside>
                    <section className="playlists">
                        <div className="playlist-header">
                            <h2>Your Playlists</h2>
                            <button className="add-playlist">+</button>
                        </div>
                        <div className="playlist-grid">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="playlist-item">
                                    <div className="playlist-name">playlist name</div>
                                </div>
                            ))}
                        </div>
                        <button className="show-more">show more</button>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;