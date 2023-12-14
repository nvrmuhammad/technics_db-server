import { Router } from 'express'
import { addAdmin, listAdmin } from './_controller.js'

const router = Router()

router.get('/admin', listAdmin)
router.post('/admin', addAdmin)

export default router
