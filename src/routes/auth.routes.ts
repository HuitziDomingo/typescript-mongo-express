import { Router } from "express"
import { Auth } from "../controllers/Auth.controller"

const router = Router()

router.post('/register', Auth.register)
router.post('/login', Auth.login)


export default router