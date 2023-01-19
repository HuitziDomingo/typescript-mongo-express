import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()
mongoose.set('strictQuery', false)

app.listen(4000, () => console.log('Hola EXPRESS'))
mongoose.connect('mongodb://localhost:27017/mongo-typescript')


app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hola Mundo'})
})