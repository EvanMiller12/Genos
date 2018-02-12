import Api from '@/services/Api'

export default {
  getBookmarks (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  postBookmark (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  deleteBookmark (bookmarkId) {
    return Api().get(`bookmarks/${bookmarkId}`)
  }
}
