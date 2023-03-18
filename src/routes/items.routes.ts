import { Router } from "express"
import { Items } from '../controllers/Items.controller'

const router = Router()

router.post('/items', Items.createItem)
router.get('/items', Items.getItems)
router.get('/items/:id', Items.getItemById)
router.put('/items/:id', Items.editItem)
router.delete('/items/:id', Items.deleteItem)

export default router