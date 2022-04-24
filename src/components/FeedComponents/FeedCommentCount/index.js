import React, { Component } from "react"
import { Text } from "react-native"

// local imports
import styles from "../styles"

class FeedCommentCount extends Component {
  constructor(props) {
    super(props)
  }

  // Displays the number of comments on a particular post as "Comments (X)"
  render() {
    const { comments } = this.props
    const { commentCountText } = styles
    return (
      <Text style={commentCountText}>{`Comments (${comments.length})`}</Text>
    )
  }
}

export { FeedCommentCount }
