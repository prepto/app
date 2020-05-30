import React from 'react'
import styled from 'styled-components/native'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import backIcon from '../../assets/icons/back-icon.png'

const Big = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`

const Container = styled.View`
  width: 85%;
  height: 60%;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Icon = styled.Image`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`

const Timer = styled.Text`
  font-size: 15px;
  color: #333;
`

const ProgressBar = ({ filled, color }) => {
  const BarContainer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const Filled = styled.View`
    height: 100%;
    width: ${(props) => props.percent};
    background-color: ${(props) => props.color};
  `

  const Unfilled = styled.View`
    height: 100%;
    width: ${(props) => props.percent};
    background-color: #e9e6e6;
  `

  return (
    <BarContainer>
      <Filled percent={`${filled}%`} color={color} />
      <Unfilled percent={`${100 - filled}%`} />
    </BarContainer>
  )
}

const Header = ({ title, timeText, progress, navigation }) => (
  <Big>
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon source={backIcon} />
        </TouchableWithoutFeedback>
        <Title>{title}</Title>
      </View>
      <View>
        <Timer>{timeText}</Timer>
      </View>
      <ProgressBar filled={progress} color="green" />
    </Container>
  </Big>
)

export default Header
