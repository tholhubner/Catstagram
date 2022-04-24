import React, { Component } from 'react'
import { View, Text, Button, TextInput, Alert } from 'react-native'

// local imports
import { userSignUp } from "../../helpers/authHelpers"
import styles from "./styles"

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      signUpError: null,
    }
  }

  // Handle the logic for processing user sign up
  onSignUpPressed = async () => {
    const { email, password, signUpError } = this.state
    const { requestModalClose } = this.props
    if (email && password) {
      if (signUpError) {
        this.setState({ signUpError: null })
      }
      const results = await userSignUp(email, password)
      if (results === "success") {
        Alert.alert("Signed in!")
        requestModalClose()
      } else {
        this.setState({ signUpError: results })
      }
    }
  }

  // Render the sign up screen to the user
  render() {
    const { email, password, signUpError } = this.state
    const { container, welcomeText, welcomeSubText, inputs, errorText } = styles
    return (
      <View style={container}>
        <Text style={welcomeText}>We are pawsitively ecstatic to have you!</Text>
        <Text style={welcomeSubText}>Just give us a few details below and you can join our pawful of users</Text>
        <TextInput
          style={inputs}
          onChangeText={(input) => this.setState({ email: input })}
          value={email}
          placeholder="Email Address"
          keyboardType="email-address"
          testID="emailInput"
        />
        <TextInput
          style={inputs}
          onChangeText={(input) => this.setState({ password: input })}
          value={password}
          placeholder="Desired Password"
          secureTextEntry
          testID="passwordInput"
        />
        <Button
          title="Sign Up"
          color="#9042f5"
          onPress={() => this.onSignUpPressed()}
        />
        <>
          {signUpError && (
            <Text style={errorText}>{signUpError}</Text>
          )}
        </>
      </View>
    )
  }
}

export default Signup
