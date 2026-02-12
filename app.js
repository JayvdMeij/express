const express = require('express')
const session = require('express-session')

const app = express()
const port = 3000

app.use(session({
  secret: 'eenSuperGeheimeKey', // sterke geheime sleutel
  resave: false,                // session alleen opslaan als deze veranderd is
  saveUninitialized: true,      // nieuwe sessions opslaan ook als er nog niets in staat
  cookie: { maxAge: 1000 * 60 * 60 } // cookie 1 uur geldig
}));

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', require('./routes/pages'))

app.use((req, res) => {
  res.status(404).render('404')
})



app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`)
})
