import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { SimpleTextButton } from "../../src/components/AddPhotoComponents"

describe("SimpleTextButton", () => {
  it("should display passed in title as the button text", () => {
    const { queryByText } = render(<SimpleTextButton title="Testing" onPress={() => {}} />)
    expect(queryByText("Testing")).not.toBeNull()
  })
  it("should call handler when the button is pressed", () => {
    const testHandler = jest.fn()
    const { queryByText } = render(<SimpleTextButton title="Testing" buttonHandler={testHandler} />)

    fireEvent.press(queryByText("Testing"))

    expect(testHandler).toHaveBeenCalled()
  })
})