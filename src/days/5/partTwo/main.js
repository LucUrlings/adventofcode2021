import { input } from '../input.js'

const main = (lines) => {
  let inputLines = [...lines]

  const grid = new Array(1000).fill(0).map(() => new Array(1000).fill(0))

  inputLines.forEach((item) => {
    const x1 = item[0][0]
    const y1 = item[0][1]
    const x2 = item[1][0]
    const y2 = item[1][1]

    if (x1 === x2) {
      const baseX = x1
      const numbersInBetween = generateNumbersInBetween(y1, y2)
      numbersInBetween.forEach((number) => {
        grid[baseX][number]++
      })
    } else if (y1 === y2) {
      const baseY = y1
      const numbersInBetween = generateNumbersInBetween(x1, x2)
      numbersInBetween.forEach((number) => {
        grid[number][baseY]++
      })
    } else {
      const coordinatesInBetween = generateCoordinatesInBetween(x1, y1, x2, y2)
      coordinatesInBetween.forEach((coordinates) => {
        // console.log(coordinates)
        grid[coordinates[0]][coordinates[1]]++
      })
    }
  })

  let count = 0
  grid.forEach((row) => {
    row.forEach((item) => {
      if (item >= 2) count++
    })
  })
  return count
}

const generateCoordinatesInBetween = (x1, y1, x2, y2) => {
  console.log(`x1: ${x1}, y1: ${y1}, x2: ${x2}, y2: ${y2}`)
  let lowX = null
  let highX = null

  if (x1 < x2) {
    lowX = x1
    highX = x2
  } else {
    highX = x1
    lowX = x2
  }

  const distance = highX - lowX

  const coordinates = []

  if (x1 < x2) {
    if (y1 < y2) {
      // normal, both starting coordinates are low and the end is a higher number.
      for (let i = 0; i < distance + 1; i++) {
        coordinates.push([x1 + i, y1 + i])
      }
    } else {
      // X coordinate starts low, ends high. Y coordinate starts high and ends low
      for (let i = 0; i < distance + 1; i++) {
        coordinates.push([x1 + i, y1 - i])
      }
    }
  } else {
    if (y1 < y2) {
      // X starts high, ends low. Y is normal, starts low and ends high
      for (let i = 0; i < distance + 1; i++) {
        coordinates.push([x1 - i, y1 + i])
      }
    } else {
      // Both X and Y starts high, ends low.
      for (let i = 0; i < distance + 1; i++) {
        coordinates.push([x1 - i, y1 - i])
      }
    }
  }
  console.log(coordinates)
  return coordinates
}

const generateNumbersInBetween = (s, e) => {
  let start
  let end
  let array = []
  if (s < e) {
    start = s
    end = e
  } else if (s > e) {
    start = e
    end = s
  }
  while (start < end + 1) {
    array.push(start)
    start++
  }
  return array
}

console.log(main(input))