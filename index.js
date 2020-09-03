require('@babel/register')({
  ignore: [/node_modules/]
})
require('dotenv').config()
require('./src/app.js')
