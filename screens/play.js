import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import firebase from '../lib/firebase'

import Header from '../components/Play/Header'
import Question from '../components/Play/Question'
import Options from '../components/Play/Options'
import Footer from '../components/Play/Footer'

import questionImage from '../assets/question-image.png'

const options = [
  {
    text: 'Sulfur Hydroxide',
  },
  {
    text: 'Forty Two',
  },
  {
    text: 'Carbon Dioxide',
  },
  {
    text: 'Calcium Carbonate',
  },
]

const players = [
  {
    name: 'Bomesh Barr',
    coins: 45600,
    imageURL: 'https://github.com/someshkar.png',
  },
  {
    name: 'Bangad Bingh',
    coins: 78900,
    imageURL: 'https://github.com/dotangad.png',
  },
]

const Container = styled.View`
  flex: 1;
`

function PlayPage({ route, navigation }) {
  const [loaded, nachos] = React.useState(false)
  const [currentGame, setCurrentGame] = React.useState({})
  const [currentQuestion, setCurrentQuestion] = React.useState({})

  React.useEffect(() => {
    async function f() {
      // NACHOOOOOOOSSSSSSSS
      const g = firebase
        .firestore()
        .collection('games')
        .doc(route.params.gameId)

      const cg = (await g.get()).data()
      console.log(cg)
      setCurrentGame(cg)

      const cqid = cg.questions.filter((q) => q.active)[0].id
      const cq = (
        await firebase.firestore().collection('questions').doc(cqid).get()
      ).data()
      setCurrentQuestion(cq)

      console.log({ cg, cq })
    }

    f()
      .then(() => nachos(true))
      .catch(console.error)
  }, [])

  firebase
    .firestore()
    .collection('games')
    .doc(route.params.gameId)
    .onSnapshot((s) => {
      const d = s.data()

      if (d.state === 'finished') {
        if (d[firebase.auth().currentUser.displayName] == true) {
          navigation.navigate('Win')
          return
        } else {
          navigation.navigate('Lose')
          return
        }
      }
    })

  return (
    <Container>
      <Header
        title={route.params.topic}
        timeText="9:32 min left"
        progress={56}
        navigation={navigation}
      />
      <ScrollView>
        {loaded ? (
          <>
            <Question
              text={`${currentQuestion.question}`}
              image={questionImage}
            />
            <Options
              correct={{ text: currentQuestion.answer }}
              options={[
                { text: currentQuestion.answer },
                { text: currentQuestion.wrongAnswer1 },
                { text: currentQuestion.wrongAnswer2 },
                { text: currentQuestion.wrongAnswer3 },
              ]}
              onCorrectSelected={async () => {
                await firebase
                  .firestore()
                  .collection('games')
                  .doc(route.params.gameId)
                  .update({
                    state: 'finished',
                    winner: firebase.auth().currentUser.displayName,
                    [firebase.auth().currentUser.displayName]: true,
                    [firebase.auth().currentUser.displayName ===
                    currentGame.playerOne
                      ? currentGame.playerTwo
                      : currentGame.playerOne]: false,
                  })
              }}
              onIncorrectSelected={async () => {
                await firebase
                  .firestore()
                  .collection('games')
                  .doc(route.params.gameId)
                  .update({
                    state: 'finished',
                    [firebase.auth().currentUser.displayName]: false,
                    [firebase.auth().currentUser.displayName ===
                    currentGame.playerOne
                      ? currentGame.playerTwo
                      : currentGame.playerOne]: true,
                    winner:
                      firebase.auth().currentUser.displayName ===
                      currentGame.playerOne
                        ? currentGame.playerTwo
                        : currentGame.playerOne,
                  })
              }}
            />
          </>
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
      {/* TODO: fetch and replace user data */}
      <Footer players={players} />
    </Container>
  )
}

export default PlayPage
