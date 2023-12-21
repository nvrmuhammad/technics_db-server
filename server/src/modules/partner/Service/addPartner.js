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

  const fullName = full_name.trim()

  const partner = await Partner.findOne({ full_name: fullName })

  if (partner) {
    throw new BadRequestError('Bu hamkor avval qo`shilgan')
  }

  const newPartner = await Partner.create({
    full_name: fullName,
    admin_id: id,
  })

  return newPartner
}
