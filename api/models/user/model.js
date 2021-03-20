'use strict'

/**
* Module dependencies.
*/
import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'
import DAO from './dao'
import { schema, options } from './schema'
import { autoIncrement } from 'mongoose-plugin-autoinc'

const SALT_WORK_FACTOR = global.CONFIG.get('web.SALT_WORK_FACTOR') || 10;
/**
* Schemas
*/
const UserSchema = new Schema(schema, options)

/**
* Indexes
*/

/**
* Plugins
*/
UserSchema.plugin(autoIncrement, {
  model: 'User',
  field: 'idInc',
  startAt: 1
})

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});
   
UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch (error) {
    throw new Error(error)    
  }
}

UserSchema.plugin(DAO)

export default mongoose.model('User', UserSchema)
