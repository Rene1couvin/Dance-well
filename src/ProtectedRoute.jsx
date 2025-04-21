// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Protects routes for admins only
const ProtectedRoute = ({ children, isAdmin }) => {
  if (!isAdmin) {
    // If not an admin, redirect to the login page
    return <Navigate to="/Admin" />;
  }
  return children;
};

export default ProtectedRoute;
