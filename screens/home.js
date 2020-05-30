import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from '../components/Home/Card'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import firebase from '../lib/firebase'

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View>
        <View style={styles.searchBar}>
          <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#4E4E4E"
            underlineColorAndroid="transparent"
            style={{ flex: 1 }}
          />
          {/* <Button title="Logout" onPress={() => firebase.auth().signOut()} /> */}
        </View>
        <View style={{ paddingTop: 25 }}>
          <Text style={styles.Heading}>Popular Tests</Text>
        </View>
        <View
          style={{
            height: 150,
            marginTop: 20,
            justifyContent: 'space-between',
          }}
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={15}
            Style={{
              flex: 1,
            }}
            contentContainerStyle={{
              flexGrow: 1,
              // paddingHorizontal: 100,
              justifyContent: 'space-evenly',
            }}
          >
            <Card heading="Thermodynamics" subheading="42,069 Played" />
            <Card heading="Optics" subheading="120 Played" />
            <Card heading="Differentiation" subheading="43 Played" />
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.Heading2}>Subjects</Text>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={15}
              //decelerationRate={0.5}
              Style={{
                flex: 1,
              }}
            >
              <Card
                heading="Maths"
                subheading="24 Challenges"
                navigation={navigation}
              />
              <Card heading="Chemistry" subheading="16 Challenges" />
              <Card heading="Physics" subheading="13 Challenges" />
              <Card heading="Biology" subheading="18 Challenges" />
            </ScrollView>
          </View>
        </View>
        {/* <Text style={styles.Heading2}>Stats</Text> */}
        {/* <Text style={styles.Heading2}>Stats</Text>
         */}
      </View>
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    marginTop: 40,
    marginHorizontal: 20,
    height: 40,
    backgroundColor: '#EBEBEC',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
  },
  Heading: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  Heading2: {
    fontSize: 25,
    // fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardLarge: {
    flex: 2,
    backgroundColor: '#8E8E8E',
    width: 250,
    height: 150,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20,
  },
})

export default HomeScreen
