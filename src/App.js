import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// local imports
import Main from './screens/main'
import Profile from "./screens/profile"
import Login from "./screens/login"
import Signup from "./screens/signup"
import PostView from "./screens/postview"

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
          <CatStack.Screen name="Main" component={Main} />
          <CatStack.Screen name="Signup" component={Signup} />
          <CatStack.Screen name="Profile" component={Profile} />
          <CatStack.Screen name="Login" component={Login} />
          <CatStack.Screen name="PostView" component={PostView} />
        </CatStack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
