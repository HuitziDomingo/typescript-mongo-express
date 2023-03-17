import { Router } from "express"
import { Blog } from '../controllers/Blog.controller'

const router = Router()

router.post('/items', Blog.createItem)
router.get('/items', Blog.getItem)
router.get('/items/:id', Blog.getItemsById)
router.put('/items/:id', Blog.editItem)
router.delete('/items/:id', Blog.deleteItem)

export default router