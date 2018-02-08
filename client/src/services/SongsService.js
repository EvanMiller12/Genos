import Api from '@/services/Api'

export default {
  getSongs () {
    return Api().get('songs')
  },
  // get request to passed in songId
  showSong (songId) {
    return Api().get(`songs/${songId}`)
  },
  // post request to songs EP and pass song data obj
  postSong (song) {
    return Api().post('songs', song)
  }
}
