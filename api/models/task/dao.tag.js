// import mongoose from 'mongoose'

module.exports = function (schema, options) {
  schema.statics.getPaginate = async function (query, dataInit) {
    let Model = this
    return []
  }
}
