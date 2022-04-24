import React from "react"
import {fireEvent, render} from "@testing-library/react-native"
import Signup from "../../src/components/Signup"

describe("SignUp", () => {
  it("should add correct value to email text box on text change", () => {
    const { getByTestId } = render(<Signup requestModalClose={() => {}} />)

    fireEvent.changeText(getByTestId("emailInput"), "Test@test.com")

    expect(getByTestId("emailInput")).toHaveProp("value", "Test@test.com")
  })
  it("should add correct value to password text box on text change", () => {
    const { getByTestId } = render(<Signup requestModalClose={() => {}} />)

    fireEvent.changeText(getByTestId("passwordInput"), "testing")

    expect(getByTestId("passwordInput")).toHaveProp("value", "testing")
  })
  it("should NOT call the close function as this will cause error", () => {
    const testFunction = jest.fn()
    const { getByTestId, getByText } = render(<Signup requestModalClose={testFunction} />)

    fireEvent.changeText(getByTestId("emailInput"), "asdfasdfadsf")
    fireEvent.changeText(getByTestId("passwordInput"), "testing")
    fireEvent.press(getByText("Sign Up"))

    expect(testFunction).not.toHaveBeenCalled()
  })
})