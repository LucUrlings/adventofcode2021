import { input } from '../input.js'

const drawnNumbers = [
  23, 91, 18, 32, 73, 14, 20, 4, 10, 55, 40, 29, 13, 25, 48, 65, 2, 80, 22, 16,
  93, 85, 66, 21, 9, 36, 47, 72, 88, 58, 5, 42, 53, 69, 52, 8, 54, 63, 76, 12,
  6, 99, 35, 95, 82, 49, 41, 17, 62, 34, 51, 77, 94, 7, 28, 71, 92, 74, 46, 79,
  26, 19, 97, 86, 87, 37, 57, 64, 1, 30, 11, 96, 70, 44, 83, 0, 56, 90, 59, 78,
  61, 98, 89, 43, 3, 84, 67, 38, 68, 27, 81, 39, 15, 50, 60, 24, 45, 75, 33, 31,
]

const bingoCards = [...input]

const main = (drawnNumbers, bingoCards) => {
  let bCards = bingoCards
  let winningDrawnNumber = null
  let winningSUM = null

  for (let i = 0; i < drawnNumbers.length; i++) {
    bCards = markNumber(bCards, drawnNumbers[i])
    winningSUM = checkRowsColumns(bCards)
    if (winningSUM) {
      winningDrawnNumber = drawnNumbers[i]
      break
    }
  }

  return `winningDrawnNumber: ${winningDrawnNumber}, winningSUM: ${winningSUM}, result: ${
    winningSUM * winningDrawnNumber
  }`
}

const checkRowsColumns = (bCards) => {
  let result = null

  bCards.some((bingoCard, bIndex) => {
    // Rows
    result = checkRows(bingoCard)
    if (result) return true
    // Columns
    result = checkColumns(bingoCard)
    if (result) return true
  })
  return result
}

const checkRows = (bingoCard) => {
  let result = null
  bingoCard.some((row, rIndex) => {
    const first = row[0]
    const second = row[1]
    const third = row[2]
    const fourth = row[3]
    const fifth = row[4]
    if (
      first.includes('*') &&
      second.includes('*') &&
      third.includes('*') &&
      fourth.includes('*') &&
      fifth.includes('*')
    ) {
      result = calculateScore(bingoCard)
    }
  })
  return result
}

const checkColumns = (bingoCard) => {
  let result = null
  for (let iIndex = 0; iIndex < 5; iIndex++) {
    const first = bingoCard[0][iIndex]
    const second = bingoCard[1][iIndex]
    const third = bingoCard[2][iIndex]
    const fourth = bingoCard[3][iIndex]
    const fifth = bingoCard[4][iIndex]
    if (
      first.includes('*') &&
      second.includes('*') &&
      third.includes('*') &&
      fourth.includes('*') &&
      fifth.includes('*')
    ) {
      result = calculateScore(bingoCard)
      break
    }
  }
  return result
}

const calculateScore = (bingoCard) => {
  let score = 0

  bingoCard.forEach((row) => {
    row.forEach((number) => {
      if (!number.includes('*')) score = score + Number(number)
    })
  })
  return score
}

const markNumber = (cards, number) => {
  cards.forEach((bingoCard, bIndex) => {
    bingoCard.forEach((row, rIndex) => {
      row.forEach((item, iIndex) => {
        if (item === number.toString()) {
          cards[bIndex][rIndex][iIndex] = item.concat('*')
        }
      })
    })
  })
  return cards
}

console.log(main(drawnNumbers, bingoCards))
