import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../Schema/Admin.js'
import bcrypt from 'bcrypt'

export const addAdminService = async ({ body, user }) => {
  const { email, password, full_name } = body
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }
  
  const admin = await Admin.findOne({ email })

  if (admin) {
    throw new BadRequestError('Bu admin oldin ro`yxatdan o`tgan')
  }
  const hashedPass = bcrypt.hashSync(password, 10)

  const newAdmin = await Admin.create({
    full_name,
    email,
    password: hashedPass,
  })

  return newAdmin
}
