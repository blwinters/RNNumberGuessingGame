import AsyncStorage from '@react-native-community/async-storage'
import {GameResult} from '../../types'

export default async (numGuesses: number, answer: number) => {
  const date = new Date()
  const gameResult: GameResult = {numGuesses, answer, date}
  await AsyncStorage.setItem(date.toISOString(), JSON.stringify(gameResult))
}
