import React from 'react'
import checkGuess from '../checkGuess'
import {CheckGuessResult} from 'src/types'

describe('checkGuess.ts', () => {
  var result: CheckGuessResult | null
  beforeEach(() => {
    result = null
  })
  
  describe('when the guess is too low', () => {
    beforeEach(() => {
      result = checkGuess(1, 2)
    })
    it('returns `tooLow`', () => {
      expect(result).toBe('tooLow')
    })
  })

  describe('when the guess is too high', () => {
    var result: CheckGuessResult | null
    beforeEach(() => {
      result = checkGuess(3, 2)
    })
    it('returns `tooHigh`', () => {
      expect(result).toBe('tooHigh')
    })
  })

  describe('when the guess is correct', () => {
    var result: CheckGuessResult | null
    beforeEach(() => {
      result = checkGuess(2, 2)
    })
    it('returns `correct`', () => {
      expect(result).toBe('correct')
    })
  })
})
