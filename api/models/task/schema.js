const schema = {
  name: String,
  description: String,
  rank: Number,
  status: {
    type: String,
    enum: ['active', 'archived'],
    default: 'active'
  },
  tag: {
    type: String,
    enum: ['to-do', 'processing', 'in-qa', 'done'],
    default: 'to-do'
  }
}

const options = {
  collection: 'tasks',
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
}

export { schema, options }
