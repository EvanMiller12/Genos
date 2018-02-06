const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register, // call policy as middleware controller before authenticating
    AuthenticationController.register)

  app.post('/register',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login)
}
