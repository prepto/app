import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  SectionList,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
// import { subjectData } from '../components/Home/subjectData.js'

const subjectData = [
  {
    data: [
      {
        name: 'Limits',
        time: '20 mins',
      },
      {
        name: 'Derivatives',
        time: '30 mins',
      },
      {
        name: 'Functions',
        time: '30 mins',
      },
      {
        name: 'Integrals',
        time: '20 mins',
      },
      {
        name: 'Application of Integrals',
        time: '20 mins',
      },
    ],
    title: 'Calculus',
  },
  {
    data: [
      {
        name: 'Vectors and Spaces',
        time: '40 mins',
      },
      {
        name: 'Matrix transformations',
        time: '20 mins',
      },
      {
        name: 'Alternate coordinate systems',
        time: '15 mins',
      },
    ],
    title: 'Linear Algebra',
  },
]

class SectionListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          //flexWrap: 'wrap',
          marginVertical: 10,
          //justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10,
          alignItems: 'flex-start',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginRight: 10,
            fontWeight: 'bold',
          }}
          onPress={() =>
            this.props.navigation.navigate('Matchmaking', {
              topic: this.props.item.name,
            })
          }
        >
          {this.props.item.name}
        </Text>
        <View
          style={{
            backgroundColor: '#6592DB',
            borderRadius: 300,
            width: 80,
            height: 35,
            marginTop: 10,
            padding: 5,
            marginLeft: 10,
            paddingLeft: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginRight: 10,
              // fontWeight: 300,
              color: '#FFFFFF',
            }}
            onPress={() =>
              this.props.navigation.navigate('Matchmaking', {
                topic: this.props.item.name,
              })
            }
          >
            {this.props.item.time}
          </Text>
        </View>
      </View>
    )
  }
}
class SectionHeader extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 10,
            marginRight: 10,
            fontWeight: 'bold',
          }}
        >
          {this.props.section.title}
        </Text>
      </View>
    )
  }
}
const SyllabusScreen = ({ navigation }) => (
  <View
    style={{
      flex: 1,
    }}
  >
    <Text
      style={{
        marginTop: 20,
        paddingLeft: 10,
        margin: 25,
        fontSize: 30,
        fontWeight: 'bold',
      }}
    >
      Maths
    </Text>

    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 10,
        margin: 25,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#e2e2e2',
      }}
    >
      <SectionList
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => {
          return <SectionHeader section={section} />
        }}
        renderItem={({ item, index }) => {
          return (
            <SectionListItem
              item={item}
              index={index}
              navigation={navigation}
            />
          )
        }}
        sections={subjectData}
        keyExtractor={(item, index) => item.name}
      ></SectionList>
    </View>
  </View>
)

export default SyllabusScreen
