import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="text-lg font-bold">
                <Link to="/">My App</Link>
            </div>
            <div>
                {!token ? (
                    <>
                        <Link to="/login" className="px-4">
                            Login
                        </Link>
                        <Link to="/register" className="px-4">
                            Register
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
