import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Container = styled.View`
  margin-top: 30px;
`

const Option = styled.TouchableOpacity`
  margin: 0 30px;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  opacity: ${(props) => props.opacity};
`

const Text = styled.Text`
  font-size: 18px;
`

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

const Options = ({
  correct,
  options,
  onCorrectSelected,
  onIncorrectSelected,
}) => {
  // const [answered, setAnswered] = useState(false)
  // const [selected, setSelected] = useState(null)

  // function getOpacity(i) {
  //   if (!answered) return 1
  //   else if (selected === i) return 1
  //   else return 0.2
  // }

  return (
    <Container>
      {shuffleArr(options).map((option, i) => {
        return (
          <Option
            key={i}
            opacity={() => 1} //getOpacity(i)}
            onPress={() =>
              // setAnswered(true)
              // setSelected(i)
              // console.log(answered, selected)
              option.text === correct.text
                ? onCorrectSelected()
                : onIncorrectSelected()
            }
          >
            {option.image ? '' : <Text>{option.text}</Text>}
          </Option>
        )
      })}
    </Container>
  )
}

export default Options
