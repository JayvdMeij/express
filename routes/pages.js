const express = require('express')
const router = express.Router()

const users = require('../credentials.json')


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/contact', (req, res) => {
  res.render('contact')
})

router.get('/registratie', (req, res) => {
  res.render('registratie')
})

router.post('/registratie', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = users.find(u =>
    u.username === username && u.password === password
  )

  if (user) {
    res.render('welcome', { username })
  } else {
    res.render('error')
  }

})

module.exports = router
