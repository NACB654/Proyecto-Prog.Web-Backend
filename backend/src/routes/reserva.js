import express from 'express'

import controller from '../controller/reserva.js'

const routes = express.Router()

routes.get("/", controller.findAll)
routes.post('/', controller.create )
routes.get('/libroReservado/:id', controller.findLibro )
routes.get('/libros/:id', controller.findLibrosReservados )
routes.get('/usuarioReservado/:id', controller.findUsuario )
routes.delete("/:id", controller.remove)

export default routes