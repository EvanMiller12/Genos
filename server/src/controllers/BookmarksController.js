const {Bookmark} = require('../models')
// const jwt = require('jsonwebtoken')
// const config = require('../config/config')
module.exports = {
  async getBookmarks (req, res) {
    try {
      const {songId, userId} = req.query
      // returns bookmark w/ specific songId, if doesnt exist returns null
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark) // send bookmark obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  }
}
