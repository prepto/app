import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  height: 130px;
  width: 260px;
  margin-left: 20px;
  border-radius: 10px;
  background: #e7e7e7;
  padding: 15px;
`

const Heading = styled.Text`
  font-size: 25px;
`

const Subheading = styled.Text`
  font-size: 12px;
`

const Card = ({ navigation, heading, subheading }) => (
  <Container
    onPress={() => (navigation ? navigation.navigate('Syllabus') : null)}
  >
    <Heading>{heading}</Heading>
    <Subheading>{subheading}</Subheading>
  </Container>
)

export default Card

// class Card extends Component {
//   render() {
//     return (
//       <View style={{ height: 150, width: 150 }}>
//         <View style={styles.cardLarge}>
//           <Icon name="ios-bonfire" size={40} style={{ color: '#fff' }} />
//           <Text style={styles.TopicHeading}>{this.props.heading}</Text>
//           <Text style={styles.TopicSub}>{this.props.subheading}</Text>
//         </View>
//       </View>
//     )
//   }
// }

// export default Card
// const styles = StyleSheet.create({
//   cardLarge: {
//     flex: 2,
//     backgroundColor: '#8E8E8E',
//     width: 250,
//     height: 150,
//     borderRadius: 20,
//     padding: 10,
//     marginLeft: 20,
//   },
//   TopicHeading: {
//     fontSize: 22,
//     // fontWeight: 500,
//     marginTop: 10,
//     color: '#fff',
//   },
//   TopicSub: {
//     fontSize: 14,
//     // fontWeight: 400,
//     color: '#fff',
//     marginTop: 20,
//   },
// })
