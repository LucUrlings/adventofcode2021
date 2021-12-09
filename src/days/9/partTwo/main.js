import { input } from '../input.js'

function Queue() {
  this.elements = []

  Queue.prototype.enqueue = function (e) {
    this.elements.push(e)
  }
  // remove an element from the front of the queue
  Queue.prototype.dequeue = function () {
    return this.elements.shift()
  }
  // check if the queue is empty
  Queue.prototype.isEmpty = function () {
    return this.elements.length === 0
  }
  // get the element at the front of the queue
  Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined
  }
  Queue.prototype.length = function () {
    return this.elements.length
  }
}

function test(enqueue) {
  if (enqueue.peek() === 7) enqueue.enqueue(8)
  console.log(q.dequeue())
}

/**
 *
 * CooordinatePositions:
 *          up
 *    left, XY,   right
 *          down
 *
 * @param heightMap
 * @param posX
 * @param posY
 */
const findBasins = (heightMap, posX, posY) => {
  const heightXY = heightMap[posY][posX]

  let up
  let left
  let right
  let down

  if (posY - 1 >= 0) up = heightMap[posY - 1][posX]
  else up = 99

  if (posX - 1 >= 0) left = heightMap[posY][posX - 1]
  else left = 99

  if (posX + 1 < 100) right = heightMap[posY][posX + 1]
  else right = 99

  if (posY + 1 < 100) down = heightMap[posY + 1][posX]
  else down = 99

  if (heightXY < up && heightXY < left && heightXY < right && heightXY < down) {
    // Lowest point of basins
    return getBasinSize(heightMap, { posX, posY })
  }
}

const getBasinSize = (heightMap, lowestPoint) => {
  const heightMapClean = [...heightMap].map((r) => r.map((n) => n.toString()))

  let q = new Queue()
  const { posX, posY } = lowestPoint
  q.enqueue({ posX, posY })

  while (!q.isEmpty()) {
    const item = q.dequeue()
    if (
      heightMapClean[item.posY][item.posX] &&
      heightMapClean[item.posY][item.posX] !== '9'
    ) {
      console.log(`Position is set to null: posX: ${posX}, posY: ${posY}`)
      heightMapClean[item.posY][item.posX] = null

      if (item.posY - 1 >= 0)
        q.enqueue({
          posX: item.posX,
          posY: item.posY - 1,
        }) // Up
      if (item.posY + 1 < 100)
        q.enqueue({
          posX: item.posX,
          posY: item.posY + 1,
        }) // Down
      if (item.posX - 1 >= 0)
        q.enqueue({
          posX: item.posX - 1,
          posY: item.posY,
        }) // Left
      if (posX + 1 < 100)
        q.enqueue({
          posX: item.posX + 1,
          posY: item.posY,
        }) // Right
    }
  }

  let size = 0
  heightMapClean.forEach((row) => {
    row.forEach((item) => {
      if (item === null) size++
    })
  })

  return size
}

const main = (heightMap) => {
  const basins = []
  heightMap.forEach((heightRow, posY) => {
    heightRow.forEach((position, posX) => {
      const newBasins = findBasins(heightMap, posX, posY)
      if (newBasins) basins.push(newBasins)
    })
  })
  return basins
    .sort((a, b) => {
      return b - a
    })
    .slice(0, 3)
}
const highest = main(input)
console.log(highest[0] * highest[1] * highest[2])
