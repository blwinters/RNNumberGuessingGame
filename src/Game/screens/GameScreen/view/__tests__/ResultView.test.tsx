import React from 'react'
import {render, RenderAPI} from 'react-native-testing-library'
import ResultView from '../ResultView'

describe('ResetButton.tsx', () => {
  let instance: RenderAPI

  describe('when the result is `correct`', () => {
    beforeEach(() => {
      instance = render(<ResultView result={'correct'} guess={42} />)
    })
    it('should match snapshot', () => {
      expect(instance.toJSON()).toMatchSnapshot()
    })
  })

  describe('when the result is `tooLow`', () => {
    beforeEach(() => {
      instance = render(<ResultView result={'tooLow'} guess={42} />)
    })
    it('should match snapshot', () => {
      expect(instance.toJSON()).toMatchSnapshot()
    })
  })

  describe('when the result is `tooHigh`', () => {
    beforeEach(() => {
      instance = render(<ResultView result={'tooHigh'} guess={42} />)
    })
    it('should match snapshot', () => {
      expect(instance.toJSON()).toMatchSnapshot()
    })
  })
})
