import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
})

export const Admin = mongoose.model('admin', AdminSchema)
