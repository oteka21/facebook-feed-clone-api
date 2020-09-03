import express from 'express'
import cors from 'cors'
import './db_connection'
import post from './routes/post'
const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/post', post)

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})
