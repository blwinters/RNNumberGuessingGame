import React from 'react'
import generateRandomNumber from '../generateRandomNumber'

describe('generateRandomNumber.ts', () => {
  var result: number | null

  beforeEach(() => {
    result = null
  })

  describe('when no inputs are provided', () => {
    beforeEach(() => {
      result = generateRandomNumber()
    })
    it('is greater than or equal to 1', () => {
      expect(result).toBeGreaterThanOrEqual(1)
    })

    it('is less than or equal to 100', () => {
      expect(result).toBeLessThanOrEqual(100)
    })
  })

  describe('when inputs are provided', () => {
    beforeEach(() => {
      result = generateRandomNumber(1, 3)
    })
    it('is greater than or equal to the min value', () => {
      expect(result).toBeGreaterThanOrEqual(1)
    })

    it('is less than or equal to the max value', () => {
      expect(result).toBeLessThanOrEqual(3)
    })
  })
})
