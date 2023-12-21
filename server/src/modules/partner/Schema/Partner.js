import mongoose from 'mongoose'

const PartnerSchema = new mongoose.Schema(
  {
    full_name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'admin',
      require: true,
    },
    product_transfer: {
      type: mongoose.SchemaTypes.Array,
      default: [],
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

export const Partner = mongoose.model('partner', PartnerSchema)
