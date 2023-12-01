import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Usuario = sequelize.define("Usuario", {
    id: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:
    {
        type: DataTypes.STRING
    },
    apellido:
    {
        type: DataTypes.STRING
    },
    tipoDocumento:
    {
        type: DataTypes.STRING
    },
    nroDocumento:
    {
        type: DataTypes.INTEGER
    },
    correo:
    {
        type: DataTypes.STRING
    },
    password:
    {
        type: DataTypes.STRING
    },
    tipoUsuario:
    {
        type: DataTypes.STRING
    },
    foto:
    {
        type: DataTypes.TEXT
    }
})

export default Usuario;