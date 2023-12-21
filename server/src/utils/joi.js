import Joi from 'joi'

export const validateLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})
export const validateAddUser = Joi.object({
  full_name: Joi.string().required(),
  login: Joi.string().required(),
  password: Joi.string().required(),
})
export const validatedUserLogin = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
})
export const validatedPartner = Joi.object({
  full_name: Joi.string().required(),
})
export const validatedTransfer = Joi.object({
  message: Joi.string().required(),
  partner_id: Joi.string().required(),
})

export const validateProduct = Joi.object({
  name: Joi.string().required(),
  manufacturer: Joi.string().required(),
  brand: Joi.string().required(),
  quantity: Joi.number().required(),
})
