import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import moment from "moment"

// local imports
import styles from "./styles"
import { FeedHeaderText, FeedItemDate, FeedCommentCount, FeedImageView } from "../FeedComponents"

class FeedItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props
    const { name, timestamp_created, comments, image } = post
    const { feedItemContainer } = styles
    return (
      <TouchableOpacity style={feedItemContainer} onPress={() => this.props.onItemSelected(post)} testID="feedItem">
        <FeedImageView imageUri={`http://catstagram.lofty.codes/media/${image}`} />
        <FeedHeaderText text={name} />
        <FeedItemDate timestamp={timestamp_created} />
        <FeedCommentCount comments={comments} />
      </TouchableOpacity>
    )
  }
}

export default FeedItem
