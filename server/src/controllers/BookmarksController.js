const {
  Bookmark,
  Songs
} = require('../models')

const _ = require('lodash')

module.exports = {
  async getBookmarks (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      // returns bookmark w/ specific songId, if doesnt exist returns null
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Songs
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Songs,
          bookmark
        ))
      res.send(bookmarks) // send bookmark obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },

  async postBookmark (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
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
  },

  async deleteBookmark (req, res) {
    try {
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(bookmark) // send bookmark obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}
