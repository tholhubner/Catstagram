import React, { Component } from "react"
import { Text, TouchableOpacity } from "react-native"
import moment from "moment"

// local imports
import styles from "./styles"

class AddPhotoButton extends Component {
  constructor(props) {
    super(props)
  }

  // Renders the add photo button, this is positioned absolutely on the feed page 
  render() {
    const { handleAddPhotoPress } = this.props
    const { addText, addButtonStyle } = styles
    return (
      <TouchableOpacity style={addButtonStyle} onPress={handleAddPhotoPress}>
        <Text style={addText}>Add Photo</Text>
      </TouchableOpacity>
    )
  }
}

export default AddPhotoButton
