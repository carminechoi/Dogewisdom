import User from '../models/user.model';
import { verifyRegister } from '../middleware';
import { userAuth } from '../middleware';

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
        
        const duplicateUser = await verifyRegister.checkIfUserExists(registerData.body);

        if (duplicateUser) {
            return {status: "failure", message: duplicateUser};
        } else {
            const user = await User.create({
                username: registerData.body.username,
                password: registerData.body.password,
                email: registerData.body.email,
            });
            const token = userAuth.generateAccessToken(user.id);
            return {status: "success", message: "user created", token: token};
        }
    }
}

export { UserService };