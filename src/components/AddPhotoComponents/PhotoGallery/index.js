import React, { Component } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"

// local imports
import styles from "../styles"
import { FeedImageView } from "../../FeedComponents"

class PhotoGallery extends Component {
  constructor(props) {
    super(props)
  }

  // Displays a list of provided photos from the user's gallery
  // Uses prop function to handle photo selection
  render() {
    const { photos, onImagePress } = this.props
    const { galleryScrollView, galleryContainer } = styles
    return (
      <ScrollView style={galleryScrollView}>
        <View style={galleryContainer}>
          {photos.map((photo, index) => (
            <TouchableOpacity key={index} onPress={() => onImagePress(photo)} testID="galleryImage">
              <FeedImageView imageUri={photo.node.image.uri} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}

export { PhotoGallery }
