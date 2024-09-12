import React from 'react';
import Splash from './pages/Splash.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Song from './components/Song.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import imagePath from './assets/images/jimi.jpg'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
