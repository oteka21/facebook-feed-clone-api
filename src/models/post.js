import { Schema, model } from 'mongoose'

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  audience: String,
  image: String
})

export default model('Post', postSchema)
