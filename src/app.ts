import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import pkg from '../package.json'

import items from './routes/items.routes'
import auth from './routes/auth.routes'
import order from './routes/order.routes'
import media from './routes/media.routes'

import * as dotenv from 'dotenv';

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())//Ver los datos en consola como JSON
app.use(morgan('dev'))//Ver las peticiones en consola
app.use(helmet())//Seguridad en la peticiones


app.set('pkg', pkg)

app.get('/', (req: Request, res: Response) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
    })
})

/* Endpoints de la API */
app.use('/api/v1', items)
app.use('/api/v1', auth)
app.use('/api/v1', order)
app.use('/api/v1', media)

export default app