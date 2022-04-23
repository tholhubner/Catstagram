import React, { Component } from "react"
import { Image, View } from "react-native"

// local imports
import styles from "../styles"

class FeedImageView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { imageUri } = this.props
    const { imageContainer, imageStyle } = styles
    return (
      <View style={imageContainer} testID="ImageView">
        <Image
          style={imageStyle}
          source={{
            uri: imageUri
          }}
        />
      </View>
    )
  }
}

export { FeedImageView }
