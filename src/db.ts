import mysql from 'mysql2/promise';

export async function connect() {
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'mvm',
    });
    return connection;
}
