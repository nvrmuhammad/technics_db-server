import { Router } from 'express'
import { verify } from '../../middleware/isLoggedIn.js'
import {
  addUser,
  listUser,
  loginUser,
  removeUser,
  updateUser,
} from './_controller.js'

const router = Router()

router.post('/user', verify, addUser)
router.post('/user/login', loginUser)
router.get('/user', verify, listUser)
router.put('/user/:id', verify, updateUser)
router.delete('/user/:id', verify, removeUser)

export default router
