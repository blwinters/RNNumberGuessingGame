/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import GameScreen from './src/Game/ui/GameScreen'
import HistoryScreen from './src/GameHistory/ui/HistoryScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{title: 'Number Guessing Game'}}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{title: 'Past games'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
