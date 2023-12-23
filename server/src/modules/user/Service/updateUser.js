import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { User } from '../Schema/User.js'

export const updateUserService = async ({ body, user, params }) => {
  const { id } = user
  const { id: identify } = params

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }
  const checkingUser = await User.findOne({ _id: identify })

  if (!checkingUser) {
    throw new BadRequestError('Bunday foydalanuvchi topilmadi')
  }

  const userInfo = await User.findOneAndUpdate(
    { _id: identify },
    { ...body },
    { new: true }
  )

  return userInfo
}
