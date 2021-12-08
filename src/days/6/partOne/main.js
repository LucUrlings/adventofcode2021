import { input } from '../input.js'

const days = 80

const main = (input) => {
  let {
    zeroCount,
    oneCount,
    twoCount,
    threeCount,
    fourCount,
    fiveCount,
    sixCount,
    sevenCount,
    eightCount,
  } = init(input)

  for (let i = 0; i < days; i++) {
    console.log(
      `Zero: ${zeroCount}, One: ${oneCount}, Two: ${twoCount}, Three: ${threeCount}, Four: ${fourCount}, Five: ${fiveCount}, Six: ${sixCount}, Seven: ${sevenCount}, Eight: ${eightCount}`
    )

    const tempZeroCount = zeroCount

    zeroCount = oneCount
    oneCount = twoCount
    twoCount = threeCount
    threeCount = fourCount
    fourCount = fiveCount
    fiveCount = sixCount
    sixCount = sevenCount + tempZeroCount
    sevenCount = eightCount
    eightCount = tempZeroCount
  }
  return (
    zeroCount +
    oneCount +
    twoCount +
    threeCount +
    fourCount +
    fiveCount +
    sixCount +
    sevenCount +
    eightCount
  )
}

const init = (startingArray) => {
  let zeroCount = 0
  let oneCount = 0
  let twoCount = 0
  let threeCount = 0
  let fourCount = 0
  let fiveCount = 0
  let sixCount = 0
  let sevenCount = 0
  let eightCount = 0
  startingArray.forEach((number) => {
    switch (number) {
      case 1:
        oneCount++
        break
      case 2:
        twoCount++
        break
      case 3:
        threeCount++
        break
      case 4:
        fourCount++
        break
      case 5:
        fiveCount++
        break
    }
  })
  return {
    zeroCount,
    oneCount,
    twoCount,
    threeCount,
    fourCount,
    fiveCount,
    sixCount,
    sevenCount,
    eightCount,
  }
}
console.log(main(input))