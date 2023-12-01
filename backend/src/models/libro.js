import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Libro = sequelize.define("Libro", {
    id: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo:
    {
        type: DataTypes.STRING
    },
    autor:
    {
        type: DataTypes.STRING
    },
    isbn13:
    {
        type: DataTypes.NUMERIC
    },
    editorial:
    {
        type: DataTypes.STRING
    },
    categoria:
    {
        type: DataTypes.STRING
    },
    cantidadReservas:
    {
        type: DataTypes.INTEGER
    },
    portada:
    {
        type: DataTypes.STRING
    }
})

export default Libro;