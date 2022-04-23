import React, { Component } from "react"
import { View, Text, Button, TextInput } from "react-native"
import moment from "moment"

// local imports
import styles from "./styles"
import { FeedItemDate } from "../FeedComponents"

class CommentSection extends Component {
  constructor(props) {
    super(props)

    const { comments } = this.props

    this.state = {
      comments
    }
  }

  render() {
    const { comments } = this.state
    const { container, commentHeader, commentText, commentTimestamp } = styles
    return (
      <View style={container}>
        <Text style={commentHeader}>{`Comments (${comments.length}):`}</Text>
        <View>
          {comments.map((comment, index) => (
            <View key={index} testID="feedComment">
              <Text style={commentText}>{comment.text}</Text>
              <FeedItemDate timestamp={comment.timestamp_created} />
            </View>
          ))}
        </View>
      </View>
    )
  }r
}

export default CommentSection
