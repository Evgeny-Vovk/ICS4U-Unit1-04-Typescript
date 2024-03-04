/* 
 * this is a program creates a random number 
 * that the user tries to guess
 * @author  Evgeny Vovk
 * @version 1.0
 * @since   2024-02-26
 */

import { createPrompt } from 'bun-promptx'

// constants & variables
const randomNumber = Math.floor((Math.random() * 6) + 1)
let totalGuesses = 0

while (1) {
  // input
  const userGuess = createPrompt("Guess a number between 1 - 6: ")
  const userGuessInt = parseInt(userGuess.value || "-1")
  // error check
  if (isNaN(userGuessInt) == true || userGuessInt < 1 || userGuessInt > 6) {
    console.log("Invalid input. (This won't count as a guess)\n")
  } else {
    // process
    totalGuesses += 1
    if (userGuessInt > randomNumber) {
      console.log(`You guessed too high, try again!\n`)
    } else if (userGuessInt < randomNumber) {
      console.log(`You guessed too low, try again!\n`)
    } else {
      // output
      console.log(`Correct!\nTotal guesses: ${totalGuesses}`)
      break
    }
  }
}

console.log("\nDone.")

