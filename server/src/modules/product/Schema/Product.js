import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      require: true,
    },
    manufacturer: {
      type: mongoose.SchemaTypes.String,
      require: true,
    },
    brand: {
      type: mongoose.SchemaTypes.String,
      require: true,
    },
    quantity: {
      type: mongoose.SchemaTypes.Number,
      require: true,
      default: 0,
    },
    img: {
      type: mongoose.SchemaTypes.String,
    },
    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      require: true,
      ref: 'admin',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    versionKey: false,
  }
)

export const Product = mongoose.model('product', ProductSchema)
