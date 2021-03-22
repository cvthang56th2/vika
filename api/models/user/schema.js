import { status } from '@global/options/common-schema.js'

const schema = {
  name: String,
  userName: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String, required: true
  },
  roles: [{
    type: String,
    enum: ['SUPER_ADMIN', 'CLIENT', 'MODERATOR']
  }],
  status
}

const options = {
  collection: 'users',
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
}

export { schema, options }
