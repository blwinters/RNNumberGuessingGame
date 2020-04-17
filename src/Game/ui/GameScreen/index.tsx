import React, {useState, useLayoutEffect} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import styled from 'styled-components'
import generateRandomNumber from '../../businessLogic/generateRandomNumber'
import checkGuess from '../../businessLogic/checkGuess'
import ResultView from './views/ResultView'
import saveGameResult from '../../gateways/saveGameResult'
import ResetButton from './views/ResetButton'
import { CheckGuessResult } from 'src/types'

export default ({navigation}) => {
  const [value, setValue] = useState<string>('')
  const [guess, setGuess] = useState<number>(0)
  const [result, setResult] = useState<CheckGuessResult | null>(null)
  const [numGuesses, setNumGuesses] = useState<number>(0)
  const [rnd, setRnd] = useState<number>(generateRandomNumber())

  const resetGame = async () => {
    setValue('')
    setResult(null)
    setGuess(0)
    setNumGuesses(0)
    setRnd(generateRandomNumber())
  }

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

  return (
    <Container>
      <Text>Guess the number (1-100)</Text>
      <StyledTextInput value={value} onChangeText={guess => setValue(guess)} />
      <Button
        title="Guess"
        onPress={() => {
          setGuess(Number(value))
          setNumGuesses(numGuesses + 1)
          setResult(checkGuess(Number(value), rnd))

          if (result === 'correct') {
            saveGameResult(numGuesses, rnd)
          }
        }}
      />
      <ResultView result={result} guess={guess} />
      <ResetButton result={result} onPress={resetGame} />
    </Container>
  )
}

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
