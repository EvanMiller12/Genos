const {
  sequelize,
  Songs,
  User
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

sequelize.sync({force: true})
  .then(async function () {
    Promise.all(
      // run through json array and return new user object for each one
      users.map(user => {
        User.create(user)
      })
    )

    Promise.all(
      songs.map(song => {
        Songs.create(song)
      })
    )
  })