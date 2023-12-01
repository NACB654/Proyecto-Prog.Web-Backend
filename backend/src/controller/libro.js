import RepositoryBase from "../repository/base.js";
import modelo from '../models/libro.js'

const repository = new RepositoryBase(modelo);

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
    console.log(result)

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const findFilter = async (req, res) => {
    const keyword = req.query.keyword;
    let recurso = req.query.recurso;
    const checks = req.query.checks;
    const libros = await repository.findAll();
    let result = []

    recurso = recurso.replace(/\[|\]/g,'').split(',')
    console.log(recurso[0].length)

    if (recurso[0].length > 0){
        result = libros.filter(item => item[checks] !== undefined ? 
            item[checks].toLowerCase().includes(keyword.toLowerCase()) && 
            recurso.includes(item.categoria) :
            0)   
    }
    else {
        result = libros.filter(item => item[checks] !== undefined ? 
            item[checks].toLowerCase().includes(keyword.toLowerCase()) : 0)
    }
    // console.log(result)

    return res.status(200).json(result)
}

const update = async (req,res) => {
    const result = await repository.update(req.body);

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

const controller = { findAll, create, findOne, update, remove, findFilter}

export default controller;