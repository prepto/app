import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../lib/AuthContext'
import firebase from '../lib/firebase'
import AuthenticatedRoutes from './authenticated'
import UnauthenticatedRoutes from './unauthenticated'

import { View, ActivityIndicator } from 'react-native'

// export default ({ navigation }) => {
//   const { authenticated, setAuthenticated } = useContext(AuthContext)
//   // const [authenticated, setAuthenticated] = useState(false)

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       // console.log()
//       setAuthenticated(!authenticated)
//       console.log({ authenticated })
//     })
//   }, [])
//   return authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
// }

export default class MainNavigation extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? 'Home' : 'Login')
    })
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }
}
