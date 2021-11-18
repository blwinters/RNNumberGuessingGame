import { useState, useCallback } from 'react'

import { CheckGuessResult } from 'src/Game/types'
import generateRandomNumber from './logic/generateRandomNumber'
import checkGuess from './logic/checkGuess'
import saveGameResult from './saveGameResult'

export default () => {

  const [value, setValue] = useState<string>('')
  const [guess, setGuess] = useState<number>(0)
  const [result, setResult] = useState<CheckGuessResult | null>(null)
  const [numGuesses, setNumGuesses] = useState<number>(0)
  const [rnd, setRnd] = useState<number>(generateRandomNumber())

  const onGuess = useCallback(() => {
    setGuess(Number(value))
    setNumGuesses(numGuesses + 1)
    setResult(checkGuess(Number(value), rnd))

    if (result === 'correct') {
      saveGameResult(numGuesses, rnd)
    }
  }, [])

  const onChangeText = useCallback((guess: string) => setValue(guess), [setValue])

  const onReset = useCallback(async () => {
    setValue('')
    setResult(null)
    setGuess(0)
    setNumGuesses(0)
    setRnd(generateRandomNumber())
  }, [])

  return {
    value,
    guess,
    result,
    onChangeText,
    onGuess,
    onReset
  }
}