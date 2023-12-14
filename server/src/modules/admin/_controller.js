import { LoginSchema } from '../../utils/joi.js'
import { addAdminService } from './Service/addAdmin.js'
import { listAdminService } from './Service/listAdmin.js'

export const addAdmin = async (req, res, next) => {
  try {
    // const validation = LoginSchema.validate(req.body.email, req.body.password)

    const result = await addAdminService({ body: req.body })
    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const listAdmin = async (req, res, next) => {
  try {
    const result = await listAdminService()
    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
