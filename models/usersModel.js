import bcryptjs from 'bcryptjs'
import { hashPassword } from '../utils/hashPassword.js';

export class usersModel {
    constructor(conexion) {
        this.conexion = conexion;
        this.password = ''
    }

    // obtenerTodosLosUsuarios = async () => {
    //     return await this.conexion.query('SELECT * FROM users');
    // };

    // obtenerUsuarioPorId = async (userId) => {
    //     return await this.conexion.query('SELECT * FROM users WHERE id = ?', [userId]);
    // };

    obtenerUsuarioPorEmail = async (userEmail) => {
        return await this.conexion.query('SELECT * FROM users WHERE email = ?', [userEmail]);
    };

    nuevoUsuario = async ({ nombres, email, password }) => {
        const hash = await hashPassword(password)
        return await this.conexion.query('INSERT INTO users (nombres, email, password) values (?, ?, ?);', [nombres, email, hash]);
    };

    // modificarNombreUsuario = async ({ nombres, userId }) => {
    //     return await this.conexion.query('UPDATE users SET nombres = ? WHERE users.id = ?;', [nombres, userId]);
    // };

    // modificarEmailUsuario = async ({ email, userId }) => {
    //     return await this.conexion.query('UPDATE users SET email = ? WHERE users.id = ?;', [email, userId]);
    // };

    // modificarPasswordUsuario = async ({ password, userId }) => {
    //     return await this.conexion.query('UPDATE users SET password = ? WHERE users.id = ?;', [password, userId]);
    // };

    // borrarUsuario = async (userId) => {
    //     return await this.conexion.query("DELETE FROM users WHERE users.id = ?;", [userId]);
    // };

    compararPassword = async (passToVerify) => {
        return await bcryptjs.compare(passToVerify, this.password)
    }

}