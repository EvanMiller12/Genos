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
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },

  async deleteBookmark (req, res) {
    try {
      const {bookmarkId} = req.params
      // find bookmark w/ bookmark id from params and delete
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark) // send bookmark obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  },

  async postBookmark (req, res) {
    try {
      const {songId, userId} = req.body
      // returns bookmark w/ specific songId, if doesnt exist returns null
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      // if bookmark exist return error else post bookmark
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have this set as a bookmark'
        })
      }
      // create association b/t bookmark, song and user
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to add the bookmark'
      })
    }
  }
}
