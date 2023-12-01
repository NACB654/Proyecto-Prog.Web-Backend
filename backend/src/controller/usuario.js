import repository from "../repository/usuario.js";

const findAll = async (req,res) => {

    const result = await repository.findAll();

    return res.status(200).json(result);

}

const create = async (req,res) => {
    const result = await repository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await repository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await repository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const findUserForLogin = async (req,res) => {
    const correo = req.query.correo;
    const password = req.query.password;

    const result = await repository.findUserForLogin(correo, password);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const controller = { findAll, create, findOne, update, findUserForLogin }

export default controller;