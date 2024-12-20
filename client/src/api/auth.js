import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:5000/api";

export async function onRegistration(registrationData) {
    return await axios.post(
        `${API_URL}/register`,
        registrationData
    );
}

export async function onLogin(loginData) {
    return await axios.post(
        `${API_URL}/login`, 
        loginData
    );
}

export async function onLogout() {
    return await axios.get(`${API_URL}/logout`);
}

export async function fetchProtectedInfo() {
    return await axios.get(`${API_URL}/protected`);
}