import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// local imports
import Feed from './screens/feed'
import Profile from "./screens/profile"
import Login from "./screens/login"
import Signup from "./screens/signup"

const CatStack = createNativeStackNavigator()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  render() {
    const { user } = this.state
    return (
      <NavigationContainer>
        <CatStack.Navigator>
          <CatStack.Screen name="Feed" component={Feed} />
          <CatStack.Screen name="Profile" component={Profile} />
          <CatStack.Screen name="Login" component={Login} />
          <CatStack.Screen name="Signup" component={Signup} />
        </CatStack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
