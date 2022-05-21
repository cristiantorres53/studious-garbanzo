import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../context/UserProvider";

const RequiereAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/admon" />;
  }

  return children;
};

export default RequiereAuth;
