import app from "./app"
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

app.listen(process.env.PORT || 4000, () => console.log('Hola EXPRESS'))
mongoose.connect('mongodb://localhost:27017/mongo-typescript')
.then(() => console.log('Conexion a MONGO establecida'))
.catch(() => console.log('Error en la conexion a MONGO'))

