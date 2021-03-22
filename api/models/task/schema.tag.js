import { status } from '@global/options/common-schema.js'

const schema = {
  name: String,
  description: String,
  rank: Number,
  status
}

const options = {
  collection: 'task_tags',
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
}

export { schema, options }
