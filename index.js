require('@babel/register')({
  ignore: [/node_modules/]
})
require('dotenv').config()
require('@babel/polyfill')
require('./src/app.js')
