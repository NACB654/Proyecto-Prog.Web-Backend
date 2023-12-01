import modelo from "../models/usuario.js"

const findAll = async () => {
    try {
        const result = await modelo.findAll();
        return result;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const findUserForLogin = async (correo, password) => {
    try {
        const result = await modelo.findOne({
            where: {
                correo: correo,
                password: password
            }
        })

        return result;
    } catch (err) {
        console.error(err);

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await modelo.findOne({
            where: { id }
        })
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

const create = async (object) => {
    try {
        return await modelo.create(object)
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const update =  async(object) => {
    const id  = object.id;
    try {
        const result = await modelo.findOne({ where: { id } })
        console.log(result)

        if (result) {
            result.set(object)
            result.save()
        }

        return result;
            
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

const repository = { findAll, findOne, create, findUserForLogin, update }

export default repository;