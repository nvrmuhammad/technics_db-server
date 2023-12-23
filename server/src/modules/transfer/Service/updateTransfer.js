import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Transfer } from '../Schema/Transfer.js'

export const updateTransferService = async ({ body, user, params }) => {
  const { message } = body
  const { id } = user
  const { id: identify } = params

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }
  const checkingTransfer = await Transfer.findOne({ _id: identify })

  if (!checkingTransfer) {
    throw new BadRequestError('Bunday hisobot topilmadi')
  }

  const updatedTransfer = await Transfer.findOneAndUpdate(
    { _id: identify },
    { message },
    { new: true }
  )

  return updatedTransfer
}
