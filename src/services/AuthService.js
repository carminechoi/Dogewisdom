import axios from "axios";
import { config } from '../Constants';

const API_URL = config.url.API_URL;

class AuthService {
    async register(username, email, password) {
        const res = await axios.post(API_URL + "/api/register", {
            username,
            email,
            password,
        });
        if (res.data.token) {
            localStorage.setItem('doge_user', JSON.stringify(res.data.token));
        }
        return res.data;
    }

    async login(username, password) {
        const res = await axios.post(API_URL + "/api/login", {
            username,
            password,
        });
        if (res.data.token) {
            localStorage.setItem('doge_user', JSON.stringify(res.data.token));
        }
        return res.data;
    }

    logout() {
        localStorage.removeItem('doge_user');
    }

    async getUserInfo() {
        const config = { 
            params: {
                token: JSON.parse(localStorage.getItem('doge_user'))
            } 
        }
        if (config.params.token) return await axios.get(API_URL + "/api/user", config);
        else return null;
    }
}

export default new AuthService();