// setup of passport module
const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // if have bearer token is in header use it as auth
    secretOrKey: config.authentication.jwtSecret
    // return messages based on whether the user is authorized
  }, async function (jwtPayload, done) {
    try {
      const user = await User.findOne({
        where: {
          id: jwtPayload.id // jwtPayload is what we sign/encript from auth controller
        }
      })
      if (!user) {
        return done(new Error(), false)
      }
      return done(null, user) // set instance of req.user
    } catch (err) {
      return done(new Error(), false)
    }
  })
)

module.exports = null