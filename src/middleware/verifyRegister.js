import User from '../models/user.model';

const checkIfUsernameOrEmail = (user, registerData) => {
    let e = {}
    if (user.username === registerData.username) {
        e.username = "Username already exists";
    }
    if (user.email === registerData.email) {
        e.email = "Email already exists";
    }
    return e;
};

const checkIfUserExists = async (registerData) => {
    let user = await User.findOne({
        $or: [{ email: registerData.email, }, 
            { username: registerData.username, },
        ]
    });
    return user ? user : null;
    
};

const verifyRegister = {
    checkIfUsernameOrEmail: checkIfUsernameOrEmail,
    checkIfUserExists: checkIfUserExists,
}

export { verifyRegister };