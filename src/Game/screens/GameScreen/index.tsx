import React, { useLayoutEffect, useEffect } from 'react'
import { Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import View from './view'
import useGameState from './useGameState'

interface Props {
  navigation: StackNavigationProp<any>
}
export default ({ navigation }: Props) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('History')}
          title="History"
        />
      ),
    })
  }, [navigation])

  useEffect(() => {
    // track analytics or any other actions related to the screen loading 
    // that aren't related to the screen state
  }, [])

  const {
    value,
    guess,
    result,
    onChangeText,
    onGuess,
    onReset
  } = useGameState()

  return <View 
          value={value} 
          guess={guess} 
          result={result} 
          onChangeText={onChangeText} 
          onGuess={onGuess} 
          onReset={onReset}/>
}
