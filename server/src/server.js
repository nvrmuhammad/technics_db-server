import express from 'express'
import 'dotenv/config'
import db from './config/database.js'
import cors from 'cors'

import errorHandler from './utils/error-handler.js'

const app = express()

function server() {
  try {
    app.use(errorHandler)
    app.use(cors())
    app.use(express.json())

    db()

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()
