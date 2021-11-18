import AsyncStorage from '@react-native-community/async-storage'
import saveGameResult from '../saveGameResult'

describe('saveGameResults.ts', () => {
  const mockDate = new Date('2019-06-19T00:07:19.309Z')
  beforeEach(async () => {
    global.Date = () => mockDate

    AsyncStorage.setItem.mockImplementation((key: string, value: string) => {
      return
    })

    await saveGameResult(1, 1)
  })

  it('returns the expected data', () => {
    expect(AsyncStorage.setItem).toBeCalledWith(
      mockDate.toISOString(),
      JSON.stringify({
        numGuesses: 1,
        answer: 1,
        date: mockDate.toISOString(),
      }),
    )
  })
})
