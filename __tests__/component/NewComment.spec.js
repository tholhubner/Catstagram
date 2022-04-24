import React from "react"
import {fireEvent, render} from "@testing-library/react-native"
import NewComment from "../../src/components/NewComment"

describe("NewComment", () => {
  it("should add correct value to text box on text change", () => {
    const { getByTestId } = render(<NewComment onAddCommentPressed={() => {}} />)

    fireEvent.changeText(getByTestId("commentBox"), "Pawsome!")

    expect(getByTestId("commentBox")).toHaveProp("value", "Pawsome!")
  })
  it("should null the value on pressing add", () => {
    const { getByTestId, getByText } = render(<NewComment onAddCommentPressed={() => {}} />)

    fireEvent.changeText(getByTestId("commentBox"), "Pawsome!")
    fireEvent.press(getByText("Add"))

    expect(getByTestId("commentBox")).toHaveProp("value", null)
  })
})