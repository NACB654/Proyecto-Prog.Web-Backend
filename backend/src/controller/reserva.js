import repository from "../repository/reserva.js";

const findAll = async (req, res) => {
    const result = await repository.findAll();
    return res.status(200).json(result);
}

const create = async (req,res) => {
    const result = await repository.create(req.body);

    return res.status(200).json(result);
}

const findLibrosReservados = async (req, res) => {
    const id = req.params.id;
    const result = await repository.findLibrosReservados(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})
}

const findLibro = async (req,res) => {
    const id = req.params.id;
    const result = await repository.findLibro(id);
    console.log(result)

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const findUsuario = async (req,res) => {
    const id = req.params.id;
    const result = await repository.findUsuario(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await repository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const controller = { findAll, create, findLibro, findLibrosReservados, findUsuario, remove }

export default controller;