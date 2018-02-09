const {Songs} = require('../models')
// const jwt = require('jsonwebtoken')
// const config = require('../config/config')
module.exports = {
  async getSongs (req, res) {
    try {
      let songs = null
      const search = req.query.search
      // check if search is in query string
      if (search) {
        songs = await Songs.findAll({
          where: {
            // $or sequelize method checks if any of these are true
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%` // $like sequelize, search $or aray and see if key exist
              }
            }))
          }
        })
      } else {
        // find all songs on songs model and return no more than  10
        songs = await Songs.findAll({
          limit: 10
        })
      }
      res.send(songs) // send songs obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async showSong (req, res) {
    try {
      // find song with passed songId from params
      const song = await Songs.findById(req.params.songId)
      res.send(song) // send song obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async putSong (req, res) {
    // update song where id on song obj matches songid
    try {
      await Songs.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body) // send back same song updated
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  },
  async postSong (req, res) {
    try {
      // call sequelize obj pass it req.body and create song obj
      const song = await Songs.create(req.body)
      res.send(song) // send song obj back
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  }
}
