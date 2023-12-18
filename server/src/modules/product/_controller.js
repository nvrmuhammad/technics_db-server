import { BadRequestError } from '../../utils/errors/index.js'
import { validateProduct } from '../../utils/joi.js'
import { addProductService } from './Service/addProduct.js'
import { listProductService } from './Service/listProduct.js'
import { removeProductService } from './Service/removeProduct.js'
import { updateProductService } from './Service/updateProduct.js'

export const addProduct = async (req, res, next) => {
  try {
    const { error } = validateProduct.validate(req.body)
    if (error) {
      throw new BadRequestError('Ma`lumotni to`liq kiriting')
    }
    const result = await addProductService({
      body: req.body,
      user: req.user,
      file: req.file,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
