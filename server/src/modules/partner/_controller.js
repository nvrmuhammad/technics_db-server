export const addPartner = async (req, res, next) => {
  try {
    const { error } = validatedPartner.validate(req.body)
    if (error) {
      throw new BadRequestError(error.message)
    }

    const result = await addPartnerService({ body: req.body, user: req.user })
    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const listPartner = async (req, res, next) => {
  try {
    const result = await listPartnerService({ user: req.user })
    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
