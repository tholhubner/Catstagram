import React from "react"
import {fireEvent, render} from "@testing-library/react-native"
import AddPhotoButton from "../../src/components/AddPhotoButton"

describe("AddPhotoButton", () => {
  it("should call handler once on click", () => {
    const testHandler = jest.fn()
    const { getByText } = render(<AddPhotoButton handleAddPhotoPress={testHandler} />)
    
    fireEvent.press(getByText("Add Photo"))

    expect(testHandler).toHaveBeenCalled()
  })
})