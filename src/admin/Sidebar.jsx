
// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark text-white p-3" style={{ height: '100vh' }}>
      <h4 className="mb-4">Dance Well Admin</h4>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-link text-white">Reports</Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link text-white">Users Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/content" className="nav-link text-white">Content Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link text-white">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
