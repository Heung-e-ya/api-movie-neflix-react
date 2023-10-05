import React from "react";
import MovieDetail from "../page/MovieDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authenticateAction } from "../redux/action/authenticateAction";
const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <MovieDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
