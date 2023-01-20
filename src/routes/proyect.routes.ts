import { Router } from "express"
import { Proyect } from '../controllers/Proyect.controller'

const router = Router()

router.post('/proyect', Proyect.createProyect)
router.get('/proyect', Proyect.getProyect)

export default router