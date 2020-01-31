import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/streams/1/edit" className="link item">
        Edit
      </Link>
      <Link to="/streams/1/delete" className="link item">
        Delete
      </Link>
    </div>
  );
};

export default Navbar;
