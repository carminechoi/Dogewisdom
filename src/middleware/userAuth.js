import jwt from 'jsonwebtoken';
import fs from 'fs';

const generateAccessToken = (userID) => {
    const RSA_PRIVATE_KEY = fs.readFileSync('./private.key', 'utf8');
    

    return jwt.sign({ id: userID }, RSA_PRIVATE_KEY, { 
            algorithm: 'RS256',
            expiresIn: 86400, // 24 hours
        }
    );
};

const userAuth = {
    generateAccessToken: generateAccessToken,
};

export { userAuth };