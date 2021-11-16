import dotenv from 'dotenv';

dotenv.config();

export default {
    "developement": {

    },
    "production": {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        dialect: process.env.DB_DIALECT,
        ssl: true, 
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
};