import mongoose from 'mongoose'

const TransferSchema = new mongoose.Schema(
  {
    message: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'admin',
      required: true,
    },
    partner_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'partner',
      required: true,
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

export const Transfer = mongoose.model('transfer', TransferSchema)
