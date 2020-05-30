import React from 'react'
import styled from 'styled-components/native'
import { View, ActivityIndicator } from 'react-native'
import firebase from '../lib/firebase'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Heading = styled.Text`
  font-size: 30px;
  text-align: center;
  width: 100%;
`

const Loading = styled(ActivityIndicator)`
  height: 300px;
  width: 100%;
`

const MatchmakingScreen = ({ route, navigation }) => {
  const hotwire = false

  React.useEffect(() => {
    async function main() {
      try {
        const games = (
          await firebase
            .firestore()
            .collection('games')
            .where('state', '==', 'matching')
            .where('topic', '==', 'topic')
            .get()
        ).docs.map((d) => ({ id: d.id, doc: d.data() }))
        console.log(games)

        if (games.length > 0) {
          // Send to play page
          await firebase
            .firestore()
            .collection('games')
            .doc(games[0].id)
            .update({
              playerTwo: firebase.auth().currentUser.displayName,
              state: 'playing',
            })

          navigation.navigate('Play', {
            topic: route.params.topic,
            gameId: games[0].id,
          })
          return
        }

        function shuffleArr(array) {
          array = [...array]

          let currentIndex = array.length,
            temporaryValue,
            randomIndex

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            // And swap it with the current element.
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
          }

          return array
        }

        const questions = shuffleArr([
          'zS214yEERI3gRi3KNrBH',
          'tbTAU4QSwaPUA4HBsdMD',
          'p4nkHz30oZQ97clonz5L',
          'WsvhsWBkgiarfjSAK8bQ',
          '7ISJtjIhRTqjJjKDohrY',
          '5PCuYRMUp4yLGXou7xMd',
          '0PuiIv0UMOuvm0YTTCTN',
          '08lMiPkWB228bZPmsExS',
        ])

        const newGame = await firebase
          .firestore()
          .collection('games')
          .add({
            state: 'matching',
            playerOne: firebase.auth().currentUser.displayName,
            playerTwo: null,
            p1Score: 0,
            p2Score: 0,
            solveTime: 120,
            questions: questions.map((id, i) => ({
              id,
              active: i === 0,
              solved: false,
              p1Time: null,
              p2Time: null,
            })),
            topic: 'topic',
          })

        const unsub = newGame.onSnapshot((s) => {
          const data = s.data()
          if (data.state === 'playing' && data.playerTwo !== null) {
            unsub()
            navigation.navigate('Play', {
              topic: route.params.topic,
              gameId: s.id,
            })
          }
        })
      } catch (e) {
        console.error(e)
      }
    }

    hotwire
      ? navigation.navigate('Play', {
          topic: route.params.topic,
          gameId: 'samlUOjVnoesVQd6hx1c',
        })
      : main()
  })

  return (
    <Container>
      <View style={{ width: '100%' }}>
        <Heading>Matching you with other players...</Heading>
        <Loading />
      </View>
    </Container>
  )
}

export default MatchmakingScreen
