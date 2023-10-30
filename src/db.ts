import mysql from 'mysql2/promise';

import * as dotenv from 'dotenv';
dotenv.config();

export async function connect() {
    const connection = await mysql.createConnection({
        host: process.env.MY_SQL_host,
        user: process.env.MY_SQL_user,
        password: process.env.password,
        database: process.env.MY_SQL_database,
    });
    return connection;
}
