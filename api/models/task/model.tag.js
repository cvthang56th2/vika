'use strict'

/**
* Module dependencies.
*/
import mongoose, { Schema } from 'mongoose'
import DAO from './dao'
import { schema, options } from './schema.tag'
import { autoIncrement } from 'mongoose-plugin-autoinc'

/**
* Schemas
*/
const TaskTagSchema = new Schema(schema, options)

/**
* Indexes
*/

/**
* Plugins
*/
TaskTagSchema.plugin(autoIncrement, {
  model: 'TaskTag',
  field: 'idInc',
  startAt: 1
})

TaskTagSchema.plugin(DAO)

export default mongoose.model('TaskTag', TaskTagSchema)
