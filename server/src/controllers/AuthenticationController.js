const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON()) // Send User object to client that requested this endpoint
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

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send(userJson) // Send User object to client that requested this endpoint
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
