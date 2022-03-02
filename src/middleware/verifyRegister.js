import User from '../models/user.model';

const checkIfUserExists = async (registerData) => {
    let e = {};
    if (await User.findOne({username: registerData.username})) {
        e.username = "Username already exists"
    }
    if (await User.findOne({email: registerData.email})) {
        e.email = "Email already exists"
    }
    return e;
};

const verifyRegister = {
    checkIfUserExists: checkIfUserExists,
}

export { verifyRegister };