import { Router } from "express"
import { Auth } from "../controllers/Auth.controller"

const router = Router()

router.post('/login', Auth.login)
router.post('/register', Auth.register)


export default router