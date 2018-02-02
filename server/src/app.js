const express = require('express')
const bodyParser = require('body-parser') // process jSON easily
const cors = require('cors') // allows cross origin sharing
const morgan = require('morgan') // print logs

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
