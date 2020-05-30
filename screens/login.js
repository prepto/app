import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import Parse, { main, LiveTest } from '../lib/parse'
import firebase from '../lib/firebase'
import AuthContext from '../lib/AuthContext'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)
  // const { setAuthenticated, authenticated } = useContext(AuthContext)

  // const handleLogin = async () => {
  //   try {
  //     if (authenticated) {
  //       await Parse.User.logOut()
  //     }
  //     const user = await Parse.User.logIn(username, password)
  //     setAuthenticated(true)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    firebase
      .firestore()
      .collection('games')
      .get()
      .then((snapshot) =>
        snapshot.docs.forEach((doc) => console.log(doc.data()))
      )
  }, [])

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setErrors(err.message)
      })
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
        <Heading>Login</Heading>
        <Input
          placeholder="Email"
          type="text"
          defaultValue={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={setPassword}
        />
        <Text>{errors ? errors : null}</Text>
        <ButtonContainer onPress={handleLogin}>
          <Button>Login</Button>
        </ButtonContainer>
        <ButtonContainer onPress={() => navigation.navigate('Register')}>
          <Message>Don't have an account? Register here.</Message>
        </ButtonContainer>
        {/* <ButtonContainer onPress={main}>
          <Button>fkoff</Button>
        </ButtonContainer> */}
      </SignInContainer>
    </View>
  )
}
