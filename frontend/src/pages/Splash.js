import React, { Component } from 'react';
import { Music } from 'lucide-react';
import './styles/Splash.css';
import Login from '../components/Login.js';
import darkimg from '../assets/images/dark.png';
import lightimg from '../assets/images/light.png';

class Splash extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <img src={darkimg} alt="Dark mode illustration" />
                </div>

                <div className="button-container">
                <a href='/login'><button className="cssbuttons-io-button"> Get started
                    <div className="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                    </div>
                </button></a>
                </div>
            </div>
        );
    }
}

export default Splash;
