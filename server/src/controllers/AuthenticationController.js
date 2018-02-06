const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// sign user object and give back jwt token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson, // Send User object to client that requested this endpoint
        token: jwtSignUser(userJson) // Send jwt token
      })
    } catch (err) {
      // email already exists
      res.status(4000).send({
        error: 'This email account is alread in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({ // find user where users email = email
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson, // Send User object to client that requested this endpoint
        token: jwtSignUser(userJson) // Send jwt token
      })
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
