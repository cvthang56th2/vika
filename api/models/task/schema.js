const schema = {
  name: String,
  description: String
}

const options = {
  collection: 'tasks',
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
}

export { schema, options }
