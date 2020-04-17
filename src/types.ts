export interface GameResult {
  numGuesses: number
  answer: number
  date: Date
}

export type CheckGuessResult = 'tooLow' | 'tooHigh' | 'correct'
