import express from 'express'

import controller from '../controller/libro.js'

const routes = express.Router()

routes.get('/', controller.findAll ) 
routes.post('/', controller.create )
routes.get('/item/:id', controller.findOne )
routes.get("/resultado", controller.findFilter)
routes.put('/', controller.update )
routes.delete('/:id', controller.remove)

export default routes