import axios from "axios";
import jwtDecode from "jwt-decode";

const authUrl = "https://aqueous-thicket-88603.herokuapp.com/auth"; //prod
//const authUrl = "http://localhost:3002/auth"; //dllo

export const authHeaders = {
    "auth-token":localStorage.getItem("token") 
}

export const loginAuth = async (credentials) => {
    return await axios.post(`${authUrl}/login`, credentials);
}

export const verifyToken = async () => {
    let verifyTokenData = await axios.get(`${authUrl}/verifyToken`,  {headers: authHeaders});
    if(!verifyTokenData.status === 200){
        logout();
    }
}

export const getCurrentUser = () => {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (err) {
        return null;

    }
}

const logout = () => {
    localStorage.clear();
    window.location = "/";
}