import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Transfer } from '../../transfer/Schema/Transfer.js'
import { Partner } from '../Schema/Partner.js'

export const oncePartnerService = async ({ user, params }) => {
  const { id } = user
  const { id: identify } = params

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  // const transfersList = await Transfer.find()

  const partner = await Partner.findOne({ _id: identify })

  if (!partner) {
    throw new BadRequestError('Bunday hamkor topilmadi')
  }

  // const { product_transfer } = partner

  // const transfer = transfersList.filter((t) => t.partner_id == identify)
  // product_transfer.push(transfer)

  // await Partner.findOneAndUpdate(
  //   { _id: identify },
  //   {
  //     product_transfer,
  //   }
  // )

  const partners = await Partner.findOne({ _id: identify }).populate([
    {
      path: 'admin_id',
      select: '_id full_name',
    },
  ])

  return partners
}
