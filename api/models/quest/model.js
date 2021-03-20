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
const QuestSchema = new Schema(schema, options)

/**
* Indexes
*/

/**
* Plugins
*/
QuestSchema.plugin(autoIncrement, {
  model: 'Quest',
  field: 'idInc',
  startAt: 1
})

QuestSchema.plugin(DAO)

export default mongoose.model('Quest', QuestSchema)
