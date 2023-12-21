import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Partner } from '../Schema/Partner.js'

export const updatePartnerService = async ({ body, user, params }) => {
  const { full_name } = body
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

  const Partners = await Partner.find({ full_name })

  const filterName = Partners.findIndex(
    (partner) => partner.full_name === full_name
  )

  if (!filterName) {
    throw new BadRequestError('Bunday hamkor avval qo`shilgan')
  }

  const partnerInfo = await Partner.findOneAndUpdate(
    { _id: identify },
    { ...body },
    { new: true }
  )

  return partnerInfo
}
