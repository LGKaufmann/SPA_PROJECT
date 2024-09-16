import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
