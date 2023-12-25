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
export const listUser = async (req, res, next) => {
  try {
    const result = await listUserService({ user: req.user })
    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const removeUser = async (req, res, next) => {
  try {
    const result = await removeUserService({
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateUser = async (req, res, next) => {
  try {
    const result = await updateUserService({
      body: req.body,
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
