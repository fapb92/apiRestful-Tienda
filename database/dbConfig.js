import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tiendaapirestful'
})