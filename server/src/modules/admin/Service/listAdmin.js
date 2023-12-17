import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../Schema/Admin.js'

export const listAdminService = async () => {
  // const { email, password, full_name } = body

  // const admin = await Admin.findOne({ email })

  // if (admin) {
  //   throw new BadRequestError('Bu admin oldin ro`yxatdan o`tgan')
  // }
  // const hashedPass = await bcrypt.hash(password, process.env.SALT)

  // const newAdmin = await Admin.create({
  //   full_name,
  //   email,
  //   password: hashedPass,
  // })
  const admins = await Admin.find()

  return admins
}
