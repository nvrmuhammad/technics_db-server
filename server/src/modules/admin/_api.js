import { Router } from 'express'
import { addAdmin, listAdmin, loginAdmin } from './_controller.js'
import { verify } from '../../middleware/isLoggedIn.js'

const router = Router()

router.get('/admin', verify, listAdmin)
router.post('/admin', verify, addAdmin)
router.post('/admin/login', loginAdmin)

export default router
