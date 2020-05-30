import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Heading = styled.Text`
  font-size: 30px;
`

export default () => (
  <Container>
    <Heading>You lost! 😞</Heading>
  </Container>
)
