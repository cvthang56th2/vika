'use strict'
const config = {}
const Pack = require(global.BASE_PATH + '/package')

config.web = {
  name: Pack.name,
  swagger: {
    host: 'localhost:4000',
    schemes: ['http']
  },
  db: {
    uri: 'mongodb://localhost/vika'
  },
  redisOptions: {
    host: '127.0.0.1', // 13.228.4.248
    port: 6379,
    detect_buffers: true
  },
  context: {
    apiPrefix: '/api/v1',
    settings: {
      services: {
        url: 'http://localhost:4000'
      }
    }
  },
  SALT_WORK_FACTOR: 10
}

module.exports = config
