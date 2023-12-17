import { BadRequestError } from '../../utils/errors/index.js'
import { validateLogin } from '../../utils/joi.js'
import { addAdminService } from './Service/addAdmin.js'
import { listAdminService } from './Service/listAdmin.js'
import { loginAdminService } from './Service/loginAdmin.js'

export const addAdmin = async (req, res, next) => {
  try {
    const result = await addAdminService({ body: req.body, user: req.user })
    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const loginAdmin = async (req, res, next) => {
  try {
    const { error } = validateLogin.validate(req.body)
    if (error) {
      throw new BadRequestError('Ma`lumotni to`liq kiriting')
    }
    const result = await loginAdminService({ body: req.body })
    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const listAdmin = async (req, res, next) => {
  try {
    const result = await listAdminService({ user: req.user })
    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
