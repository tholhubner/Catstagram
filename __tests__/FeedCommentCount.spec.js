import React from "react"
import {render} from "@testing-library/react-native"
import { FeedCommentCount } from "../src/components/FeedComponents"

describe("FeedCommentCount", () => {
  it("displays a comment count of 3", () => {
    const testComments = [{},{},{}]
    const {queryByText} = render(<FeedCommentCount comments={testComments} />)
    expect(queryByText("Comments (3)")).not.toBeNull()
  })
})