import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// local imports
import Main from './screens/main'
import Profile from "./screens/profile"
import PostView from "./screens/postview"

const CatStack = createNativeStackNavigator()

class App extends Component {
  constructor(props) {
    super(props)
  }

  // Adds screens needed for navigation in the app
  // Use name to reference these routes in other places in the app
  render() {
    return (
      <NavigationContainer>
        <CatStack.Navigator>
          <CatStack.Screen name="Main" component={Main} />
          <CatStack.Screen name="Profile" component={Profile} />
          <CatStack.Screen name="PostView" component={PostView} />
        </CatStack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
