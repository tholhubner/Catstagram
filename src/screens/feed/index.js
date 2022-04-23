import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import auth from "@react-native-firebase/auth"

// local imports
import baseStyles from "../../globals/baseStyles"
import { getFeed } from "../../helpers/feedHelpers"

class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: null,
      user: auth().currentUser ? auth().currentUser : null,
      error: null
    }
  }

  componentDidMount() {
    this.getCatFeed()
  }

  // Get the feed in an async method
  getCatFeed = async () => {
    const feedRes = await getFeed()
    console.log(feedRes[0].name)
    if (feedRes.length > 0) {
      this.setState({ feed: feedRes })
    } else {
      this.setState({ feedError: feedRes })
    }
  }

  render() {
    const { navigate } = this.props.navigation
    const { feed, user } = this.state
    const { container } = baseStyles
    return (
      <View style={container}>
        <>
          { feed ? (
            <Text>{feed[0].name}</Text>
          ) : (
            <Text>Nothing Here</Text>
          )}
        </>
      </View>
    )
  }
}

export default Feed;
