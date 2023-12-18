import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../Schema/Admin.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginAdminService = async ({ body }) => {
  const { email, password } = body

  const admin = await Admin.findOne({ email })

  if (!admin) {
    throw new BadRequestError('Admin topilmadi')
  }
  const hashedPass = await bcrypt.compare(password, admin.password)

  if (!hashedPass) {
    throw new BadRequestError('Parol noto`g`ri')
  }

  const token = jwt.sign(
    { id: admin._id, role: 'admin' },
    process.env.SECRET_KEY
  )

  return token
}
