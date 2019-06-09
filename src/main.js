import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDWmJ849rf3-_sSRMp-kwnDJhmEYNBorSQ',
      authDomain: 'itc-ads-442c7.firebaseapp.com',
      databaseURL: 'https://itc-ads-442c7.firebaseio.com',
      projectId: 'itc-ads-442c7',
      storageBucket: 'itc-ads-442c7.appspot.com',
      messagingSenderId: '633966541424',
      appId: '1:633966541424:web:19f9866cfbbc6346'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
