import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

// local imports
import baseStyles from "../../globals/baseStyles"
import CommentSection from "../../components/CommentSection"
import { FeedHeaderText, FeedImageView } from "../../components/FeedComponents"
import NewComment from "../../components/NewComment"
import { addComment } from "../../helpers/feedHelpers"

class PostView extends Component {
  constructor(props) {
    
    super(props)

    const { comments } = this.props.route.params.post

    this.state = {
      comments,
    }
  }

  onAddCommentPressed = (newCommentText) => {
    const { comments } = this.state
    if (newCommentText) {
      const newCommentArray = addComment(comments, newCommentText)
      this.setState({ comments: newCommentArray })
    }
  }

  render() {
    const { name, image } = this.props.route.params.post
    const { comments } = this.state
    const { container } = baseStyles
    return (
      <ScrollView style={container}>
        <FeedHeaderText text={name} />
        <FeedImageView imageUri={`http://catstagram.lofty.codes/media/${image}`} full />
        <CommentSection comments={comments} />
        <NewComment onAddCommentPressed={this.onAddCommentPressed} />
      </ScrollView>
    )
  }
}

export default PostView
