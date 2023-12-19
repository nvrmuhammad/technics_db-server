import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Partner } from '../Schema/Partner.js'

export const addPartnerService = async ({ body, user }) => {
  const { full_name } = body
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const partner = await Partner.findOne({ full_name })

  if (partner) {
    throw new BadRequestError('Bu hamkor avval qo`shilgan')
  }

  const newPartner = await Partner.create({
    full_name,
    admin_id: id,
  })

  return newPartner
}
