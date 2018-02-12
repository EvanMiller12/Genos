const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan') // log service
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// attach all endpoints of app
require('./routes')(app)

// sync sequelize to database then start server
sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
