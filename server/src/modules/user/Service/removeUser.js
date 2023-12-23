import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { User } from '../Schema/User.js'

export const removeUserService = async ({ user, params }) => {
  const { id } = user
  const { id: identify } = params

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const checkingUser = await User.findOne({ _id: identify })

  if (!checkingUser) {
    throw new BadRequestError('Foydalanuvchi topilmadi')
  }

  const removed = await User.findByIdAndDelete({ _id: identify })

  return removed
}
