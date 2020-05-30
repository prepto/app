import React from 'react'
import { View, Text, Button } from 'react-native'

import Header from '../components/Home/Header'
import Subjects from '../components/Home/Subjects'

const HomeScreen = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      padding: 30,
    }}
  >
    {/* <Text>Home Screen</Text>
    <Button title="Syllabus" onPress={() => navigation.navigate('Syllabus')} /> */}
    <Header />
    <Subjects navigation={navigation} />
  </View>
)

export default HomeScreen
