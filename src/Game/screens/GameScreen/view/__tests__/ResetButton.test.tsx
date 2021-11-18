import React from 'react'
import {render, RenderAPI} from 'react-native-testing-library'
import ResetButton from '../ResetButton'

describe('ResetButton.tsx', () => {
  let instance: RenderAPI

  describe('when the result is `correct`', () => {
    beforeEach(() => {
      instance = render(<ResetButton result="correct" onPress={() => {}} />)
    })
    it('should match snapshot', () => {
      expect(instance.toJSON()).toMatchSnapshot()
    })
  })

  describe('when the result is `tooLow`', () => {
    beforeEach(() => {
      instance = render(<ResetButton result="tooLow" onPress={() => {}} />)
    })
    it('should match snapshot', () => {
      expect(instance.toJSON()).toMatchSnapshot()
    })
  })

  describe('when the result is `tooHigh`', () => {
    beforeEach(() => {
      instance = render(<ResetButton result="tooHigh" onPress={() => {}} />)
    })
    it('should match snapshot', () => {
      expect(instance.toJSON()).toMatchSnapshot()
    })
  })
})
