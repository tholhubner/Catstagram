import React, { Component } from "react"
import { Text } from "react-native"

// local imports
import styles from "../styles"

class FeedHeaderText extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text } = this.props
    const { headerText } = styles
    return (
      <Text style={headerText}>{text}</Text>
    )
  }
}

export { FeedHeaderText }
