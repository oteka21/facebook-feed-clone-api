import express from 'express'
import cors from 'cors'
import './db_connection'
const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(PORT, (test) => {
  console.log(`app running on port ${PORT}`)
})
