import Api from '@/services/Api' // axios object, baseURL

// posts to register endpoint on express server with the provided credentials
export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// how to call register method from another file to pass in creds
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '12345'
// })
