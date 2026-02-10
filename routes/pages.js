const express = require('express')
const router = express.Router()

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
  const { username, password } = req.body

  console.log(username, password)

  // tijdelijk: gewoon terugsturen of renderen
  res.render('confirmatie', {
    username,
    password})
})

module.exports = router
