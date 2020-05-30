import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image, Dimensions } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom'

const Container = styled.View``

const Text = styled.Text`
  margin: 12px 30px;
  font-size: 24px;
`

function Question({ text, image }) {
  const [height, setHeight] = useState('0')
  const [width, setWidth] = useState('0')

  // useEffect(() => {
  //   Image.getSize(image, (width, height) => {
  //     setHeight(height.toString())
  //     setWidth(width.toString())
  //   })
  // }, [])

  return (
    <Container>
      <Text>{text}</Text>
      {/* <Text>{image ? 'exists' : 'no'}</Text> */}
      {/* <ImageZoom
        cropWidth={Dimensions.get('window').width}
        // cropWidth="100%"
        // cropHeight="50%"
        cropHeight={Dimensions.get('window').height / 2}
        // cdx
        imageWidth={300}
        imageHeight={300}
        panToMove={true}
      >
        <Image style={{ width: 400, height: 300 }} source={image} />
      </ImageZoom> */}
    </Container>
  )
}

export default Question
