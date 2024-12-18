import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">
                Welcome to the Dashboard
            </h1>
        </div>
    );
};

export default Home;
