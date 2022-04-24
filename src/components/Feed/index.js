import React, { Component } from "react"
import { View, ScrollView, Modal, Button } from "react-native"

// local imports
import styles from "./styles"
import FeedItem from "../FeedItem"
import AddPhotoButton from "../AddPhotoButton"
import AddPhoto from "../AddPhoto"

class Feed extends Component {
  constructor(props) {
    super(props)

    const { posts } = this.props

    this.state = {
      posts,
      addModalVisible: false,
    }
  }

  // Sets required value for showing the add photo modal
  handleAddPhotoPress = () => {
    this.setState({ addModalVisible: true })
  }
  
  handleImageSelection = (photoUri) => {
    console.log(photoUri)
  }

  // Render the feed to the user
  // Also handles the modal logic for adding a photo
  render() {
    const { onItemSelected } = this.props
    const { posts, addModalVisible } = this.state
    const { catView } = styles
    return (
      <View>
        <ScrollView style={catView}>
          <View>
            {posts.map((item, index) => (
              <FeedItem key={index} post={item} onItemSelected={onItemSelected} />
            ))}
          </View>
        </ScrollView>
        <AddPhotoButton handleAddPhotoPress={() => this.setState({ addModalVisible: true })} />

        <Modal
          animationType="slide"
          visible={addModalVisible}
          onRequestClose={() => {
            setModalVisible(!addModalVisible);
          }}
        >
          <AddPhoto handleClosePress={() => this.setState({ addModalVisible: false })} handleImagePress={() => this.handleImageSelection()} />
        </Modal>
      </View>
    )
  }
}

export default Feed
