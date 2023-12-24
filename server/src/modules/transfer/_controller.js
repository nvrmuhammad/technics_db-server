import { BadRequestError } from '../../utils/errors/index.js'
import { validatedTransfer } from '../../utils/joi.js'
import { addTransferService } from './Service/addTransfer.js'
import { listTransferService } from './Service/listTransfer.js'
import { updateTransferService } from './Service/updateTransfer.js'

export const addTransfer = async (req, res, next) => {
  try {
    const { error } = validatedTransfer.validate(req.body)
    if (error) {
      throw new BadRequestError('Ma`lumotni to`liq kiriting')
    }
    const result = await addTransferService({
      body: req.body,
      user: req.user,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const listTransfer = async (req, res, next) => {
  try {
    const result = await listTransferService({
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateTransfer = async (req, res, next) => {
  try {
    const result = await updateTransferService({
      body: req.body,
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
