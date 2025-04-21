
// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">Dance Well</Link>
        <div className="d-flex">
          <button className="btn btn-outline-primary" type="button">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
