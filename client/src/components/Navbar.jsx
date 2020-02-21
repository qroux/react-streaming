import React from 'react';
import { Link } from 'react-router-dom';

// components import
import GoogleAuth from './GoogleAuth';

const Navbar = () => {
  return (
    <div className="ui menu twitch-bg">
      <Link to="/" className="link item">
        <i className="twitch big inverted icon"></i>
        <div id="nav-title" className="mf">Cursed Twitch</div>
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Navbar;
