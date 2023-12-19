import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Partner } from '../Schema/Partner.js'

export const removePartnerService = async ({ user, params }) => {
  const { id } = user
  const { id: identify } = params

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const checkingPartner = await Partner.findOne({ _id: identify })

  if (!checkingPartner) {
    throw new BadRequestError('Bunday hamkor topilmadi')
  }

  const removed = await Partner.findByIdAndDelete({ _id: identify })

  return removed
}
