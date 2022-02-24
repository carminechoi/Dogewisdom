import axios from 'axios';
import User from '../models/user.model';
import { verifyRegister } from '../middleware';

class UserService {

    static async postLogin(loginData) {
        try {
            return "yers";
        } catch (e) {
            console.log(e);
        }
    }

    static async postRegister(registerData) {
        if (!registerData.body.email || !registerData.body.username || !registerData.body.password) {
            return {status: "failure", message: "user form incomplete"}
        }
        
        const user = await verifyRegister.checkIfUserExists(registerData.body);

        if (user) {
            return {status: "failure", message: verifyRegister.checkIfUsernameOrEmail(user, registerData.body)};
        } else {
            User.create({
                username: registerData.body.username,
                password: registerData.body.password,
                email: registerData.body.email,
            });
            return {status: "success", message: "user created"};
        }
    }
}

export { UserService };