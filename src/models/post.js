import { Schema, model } from 'mongoose'

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  audience: String,
  image: String,
  date: {
    type: Date,
    default: Date.now
  }
})

export default model('Post', postSchema)
