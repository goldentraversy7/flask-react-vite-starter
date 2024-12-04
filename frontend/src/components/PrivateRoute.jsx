import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
    const token = localStorage.getItem("token"); // Check if user is authenticated

    // Return either the element or redirect to login
    return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;