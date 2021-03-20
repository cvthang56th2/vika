import { User } from '@models'
import moment from 'moment'
const JWT = require('jsonwebtoken')

const JWT_SECRET_KEY = process.env.JWT_SECRET

const login = async (data = {}) => {
  try {
    const { userName, password } = data
    const userObj = await User.findOne({ userName })
    if (!userObj) {
      throw new Error('User not found.')
    }
    // test a matching password
    const isMatch = await userObj.comparePassword(password)
    if (!isMatch) {
      throw new Error('Wrong password!')
    }

    // TODO check đã login chưa rồi mới check jwt
    const session = {
      valid: true, // this will be set to false when the person logs out
      id: String(userObj._id),
      exp: new Date().getTime() + 30 * 60 * 1000 // expires in 30 minutes time
    }
    // create the session in Redis
    global.redisClient.set(session.id, JSON.stringify(session))
    // sign the session as a JWT
    const token = JWT.sign(session, JWT_SECRET_KEY) // synchronous

    return { success: true, token, authUser: userObj }
  } catch (error) {
    throw new Error(error)
  }
}

const logout = async (token) => {
  try {
    // implement your own login/auth function here
    const decoded = JWT.decode(token, JWT_SECRET_KEY)
    let session
    global.redisClient.get(decoded.id, function (rediserror, redisreply) {
      /* istanbul ignore if */
      if (rediserror) {
        console.log(rediserror)
      }
      session = JSON.parse(redisreply)
      // console.log(' - - - - - - SESSION - - - - - - - -')
      // console.log(session)
      // update the session to no longer valid:
      session.valid = false
      session.ended = new Date().getTime()
      // create the session in Redis
      global.redisClient.set(session.id, JSON.stringify(session))
    })
    return { success: true }
  } catch (error) {
    throw new Error(error)
  }
}

const checkToken = async (token) => {
  try {
    // implement your own login/auth function here
    const decoded = JWT.decode(token, JWT_SECRET_KEY)
    const now = moment(new Date().getTime())
    if (decoded && decoded.id && decoded.valid === true && moment(decoded.exp).isAfter(now)) {
      const userObj = await User.findOne({ _id: decoded.id })
      delete userObj.password
      return { success: true, authUser: userObj }
    } else {
      return { success: false, message: 'Authentication failed!' }
    }
  } catch (error) {
    throw new Error(error)
  }
}

export {
  login,
  logout,
  checkToken
}
