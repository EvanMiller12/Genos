module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite', // type of DB connecting too
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite' // where to store sqlite file
    }
  }
}
