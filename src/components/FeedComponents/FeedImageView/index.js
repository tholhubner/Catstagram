import React, { Component } from "react"
import { Image, View } from "react-native"

// local imports
import styles from "../styles"

class FeedImageView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { imageUri, full } = this.props
    const { imageContainer, imageStyleFull, imageStyleSmall } = styles
    return (
      <View style={imageContainer} testID="ImageView">
        <Image
          style={full ? imageStyleFull : imageStyleSmall}
          source={{
            uri: imageUri
          }}
        />
      </View>
    )
  }
}

export { FeedImageView }
