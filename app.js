const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

// routes
app.use('/', require('./routes/pages'))
app.use('/api', require('./routes/api'))

app.use((req, res) => {
  res.status(404).render('404')
})



app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`)
})
