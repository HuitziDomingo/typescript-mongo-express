import { Router } from "express"
import { Auth } from "../controllers/Auth.controller"

const router = Router()

router.post('/media', Auth.register)



export default router