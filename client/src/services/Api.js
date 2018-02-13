import axios from 'axios' // connection service
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    // set authorization header to token if one exist
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
