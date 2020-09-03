import mongoose from 'mongoose'
const DB_URI = process.env.DB_URI
const db = mongoose.connection

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db.once('open', _ => {
  console.log('database is connected')
})
