import axios from 'axios';
import res from 'express/lib/response';
import User from '../models/user.model';

class UserService {
    static checkUserExist(user, registerData) {
        let e = {}
        if (user.username === registerData.username) {
            e.username = "Username already exists";
        }
        if (user.email === registerData.email) {
            e.email = "Email already exists";
        }
        return e
    }

    static async postLogin(loginData) {
        try {
            return "yers";
        } catch (e) {
            console.log(e);
        }
    }

    static async postRegister(registerData) {
        // Check if username or email already exists,
        // throw error if true, save user if false
        if (!registerData.body.email || !registerData.body.username || !registerData.body.password) {
            return {status: "failure", message: "user form incomplete"}
        }
        let user = await User.findOne({
            $or: [{ email: registerData.body.email, }, 
                { username: registerData.body.username, },
            ]
        });

        if (user) {
            return {status: "failure", message: this.checkUserExist(user, registerData.body)};
        } else {
            User.create({
                username: registerData.body.username,
                password: registerData.body.password,
                email: registerData.body.email,
            });
            return {status: "success", message: "user created"}
        }
    }
}

export { UserService };