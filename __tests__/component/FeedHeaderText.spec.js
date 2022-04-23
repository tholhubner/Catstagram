import React from "react"
import {render} from "@testing-library/react-native"
import { FeedHeaderText } from "../../src/components/FeedComponents"

describe("FeedHeaderText", () => {
  it("displays text value passed in", () => {
    const {queryByText} = render(<FeedHeaderText text={"Hello, World!"} />)
    expect(queryByText("Hello, World!")).not.toBeNull()
  })
})