import axios from "axios";
import { store } from "../redux/store";
import { logout } from "../redux/authSlice";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Interceptor to add Authorization header
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor to handle expired tokens
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            store.dispatch(logout());
            window.location.href = "/login"; // Redirect to login on token expiration
        }
        return Promise.reject(error);
    }
);

export default API;
