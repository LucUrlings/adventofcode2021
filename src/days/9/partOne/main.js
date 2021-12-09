import { input } from '../input.js'

/**
 *
 * CooordinatePositions:
 *    1,  2,  3
 *    4,  XY, 6
 *    7,  8,  9
 *
 * @param heightMap
 * @param posX
 * @param posY
 */
const calculateRiskLevelForPosition = (heightMap, posX, posY) => {
  // console.log(posX,posY)
  const heightXY = heightMap[posY][posX]

  let height1
  let height2
  let height3

  let height4
  let height6

  let height7
  let height8
  let height9

  // try {
  //   height1 = heightMap[posY - 1][posX - 1]
  // }
  // catch {}

  try {
    if (posY - 1 >= 0)
      height2 = heightMap[posY - 1][posX]
    else height2 = 99
  } catch {
  }

  // try {
  //   height3 = heightMap[posY - 1][posX + 1]
  // }
  // catch {}

  try {
    if (posX - 1 >= 0)
      height4 = heightMap[posY][posX - 1]
    else height4 = 99
  } catch {
  }

  try {
    if (posX + 1 < 100)
      height6 = heightMap[posY][posX + 1]
    else height6 = 99
  } catch {
  }

  // try {
  //   height7 = heightMap[posY + 1][posX - 1]
  // }
  // catch {}

  try {
    if (posY + 1 < 100)
      height8 = heightMap[posY + 1][posX]
    else height8 = 99
  } catch {
  }

  // try {
  //   height9 = heightMap[posY + 1][posX + 1]
  // }
  // catch {}

  // if (!height1) height1 = 10
      // if (!height2) height2 = 10
  // if (!height3) height3 = 10
      // if (!height4) height4 = 10
      // if (!height6) height6 = 10
  // if (!height7) height7 = 10
      // if (!height8) height8 = 10
  // if (!height9) height9 = 10

  console.log(`${height1}  ${height2}  ${height3}
${height4}  ${heightXY}  ${height6}
${height7}  ${height8}  ${height9}`)

  // if (heightXY < height1 && heightXY < height2 && heightXY < height3 && heightXY < height4 && heightXY < height6 && heightXY < height7 && heightXY < height8 && heightXY < height9) {
  //   return heightXY + 1;
  // }

  if (heightXY < height2 && heightXY < height4 && heightXY < height6 && heightXY < height8) {
    return heightXY + 1
  }
  console.log('')
  return 0
}

const main = (heightMap) => {
  let riskLevel = 0

  heightMap.forEach((heightRow, posY) => {
    heightRow.forEach((position, posX) => {
      riskLevel += calculateRiskLevelForPosition(heightMap, posX, posY)
    })
  })
  return riskLevel
}
console.log(main(input))