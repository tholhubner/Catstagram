import React, { Component } from "react"
import { Button } from "react-native"

class SimpleCloseButton extends Component {
  constructor(props) {
    super(props)
  }

  // Renders a simple button with an "X" to indicate close
  render() {
    const { onPress } = this.props
    return (
      <Button
        title="X"
        color="#9042f5"
        onPress={onPress}
      />
    )
  }
}

export { SimpleCloseButton }
