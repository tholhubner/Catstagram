import React, { Component } from "react"
import { View, ScrollView, Text } from "react-native"

// local imports
import styles from "./styles"
import FeedItem from "../FeedItem"

class Feed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    const { catView } = styles
    return (
      <ScrollView style={catView}>
        {posts.map((item, index) => (
          <FeedItem key={index} post={item} onItemSelected={this.props.onItemSelected} />
        ))}
      </ScrollView>
    )
  }
}

export default Feed
