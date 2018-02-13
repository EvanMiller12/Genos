// exports a function which calls jwtStrategy
const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'you do not have access to this resource'
      })
    } else {
      req.user = user // user exists in db and token is validated against secret defined in config
      next()
    }
  })(req, res, next)
}