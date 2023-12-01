import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

import Libro from './libro.js'
import Usuario from "./usuario.js"

const Reserva = sequelize.define("Reserva", {
    id: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fechaReserva:
    {
        type: DataTypes.DATEONLY,
    },
    fechaDevolucion:
    {
        type: DataTypes.DATEONLY
    },
    idUsuario:
    {
        type: DataTypes.INTEGER
    },
    idLibro:
    {
        type: DataTypes.INTEGER
    }
})

Libro.hasMany(Reserva, {
    foreignKey: "idLibro",
    targetId: "id"
})

Reserva.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    targetId: "id"
})

Reserva.belongsTo(Libro, {
    foreignKey: "idLibro",
    targetId: "id"
})

Usuario.hasMany(Reserva, {
    foreignKey: "idUsuario",
    targetId: "id"
})

export default Reserva;