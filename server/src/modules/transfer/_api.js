import { Router } from 'express'
import { verify } from '../../middleware/isLoggedIn.js'
import { addTransfer, listTransfer, updateTransfer } from './_controller.js'

const router = Router()

router.post('/transfer', verify, addTransfer)
router.get('/transfer', verify, listTransfer)
router.patch('/transfer/:id', verify, updateTransfer)

export default router
