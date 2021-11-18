import { GameResult } from 'src/Game/types'
import fetchStoredHistory from './fetchStoredHistory'

export default async (): Promise<GameResult[]> => {
  return (await fetchStoredHistory()).sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return bDate.getTime() - aDate.getTime()
  })
}
