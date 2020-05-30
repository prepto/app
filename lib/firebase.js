import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBP7c_0nPfoQhH0RuUW4xo8Blk6WTCzRmE',
  authDomain: 'getprepto.firebaseapp.com',
  databaseURL: 'https://getprepto.firebaseio.com',
  projectId: 'getprepto',
  storageBucket: 'getprepto.appspot.com',
  messagingSenderId: '492191243375',
  appId: '1:492191243375:web:6fcb5d58b07c0adf33819a',
  measurementId: 'G-3TTMGMD0RW',
}

firebase.initializeApp(config)

// const db = firebase.firestore()
// const auth = firebase.auth()

export default firebase
