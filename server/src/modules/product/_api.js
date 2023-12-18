import { Router } from 'express'
import { verify } from '../../middleware/isLoggedIn.js'
import { addProduct, listProduct, removeProduct, updateProduct } from './_controller.js'
import upload from '../../config/multer.js'

const router = Router()

router.post('/products', upload.single('img'), verify, addProduct)
router.get('/products', verify, listProduct)
router.put('/products/:id', upload.single('img'), verify, updateProduct)
router.delete('/products/:id', verify, removeProduct)

export default router
