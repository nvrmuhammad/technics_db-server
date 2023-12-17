import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  full_name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
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
