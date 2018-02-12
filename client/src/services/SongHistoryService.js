import Api from '@/services/Api'

export default {
  getSongs (params) {
    return Api().get('history', {
      params: params
    })
  },
  postSongs (history) {
    return Api().post('history', history)
  }
}
