import React from 'react'
import {Button} from 'react-native'
import {CheckGuessResult} from 'src/Game/types'

interface Props {
  result: CheckGuessResult | null
  onPress: () => void
}

const ResetButton = ({result, onPress}: Props) => {
  if (result === 'correct') {
    return <Button title="New Game" onPress={onPress} />
  } else {
    return <></>
  }
}

export default ResetButton
