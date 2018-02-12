const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

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
    BookmarksController.getBookmarks)
   app.post('/bookmarks',
    BookmarksController.postBookmark)
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.deleteBookmark)
}
