import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Feed extends Component {
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
        <Text>Here is the feed</Text>
        <Button
          onPress={() => navigate("Profile")}
          title="Go to profile"
        />
      </View>
    )
  }
}

export default Feed;
