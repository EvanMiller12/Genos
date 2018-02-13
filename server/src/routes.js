const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register, // call policy as middleware controller before authenticating
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.getSongs)
  app.get('/songs/:songId',
    SongsController.showSong)
  app.put('/songs/:songId',
    SongsController.putSong)
  app.post('/songs',
    SongsController.postSong)

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.getBookmarks)
   app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.postBookmark)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.deleteBookmark)

  app.get('/histories',
    isAuthenticated,
    HistoriesController.getHistory)
  app.post('/histories',
    isAuthenticated,
    HistoriesController.postHistory)
}
