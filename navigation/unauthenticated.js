import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import Register from '../screens/register'
import Login from '../screens/login'

const UnauthenticatedStack = createStackNavigator()
const UnauthenticatedStackScreen = () => (
  <NavigationContainer
    theme={{
      ...DefaultTheme,
      colors: { ...DefaultTheme.colors, background: '#fff' },
    }}
  >
    <UnauthenticatedStack.Navigator screenOptions={{ headerShown: false }}>
      <UnauthenticatedStack.Screen name="Register" component={Register} />
      <UnauthenticatedStack.Screen name="Login" component={Login} />
    </UnauthenticatedStack.Navigator>
  </NavigationContainer>
)

export default UnauthenticatedStackScreen
