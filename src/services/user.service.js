import axios from 'axios';

class UserService {
    static async postLogin(loginData) {
        try {
            return "yers";
        } catch (e) {
            console.log(e);
        }
    }

    static async postRegister(registerData) {
        try {
            return "ok";
        } catch (e) {
            console.log(e);
        }
    }
}

export { UserService };