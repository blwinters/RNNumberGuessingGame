import React from 'react'
import {mocked} from 'ts-jest/utils'
import fetchGateway from '../fetchStoredHistory'
import fetchHistory from '../fetchHistory'
import {GameResult} from 'src/Game/types'

jest.mock('../../gateways/fetchHistory', () => {
  return jest.fn()
})

describe('fetchHistory.ts', () => {
  let result: GameResult[] = []

  const sortedHistory: GameResult[] = [
    {answer: 50, date: new Date(2020, 5, 7), numGuesses: 1},
    {answer: 50, date: new Date(2020, 5, 6), numGuesses: 1},
    {answer: 50, date: new Date(2020, 5, 5), numGuesses: 1},
  ]

  describe('when fetching the history', () => {
    beforeEach(async () => {
      mocked(fetchGateway).mockImplementation(
        (): Promise<GameResult[]> => {
          return Promise.resolve([
            {answer: 50, date: new Date(2020, 5, 5), numGuesses: 1},
            {answer: 50, date: new Date(2020, 5, 6), numGuesses: 1},
            {answer: 50, date: new Date(2020, 5, 7), numGuesses: 1},
          ])
        },
      )

      result = await fetchHistory()
    })

    it('returns a sorted list of game results', () => {
      expect(result).toEqual(sortedHistory)
    })
  })
})
