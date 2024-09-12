import React from 'react';
import Splash from './pages/Splash.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Song from './components/Song.js';
import AddSong from './components/AddSong.js';
import PlaylistPreview from './components/PlaylistPreview.js';
import ProfilePreview from './components/profilePreview.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import imagePath from './assets/images/jimi.jpg'
import avatarPath from './assets/images/avatar.png'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/song'
            element={
              <Song
                image={imagePath}
                title="All Along the Watchtower"
                artist="Jimi Hendrix"
                album="Electric Ladyland"
                year="1968"
                duration="4:00"
                plays={730174530}
              />

            }
          />
          <Route
            path='/playlistpreview'
            element={
              <PlaylistPreview
                image={imagePath}
                title="All Along the Watchtower"
                artist="Jimi Hendrix"
                album="Electric Ladyland"
                songsCount="50"
                duration="12hr"
                plays={730174530}
              />

            }
          />
          <Route path="/addsong" element={<AddSong />} />

          <Route path='/profile' element={<ProfilePreview
            avatarUrl={avatarPath}
            username="John"
            friendsCount="100" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
