import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../Schema/Admin.js'

export const listAdminService = async ({ user }) => {
  const { id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const admins = await Admin.find()

  return admins
}
