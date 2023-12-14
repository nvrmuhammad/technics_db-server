import mongoose from 'mongoose'

const db = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/technic_database')
    .then(() => {
      console.log('Database connection successfully')
    })
    .catch((err) => console.log(err.message))
}
export default db
