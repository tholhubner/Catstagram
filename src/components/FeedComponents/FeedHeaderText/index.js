import React, { Component } from "react"
import { Text } from "react-native"

// local imports
import styles from "../styles"

class FeedHeaderText extends Component {
  constructor(props) {
    super(props)
  }

  // Simple text renderer for the feed headers that the disply the name of each post
  render() {
    const { text } = this.props
    const { headerText } = styles
    return (
      <Text style={headerText}>{text}</Text>
    )
  }
}

export { FeedHeaderText }
