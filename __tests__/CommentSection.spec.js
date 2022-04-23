import React from "react"
import {render} from "@testing-library/react-native"
import CommentSection from "../src/components/CommentSection"

describe("CommentSection", () => {
  it("should display 4 comments", () => {
    const testComments = [{text: "testing"},{text: ""},{text: ""},{text: ""}]
    const { queryAllByTestId } = render(<CommentSection comments={testComments} />)
    expect(queryAllByTestId("feedComment")).toHaveLength(4)
  })
  it("should display comment text properly", () => {
    const testComments = [{text: "testing"}]
    const { queryByText } = render(<CommentSection comments={testComments} />)
    expect(queryByText("testing")).not.toBeNull()
  })
  it("should display comment counter of 4", () => {
    const testComments = [{text: ""},{text: ""},{text: ""},{text: ""}]
    const { findByText } = render(<CommentSection comments={testComments} />)
    expect(findByText("Comments (4):")).not.toBeNull()
  })
})