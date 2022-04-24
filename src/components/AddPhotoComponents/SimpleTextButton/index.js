import React, { Component } from "react"
import { Button } from "react-native"

class SimpleTextButton extends Component {
  constructor(props) {
    super(props)
  }

  // Renders a simple button with supplied title and executes
  // supplied buttonHandler with the Button onPress
  render() {
    const { buttonHandler, title } = this.props
    return (
      <Button title={title} onPress={buttonHandler} />
    )
  }
}

export { SimpleTextButton }
