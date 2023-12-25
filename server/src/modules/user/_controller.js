export const addUser = async (req, res, next) => {
  try {
    const { error } = validateAddUser.validate(req.body)
    if (error) {
      throw new BadRequestError('Ma`lumotni to`liq kiriting')
    }
    const result = await addUserService({
      body: req.body,
      user: req.user,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const loginUser = async (req, res, next) => {
  try {
    const { error } = validatedUserLogin.validate(req.body)
    if (error) {
      throw new BadRequestError('Ma`lumotni to`liq kiriting')
    }
    const result = await loginUserService({
      body: req.body,
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
