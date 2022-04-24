import React from "react"
import {render} from "@testing-library/react-native"
import Feed from "../../src/components/Feed"

describe("Feed", () => {
  it("should display 25 items in the list", () => {
    const testJson = require("../../src/json/post.json")
    const { queryAllByTestId } = render(<Feed posts={testJson} onItemSelected={() => {}} />)
    expect(queryAllByTestId("feedItem")).toHaveLength(25)
  })
})