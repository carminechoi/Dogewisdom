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

    async getUserInfo() {
        const config = { 
            params: {
                token: JSON.parse(localStorage.getItem('doge_user'))
            } 
        }
        return await axios.get(API_URL + "/api/user", config);
    }
}

export default new AuthService();