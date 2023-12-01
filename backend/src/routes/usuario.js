import express from 'express'

import controller from '../controller/usuario.js'

const routes = express.Router()

routes.get('/', controller.findAll ) 
routes.post('/', controller.create )
routes.get('/item/:id', controller.findOne )
routes.put('/', controller.update )
routes.get('/user', controller.findUserForLogin)

export default routes