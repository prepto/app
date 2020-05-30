import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import Parse from '../lib/parse'
import AuthContext from '../lib/AuthContext'
import firebase from '../lib/firebase'

const Heading = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  /* font-family: 'Manrope-Regular'; */
`

const SignInContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Input = styled.TextInput`
  width: 90%;
  font-size: 15px;
  line-height: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px solid #bbb;
  margin: 10px 0;
`

const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
`

const Button = styled.Text`
  width: 100%;
  line-height: 20px;
  margin: 10px 0;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 5px;
  color: #fff;
  background: #2977f5;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

const Message = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #2977f5;
  text-align: center;
  margin: 10px 0;
`

export default ({ navigation }) => {
  // const { setAuthenticated, authenticated } = useContext(AuthContext)
  const [email, onEmailChange] = useState('')
  const [password, onPasswordChange] = useState('')
  const [username, onUsernameChange] = useState('')
  const [grade, setGrade] = useState()
  const [error, setError] = useState(null)

  const handleSignUp = () => {
    // console.log({ email, username, password })
    // const user = new Parse.User()
    // user.set('username', username)
    // user.set('password', password)
    // user.set('email', email)

    // try {
    //   if (authenticated) {
    //     await Parse.User.logOut()
    //   }
    //   const newUser = await user.signUp()
    //   setAuthenticated(true)
    // } catch (error) {
    //   console.error(error)
    // }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        firebase
          .firestore()
          .collection('users')
          // .doc(firebase.auth().currentUser.uid)
          .doc((firebase.auth().currentUser || {}).uid.toString())
          .set({
            username,
            password,
            email,
            grade: parseInt(grade),
            rating: 0,
            wins: 0,
            losses: 0,
          })
        return userCredentials.user.updateProfile({
          displayName: username,
        })
      })
      .catch((error) => setError(error.message))
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <SignInContainer>
        <Heading>Make an account</Heading>
        <Input
          placeholder="Username"
          type="text"
          defaultValue={username}
          onChangeText={onUsernameChange}
        />
        <Input
          placeholder="Grade"
          type="text"
          defaultValue={grade}
          onChangeText={setGrade}
          keyboardType="numeric"
        />
        <Input
          placeholder="Email"
          type="text"
          defaultValue={email}
          onChangeText={onEmailChange}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={onPasswordChange}
        />
        <Text>{error ? error : null}</Text>
        <ButtonContainer onPress={handleSignUp}>
          <Button>Sign Up</Button>
        </ButtonContainer>
        <ButtonContainer onPress={() => navigation.navigate('Login')}>
          <Message>Already have an account? Login here</Message>
        </ButtonContainer>
      </SignInContainer>
    </View>
  )
}
