import AsyncStorage from '@react-native-community/async-storage'
import {GameResult} from 'src/types'

export default async (): Promise<GameResult[]> => {
  const keys = await AsyncStorage.getAllKeys()
  let history: GameResult[] = []

  for (let key of keys) {
    const result = await AsyncStorage.getItem(key)

    if (!result) {
      continue
    }

    history.push(JSON.parse(result))
  }

  return history
}
