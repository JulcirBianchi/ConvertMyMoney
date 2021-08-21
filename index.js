const express = require('express')
const app = express()
const path = require('path')

const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {

  res.render('home')
})

app.get('/cotacao', (req, res) => {

  const { cotacao, valor } = req.query
  if (cotacao && valor) {
    const conversao = convert.convert(cotacao, valor)
    res.render('cotacao', {
      error: false,
      valor: convert.toMoney(valor),
      cotacao: convert.toMoney(cotacao),
      conversao: convert.toMoney(conversao)
    })
  } else {
    res.render('cotacao', {
      error: 'Valores inválidos!'
    })
  }
})

app.listen(3000, err => {

  if (err) {
    console.log('Server init error.')
  } else {
    console.log('Server started!')
  }

})