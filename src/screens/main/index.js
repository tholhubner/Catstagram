import React, { Component } from "react"
import { View, Modal } from "react-native"

// local imports
import baseStyles from "../../globals/baseStyles"
import styles from "./styles"
import { getFeed } from "../../helpers/feedHelpers"
import Feed from "../../components/Feed"
import { checkUserStatus } from "../../helpers/authHelpers"
import Signup from "../../components/Signup"

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feedError: null,
      posts: [],
      signUpVisible: false,
    }
  }

  componentDidMount() {
    this.checkUser()
  }

  // Call the checkUserStatus function to see if there is a user logged in or not
  checkUser = async () => {
    const userStatus = await checkUserStatus()
    console.log(userStatus)
    if (!userStatus) {
      this.setState({ signUpVisible: true })
    } else {
      this.getCatFeed()
    }
  }

  // Get the feed in an async method
  getCatFeed = async () => {
    const feedRes = await getFeed()
    console.log(feedRes[0].name)
    if (feedRes.length > 0) {
      this.setState({ posts: feedRes })
    } else {
      this.setState({ feedError: feedRes })
    }
  }

  // Function for handling a feed item being selected, send user to post view
  onFeedItemSelected = (post) => {
    const { navigate } = this.props.navigation
    navigate("PostView", {
      post
    })
  }

  // Sent to Sign up component to close the modal when sign up is completed
  onSignInDone = () => {
    this.setState({ signUpVisible: false })
  }

  // Render the feed component with fetched posts
  // Also handles rendering the modal for signing up
  render() {
    const { container } = baseStyles
    const { posts, signUpVisible } = this.state
    return (
      <View style={container}>
        <Feed posts={posts} onItemSelected={this.onFeedItemSelected} />

        <Modal
          animationType="slide"
          visible={signUpVisible}
          onRequestClose={() => {
            setModalVisible(!signUpVisible);
          }}
        >
          <Signup requestModalClose={() => this.onSignInDone()} />
        </Modal>
      </View>
    )
  }
}

export default Main
