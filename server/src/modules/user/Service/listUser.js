import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { User } from '../Schema/User.js'

export const listUserService = async ({ user }) => {
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const users = await User.find().populate([
    {
      path: 'admin_id',
      select: '_id full_name',
    },
  ])

  return users
}
