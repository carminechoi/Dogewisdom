import axios from "axios";
import { config } from '../Constants';

const API_URL = config.url.API_URL;

class AuthService {
    register (username, email, password) {
        return axios.post(API_URL + "/api/register", {
            username,
            email,
            password,
        })
        .then(res => {
            if (res.data.token) {
                localStorage.setItem('doge_user', res.data.token);
            }
            return res.data
        })
    }
}

export default new AuthService();