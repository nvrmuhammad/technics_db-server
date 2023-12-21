import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Product } from '../Schema/Product.js'

export const removeProductService = async ({ user, params }) => {
  const { id, role } = user
  const { id: identify } = params

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const removed = await Product.findByIdAndDelete({ _id: identify })

  return removed
}
