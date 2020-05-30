import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  width: 100%;
  height: 200px;
  margin-top: 5%;
`

const DoubleOption = styled.View`
  flex-direction: row;
  height: 50%;
  width: 100%;
`

const Option = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  margin: 10px;
  width: 43%;
  border-radius: 10px;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  elevation: 10;
`

const Name = styled.Text`
  position: absolute;
  bottom: 10%;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-left: 10%;
`

const Subjects = ({ navigation }) => {
  const goTo = (to) => navigation.navigate(to)

  return (
    <Container>
      <DoubleOption>
        <Option bgColor="#8F98FF" onPress={() => goTo('Syllabus')}>
          <Name>Physics</Name>
        </Option>
        <Option bgColor="#182A88" onPress={() => goTo('Syllabus')}>
          <Name>Chemistry</Name>
        </Option>
      </DoubleOption>
      <DoubleOption>
        <Option
          bgColor="#FC6238"
          onPress={() => navigation.navigate('Syllabus')}
        >
          <Name>Mathematics</Name>
        </Option>
        <Option bgColor="#FFC278" onPress={() => goTo('Syllabus')}>
          <Name>Biology</Name>
        </Option>
      </DoubleOption>
    </Container>
  )
}

export default Subjects
