const fs = require('fs') // node js way of agregating through file system
const path = require('path') // used in conj w/ fs to establish file paths
const Sequelize = require('sequelize') // used to connect to database
const config = require('../config/config')
const db = {}

// accepts db to connect to as 1st arg
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// automatically reads through models and sets up to be used with sequelize
fs
  .readdirSync(__dirname) // read through current directory, give array of dif files
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// give access to sequelize object
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
