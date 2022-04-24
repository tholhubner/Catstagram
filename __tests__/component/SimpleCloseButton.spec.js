import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { SimpleCloseButton } from "../../src/components/AddPhotoComponents"

describe("SimpleCloseButton", () => {
  it("should display an X as the text", () => {
    const { queryByText } = render(<SimpleCloseButton onPress={() => {}} />)
    expect(queryByText("X")).not.toBeNull()
  })
  it("should call handler when X is pressed", () => {
    const testHandler = jest.fn()
    const { queryByText } = render(<SimpleCloseButton onPress={testHandler} />)

    fireEvent.press(queryByText("X"))

    expect(testHandler).toHaveBeenCalled()
  })
})
