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
  }
}