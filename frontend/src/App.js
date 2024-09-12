import React from 'react';
import Splash from './pages/Splash.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter >

    );
  }
};

export default App;