module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite', // type of DB connecting too
      host: process.env.HOST || 'localhost',
      storage: '../tabtracker.sqlite' // where to store sqlite file
    }
  },
  // pass jwt token secret string, that is only known by server.
  // determines if jwt token is valid or not
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
