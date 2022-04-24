import React, { Component } from "react"
import { View, Button, TextInput } from "react-native"

// local imports
import baseStyles from "../../globals/baseStyles"
import styles from "./styles"

class NewComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newCommentText: null,
    }
  }

  onButtonPressed = () => {
    const { onAddCommentPressed } = this.props
    const { newCommentText } = this.state
    onAddCommentPressed(newCommentText)
    this.setState({ newCommentText: null })
  }

  render() {
    const { newCommentText } = this.state
    const { textInputStyle } = baseStyles
    const { buttonContainer, newCommentTextContainer } = styles
    return (
      <View>
        <TextInput
          style={[textInputStyle, newCommentTextContainer]}
          value={newCommentText}
          placeholder="Add a comment..."
          onChangeText={(value) => this.setState({ newCommentText: value})}
          testID="commentBox"
          onEndEditing={() => this.onButtonPressed()}
        />
        <View style={buttonContainer}>
          <Button title="Add" color="#9042f5" onPress={() => this.onButtonPressed()} />
        </View>
      </View>
    )
  }
}

export default NewComment
