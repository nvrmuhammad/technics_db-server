import { BadRequestError } from '../../../utils/errors/index.js'
import { Admin } from '../../admin/Schema/Admin.js'
import { Product } from '../Schema/Product.js'

export const updateProductService = async ({ body, user, params, file }) => {
  const { id } = user
  const { filename } = file
  const { id: identify } = params
  const linkImg = `/${filename}`

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    throw new BadRequestError('Sizda adminlik huquqi yo`q')
  }
  const checkingProduct = await Product.findOne({ _id: identify })

  if (!checkingProduct) {
    throw new BadRequestError('Bunday mahsulot topilmadi')
  }

  const products = await Product.findOneAndUpdate(
    { _id: identify },
    { ...body, img: linkImg },
    { new: true }
  )

  return products
}
