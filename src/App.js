import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// local imports
import Feed from './screens/feed'
import Profile from "./screens/profile"

const CatStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <CatStack.Navigator>
        <CatStack.Screen name="Feed" component={Feed} />
        <CatStack.Screen name="Profile" component={Profile} />
      </CatStack.Navigator>
    </NavigationContainer>
  )
}

export default App
