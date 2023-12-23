import { BadRequestError } from '../../../utils/errors/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../Schema/User.js'

export const loginUserService = async ({ body }) => {
  const { login, password } = body

  const user = await User.findOne({ login })

  if (!user) {
    throw new BadRequestError('User topilmadi')
  }
  const hashedPass = await bcrypt.compare(password, user.password)

  if (!hashedPass) {
    throw new BadRequestError('Parol noto`g`ri')
  }

  const token = jwt.sign({ id: user._id, role: 'user' }, process.env.SECRET_KEY)

  return token
}
