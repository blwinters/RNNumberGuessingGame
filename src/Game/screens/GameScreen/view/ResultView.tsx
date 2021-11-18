import React from 'react'
import {Text} from 'react-native'
import {CheckGuessResult} from 'src/Game/types'

interface Props {
  result: CheckGuessResult | null
  guess: number
}

export default ({result, guess}: Props) => {
  if (result === 'tooLow') {
    return <Text>{guess} is too low.</Text>
  }

  if (result === 'tooHigh') {
    return <Text>{guess} is too high.</Text>
  }

  if (result === 'correct') {
    return <Text>That's correct! 🎉</Text>
  }

  return <></>
}
