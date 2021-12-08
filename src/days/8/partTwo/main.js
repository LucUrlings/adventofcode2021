import { input } from '../input.js'

// amount of letters that correspond to the number in the variable name
const one = 2
const four = 4
const seven = 3
const eight = 7

function findUnique(str) {
  const split = str.split('')
  const set = new Set(split)
  return [...set].join('')
}

const determineOne = (knownValues) =>
  knownValues.filter((v) => v.length === one)

const determineThree = (knownValues, oneString) =>
  knownValues.filter(
    (v) =>
      v.length === 5 &&
      v.includes(oneString.charAt(0)) &&
      v.includes(oneString.charAt(1)),
  )

const determineFour = (knownValues) =>
  knownValues.filter((v) => v.length === four)

const determineSix = (knownValues, oneString) => {
  const filtered = knownValues
    .filter((v) => v.length === 6)
    .filter(
      (v) =>
        !v.includes(oneString.charAt(0)) || !v.includes(oneString.charAt(1)),
    )
  return filtered
}

const determineSeven = (knownValues) =>
  knownValues.filter((v) => v.length === seven)

const determineEight = (knownValues) =>
  knownValues.filter((v) => v.length === eight)

const determineTwoFive = (knownValues, threeString, sixString) => {
  const filtered = knownValues
    .filter((v) => v.length === 5)
    .filter((v) => v !== threeString)

  let twoString = ''
  let fiveString = ''
  filtered.forEach((number) => {
    const numberAndSix = `${number}${sixString}`
    switch (findUnique(numberAndSix).length) {
      case 6:
        fiveString = number
        break
      case 7:
        twoString = number
        break
    }
  })

  return { twoString, fiveString }
}

const determineZeroNine = (knownValues, sixString, fiveString) => {
  const filtered = knownValues
    .filter((v) => v.length === 6)
    .filter((v) => v !== sixString)

  let zeroString = ''
  let nineString = ''

  filtered.forEach((number) => {
    const numberAndSix = `${number}${fiveString}`
    switch (findUnique(numberAndSix).length) {
      case 6:
        nineString = number
        break
      case 7:
        zeroString = number
        break
    }
  })

  return { zeroString, nineString }
}

const calculateResult = (
  inputForCalculation,
  zeroString,
  oneString,
  twoString,
  threeString,
  fourString,
  fiveString,
  sixString,
  sevenString,
  eightString,
  nineString,
) => {
  const result = inputForCalculation.split(' ').map((sequence) => {
    switch (sequence.length) {
      case one:
        return 1
      case four:
        return 4
      case seven:
        return 7
      case eight:
        return 8
      case 5:
        let two = true
        let three = true
        let five = true
        sequence.split('').forEach((char) => {
          if (two) {
            if (!twoString.includes(char)) two = false
          }
          if (three) {
            if (!threeString.includes(char)) three = false
          }
          if (five) {
            if (!fiveString.includes(char)) five = false
          }
        })

        if (two) return 2
        else if (three) return 3
        else if (five) return 5
        break
      case 6:
        let zero = true
        let six = true
        let nine = true
        sequence.split('').forEach((char) => {
          if (zero) {
            if (!zeroString.includes(char)) zero = false
          }
          if (six) {
            if (!sixString.includes(char)) six = false
          }
          if (nine) {
            if (!nineString.includes(char)) nine = false
          }
        })

        if (zero) return 0
        else if (six) return 6
        else if (nine) return 9
        break
    }
  })

  return Number(''.concat(...result))
}

const main = (inputSignals) => {
  let totalResult = 0

  for (const inputSignalsKey in inputSignals) {
    const knownValues = Object.keys(inputSignals[inputSignalsKey])[0].split(' ')
    // Easy to determine
    const oneString = determineOne(knownValues)[0]
    const fourString = determineFour(knownValues)[0]
    const sevenString = determineSeven(knownValues)[0]
    const eightString = determineEight(knownValues)[0]

    // Needs previous inputs to be determined
    const threeString = determineThree(knownValues, oneString)[0]
    const sixString = determineSix(knownValues, oneString)[0]
    const { twoString, fiveString } = determineTwoFive(
      knownValues,
      threeString,
      sixString,
    )
    const { zeroString, nineString } = determineZeroNine(
      knownValues,
      sixString,
      fiveString,
    )

    const result = calculateResult(
      inputSignals[inputSignalsKey][Object.keys(inputSignals[inputSignalsKey])],
      zeroString,
      oneString,
      twoString,
      threeString,
      four,
      fiveString,
      sixString,
      sevenString,
      eightString,
      nineString,
    )
    totalResult += result

    console.log(
      `Zero: ${zeroString}, One: ${oneString}, Two: ${twoString}, Three: ${threeString}, Four: ${fourString}, Five: ${fiveString}, Six: ${sixString}, Seven: ${sevenString}, Eight: ${eightString}, Nine: ${nineString}, Calculate result: ${result}, Total result: ${totalResult}`,
    )
  }

  return totalResult
}

console.log(main(input))
