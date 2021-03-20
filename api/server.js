require('module-alias/register')
require('dotenv').config()

import Hapi from 'hapi'
import Path from 'path'


global.BASE_PATH = __dirname
process.env.NODE_CONFIG_DIR = Path.join(__dirname, 'config')
global.CONFIG = require('config')

// auth jwt
const hapiAuthJWT = require('hapi-auth-jwt2')

global.redisClient = require('redis-connection')()

global.redisClient.set('redis', 'working');
global.redisClient.get('redis', function (rediserror, reply) {
  /* istanbul ignore if */
  if (rediserror) {
    console.log(rediserror);
  }
  console.log('redis is ' + reply.toString()); // confirm we can access redis
});

// bring your own validation function
const validateFunc = function (decoded, request, callback) {
  console.log(" - - - - - - - DECODED token:")
  console.log(decoded)
  // do your checks to see if the session is valid
  global.redisClient.get(decoded.id, function (rediserror, reply) {
    /* istanbul ignore if */
    if (rediserror) {
      console.log(rediserror)
    }
    console.log(' - - - - - - - REDIS reply - - - - - - - ', reply)
    let session
    if (reply) {
      session = JSON.parse(reply)
    }
    else { // unable to find session in redis ... reply is null
      return callback(rediserror, false)
    }

    if (session.valid === true) {
      return callback(rediserror, true)
    }
    else {
      return callback(rediserror, false)
    }
  })
}

const init = async () => {
  const server = Hapi.server({
    port: 4000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'] // an array of origins or 'ignore'           
      }
    }
  });
  require('./bootstrap/database')


  await server.register(hapiAuthJWT, {})
  await server.auth.strategy('jwt', 'jwt', {
    key: process.env.JWT_SECRET,
    validate: validateFunc,
    verifyOptions: { ignoreExpiration: true, algorithms: [ 'HS256' ] }
  })

  const allModuleRoutes = require('@modules/routes')
  for (const routeObj of allModuleRoutes) {
    server.route(routeObj)
  }

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init()