import jwt from 'jsonwebtoken';
import fs from 'fs';

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
    generateAccessToken: generateAccessToken,
    verifyAccessToken: verifyAccessToken,
};

export { userAuth };