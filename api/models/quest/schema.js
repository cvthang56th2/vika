import { status } from '@global/options/common-schema.js'

const schema = {
  name: String,
  description: String,
  status
}

const options = {
  collection: 'quests',
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
}

export { schema, options }
