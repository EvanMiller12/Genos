const {
  sequelize,
  Songs,
  User,
  Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

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
    // needs to be after user and songs b/c we need them to be created first to associate
    Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })