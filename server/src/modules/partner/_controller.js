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
