import { CheckGuessResult } from "src/Game/types"


export default (guess: number, num: number): CheckGuessResult => {
  if (guess < num) {
    return 'tooLow'
  }

  if (guess > num) {
    return 'tooHigh'
  }

  return 'correct'
}
