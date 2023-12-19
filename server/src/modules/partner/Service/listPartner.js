import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Partner } from '../Schema/Partner.js'

export const listPartnerService = async ({ user }) => {
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const partners = await Partner.find().populate([
    {
      path: 'admin_id',
      select: '_id full_name',
    },
  ])

  return partners
}
