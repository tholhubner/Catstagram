import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { PhotoGallery } from "../../src/components/AddPhotoComponents"

describe("PhotoGallery", () => {
  it("should display 3 photos in the gallery", () => {
    const testPhotos = [{node: {image: {uri: "test"}}},{node: {image: {uri: "test"}}},{node: {image: {uri: "test"}}}]
    const { queryAllByTestId } = render(<PhotoGallery photos={testPhotos} onImagePress={() => {}} />)
    expect(queryAllByTestId("galleryImage")).toHaveLength(3)
  })
  it("should call handler when image is selected", () => {
    const testHandler = jest.fn()
    const testPhotos = [{node: {image: {uri: "test"}}}]
    const { getByTestId } = render(<PhotoGallery photos={testPhotos} onImagePress={testHandler} />)

    fireEvent.press(getByTestId("galleryImage"))

    expect(testHandler).toHaveBeenCalled()
  })
})
