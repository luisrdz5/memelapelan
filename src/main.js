import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
import router from './router/index'


Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyD2GuY7kwb7ZghPH9-2OZg1JcLHjpFkoek",
  authDomain: "memelapelan-197dc.firebaseapp.com",
  databaseURL: "https://memelapelan-197dc.firebaseio.com",
  projectId: "memelapelan-197dc",
  storageBucket: "memelapelan-197dc.appspot.com",
  messagingSenderId: "877679508911",
  appId: "1:877679508911:web:34cb239b517e808f"
};

const firebaseApp = firebase.initializeApp(config)
export const firestore = firebaseApp.firestore()
export const storage = firebaseApp.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
