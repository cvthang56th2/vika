'use strict'

/**
* Module dependencies.
*/
import mongoose, { Schema } from 'mongoose'
import DAO from './dao'
import { schema, options } from './schema'
import { autoIncrement } from 'mongoose-plugin-autoinc'

/**
* Schemas
*/
const TaskSchema = new Schema(schema, options)

/**
* Indexes
*/

/**
* Plugins
*/
TaskSchema.plugin(autoIncrement, {
  model: 'Task',
  field: 'idInc',
  startAt: 1
})

TaskSchema.plugin(DAO)

export default mongoose.model('Task', TaskSchema)
