import mongoose from 'mongoose'
import CoreDAO from '@models/core/dao'

const mongoConfig = global.CONFIG.get('web.db') || {}
mongoose.connect(mongoConfig.uri, mongoConfig.options || {})
mongoose.set('useCreateIndex', true)
mongoose.plugin(CoreDAO)
console.log('Register Mongo:', mongoConfig.uri)
