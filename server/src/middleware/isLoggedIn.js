import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../utils/errors/index.js'

export const verify = (req, res, next) => {
  try {
    const token = req.headers['authorization']

    if (!token) {
      throw new UnauthorizedError('Token not given or you have not access ')
    }

    const verify = jwt.verify(token, process.env.SECRET_KEY)

    req.user = verify

    next()
  } catch (error) {
    throw new UnauthorizedError(error.message)
  }
}
