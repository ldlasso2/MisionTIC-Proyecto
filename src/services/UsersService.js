import axios from "axios";

const usersUrl = "https://aqueous-thicket-88603.herokuapp.com/usuarios"; //prod
//const usersUrl = "http://localhost:3002/usuarios";

export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}

export const getUsers = async () => {
    return await axios.get(`${usersUrl}/`);
}