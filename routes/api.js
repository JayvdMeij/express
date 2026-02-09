const express = require('express')
const router = express.Router()

router.get('/posts', async (req, res) => {
  res.json([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ])
})

module.exports = router
