import { CheckGuessResult } from "src/types"


export default (guess: number, num: number): CheckGuessResult => {
  if (guess < num) {
    return 'tooLow'
  }

  if (guess > num) {
    return 'tooHigh'
  }

  return 'correct'
}
