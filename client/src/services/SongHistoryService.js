import Api from '@/services/Api'

export default {
  getSongs (params) {
    return Api().get('histories', {
      params: params
    })
  },
  postSongs (history) {
    return Api().post('histories', history)
  }
}
