import { Router } from "express"
import { Items } from '../controllers/Items.controller'

const router = Router()

router.post('/items', Items.createItem)
router.get('/items', Items.getItem)

export default router