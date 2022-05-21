import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Cargando</h1>;

  if (!user) return <Navigate to="/" />;

  return <div>{children}</div>;
};

export default ProtectedRoute;
