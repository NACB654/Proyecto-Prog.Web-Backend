import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import libroRoutes from './routes/libro.js'
import reservaRoutes from './routes/reserva.js'
import usuarioRoutes from './routes/usuario.js'


var app = express();
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/libro", libroRoutes)
app.use("/reserva", reservaRoutes)
app.use("/usuario", usuarioRoutes)

export default app;