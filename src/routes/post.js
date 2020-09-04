import { Router } from 'express'
import Post from '../models/post'
import { verifyId } from '../utils'

const route = Router()

// get all post
route.get('/', async (req, res) => {
  const { filter } = req.query
  let posts = []
  try {
    if (!filter || filter.toUpperCase() === 'PUBLIC') {
      posts = await Post.find()
    } else {
      posts = await Post.find({ audience: filter.toUpperCase() })
    }
  } catch (err) {
    return res.status(500).send(err.message)
  }
  res.json(posts)
})

// get post by id
route.get('/:id', async (req, res) => {
  const { id } = req.params
  if (!verifyId(id)) {
    return res.status(400).send('Id not valid')
  }
  let post = {}
  try {
    post = await Post.findById(id)
  } catch (err) {
    return res.status(500).send(err.message)
  }
  res.json(post)
})

// create a post
route.post('/', async (req, res) => {
  const { content, audience } = req.body
  let createdPost = {}
  try {
    createdPost = await Post.create({
      content,
      audience
    })
    createdPost.save()
  } catch (err) {
    return res.status(500).send(err.message)
  }

  res.json(createdPost)
})

route.put('/:id', async (req, res) => {
  const { id } = req.params
  const { content, audience } = req.body
  let updatedPost = {}
  if (!verifyId(id)) {
    return res.status(400).send('Id not valid')
  }
  try {
    updatedPost = await Post.findByIdAndUpdate(id, {
      content,
      audience
    }, { new: true, useFindAndModify: false })
  } catch (err) {
    return res.status(500).send(err.message)
  }

  res.json(updatedPost)
})

route.delete('/:id', async (req, res) => {
  const { id } = req.params
  let result = {}
  if (!verifyId(id)) {
    return res.status(400).send('Id not valid')
  }
  try {
    result = await Post.findByIdAndDelete(id)
  } catch (err) {
    return res.status(500).send(err.message)
  }

  if (!result) {
    return res.status(404).send('Post not found!')
  }

  res.json({
    statusCode: 200,
    result
  })
})

export default route
