import React from 'react'
import styled from 'styled-components'
import { View, Text, TextInput, Button } from 'react-native'

import { CheckGuessResult } from 'src/Game/types'
import ResultView from './ResultView'
import ResetButton from './ResetButton'

interface Props {
  value: string
  guess: number
  result: CheckGuessResult | null
  onChangeText: (guess: string) => void
  onGuess: () => void
  onReset: () => void
}

export default ({
  value, 
  guess, 
  result, 
  onChangeText, 
  onGuess, 
  onReset}: Props) => ( //no curly braces, zero logic, only values and callback functions
  <Container>
    <Text>Guess the number (1-100)</Text>
    <StyledTextInput value={value} onChangeText={onChangeText} />
    <Button
      title="Guess"
      onPress={onGuess}
    />
    <ResultView result={result} guess={guess} />
    <ResetButton result={result} onPress={onReset} />
  </Container>
)

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const StyledTextInput = styled(TextInput)`
  width: 50%;
  border: 1px solid #000000cc;
  border-radius: 8px;
  padding: 8px;
`
