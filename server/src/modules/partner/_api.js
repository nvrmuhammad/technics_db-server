import { Router } from 'express'
import { verify } from '../../middleware/isLoggedIn.js'
import {
  addPartner,
  listPartner,
  removePartner,
  updatePartner,
} from './_controller.js'

const router = Router()

router.post('/partner', verify, addPartner)
router.get('/partner', verify, listPartner)
router.patch('/partner/:id', verify, updatePartner)
router.delete('/partner/:id', verify, removePartner)

export default router
