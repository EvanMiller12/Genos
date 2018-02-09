const {Songs} = require('../models')
// const jwt = require('jsonwebtoken')
// const config = require('../config/config')
module.exports = {
  async getSongs (req, res) {
    try {
      // find all songs on songs model and return no more than  10
      const songs = await Songs.findAll({
        limit: 10
      })
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
      const song = await Songs.update(req.body, {
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
