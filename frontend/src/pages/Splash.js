import React from 'react';
import './styles/Splash.css';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <a href='/login'><button className="get-started-btn">GET STARTED</button></a>
      </div>
    );
  }
};

export default Splash;