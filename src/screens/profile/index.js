import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Here is the profile screen</Text>
        <Button
          onPress={() => navigate("Feed")}
          title="Go to feed"
        />
      </View>
    )
  }
}

export default Profile;
