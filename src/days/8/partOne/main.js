import { input } from '../input.js'

// amount of letters that correspond to the number in the variable name
const one = 2
const four = 4
const seven = 3
const eight = 7

const main = (inputSignals) => {
  let counter = 0
  inputSignals.forEach((screen) => {
    screen[Object.keys(screen)[0]].split(' ').forEach((number) => {
      switch (number.length) {
        case one:
        case four:
        case seven:
        case eight:
          counter++
          break
        default:
          break
      }
    })
  })

  return counter
}

console.log(main(input))
