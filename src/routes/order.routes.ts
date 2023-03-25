import { Router } from "express"
import { Order } from '../controllers/Order.controller'
import { Session } from "../middlewares/Session"

const router = Router()

/**
 * Esta ruta solo pueden acceder las personas que tienen session activa
 * Y que tengan un JWT valido
 **/

router.get('/orders', Session.checkJWT, Order.getItem)


export default router