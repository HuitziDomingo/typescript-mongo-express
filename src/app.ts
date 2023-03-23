import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import pkg from '../package.json'
import items from './routes/items.routes'
import auth from './routes/auth.routes'


const app = express()

app.use(cors())
app.use(express.json())//Ver los datos en consola como JSON
app.use(morgan('dev'))//Ver las peticiones en consola

app.set('pkg', pkg)

app.get('/', (req: Request, res: Response) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
    })
})


app.use('/api/v1', items)
app.use('/api/v1', auth)

export default app