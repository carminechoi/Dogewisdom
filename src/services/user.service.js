import axios from 'axios';
import res from 'express/lib/response';
import User from '../models/user.model';

class UserService {
    createNewUser(username, password, email) {
        User.create({
            username: username,
            password: password,
            email: email,
        });
    }

    static checkUserExist(user, registerData) {
        let e = {}
        if (user.username === registerData.username) {
            e.message.username = "username already exists";
        }
        if (user.email === registerData.email) {
            e.message.email = "email already exists";
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
 
        await User.findOne({
            $or: [{ email: registerData.body.email, }, 
                { username: registerData.body.username, },
            ]
        }).then(user => {
            if (user) {
                console.log("in here")
                return {status: "failure", message: this.checkUserExist(user, registerData.body)};
            } else {
                return {status: "success", data: createNewUser(
                    registerData.body.username,
                    registerData.body.password,
                    registerData.body.email, )}
            }
        })
        
    }
}

export { UserService };