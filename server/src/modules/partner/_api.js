import { Router } from 'express'
import { verify } from '../../middleware/isLoggedIn.js'
import {
  addPartner,
  listPartner,
  oncePartner,
  removePartner,
  updatePartner,
} from './_controller.js'

const router = Router()

router.post('/partner', verify, addPartner)
router.get('/partner', verify, listPartner)
router.get('/partner/:id', verify, oncePartner)
router.patch('/partner/:id', verify, updatePartner)
router.delete('/partner/:id', verify, removePartner)

export default router
