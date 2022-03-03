import jwt from 'jsonwebtoken';
import fs from 'fs';
import bcrypt from 'bcrypt';

import User from '../models/user.model';
import { nextTick } from 'process';

const verifyLogin = async (username, password) => {
    const user = await User.findOne({ username: username })
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);

        if(validPassword) {
            return {status: "success", message: "valid password", userID: user.id};
        } else {
            return {status: "failure", message: {password: "Password is incorrect"}};
        }
    } else {
        return {status: "failure", message: {username: "Username does not exist"}};
    }
};

const hashPassword = async (password) => {
    const SALT_WORK_FACTOR = 10;

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    return await bcrypt.hash(password, salt);
};

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

const generateAccessToken = (userID) => {
    const RSA_PRIVATE_KEY = fs.readFileSync('./private.key', 'utf8');
    return jwt.sign({ 
                id: userID,
                admin: false,
            }, RSA_PRIVATE_KEY, { 
                algorithm: 'RS256',
                expiresIn: '24h', // 24 hours
            }
    );
};

const verifyAccessToken = (token) => {
    const RSA_PUBLIC_KEY = fs.readFileSync('./public.key', 'utf8');
    try {
        return jwt.verify(token, RSA_PUBLIC_KEY)
    } catch (err) {
        return err;
    }
}

const userAuth = {
    verifyLogin: verifyLogin,
    hashPassword: hashPassword,
    checkIfUserExists: checkIfUserExists,
    generateAccessToken: generateAccessToken,
    verifyAccessToken: verifyAccessToken,
};

export { userAuth };