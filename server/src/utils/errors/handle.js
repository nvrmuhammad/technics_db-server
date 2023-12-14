import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
} from './index.js'

/**
 * @param {Error} err
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 */

const handler = (err, req, res, next) => {
  let status = 500

  if (err instanceof BadRequestError) status = 400
  else if (err instanceof UnauthorizedError) status = 401
  else if (err instanceof ForbiddenError) status = 403
  else if (err instanceof NotFoundError) status = 404

  res.status(status).json({ error: err.message })
}

export default handler
