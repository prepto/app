import React from 'react'
import styled from 'styled-components/native'
import { Text, View, Image } from 'react-native'
import { formatCoins } from '../../lib/coins'

import coinImg from '../../assets/coin.png'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 70px;
  border-color: #ddd;
  border-top-width: 2px;
`

const PlayerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 45%;
`

const DP = styled.Image`
  height: 50px;
  width: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
`

const VSContainer = styled.View`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

const Name = styled.Text``

function Coins({ number, direction }) {
  const TinyC = styled.View`
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: center;
  `

  const CoinImg = styled.Image`
    height: 16px;
    width: 16px;
    margin-left: 5px;
    margin-right: 5px;
  `

  return (
    <TinyC direction={direction}>
      <Text>{formatCoins(number)}</Text>
      <CoinImg source={coinImg} />
    </TinyC>
  )
}

function Footer({ players }) {
  const [player1, player2] = players

  return (
    <Container>
      <PlayerContainer>
        {/* <Image source={{ uri: 'https://github.com/someshkar.png' }} /> */}
        <DP resizeMode="contain" source={{ uri: player1.imageURL }} />
        <View>
          <Name>{player1.name}</Name>
          <Coins number={player1.coins} direction="row" />
        </View>
      </PlayerContainer>
      <VSContainer>
        <Text>vs</Text>
      </VSContainer>
      <PlayerContainer>
        <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Name>{player2.name}</Name>
          <Coins number={player2.coins} direction="row-reverse" />
        </View>
        <DP resizeMode="contain" source={{ uri: player2.imageURL }} />
      </PlayerContainer>
    </Container>
  )
}

export default Footer
