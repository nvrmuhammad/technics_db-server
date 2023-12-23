import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { User } from '../Schema/User.js'
import bcrypt from 'bcrypt'

export const addUserService = async ({ body, user }) => {
  const { password } = body
  const { login } = body
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const checkUser = await User.findOne({ login })

  if (checkUser) {
    throw new BadRequestError('Bu foydalanuvchi avval ro`yhatdan o`tgan')
  }

  const hashedPass = bcrypt.hashSync(password, 10)

  const newUser = await User.create({
    ...body,
    password: hashedPass,
    admin_id: id,
  })

  return newUser
}
