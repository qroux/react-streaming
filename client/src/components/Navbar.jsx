import React from 'react';
import { Link } from 'react-router-dom';

// components import
import GoogleAuth from './GoogleAuth';

const Navbar = () => {
  return (
    <div className="ui menu">
      <Link to="/" className="link item">
        <i className="home icon"></i>
      </Link>
      <Link to="/streams/new" className="link item">
        Create
      </Link>
      <Link to="/streams/1" className="link item">
        Show
      </Link>
      <Link to="/streams/edit/1" className="link item">
        Edit
      </Link>
      <Link to="/streams/delete/1" className="link item">
        Delete
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Navbar;
