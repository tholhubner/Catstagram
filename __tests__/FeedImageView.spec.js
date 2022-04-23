import React from "react"
import {render} from "@testing-library/react-native"
import { FeedImageView } from "../src/components/FeedComponents"

describe("FeedImageView", () => {
  it("image displays to user", () => {
    const testComments = [{},{},{}]
    const { getByTestId } = render(<FeedImageView comments={testComments} />)
    expect(getByTestId("ImageView")).not.toBeNull()
  })
})