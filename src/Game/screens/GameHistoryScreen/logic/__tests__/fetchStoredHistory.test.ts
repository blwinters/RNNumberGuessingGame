import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import fetchStoredHistory from '../fetchStoredHistory'
import { GameResult } from 'src/Game/types'

describe('fetchHistory.ts', () => {
  let result: GameResult[] = []
  beforeEach(async () => {
    AsyncStorage.getAllKeys.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve([
          new Date(2020, 5, 7).toISOString(),
          new Date(2020, 6, 7).toISOString(),
        ])
      })
    })

    AsyncStorage.getItem.mockImplementation((key: string) => {
      if (key === '2020-06-07T04:00:00.000Z') {
        return new Promise((resolve, reject) => {
          resolve(
            JSON.stringify({
              answer: 50,
              date: new Date(2020, 6, 7),
              numGuesses: 1,
            }),
          )
        })
      }

      if (key === '2020-07-07T04:00:00.000Z') {
        return new Promise((resolve, reject) => {
          resolve(
            JSON.stringify({
              answer: 50,
              date: new Date(2020, 5, 7),
              numGuesses: 1,
            }),
          )
        })
      }

      return null
    })

    result = await fetchStoredHistory()
  })

  it('returns the expected data', () => {
    expect(result.length).toBe(2)
    expect(result).toContainEqual({
      answer: 50,
      date: new Date(2020, 6, 7).toISOString(),
      numGuesses: 1,
    })
    expect(result).toContainEqual({
      answer: 50,
      date: new Date(2020, 5, 7).toISOString(),
      numGuesses: 1,
    })
  })
})
