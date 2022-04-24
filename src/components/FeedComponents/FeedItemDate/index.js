import React, { Component } from "react"
import { Text } from "react-native"
import moment from "moment"

// local imports
import styles from "../styles"

class FeedItemDate extends Component {
  constructor(props) {
    super(props)
  }

  // Renders the date provided as "Posted on Sat, April 21st 2022"
  render() {
    const { timestamp } = this.props
    return (
      <Text style={{ fontSize: 10 }}>{moment(timestamp).format("[Posted on] ddd, MMM Do YYYY")}</Text>
    )
  }
}

export { FeedItemDate }
