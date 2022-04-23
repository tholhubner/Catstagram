import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

// local imports
import baseStyles from "../../globals/baseStyles"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  render() {
    const { navigate } = this.props.navigation
    const { container } = baseStyles
    return (
      <View style={container}>
        <Text>Here is the Login screen</Text>
      </View>
    )
  }
}

export default Login
