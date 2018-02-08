import Api from '@/services/Api'

export default {
  getSongs () {
    return Api().get('songs')
  },
  // post request to songs EP and pass song data obj
  postSong (song) {
    return Api().post('songs', song)
  }
}
