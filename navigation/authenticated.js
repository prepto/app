import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../components/Play/Header'

import PlayPage from '../screens/play'
import ProfileScreen from '../screens/profile'
import HomeScreen from '../screens/home'
import SettingsScreen from '../screens/settings'
import SyllabusScreen from '../screens/syllabus'
import MatchmakingScreen from '../screens/matchmaking'
import WinPage from '../screens/win'
import LosePage from '../screens/lose'

const HomeStack = createStackNavigator()
const HomeStackScreen = ({ navigation, route }) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 2 ? false : true) : null,
  })

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Syllabus" component={SyllabusScreen} />
      <HomeStack.Screen name="Matchmaking" component={MatchmakingScreen} />
      <HomeStack.Screen name="Play" component={PlayPage} />
      <HomeStack.Screen name="Win" component={WinPage} />
      <HomeStack.Screen name="Lose" component={LosePage} />
    </HomeStack.Navigator>
  )
}

HomeStack.navigationOptions = ({ navigation }) => {
  const { state } = navigation
  const routes = state.routes[state.index]

  const routeNames = routes.routeName
}

const Tab = createBottomTabNavigator()

const TabbarIcons = {
  Home: 'ios-home',
  Profile: 'ios-person',
  Settings: 'ios-settings',
}

export default () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#fff' },
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={TabbarIcons[route.name]}
              size={size}
              color={color}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: '#2977f5',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
