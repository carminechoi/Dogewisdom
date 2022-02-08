import axios from 'axios';
import User from '../models/user.model';

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
            const newUser = await User.create({
                username: registerData.body.username,
                password: registerData.body.password,
                email: registerData.body.email,
            });
        } catch (e) {
            next(e);
        }
    }
}

export { UserService };