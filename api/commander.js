require('module-alias/register')
require('dotenv').config()
import Path from 'path'

global.BASE_PATH = __dirname
process.env.NODE_CONFIG_DIR = Path.join(__dirname, 'config')
global.CONFIG = require('config')
require('./bootstrap/database')