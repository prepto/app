import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native'
import { Gravatar, GravatarApi } from 'react-native-gravatar'

import Parse from '../lib/parse'
import firebase from '../lib/firebase'
import AuthContext from '../lib/AuthContext'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const ProfileScreen = ({ navigation }) => {
  const [wins, setWins] = useState()
  const [losses, setLosses] = useState()
  const [rating, setRating] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    const db = firebase.firestore()
    const auth = firebase.auth()

    const docRef = db.collection('users').doc(auth.currentUser.uid)

    // db.collection('users')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       if (doc.id === auth.currentUser.uid) {
    //         console.log(doc.data())
    //       }
    //       // console.log(`${doc.id} => ${doc.data()}`)
    //     })
    //   })
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const { wins, loss, rating, username, email } = doc.data()
          setWins(wins)
          setLosses(loss)
          setRating(rating)
          setName(username)
          setEmail(email)
        } else {
          console.log('no doc')
        }
      })
      .catch((err) => console.error(err))

    docRef.onSnapshot((doc) => {
      const { wins, loss, rating, username, email } = doc.data()
      setWins(wins)
      setLosses(loss)
      setRating(rating)
      setName(username)
      setEmail(email)
    })
  })

  const mail = firebase.auth().currentUser.email
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: 'center' }}>
        <View style={{ marginTop: 50 }}>
          <Gravatar
            options={{
              email: mail,
              parameters: { size: '400', d: 'mm' },
              secure: true,
            }}
            style={styles.profileimage}
          />
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ fontSize: 22, marginTop: 10 }}>{email}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View
            style={[
              styles.statsHolder,
              {
                paddingRight: 20,
              },
            ]}
          >
            <Text style={{ fontSize: 26 }}>{losses || 0}</Text>
            <Text style={{ fontSize: 18 }}>Losses</Text>
          </View>
          <View
            style={[
              styles.statsHolder,
              {
                borderColor: '#292929',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                paddingHorizontal: 20,
              },
            ]}
          >
            <Text style={{ fontSize: 26 }}>{(wins || 0) + (losses || 0)}</Text>
            <Text style={{ fontSize: 18 }}>Played</Text>
          </View>
          <View
            style={[
              styles.statsHolder,
              {
                paddingLeft: 20,
              },
            ]}
          >
            <Text style={{ fontSize: 26 }}>{wins || 0}</Text>
            <Text style={{ fontSize: 18 }}>Wins</Text>
          </View>
        </View>
        <View style={styles.statsBox}>
          <AnimatedCircularProgress
            size={80}
            width={10}
            fill={parseInt(rating)}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
            //style={{ marginLeft: 20 }}
          >
            {(fill) => <Text>{rating}</Text>}
          </AnimatedCircularProgress>
          <Text style={{ fontSize: 24, marginLeft: 20 }}>
            Skill : {rating} XP
          </Text>
        </View>
        <Button title="Logout" onPress={() => firebase.auth().signOut()} />
      </View>
    </SafeAreaView>
  )
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
  },
  profileimage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
  },
  info: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  statsHolder: {
    alignItems: 'center',
    flex: 1,
    // marginHorizontal: 20,
  },
  statsBox: {
    flex: 1,
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
})
export default ProfileScreen
