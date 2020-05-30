import React, { useState } from 'react'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import { setCustomText } from 'react-native-global-props'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Parse from './lib/parse'
import firebase from './lib/firebase'
import AuthContext from './lib/AuthContext'
import Routes from './navigation'
import fonts from './assets/fonts'

// setCustomText({ style: { fontFamily: 'Manrope-Regular' } })

// export default () => {
//   const [user, setUser] = useState(async () => await Parse.User.currentAsync())
//   const [authenticated, setAuthenticated] = useState(!!user)
//   // const [fontsLoaded] = useFonts(fonts)

//   // return fontsLoaded ? (
//   return (
//     <AuthContext.Provider
//       value={{ authenticated, user, setAuthenticated, setUser }}
//     >
//       <Routes />
//     </AuthContext.Provider>
//   )
//   // ) : (
//   //   <AppLoading />
//   // )
// }

import HomeScreen from './screens/home'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/register'
import LoadingScreen from './screens/loading'

import AuthenticatedRoutes from './navigation/authenticated'

const AppStack = createStackNavigator({
  Home: AuthenticatedRoutes,
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    }
  )
)
