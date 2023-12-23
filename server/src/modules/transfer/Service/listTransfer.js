import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Transfer } from '../Schema/Transfer.js'

export const listTransferService = async ({ user }) => {
  const { id } = user

  const checkingAdmin = await Admin.findOne({ _id: id })

  if (!checkingAdmin) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const transfers = await Transfer.find().populate([
    {
      path: 'admin_id',
      select: 'full_name _id',
    },
    {
      path: 'partner_id',
      select: 'full_name _id',
    },
  ])
  return transfers
}
