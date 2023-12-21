import express from 'express'
import 'dotenv/config'
import db from './config/database.js'
import cors from 'cors'
import errorHandler from './utils/errors/handle.js'
import AdminRouter from './modules/admin/_api.js'
import ProductRouter from './modules/product/_api.js'
import UserRouter from './modules/user/_api.js'
import PartnerRouter from './modules/partner/_api.js'
import TransferRouter from './modules/transfer/_api.js'
import path from 'path'

const app = express()

function server() {
  try {
    app.use(cors())
    app.use(express.json())
    app.use(AdminRouter)
    app.use(ProductRouter)
    app.use(UserRouter)
    app.use(PartnerRouter)
    app.use(TransferRouter)
    app.use(errorHandler)

    app.use(express.static(path.join(process.cwd(), 'src', 'public')))

    db()

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()
