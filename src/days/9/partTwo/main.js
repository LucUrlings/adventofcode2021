import { input } from '../input.js'

/**
 *
 * CooordinatePositions:
 *        1
 *    2,  XY, 3
 *        4
 *
 * @param heightMap
 * @param posX
 * @param posY
 */
const findBasins = (heightMap, posX, posY) => {
  const heightXY = heightMap[posY][posX]

  let height1

  let height2
  let height3

  let height4

  if (posY - 1 >= 0) height1 = heightMap[posY - 1][posX]
  else height1 = 99

  if (posX - 1 >= 0) height2 = heightMap[posY][posX - 1]
  else height2 = 99

  if (posX + 1 < 100) height3 = heightMap[posY][posX + 1]
  else height3 = 99

  if (posY + 1 < 100) height4 = heightMap[posY + 1][posX]
  else height4 = 99

  console.log(`
     ${height1}
  ${height2}  ${heightXY}  ${height3}
     ${height4}`)

  if (
    heightXY < height1 &&
    heightXY < height2 &&
    heightXY < height3 &&
    heightXY < height4
  ) {
    return heightXY + 1
  }
  return 0
}

const main = (heightMap) => {
  let riskLevel = 0

  heightMap.forEach((heightRow, posY) => {
    heightRow.forEach((position, posX) => {
      riskLevel += findBasins(heightMap, posX, posY)
    })
  })
  return riskLevel
}
console.log(main(input))
