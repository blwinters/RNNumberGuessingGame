import fetchHistory from '../gateways/fetchHistory'
import {GameResult} from '../../types'

export default async (): Promise<GameResult[]> => {
  return (await fetchHistory()).sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return bDate.getTime() - aDate.getTime()
  })
}
