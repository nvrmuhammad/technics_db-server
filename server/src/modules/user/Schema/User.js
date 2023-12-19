import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  full_name: {
    type: mongoose.SchemaTypes.String,
    require: true,
  },
  login: {
    type: mongoose.SchemaTypes.Number,
    require: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    require: true,
  },
  is_active: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  admin_id: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
    ref: 'admin',
  },
})

export const User = mongoose.model('user', UserSchema)
