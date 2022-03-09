import User from '../models/user.model';
import { userAuth } from '../middleware';

class UserService {

    static async postLogin(loginData) {
        const result = await userAuth.verifyLogin(loginData.username, loginData.password);
        if (result.status === "success") {
            result.token = userAuth.generateAccessToken(result.userID);
        }
        return result;
    }

    static async postRegister(registerData) {
        // Check that the form data is complete
        if (!registerData.email || !registerData.username || !registerData.password) {
            return {status: "failure", message: "user form incomplete"}
        }

        // Check if username or email already exists
        const duplicateUser = await userAuth.checkIfUserExists(registerData);
        if (duplicateUser.username || duplicateUser.email) {
            return {status: "failure", message: duplicateUser};
        } 

        // Hash the passowrd
        registerData.password = await userAuth.hashPassword(registerData.password);

        // Create new user
        const user = await User.create({
            username: registerData.username,
            password: registerData.password,
            email: registerData.email,
        });

        // Create a token and send it back
        const token = userAuth.generateAccessToken(user.id);
        return {status: "success", message: "user created", token: token};
    }

    static async getUser(token) {
        // Verify the token
        const user = userAuth.verifyAccessToken(token);

        // If Token is valid, send back user data
        if (user.id) {
            const userData = await User.findById(user.id);
            return {
                username: userData.username,
                bookmarks: userData.bookmarks,
            }
        } else {
            return null;
        }
    }

    static async postBookmark(bookmarkData) {
        const user = userAuth.verifyAccessToken(bookmarkData.token);

        // If user exists, remove or add the bookmark
        if (user.id) {
            if (bookmarkData.isBookmark) {
                await User.updateOne(
                    { _id: user.id },
                    { $addToSet: { bookmarks: bookmarkData.symbol } }
                )
                return {status: "success", message: "bookmark added"}; 
            } else {
                await User.updateOne(
                    { _id: user.id },
                    { $pull: { bookmarks: bookmarkData.symbol } }
                )
                return {status: "success", message: "bookmark removed"}; 
            }
        } else {
            return {status: "failure", message: "invalid token"}; 
        }
    }
}

export { UserService };