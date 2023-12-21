import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { User } from '../../user/Schema/User.js'
import { Product } from '../Schema/Product.js'

export const listProductService = async ({ user }) => {
  const { id, role } = user

  const checkingAdmin = await Admin.findOne({ _id: id })
  const checkingUser = await User.findOne({ _id: id })

  if (!checkingUser && !checkingAdmin) {
    throw new BadRequestError('Sizda mahsulotlarni ko`rish huquqi yo`q')
  }

  if (role == 'admin') {
    return await Product.find().populate([
      {
        path: 'admin_id',
        select: 'full_name _id',
      },
    ])
  }
  if (role == 'user') {
    return await Product.find().select('-admin_id')
  }
}
