import { addComment } from "../../src/helpers/feedHelpers"

describe("feedHelpers", () => {
  it("should add new comment to existing array giving a length of 2", () => {
    const testComments = [
      { text: "" },
    ]
    const commentText = "Hi"
    const newComments = addComment(testComments, commentText)
    const result = newComments.length

    expect(result).toEqual(2)
  })
})