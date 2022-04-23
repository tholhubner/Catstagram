import React, { Component } from 'react'
import { View, Text, Button, Modal, TextInput } from 'react-native'
import auth from "@react-native-firebase/auth"

// local imports
import baseStyles from "../../globals/baseStyles"

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  onSignOutPress = async () => {
    auth().signOut()
    this.props.navigation.navigate("Feed")
  }

  render() {
    const { navigate } = this.props.navigation
    const { container } = baseStyles
    return (
      <View style={container}>
        <Text>Here is the profile screen</Text>
        <Button
          title="Sign Out"
          onPress={() => this.onSignOutPress()}
          color="red"
        />
      </View> 
    )
  }
}

export default Profile
