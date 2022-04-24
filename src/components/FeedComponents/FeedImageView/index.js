import React, { Component } from "react"
import { Image, View } from "react-native"

// local imports
import styles from "../styles"

class FeedImageView extends Component {
  constructor(props) {
    super(props)
  }

  // Renders the provided image URI
  // Accepts the "full" prop which will change the size for post view or the feed
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
