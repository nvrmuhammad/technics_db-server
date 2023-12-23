import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Transfer } from '../Schema/Transfer.js'

export const addTransferService = async ({ body, user }) => {
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const newTransfer = await Transfer.create({
    ...body,
    admin_id: id,
  })

  return newTransfer
}
