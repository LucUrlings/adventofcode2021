import { input } from '../input.js'

const ANSI_RESET = '\u001B[0m'
const ANSI_BLACK = '\u001B[30m'
const ANSI_RED = '\u001B[31m'
const ANSI_GREEN = '\u001B[32m'
const ANSI_YELLOW = '\u001B[33m'
const ANSI_BLUE = '\u001B[34m'
const ANSI_PURPLE = '\u001B[35m'
const ANSI_CYAN = '\u001B[36m'
const ANSI_WHITE = '\u001B[37m'

const logGrid = (grid) => console.log(` 
${grid[0][0] === 0 ? ANSI_YELLOW : ''}${grid[0][0]}${ANSI_RESET} ${grid[0][1] === 0 ? ANSI_YELLOW : ''}${grid[0][1]}${ANSI_RESET} ${grid[0][2] === 0 ? ANSI_YELLOW : ''}${grid[0][2]}${ANSI_RESET} ${grid[0][3] === 0 ? ANSI_YELLOW : ''}${grid[0][3]}${ANSI_RESET} ${grid[0][4] === 0 ? ANSI_YELLOW : ''}${grid[0][4]}${ANSI_RESET} ${grid[0][5] === 0 ? ANSI_YELLOW : ''}${grid[0][5]}${ANSI_RESET} ${grid[0][6] === 0 ? ANSI_YELLOW : ''}${grid[0][6]}${ANSI_RESET} ${grid[0][7] === 0 ? ANSI_YELLOW : ''}${grid[0][7]}${ANSI_RESET} ${grid[0][8] === 0 ? ANSI_YELLOW : ''}${grid[0][8]}${ANSI_RESET} ${grid[0][9] === 0 ? ANSI_YELLOW : ''}${grid[0][9]}${ANSI_RESET} 
${grid[1][0] === 0 ? ANSI_YELLOW : ''}${grid[1][0]}${ANSI_RESET} ${grid[1][1] === 0 ? ANSI_YELLOW : ''}${grid[1][1]}${ANSI_RESET} ${grid[1][2] === 0 ? ANSI_YELLOW : ''}${grid[1][2]}${ANSI_RESET} ${grid[1][3] === 0 ? ANSI_YELLOW : ''}${grid[1][3]}${ANSI_RESET} ${grid[1][4] === 0 ? ANSI_YELLOW : ''}${grid[1][4]}${ANSI_RESET} ${grid[1][5] === 0 ? ANSI_YELLOW : ''}${grid[1][5]}${ANSI_RESET} ${grid[1][6] === 0 ? ANSI_YELLOW : ''}${grid[1][6]}${ANSI_RESET} ${grid[1][7] === 0 ? ANSI_YELLOW : ''}${grid[1][7]}${ANSI_RESET} ${grid[1][8] === 0 ? ANSI_YELLOW : ''}${grid[1][8]}${ANSI_RESET} ${grid[1][9] === 0 ? ANSI_YELLOW : ''}${grid[1][9]}${ANSI_RESET} 
${grid[2][0] === 0 ? ANSI_YELLOW : ''}${grid[2][0]}${ANSI_RESET} ${grid[2][1] === 0 ? ANSI_YELLOW : ''}${grid[2][1]}${ANSI_RESET} ${grid[2][2] === 0 ? ANSI_YELLOW : ''}${grid[2][2]}${ANSI_RESET} ${grid[2][3] === 0 ? ANSI_YELLOW : ''}${grid[2][3]}${ANSI_RESET} ${grid[2][4] === 0 ? ANSI_YELLOW : ''}${grid[2][4]}${ANSI_RESET} ${grid[2][5] === 0 ? ANSI_YELLOW : ''}${grid[2][5]}${ANSI_RESET} ${grid[2][6] === 0 ? ANSI_YELLOW : ''}${grid[2][6]}${ANSI_RESET} ${grid[2][7] === 0 ? ANSI_YELLOW : ''}${grid[2][7]}${ANSI_RESET} ${grid[2][8] === 0 ? ANSI_YELLOW : ''}${grid[2][8]}${ANSI_RESET} ${grid[2][9] === 0 ? ANSI_YELLOW : ''}${grid[2][9]}${ANSI_RESET} 
${grid[3][0] === 0 ? ANSI_YELLOW : ''}${grid[3][0]}${ANSI_RESET} ${grid[3][1] === 0 ? ANSI_YELLOW : ''}${grid[3][1]}${ANSI_RESET} ${grid[3][2] === 0 ? ANSI_YELLOW : ''}${grid[3][2]}${ANSI_RESET} ${grid[3][3] === 0 ? ANSI_YELLOW : ''}${grid[3][3]}${ANSI_RESET} ${grid[3][4] === 0 ? ANSI_YELLOW : ''}${grid[3][4]}${ANSI_RESET} ${grid[3][5] === 0 ? ANSI_YELLOW : ''}${grid[3][5]}${ANSI_RESET} ${grid[3][6] === 0 ? ANSI_YELLOW : ''}${grid[3][6]}${ANSI_RESET} ${grid[3][7] === 0 ? ANSI_YELLOW : ''}${grid[3][7]}${ANSI_RESET} ${grid[3][8] === 0 ? ANSI_YELLOW : ''}${grid[3][8]}${ANSI_RESET} ${grid[3][9] === 0 ? ANSI_YELLOW : ''}${grid[3][9]}${ANSI_RESET} 
${grid[4][0] === 0 ? ANSI_YELLOW : ''}${grid[4][0]}${ANSI_RESET} ${grid[4][1] === 0 ? ANSI_YELLOW : ''}${grid[4][1]}${ANSI_RESET} ${grid[4][2] === 0 ? ANSI_YELLOW : ''}${grid[4][2]}${ANSI_RESET} ${grid[4][3] === 0 ? ANSI_YELLOW : ''}${grid[4][3]}${ANSI_RESET} ${grid[4][4] === 0 ? ANSI_YELLOW : ''}${grid[4][4]}${ANSI_RESET} ${grid[4][5] === 0 ? ANSI_YELLOW : ''}${grid[4][5]}${ANSI_RESET} ${grid[4][6] === 0 ? ANSI_YELLOW : ''}${grid[4][6]}${ANSI_RESET} ${grid[4][7] === 0 ? ANSI_YELLOW : ''}${grid[4][7]}${ANSI_RESET} ${grid[4][8] === 0 ? ANSI_YELLOW : ''}${grid[4][8]}${ANSI_RESET} ${grid[4][9] === 0 ? ANSI_YELLOW : ''}${grid[4][9]}${ANSI_RESET} 
${grid[5][0] === 0 ? ANSI_YELLOW : ''}${grid[5][0]}${ANSI_RESET} ${grid[5][1] === 0 ? ANSI_YELLOW : ''}${grid[5][1]}${ANSI_RESET} ${grid[5][2] === 0 ? ANSI_YELLOW : ''}${grid[5][2]}${ANSI_RESET} ${grid[5][3] === 0 ? ANSI_YELLOW : ''}${grid[5][3]}${ANSI_RESET} ${grid[5][4] === 0 ? ANSI_YELLOW : ''}${grid[5][4]}${ANSI_RESET} ${grid[5][5] === 0 ? ANSI_YELLOW : ''}${grid[5][5]}${ANSI_RESET} ${grid[5][6] === 0 ? ANSI_YELLOW : ''}${grid[5][6]}${ANSI_RESET} ${grid[5][7] === 0 ? ANSI_YELLOW : ''}${grid[5][7]}${ANSI_RESET} ${grid[5][8] === 0 ? ANSI_YELLOW : ''}${grid[5][8]}${ANSI_RESET} ${grid[5][9] === 0 ? ANSI_YELLOW : ''}${grid[5][9]}${ANSI_RESET} 
${grid[6][0] === 0 ? ANSI_YELLOW : ''}${grid[6][0]}${ANSI_RESET} ${grid[6][1] === 0 ? ANSI_YELLOW : ''}${grid[6][1]}${ANSI_RESET} ${grid[6][2] === 0 ? ANSI_YELLOW : ''}${grid[6][2]}${ANSI_RESET} ${grid[6][3] === 0 ? ANSI_YELLOW : ''}${grid[6][3]}${ANSI_RESET} ${grid[6][4] === 0 ? ANSI_YELLOW : ''}${grid[6][4]}${ANSI_RESET} ${grid[6][5] === 0 ? ANSI_YELLOW : ''}${grid[6][5]}${ANSI_RESET} ${grid[6][6] === 0 ? ANSI_YELLOW : ''}${grid[6][6]}${ANSI_RESET} ${grid[6][7] === 0 ? ANSI_YELLOW : ''}${grid[6][7]}${ANSI_RESET} ${grid[6][8] === 0 ? ANSI_YELLOW : ''}${grid[6][8]}${ANSI_RESET} ${grid[6][9] === 0 ? ANSI_YELLOW : ''}${grid[6][9]}${ANSI_RESET} 
${grid[7][0] === 0 ? ANSI_YELLOW : ''}${grid[7][0]}${ANSI_RESET} ${grid[7][1] === 0 ? ANSI_YELLOW : ''}${grid[7][1]}${ANSI_RESET} ${grid[7][2] === 0 ? ANSI_YELLOW : ''}${grid[7][2]}${ANSI_RESET} ${grid[7][3] === 0 ? ANSI_YELLOW : ''}${grid[7][3]}${ANSI_RESET} ${grid[7][4] === 0 ? ANSI_YELLOW : ''}${grid[7][4]}${ANSI_RESET} ${grid[7][5] === 0 ? ANSI_YELLOW : ''}${grid[7][5]}${ANSI_RESET} ${grid[7][6] === 0 ? ANSI_YELLOW : ''}${grid[7][6]}${ANSI_RESET} ${grid[7][7] === 0 ? ANSI_YELLOW : ''}${grid[7][7]}${ANSI_RESET} ${grid[7][8] === 0 ? ANSI_YELLOW : ''}${grid[7][8]}${ANSI_RESET} ${grid[7][9] === 0 ? ANSI_YELLOW : ''}${grid[7][9]}${ANSI_RESET} 
${grid[8][0] === 0 ? ANSI_YELLOW : ''}${grid[8][0]}${ANSI_RESET} ${grid[8][1] === 0 ? ANSI_YELLOW : ''}${grid[8][1]}${ANSI_RESET} ${grid[8][2] === 0 ? ANSI_YELLOW : ''}${grid[8][2]}${ANSI_RESET} ${grid[8][3] === 0 ? ANSI_YELLOW : ''}${grid[8][3]}${ANSI_RESET} ${grid[8][4] === 0 ? ANSI_YELLOW : ''}${grid[8][4]}${ANSI_RESET} ${grid[8][5] === 0 ? ANSI_YELLOW : ''}${grid[8][5]}${ANSI_RESET} ${grid[8][6] === 0 ? ANSI_YELLOW : ''}${grid[8][6]}${ANSI_RESET} ${grid[8][7] === 0 ? ANSI_YELLOW : ''}${grid[8][7]}${ANSI_RESET} ${grid[8][8] === 0 ? ANSI_YELLOW : ''}${grid[8][8]}${ANSI_RESET} ${grid[8][9] === 0 ? ANSI_YELLOW : ''}${grid[8][9]}${ANSI_RESET} 
${grid[9][0] === 0 ? ANSI_YELLOW : ''}${grid[9][0]}${ANSI_RESET} ${grid[9][1] === 0 ? ANSI_YELLOW : ''}${grid[9][1]}${ANSI_RESET} ${grid[9][2] === 0 ? ANSI_YELLOW : ''}${grid[9][2]}${ANSI_RESET} ${grid[9][3] === 0 ? ANSI_YELLOW : ''}${grid[9][3]}${ANSI_RESET} ${grid[9][4] === 0 ? ANSI_YELLOW : ''}${grid[9][4]}${ANSI_RESET} ${grid[9][5] === 0 ? ANSI_YELLOW : ''}${grid[9][5]}${ANSI_RESET} ${grid[9][6] === 0 ? ANSI_YELLOW : ''}${grid[9][6]}${ANSI_RESET} ${grid[9][7] === 0 ? ANSI_YELLOW : ''}${grid[9][7]}${ANSI_RESET} ${grid[9][8] === 0 ? ANSI_YELLOW : ''}${grid[9][8]}${ANSI_RESET} ${grid[9][9] === 0 ? ANSI_YELLOW : ''}${grid[9][9]}${ANSI_RESET} 
`)

const addOne = (lines) => lines.map(row => row.map(number => number + 1))

/**
 *
 * CooordinatePositions:
 *    1   2   3
 *    4   XY  6
 *    7   8   9
 *
 * @param lines
 * @param posY
 * @param posX
 */
const flash = (lines, posY, posX) => {
  console.log(`${posY}-${posX}`)
  // lines[posY - 1][posX - 1]   //  1
  // lines[posY - 1][posX]       //  2
  // lines[posY - 1][posX + 1]   //  3
  // lines[posY][posX - 1]       //  4

  // lines[posY][posX + 1]       //  6
  // lines[posY + 1][posX - 1]   //  7
  // lines[posY + 1][posX]       //  8
  // lines[posY + 1][posX + 1]   //  9
  if (posY - 1 >= 0 && posX - 1 >= 0) lines[posY - 1][posX - 1]++   //  1
  if (posY - 1 >= 0) lines[posY - 1][posX]++                        //  2
  if (posY - 1 >= 0 && posX + 1 < 10) lines[posY - 1][posX + 1]++   //  3

  if (posX - 1 >= 0) lines[posY][posX - 1]++                        //  4
  if (posX + 1 < 10) lines[posY][posX + 1]++                        //  5

  if (posY + 1 < 10 && posX - 1 >= 0) lines[posY + 1][posX - 1]++   //  7
  if (posY + 1 < 10) lines[posY + 1][posX]++                        //  8
  if (posY + 1 < 10 && posX + 1 < 10) lines[posY + 1][posX + 1]++   //  9

  return lines
}

const updateFlashed = (lines) => {
  let flashCount = 0
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] > 9) {
        lines[i][j] = 0
        flashCount++
      }
    }
  }
  return { flashCount, updatedLines: lines }
}

const changed = (old, current) => {
  const set1 = new Set(old);
  const set2 = new Set(current);
  return old.every(item => set2.has(item)) &&
    current.every(item => set1.has(item))
}

const checkArrayForFlash = (lines) => {
  let tempLines = [...lines]

  while (true) {
    let oldLines = [...tempLines]

    for (let i = 0; i < tempLines.length; i++) {
      for (let j = 0; j < tempLines[i].length; j++) {
        if (tempLines[i][j] > 9) {
          tempLines = flash(tempLines, i, j)
        }
      }
    }
    console.log('while')
    if (changed(oldLines, tempLines)) {
      console.log('oldLines')
      logGrid(oldLines)
      console.log('templines')
      logGrid(tempLines)

      break;
    }
  }

  return updateFlashed(lines)
}

const cycleCount = 100

const main = (lineInput) => {
  let flashes = 0
  let lines = [...lineInput]
  logGrid(lines)

  for (let i = 0; i < cycleCount; i++) {
    lines = addOne(lines)
    const { flashCount, updatedLines } = checkArrayForFlash(lines)
    lines = updatedLines
    flashes += flashCount
    logGrid(lines)
    console.log('flashes: ', flashes)
  }

}
console.log(main(input))