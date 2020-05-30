import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container = styled.View`
  width: 100%;
  margin-top: 3%;
`

const Title = styled.Text`
  font-size: 40px;
  color: #000;
`

const Subtitle = styled.Text`
  font-size: 14px;
  color: #444;
  width: 90%;
  margin-top: 10px;
`

const Header = () => {
  return (
    <Container>
      <Title>
        Hey,{'\n'}
        <Text style={{ fontWeight: 'bold' }}>Somesh</Text>
      </Title>
      <Subtitle>
        Get started competing against the best students across the country!
      </Subtitle>
    </Container>
  )
}

export default Header
