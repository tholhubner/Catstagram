import React, { Component } from 'react'
import { View, Alert, TextInput } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll"

// local imports
import styles from "./styles"
import baseStyles from "../../globals/baseStyles"
import { PhotoGallery, SimpleCloseButton, SimpleTextButton } from "../AddPhotoComponents"
import { FeedImageView } from "../FeedComponents"

class AddPhoto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      photoToDisplay: null,
      newPostTitle: null,
    }
  }

  // Get the first 20 images from the user's camera roll and add them to state for display
  handleCameraRollPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos",
    })
    .then(response => {
      this.setState({ photos: response.edges, photoToDisplay: null })
    })
    .catch(() => {
      Alert.alert("Error", "There was an error loading your photos. Try again.")
    })
  }

  // Handle the logic of saving the image once the user is done editing
  // Clears out all state here and closes the modal using the same function
  // as the close button below
  handleSaveButtonPress = () => {
    const { handleClosePress } = this.props
    Alert.alert("SUCCESS!", "Your image hase been saved, please check the feed soon to see your cat with the others!")
    this.setState({ photos: [], photoToDisplay: null }, () => handleClosePress())
    // TODO: Add the logic to actually save the image
  }

  // Handle the selection of a photo from the gallery
  onImagePress = (photo) => {
    console.log(photo)
    const uri = photo.node.image.uri
    this.setState({ photoToDisplay: photo.node.image.uri, photos: [] })
  }

  // Render the add photo screen to the user
  render() {
    const { handleClosePress } = this.props
    const { photos, photoToDisplay, newPostTitle } = this.state
    const { container, selectedImageContainer } = styles
    const { textInputStyle } = baseStyles
    return ( 
      <View style={container}>
        <SimpleCloseButton onPress={handleClosePress} />
        <SimpleTextButton title="Browse Gallery" buttonHandler={this.handleCameraRollPress} />
        {photos.length > 0 ? (
          <PhotoGallery photos={photos} onImagePress={this.onImagePress} />
        ) : photoToDisplay ? (
          <View style={selectedImageContainer}>
            <FeedImageView imageUri={photoToDisplay} full />
            <TextInput
              style={textInputStyle}
              value={newPostTitle}
              placeholder="Add a title to your post"
              onChangeText={(value) => this.setState({ newPostTitle: value })}
              testID="titleBox"
            />
            <SimpleTextButton title="Save Post" buttonHandler={() => this.handleSaveButtonPress()} />
          </View>
        ) : (
          null
        )}
      </View>
    )
  }
}

export default AddPhoto
