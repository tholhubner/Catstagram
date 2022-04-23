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
    const { name, timestamp_created, comments } = post
    const { feedItemContainer } = styles
    return (
      <TouchableOpacity style={feedItemContainer} onPress={() => this.props.onItemSelected(post)}>
        <FeedImageView imageUri={"https://reactnative.dev/img/tiny_logo.png"} /> // TODO: Switch to real url
        <FeedHeaderText text={name} />
        <FeedItemDate timestamp={timestamp_created} />
        <FeedCommentCount comments={comments} />
      </TouchableOpacity>
    )
  }
}

export default FeedItem
