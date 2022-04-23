import React from "react"
import {render} from "@testing-library/react-native"
import { FeedItemDate } from "../../src/components/FeedComponents"

describe("FeedDateItem", () => {
  it("formats date correctly for display", () => {
    const {queryByText} = render(<FeedItemDate timestamp={"2022-04-06T16:42:44.569368Z"} />)
    expect(queryByText("Posted on Wed, Apr 6th 2022")).not.toBeNull()
  })
})