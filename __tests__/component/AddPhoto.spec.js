import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import AddPhoto from "../../src/components/AddPhoto"

describe("AddPhoto", () => {
  it("should display an X as the text for the close button", () => {
    const { queryByText } = render(<AddPhoto handleClosePress={() => {}} handleImagePress={() => {}} />)
    expect(queryByText("X")).not.toBeNull()
  })
  it("should display Browse Gallery as the text for the browse button", () => {
    const { queryByText } = render(<AddPhoto handleClosePress={() => {}} handleImagePress={() => {}} />)
    expect(queryByText("Browse Gallery")).not.toBeNull()
  })
  it("should call handler when X is pressed", () => {
    const testHandler = jest.fn()
    const { queryByText } = render(<AddPhoto handleClosePress={testHandler} handleImagePress={() => {}} />)

    fireEvent.press(queryByText("X"))

    expect(testHandler).toHaveBeenCalled()
  })
})
