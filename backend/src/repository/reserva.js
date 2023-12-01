import modelo from "../models/reserva.js"
import modeloLibro from "../models/libro.js"
import modeloUsuario from "../models/usuario.js"

const findAll = async () => {
    try {
        const result = await modelo.findAll({
            include: {
                model: modeloLibro,
            },
            order : [["id", "DESC"]]
        });
        return result;
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const findLibrosReservados = async (id) => {
    try {
        return await modelo.findAll({
            include: {
                model: modeloLibro,
            },
            where: { idUsuario: id },
            order : [["id", "DESC"]]
        })
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

const findLibro = async (id) => {
    try {
        return await modelo.findOne({
            include: {
                model: modeloLibro,
                model: modeloUsuario,
            },
            where: { idLibro: id }
        })
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

const findUsuario = async (id) => {
    try {
        return await modelo.findOne({
            where: { idUsuario: id }
        })
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

const create = async (obj) => {
    try {
        return await modelo.create(obj)
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (id) => {
    try {
        await modelo.destroy({
            where: {
                id
            }
        })
        return true;
    } catch (err) {
        console.error(err)
        return null
    }

}

const repository = { findAll, findLibrosReservados, findLibro, findUsuario, create, remove };

export default repository;