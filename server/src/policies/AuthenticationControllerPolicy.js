// express middleware to validate requirement contraints
const Joi = require('joi') // validation methods for express

module.exports = {
  // funciton named same as in controller
  register (req, res, next) { // next what you call to invoke next thing in routes path
    const schema = {
      email: Joi.string().email(), // ensure email format
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$') // b/t 8 and 32 characters
      )
    }
    
    // validate req.body against schema
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      // give key of error, email or pw in this case
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
           res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}