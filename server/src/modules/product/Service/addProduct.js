import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Product } from '../Schema/Product.js'

export const addProductService = async ({ body, user, file }) => {
  const { id, role } = user
  const { filename } = file
  const linkImg = `/${filename}`

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }

  const newAdmin = await Product.create({
    ...body,
    admin_id: id,
    img: linkImg || '',
  })

  return newAdmin
}
