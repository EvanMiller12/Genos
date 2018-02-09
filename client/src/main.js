// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify' // styling framework for vue
import './../node_modules/vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync' // maps and sends out dispatch events when rout changes
import store from '@/store/store'

import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
// Vue.use(VueYouTubeEmbed, { global: false })

Vue.component('panel', Panel) // make panel global, pass name and actual component

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
