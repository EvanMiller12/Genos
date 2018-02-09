import Api from '@/services/Api'

export default {
  getSongs (search) {
    return Api().get('songs', {
      // pass in search then params of search and
      // bind to query string to render result
      params: {
        search: search
      }
    })
  },
  // get request to passed in songId
  showSong (songId) {
    return Api().get(`songs/${songId}`)
  },
  // push song payload to endpoint to update
  putSong (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  // post request to songs EP and pass song data obj
  postSong (song) {
    return Api().post('songs', song)
  }
}
