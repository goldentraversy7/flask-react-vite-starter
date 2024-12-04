import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    const token =
        useSelector((state) => state.auth.token) ||
        localStorage.getItem("token");

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Root route dynamically redirects based on authentication */}
                <Route
                    path="/"
                    element={
                        token ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Protected route */}
                <Route
                    path="/dashboard"
                    element={<PrivateRoute element={Home} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;
