// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './useUser';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useUser()
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect ke homepage jika sudah login
  }
  return children;
};

export default ProtectedRoute;
